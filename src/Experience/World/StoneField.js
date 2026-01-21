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
        this.perInstanceSpins = [];
        this.layerQuats = [];
        this.layerMeshes = [];
        this.experience = opts.experience || null;
        this.stoneSizeMultiplier = opts.stoneSizeMultiplier || 1.0;
        this.stoneSeed = opts.stoneSeed || 0xCAFEBABE;
        this.heightAbove = opts.heightAbove || 8.0;
        this.overlapPercent = opts.overlapPercent ?? 0.25; // target overlap between stacked stones along Y
        this.debug = !!opts.debug;
        this._lastCameraPosition = new THREE.Vector3();
        this._lastCameraQuaternion = new THREE.Quaternion();

        // Reusable temp objects to avoid per-frame allocations in update()
        this._tmpWorldPos = new THREE.Vector3();
        this._tmpLocalPos = new THREE.Vector3();
        this._tmpLocalMatrix = new THREE.Matrix4();
        this._tmpWorldMatrix = new THREE.Matrix4();
        this._tmpSpinQuat = new THREE.Quaternion();
        this._tmpLocalQuat = new THREE.Quaternion();
        this._tmpBaseYQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 4);
        this._tmpInvMatrix = new THREE.Matrix4();
        this._tmpScaleVec = new THREE.Vector3(1, 1, 1);
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
        this.perInstanceSpins = [];
        this.layerQuats = [];
        this.layerMeshes = [];
    }

    generate(stoneLayerDefs) {
        this.refresh();

        stoneLayerDefs.forEach((def, idx) => {
            const mesh = this.scene.children.find(child => child.name === def.name);
            if (!mesh) return;
            this.layerMeshes.push(mesh);
            mesh.updateMatrixWorld(true);
            const center = mesh.position.clone();

            // Per-layer rows: how many stacked stone rows along Y for this container
            const rows = Math.max(1, def.rows ?? 3);

            // Derive per-mesh box from geometry bounds (scaled), so coverage matches actual container size
            let box;
            try {
                const geo = mesh.geometry;
                if (!geo.boundingBox) geo.computeBoundingBox();
                const bb = geo.boundingBox;
                const dimsLocal = new THREE.Vector3(bb.max.x - bb.min.x, bb.max.y - bb.min.y, bb.max.z - bb.min.z);
                box = { x: Math.abs(dimsLocal.x * (mesh.scale?.x ?? 1)), y: Math.abs(dimsLocal.y * (mesh.scale?.y ?? 1)), z: Math.abs(dimsLocal.z * (mesh.scale?.z ?? 1)) };
            } catch (e) {
                // Fallback to previous constants if geometry is missing
                const fallback = { x: 4, y: 0.12, z: 4 };
                box = fallback;
            }
            // Derive stone size from container height and chosen rows, with desired overlap
            const segmentY = box.y / rows;
            const stoneSize = (segmentY / (1 - this.overlapPercent)) * 0.98 * def.sizeScale * this.stoneSizeMultiplier;
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
            const totalInstances = gridX * rows * gridZ;
            let instancedMesh = new THREE.InstancedMesh(planeGeo, mat, totalInstances);
            instancedMesh.castShadow = true;
            instancedMesh.receiveShadow = false;
            instancedMesh.frustumCulled = false;

            const seed = hashStringToInt(`${def.name}:${this.stoneSeed}:${idx}`);
            const rng = mulberry32(seed);

            const delays = [];
            const finalPositions = [];
            const spins = [];
            for (let iy = 0; iy < rows; iy++) {
                for (let ix = 0; ix < gridX; ix++) {
                    for (let iz = 0; iz < gridZ; iz++) {
                        const fx = gridX > 1 ? ix / (gridX - 1) : 0.5;
                        const fz = gridZ > 1 ? iz / (gridZ - 1) : 0.5;
                        // Keep centers inside container: offset by half stone size so planes don't push out
                        const innerX = Math.max(0, box.x - stoneSize);
                        const innerZ = Math.max(0, box.z - stoneSize);
                        let localX = -box.x / 2 + (stoneSize * 0.5) + fx * innerX;
                        let localZ = -box.z / 2 + (stoneSize * 0.5) + fz * innerZ;
                        // Evenly space centers along Y using segment height; stones are larger than segment to overlap by overlapPercent.
                        const yCenterStart = -box.y / 2 + segmentY * 0.5;
                        let localY = yCenterStart + iy * segmentY;
                        const localPoint = new THREE.Vector3(localX, localY, localZ);
                        const worldPoint = localPoint.clone().applyMatrix4(mesh.matrixWorld);

                        let px = worldPoint.x; let py = worldPoint.y; let pz = worldPoint.z;
                        const jitterMax = stoneSize * 0.1;
                        const jitterMaxY = jitterMax * 0.35; // small vertical jitter to avoid uniform lines
                        const clamp = (val, min, max) => Math.max(min, Math.min(max, val));
                        // Clamp centers to inner region bounds
                        const minX = center.x - box.x / 2 + stoneSize * 0.5;
                        const maxX = center.x + box.x / 2 - stoneSize * 0.5;
                        const minZ = center.z - box.z / 2 + stoneSize * 0.5;
                        const maxZ = center.z + box.z / 2 - stoneSize * 0.5;
                        px += clamp((rng() - 0.5) * jitterMax, minX - px, maxX - px);
                        py += clamp((rng() - 0.5) * jitterMaxY, -(py - (center.y - box.y / 2)), (center.y + box.y / 2) - py);
                        pz += clamp((rng() - 0.5) * jitterMax, minZ - pz, maxZ - pz);

                        py = Math.min(py, center.y + box.y / 2 - stoneSize * 0.5);
                        delays.push(rng());
                        finalPositions.push({ x: px, y: py, z: pz });
                        spins.push(rng() * Math.PI * 2);
                    }
                }
            }

            const maxDelay = Math.max.apply(null, delays);
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

            const invMatrix = new THREE.Matrix4().copy(mesh.matrixWorld).invert();
            const baseYQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 4);
            for (let k = 0; k < finalPositions.length; k++) {
                const pos = finalPositions[k];
                const worldStart = new THREE.Vector3(pos.x, pos.y + this.heightAbove, pos.z);
                const localPos = worldStart.clone().applyMatrix4(invMatrix);
                const localMatrix = new THREE.Matrix4();
                const spinZ = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), spins[k] || 0);
                const localQuat = new THREE.Quaternion().multiplyQuaternions(baseYQuat, spinZ);
                localMatrix.compose(localPos, localQuat, new THREE.Vector3(1,1,1));
                const worldMatrix = new THREE.Matrix4().multiplyMatrices(mesh.matrixWorld, localMatrix);
                instancedMesh.setMatrixAt(k, worldMatrix);
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
                                    if (/void\s+main\s*\(\s*\)\s*{/.test(vs)) {
                                        vs = vs.replace(/void\s+main\s*\(\s*\)\s*{/, 'void main() {\n    vInstanceColor = instanceColor;');
                                        if (!/vUv\s*=/.test(vs)) {
                                            vs = 'varying vec2 vUv;\n' + vs;
                                            vs = vs.replace(/void\s+main\s*\(\s*\)\s*{/, 'void main() {\n    vUv = uv + instanceUvOffset;\n    vInstanceColor = instanceColor;');
                                        }
                                    }
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
                                // Silenced non-critical shader injection issues in production
                            }
                        };
                        material[injectOnceKey] = true;
                        material.needsUpdate = true;
                    }
                }
            } catch (e) {
                // Silenced non-critical instancing UV/tint setup issues in production
            }

            this.perInstanceDelays.push(delays);
            this.finalPositions.push(finalPositions);
            this.perInstanceSpins.push(spins);
            this.scene.add(instancedMesh);
            instancedMesh.instanceMatrix.needsUpdate = true;
            this.stonePlanes.push(instancedMesh);
        });
    }

    update(stoneAnimation, stoneLayerIndices) {
        for (let stoneIdx = 0; stoneIdx < this.stonePlanes.length; stoneIdx++) {
            const parentLayerIndex = stoneLayerIndices[stoneIdx];
            const parentState = (stoneAnimation.stateByIndex && stoneAnimation.stateByIndex[parentLayerIndex])
                || stoneAnimation.layerStates.find(s => s.index === parentLayerIndex);
            if (!parentState) continue;

            const instancedMesh = this.stonePlanes[stoneIdx];
            const mesh = this.layerMeshes[stoneIdx];
            if (!mesh) continue;

            // If this layer is fully finished and the mesh has already been finalized,
            // skip all per-instance work entirely.
            if (parentState.progress >= 1.0 && instancedMesh.userData && instancedMesh.userData._finalized) {
                continue;
            }

            instancedMesh.castShadow = true;
            instancedMesh.receiveShadow = false;
            if (instancedMesh.material) {
                instancedMesh.material.transparent = true;
                instancedMesh.material.opacity = Math.max(0, Math.min(1, parentState.progress));
            }

            const delays = this.perInstanceDelays[stoneIdx] || [];
            const finals = this.finalPositions[stoneIdx] || [];
            const maxDelay = instancedMesh.userData.maxDelay || 1;
            const spinsArr = this.perInstanceSpins[stoneIdx] || [];

            let anyUpdated = false;
            mesh.updateMatrixWorld(true);
            const baseYQuat = this._tmpBaseYQuat;
            const inv = this._tmpInvMatrix.copy(mesh.matrixWorld).invert();

            for (let i = 0; i < Math.min(instancedMesh.count, finals.length); i++) {
                const finalPos = finals[i];
                if (!finalPos) continue;

                const delay = delays[i] || 0;
                let start = delay / Math.max(0.0001, maxDelay);
                const stoneAnimSeconds = 0.6;
                let stoneAnimFrac = stoneAnimSeconds / Math.max(0.0001, stoneAnimation.duration);
                let end = Math.min(1.0, start + stoneAnimFrac);

                let y;
                const prog = parentState.progress;
                if (prog < start) {
                    y = finalPos.y + this.heightAbove;
                } else if (prog >= end || prog >= 1.0) {
                    y = finalPos.y;
                } else {
                    let localProg = (prog - start) / (end - start);
                    localProg = Math.max(0, Math.min(1, localProg));
                    localProg = easeOutCubic(localProg);
                    y = finalPos.y + (1 - localProg) * stoneAnimation.heightAbove;
                }

                if (instancedMesh._lastY?.[i] !== y) {
                    const worldPos = this._tmpWorldPos.set(finalPos.x, y, finalPos.z);
                    const localPos = this._tmpLocalPos.copy(worldPos).applyMatrix4(inv);
                    const localMatrix = this._tmpLocalMatrix;
                    const spinZ = this._tmpSpinQuat.setFromAxisAngle(new THREE.Vector3(0, 0, 1), spinsArr[i] || 0);
                    const localQuat = this._tmpLocalQuat.multiplyQuaternions(baseYQuat, spinZ);
                    const scaleVec = this._tmpScaleVec;
                    localMatrix.compose(localPos, localQuat, scaleVec);
                    const worldMatrix = this._tmpWorldMatrix.multiplyMatrices(mesh.matrixWorld, localMatrix);
                    instancedMesh.setMatrixAt(i, worldMatrix);
                    anyUpdated = true;
                    if (!instancedMesh._lastY) instancedMesh._lastY = [];
                    instancedMesh._lastY[i] = y;
                }
            }

            if (anyUpdated) instancedMesh.instanceMatrix.needsUpdate = true;

            if (parentState.progress >= 1.0) {
                if (!instancedMesh.userData) instancedMesh.userData = {};
                if (!instancedMesh.userData._finalized) {
                    instancedMesh.material.transparent = false;
                    instancedMesh.material.depthWrite = true;
                    try { instancedMesh.material.side = THREE.DoubleSide; } catch (e) {}
                    instancedMesh.material.alphaTest = Math.max(instancedMesh.material.alphaTest || 0, 0.1);
                    instancedMesh.material.needsUpdate = true;
                    instancedMesh._lastY = null;
                    instancedMesh.userData._finalized = true;
                }
            }
        }
    }

    destroy() {
        this.refresh();
    }

    isFinalized() {
        if (!this.stonePlanes || this.stonePlanes.length === 0) return true;
        for (const m of this.stonePlanes) {
            if (!m || !m.userData || m.userData._finalized !== true) return false;
        }
        return true;
    }
}
