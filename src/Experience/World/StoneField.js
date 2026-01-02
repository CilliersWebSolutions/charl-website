import * as THREE from 'three';

// Deterministic RNG helpers
function hashStringToInt(str) {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < str.length; i++) {
        h = Math.imul(h ^ str.charCodeAt(i), 16777619) >>> 0;
    }
    return h >>> 0;
}
function mulberry32(seed) {
    let a = seed >>> 0;
    return function() {
        a |= 0;
        a = (a + 0x6D2B79F5) >>> 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}
function easeOutCubic(x) { return 1 - Math.pow(1 - x, 3); }

export default class StoneField {
    constructor(scene, resources, opts = {}) {
        this.scene = scene;
        this.resources = resources;
        this.stonePlanes = [];
        this.perInstanceDelays = [];
        this.finalPositions = [];
        this.perInstanceRotations = [];
        this.layerQuats = [];
        this.layerMeshes = [];
        this.stoneSizeMultiplier = opts.stoneSizeMultiplier || 1.0;
        this.stoneSeed = opts.stoneSeed || 0xCAFEBABE;
        this.heightAbove = opts.heightAbove || 8.0;
        this.debug = !!opts.debug;
    }

    refresh() {
        this.stonePlanes.forEach(p => {
            this.scene.remove(p);
            try { p.geometry.dispose(); } catch (e) {}
            try { p.material.dispose(); } catch (e) {}
        });
        this.stonePlanes = [];
        this.perInstanceDelays = [];
        this.finalPositions = [];
        this.perInstanceRotations = [];
        this.layerQuats = [];
        this.layerMeshes = [];
    }

    generate(stoneLayerDefs) {
        this.refresh();
        const boxDefs = {
            layer2: { x: 4, z: 4, y: 0.180905 },
            layer3: { x: 4, z: 4, y: 0.092328 },
            layer7: { x: 4, z: 4, y: 0.180905 },
            layer8: { x: 4, z: 4, y: 0.092328 },
        };

        stoneLayerDefs.forEach((def, idx) => {
            const mesh = this.scene.children.find(child => child.name === def.name);
            if (!mesh) return;
            // remember mesh reference for later (we'll use matrixWorld / getWorldQuaternion at update time)
            this.layerMeshes.push(mesh);
            // ensure mesh world matrix is current before using it
            mesh.updateMatrixWorld(true);
            const center = mesh.position.clone();
            const rawBox = boxDefs[def.name];
            const shrinkFactor = 0.98;
            const box = { x: rawBox.x * shrinkFactor, y: rawBox.y, z: rawBox.z * shrinkFactor };
            const gridY = 3;
            const stoneSize = (box.y / gridY) * 0.98 * def.sizeScale * this.stoneSizeMultiplier;
            let gridX = Math.max(1, Math.floor(box.x / stoneSize));
            let gridZ = Math.max(1, Math.floor(box.z / stoneSize));
            if (gridX < 1) gridX = 1;
            if (gridZ < 1) gridZ = 1;
            const planeGeo = new THREE.PlaneGeometry(stoneSize, stoneSize);
            const mat = new THREE.MeshStandardMaterial({
                map: this.resources.items.stoneTexture,
                transparent: true,
                roughness: 0.7,
                metalness: 0.1,
                depthWrite: false,
                opacity: 0,
                side: THREE.DoubleSide,
                alphaTest: 0.05
            });
            const totalInstances = gridX * gridY * gridZ;
            let instancedMesh = new THREE.InstancedMesh(planeGeo, mat, totalInstances);
            instancedMesh.castShadow = true;
            instancedMesh.receiveShadow = false;
            instancedMesh.frustumCulled = false;
            const baseRotationOffset = Math.PI / 4;
            const seed = hashStringToInt(`${def.name}:${this.stoneSeed}:${idx}`);
            const rng = mulberry32(seed);
            let delays = [];
            let finalPositions = [];
            let rotations = [];
            for (let iy = 0; iy < gridY; iy++) {
                for (let ix = 0; ix < gridX; ix++) {
                    for (let iz = 0; iz < gridZ; iz++) {
                        const fx = gridX > 1 ? ix / (gridX - 1) : 0.5;
                        const fy = gridY > 1 ? iy / (gridY - 1) : 0.5;
                        const fz = gridZ > 1 ? iz / (gridZ - 1) : 0.5;
                        let localX = -box.x / 2 + fx * box.x;
                        let localY = -box.y / 2 + fy * box.y;
                        let localZ = -box.z / 2 + fz * box.z;
                        const localPoint = new THREE.Vector3(localX, localY, localZ);
                        // compute worldPoint via mesh.matrixWorld for more robust world transform
                        const worldPoint = localPoint.clone().applyMatrix4(mesh.matrixWorld);
                        let px = worldPoint.x; let py = worldPoint.y; let pz = worldPoint.z;
                        const jitterMax = stoneSize * 0.1;
                        const clamp = (val, min, max) => Math.max(min, Math.min(max, val));
                        px += clamp((rng() - 0.5) * jitterMax, -(px - (center.x - box.x / 2)), (center.x + box.x / 2) - px);
                        py += clamp((rng() - 0.5) * jitterMax, -(py - (center.y - box.y / 2)), (center.y + box.y / 2) - py);
                        pz += clamp((rng() - 0.5) * jitterMax, -(pz - (center.z - box.z / 2)), (center.z + box.z / 2) - pz);
                        py = Math.min(py, center.y + box.y / 2 - stoneSize * 0.5);
                        const randDelay = rng();
                        delays.push(randDelay);
                        finalPositions.push({x: px, y: py, z: pz});
                        rotations.push(rng() * Math.PI * 2);
                    }
                }
            }
            let maxDelay = Math.max.apply(null, delays);
            instancedMesh.userData.maxDelay = maxDelay;
            const finalsLen = finalPositions.length;
            if (finalsLen !== instancedMesh.count) {
                if (finalsLen < instancedMesh.count) {
                    instancedMesh.count = finalsLen;
                } else {
                    const newMesh = new THREE.InstancedMesh(planeGeo, mat, finalsLen);
                    newMesh.castShadow = instancedMesh.castShadow;
                    newMesh.receiveShadow = instancedMesh.receiveShadow;
                    newMesh.frustumCulled = instancedMesh.frustumCulled;
                    this.scene.remove(instancedMesh);
                    this.scene.add(newMesh);
                    instancedMesh = newMesh;
                }
            }
            // Precompute inverse matrix to convert world positions into mesh-local space
            const invMatrix = new THREE.Matrix4().copy(mesh.matrixWorld).invert();
            for (let k = 0; k < finalPositions.length; k++) {
                const pos = finalPositions[k];
                const rot = rotations[k] || 0;
                // World start position (above final)
                const worldStart = new THREE.Vector3(pos.x, pos.y + this.heightAbove, pos.z);
                // Convert to mesh-local coordinates so local rotation composes correctly
                const localPos = worldStart.clone().applyMatrix4(invMatrix);
                const localMatrix = new THREE.Matrix4();
                const localQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), rot + baseRotationOffset);
                localMatrix.compose(localPos, localQuat, new THREE.Vector3(1,1,1));
                const worldMatrix = new THREE.Matrix4().multiplyMatrices(mesh.matrixWorld, localMatrix);
                instancedMesh.setMatrixAt(k, worldMatrix);
                if (this.debug && k === 0) {
                    // small diagnostic to help trace transforms
                    // eslint-disable-next-line no-console
                    console.debug('[StoneField] gen sample', def.name, { worldStart, localPos, meshMatrix: mesh.matrixWorld.elements.slice(0,6) });
                }
            }
            try {
                const stoneTex = this.resources.items.stoneTexture;
                if (stoneTex) {
                    stoneTex.wrapS = THREE.RepeatWrapping;
                    stoneTex.wrapT = THREE.RepeatWrapping;
                    stoneTex.needsUpdate = true;
                }
                const uvOffsets = new Float32Array(finalPositions.length * 2);
                const tintColors = new Float32Array(finalPositions.length * 3);
                for (let k = 0; k < finalPositions.length; k++) {
                    const ox = (rng() - 0.5) * 0.8;
                    const oy = (rng() - 0.5) * 0.8;
                    uvOffsets[k * 2] = ox;
                    uvOffsets[k * 2 + 1] = oy;
                    const tint = 0.75 + rng() * 0.25;
                    tintColors[k * 3] = tint;
                    tintColors[k * 3 + 1] = tint;
                    tintColors[k * 3 + 2] = tint;
                }
                instancedMesh.geometry.setAttribute('instanceUvOffset', new THREE.InstancedBufferAttribute(uvOffsets, 2));
                instancedMesh.geometry.setAttribute('instanceColor', new THREE.InstancedBufferAttribute(tintColors, 3));
                const material = instancedMesh.material;
                if (material && typeof material.onBeforeCompile === 'function') {
                    const injectOnceKey = '__cw_instanced_uv_injected__';
                    if (!material[injectOnceKey]) {
                        material.onBeforeCompile = (shader) => {
                            try {
                                let vs = shader.vertexShader;
                                if (!/varying\s+vec2\s+vUv\s*;/.test(vs)) {
                                    vs = 'varying vec2 vUv;\n' + vs;
                                }
                                if (!/attribute\s+vec2\s+instanceUvOffset\s*;/.test(vs)) {
                                    vs = vs.replace(/void\s+main\s*\(\s*\)\s*{/, 'attribute vec2 instanceUvOffset;\nattribute vec3 instanceColor;\nvarying vec3 vInstanceColor;\n\nvoid main() {');
                                }
                                if (vs.indexOf('#include <uv_vertex>') !== -1) {
                                    vs = vs.replace('#include <uv_vertex>', '#include <uv_vertex>\n    vUv += instanceUvOffset;\n    vInstanceColor = instanceColor;');
                                } else if (vs.indexOf('vUv = uv;') !== -1) {
                                    vs = vs.replace('vUv = uv;', 'vUv = uv + instanceUvOffset;\n    vInstanceColor = instanceColor;');
                                } else {
                                    vs = vs.replace(/\n}\s*$/, '\n    vUv += instanceUvOffset;\n    vInstanceColor = instanceColor;\n}\n');
                                }
                                shader.vertexShader = vs;
                                let fs = shader.fragmentShader;
                                if (!/varying\s+vec3\s+vInstanceColor\s*;/.test(fs)) {
                                    if (/varying\s+vec2\s+vUv\s*;/.test(fs)) {
                                        fs = fs.replace(/varying\s+vec2\s+vUv\s*;/, 'varying vec2 vUv;\nvarying vec3 vInstanceColor;');
                                    } else {
                                        fs = 'varying vec3 vInstanceColor;\n' + fs;
                                    }
                                }
                                if (fs.indexOf('vec4 diffuseColor = vec4( diffuse, opacity );') !== -1) {
                                    fs = fs.replace('vec4 diffuseColor = vec4( diffuse, opacity );', 'vec4 diffuseColor = vec4( diffuse * vInstanceColor, opacity );');
                                }
                                shader.fragmentShader = fs;
                            } catch (e) {
                                console.warn('[StoneField] failed to inject instanced UV+color shader code', e);
                            }
                        };
                        material[injectOnceKey] = true;
                        material.needsUpdate = true;
                    }
                }
            } catch (e) {
                console.warn('[StoneField] failed to add per-instance UV offsets', e);
            }

            this.perInstanceDelays.push(delays);
            this.finalPositions.push(finalPositions);
            this.perInstanceRotations.push(rotations);
            this.scene.add(instancedMesh);
            instancedMesh.instanceMatrix.needsUpdate = true;
            this.stonePlanes.push(instancedMesh);
        });
    }

    // Update stones: animate falling, opacity and finalization
    update(stoneAnimation, stoneLayerIndices) {
        for (let stoneIdx = 0; stoneIdx < this.stonePlanes.length; stoneIdx++) {
            const parentLayerIndex = stoneLayerIndices[stoneIdx];
            const parentState = stoneAnimation.layerStates.find(s => s.index === parentLayerIndex);
            if (!parentState) continue;
            const instancedMesh = this.stonePlanes[stoneIdx];
            const fade = parentState.progress;
            instancedMesh.castShadow = true;
            instancedMesh.receiveShadow = false;
            if (instancedMesh.material) {
                instancedMesh.material.transparent = true;
                instancedMesh.material.opacity = Math.max(0, Math.min(1, fade));
            }
            const delays = this.perInstanceDelays[stoneIdx] || [];
            const finals = this.finalPositions[stoneIdx] || [];
            const rotations = this.perInstanceRotations[stoneIdx] || [];
            const maxDelay = instancedMesh.userData.maxDelay || 1;
            let prog = parentState.progress;
            let anyUpdated = false;
            const baseRotationOffset = Math.PI / 4;
            for (let i = 0; i < instancedMesh.count; i++) {
                let delay = delays[i] || 0;
                let start = delay / maxDelay;
                const stoneAnimSeconds = 0.6;
                let stoneAnimFrac = stoneAnimSeconds / Math.max(0.0001, stoneAnimation.duration);
                let end = Math.min(1.0, start + stoneAnimFrac);
                const finalPos = finals[i];
                if (!finalPos) continue;
                let y; let needsUpdate = false;
                if (prog < start) {
                    y = finalPos.y + this.heightAbove;
                    if (instancedMesh._lastY?.[i] !== y) needsUpdate = true;
                } else if (prog >= end || prog >= 1.0) {
                    y = finalPos.y;
                    if (instancedMesh._lastY?.[i] !== y) needsUpdate = true;
                } else {
                    let localProg = (prog - start) / (end - start);
                    localProg = Math.max(0, Math.min(1, localProg));
                    localProg = easeOutCubic(localProg);
                    y = finalPos.y + (1 - localProg) * stoneAnimation.heightAbove;
                    if (instancedMesh._lastY?.[i] !== y) needsUpdate = true;
                }
                if (needsUpdate) {
                    // Build local matrix in the layer's local space then transform to world
                    const rot = rotations[i] || 0;
                    const mesh = this.layerMeshes[stoneIdx];
                    if (mesh) {
                        mesh.updateMatrixWorld(true);
                        const worldPos = new THREE.Vector3(finalPos.x, y, finalPos.z);
                        const inv = new THREE.Matrix4().copy(mesh.matrixWorld).invert();
                        const localPos = worldPos.clone().applyMatrix4(inv);
                        const localMatrix = new THREE.Matrix4();
                        const localQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), rot + baseRotationOffset);
                        localMatrix.compose(localPos, localQuat, new THREE.Vector3(1, 1, 1));
                        const worldMatrix = new THREE.Matrix4().multiplyMatrices(mesh.matrixWorld, localMatrix);
                        instancedMesh.setMatrixAt(i, worldMatrix);
                    } else {
                        const localMatrix = new THREE.Matrix4();
                        const localQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), rot + baseRotationOffset);
                        localMatrix.compose(new THREE.Vector3(finalPos.x, y, finalPos.z), localQuat, new THREE.Vector3(1,1,1));
                        instancedMesh.setMatrixAt(i, localMatrix);
                    }
                    anyUpdated = true;
                    if (!instancedMesh._lastY) instancedMesh._lastY = [];
                    instancedMesh._lastY[i] = y;
                }
            }
            if (anyUpdated) instancedMesh.instanceMatrix.needsUpdate = true;

            if (parentState.progress >= 1.0) {
                if (instancedMesh.userData && instancedMesh.userData._finalized) {
                } else {
                    const finalsLen = finals.length;
                    for (let i = 0; i < Math.min(instancedMesh.count, finalsLen); i++) {
                        const pos = finals[i];
                        const rot = (this.perInstanceRotations && this.perInstanceRotations[stoneIdx] && this.perInstanceRotations[stoneIdx][i]) || 0;
                            const mesh = this.layerMeshes[stoneIdx];
                            if (mesh) {
                                mesh.updateMatrixWorld(true);
                                const worldPos = new THREE.Vector3(pos.x, pos.y, pos.z);
                                const inv = new THREE.Matrix4().copy(mesh.matrixWorld).invert();
                                const localPos = worldPos.clone().applyMatrix4(inv);
                                const localMatrix = new THREE.Matrix4();
                                const localQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1), rot + baseRotationOffset);
                                localMatrix.compose(localPos, localQuat, new THREE.Vector3(1,1,1));
                                const worldMatrix = new THREE.Matrix4().multiplyMatrices(mesh.matrixWorld, localMatrix);
                                instancedMesh.setMatrixAt(i, worldMatrix);
                            } else {
                                const localMatrix = new THREE.Matrix4();
                                const localQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1), rot + baseRotationOffset);
                                localMatrix.compose(new THREE.Vector3(pos.x, pos.y, pos.z), localQuat, new THREE.Vector3(1,1,1));
                                instancedMesh.setMatrixAt(i, localMatrix);
                            }
                    }
                    instancedMesh.instanceMatrix.needsUpdate = true;
                    if (instancedMesh.material) {
                        instancedMesh.material.opacity = 1;
                        instancedMesh.material.transparent = false;
                        instancedMesh.material.depthWrite = true;
                        try { instancedMesh.material.side = THREE.DoubleSide; } catch (e) {}
                        instancedMesh.material.alphaTest = Math.max(instancedMesh.material.alphaTest || 0, 0.1);
                        instancedMesh.material.needsUpdate = true;
                    }
                    instancedMesh._lastY = null;
                    if (!instancedMesh.userData) instancedMesh.userData = {};
                    instancedMesh.userData._finalized = true;
                }
            }
        }
    }

    destroy() {
        this.refresh();
    }
}
