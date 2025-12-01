import * as THREE from 'three';

// Deterministic RNG helpers so stone jitter/delays are reproducible across runs
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

// Easing helper for smoother stone settling
function easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
}


export default class Lining {
    // Stone layer definitions for use in generateStoneLayerPlanes
    stoneLayerDefs = [
        { name: 'layer2', sizeScale: 1.0 },
        { name: 'layer3', sizeScale: 1.0 },
        { name: 'layer7', sizeScale: 1.0 },
        { name: 'layer8', sizeScale: 1.0 },
    ];
    stoneLayerIndices = [2, 3, 7, 8];
    stoneLayerMap = {2:0, 3:1, 7:2, 8:3}; // stoneLayerDefs index
    resetLayerAnimationState() {
        // Each layer gets: {start: 0, end: 0, done: false, progress: 0}
        this.stoneAnimation.layerStates = [];
        let t = 0;
        // Ground layer (11) fades in first
        this.stoneAnimation.layerStates.push({
            type: 'ground',
            index: 11,
            start: t,
            end: t + this.stoneAnimation.groundFadeDuration,
            done: false,
            progress: 0
        });
        t += this.stoneAnimation.groundFadeDuration;
        // Layers 10 to 1 (including stone layers)
        for (let i = 10; i >= 1; i--) {
            this.stoneAnimation.layerStates.push({
                type: this.stoneLayerIndices.includes(i) ? 'stone' : 'normal',
                index: i,
                start: t,
                end: t + this.stoneAnimation.duration,
                done: false,
                progress: 0
            });
            t += this.stoneAnimation.duration;
        }
    }
    // Animation state for stones
    stoneAnimation = {
        startTime: null,
        perInstanceDelays: [], // Array of arrays, one per layer
        finalPositions: [],    // Array of arrays, one per layer
        duration: 2.0,         // seconds for full wave (configurable)
        heightAbove: 8.0,      // how high above to start for all layers
        layerStates: [],       // Animation state for each layer
        groundFadeDuration: 0.3, // seconds for ground fade
    };
    constructor(experience) {
        // Multiplier for stone size (GUI adjustable)
        this.stoneSizeMultiplier = 1.5;
        // Deterministic seed for stone generation (change to vary layout deterministically)
        this.stoneSeed = 0xCAFEBABE;
        this.experience = experience;
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.resource = this.resources.items.liningModel;
        this.liningTexture = this.resources.items.liningTexture;
        this.layerMeshes = [];
        this.stonePlanes = [];

        this.setupLayers();

        
       
    }


    setupLayers() {
        this.setupTexture(this.liningTexture);

        // First, add the GLTF model to the scene if it's not already there
        if (this.resource.scene && !this.scene.children.includes(this.resource.scene)) {
            this.scene.add(this.resource.scene);
        }

        // Alternative: traverse the GLTF and add meshes individually
        const meshesToAdd = [];
        this.resource.scene.traverse((child) => {
            if (child.isMesh) {
                meshesToAdd.push(child);
            }
        });
        
        // Add meshes to main scene
        meshesToAdd.forEach(mesh => {
            if (!this.scene.children.includes(mesh)) {
                this.scene.add(mesh);
            }
        });

        // Add all base layers in their final positions (only run once)
        for (let i = 11; i >= 1; i--) {
            const name = `layer${i}`;
            // Look in main scene instead of GLTF scene
            const mesh = this.scene.children.find(child => child.name === name);
            if (!mesh) continue;

            mesh.userData.targetY = mesh.position.y;
            mesh.castShadow = false;
            mesh.receiveShadow = false;

            // Hide all stone layers (2,3,7,8) completely
            if (i === 2 || i === 3 || i === 7 || i === 8) {
                mesh.visible = false;
                mesh.castShadow = true;
                mesh.receiveShadow = true; // Ensure all layers block shadows
            } else if (i === 1) {
                // Layer 1: ensure shadow settings and material
                mesh.visible = true;
                mesh.material = new THREE.MeshStandardMaterial({
                    color: 0x03854c,
                    roughness: 0.7,
                    metalness: 0.1,
                    transparent: false,
                    opacity: 1 // Not transparent for shadow casting
                });
                mesh.castShadow = true;
                mesh.receiveShadow = true;
            } else if (i === 4 || i === 6 || i === 9) {
                // Green layers
                mesh.visible = true;
                mesh.material = new THREE.MeshStandardMaterial({
                    color: 0x03854c,
                    roughness: 0.7,
                    metalness: 0.1,
                    transparent: false,
                    opacity: 0
                });
                mesh.castShadow = true;
                mesh.receiveShadow = true;
            } else {
                // All other layers: visible and opaque
                mesh.visible = true;
                mesh.material = new THREE.MeshStandardMaterial({
                    map: this.liningTexture,
                    color: 0xffffff,
                    roughness: 0.7,
                    metalness: 0.1,
                    transparent: false,
                    opacity: 0
                });
                mesh.castShadow = true;
                mesh.receiveShadow = true;
            }

            this.scene.add(mesh);
            this.layerMeshes.push(mesh);
        }

    // Generate stone layers using shader planes
    this.generateStoneLayerPlanes();
    }

    generateStoneLayers() {
        // No longer needed
        return;
    }

    // Removed: createStonesForLayer

    refreshLayers() {
        // Remove previous stone planes from scene
        this.stonePlanes.forEach(p => {
            this.scene.remove(p);
            p.geometry.dispose();
            p.material.dispose();
        });
        this.stonePlanes = [];
        // Regenerate only the stone layer planes
        this.generateStoneLayerPlanes();
    }

    setupTexture(texture) {
        if (!texture) return;
        texture.flipY = false;
    texture.encoding = THREE.SRGBColorSpace;
    }

    update() {
        // Animate all layers and stones concurrently
        if (!this.stoneAnimation.startTime) {
            this.stoneAnimation.startTime = performance.now() * 0.001;
            this.resetLayerAnimationState();
        }
        const t = performance.now() * 0.001 - this.stoneAnimation.startTime;

        // Animate ground layer (layer 11)
        const groundState = this.stoneAnimation.layerStates[0];
        const groundMesh = this.scene.children.find(child => child.name === 'layer11');
        if (groundMesh) {
            let gprog = (t - groundState.start) / (groundState.end - groundState.start);
            gprog = Math.max(0, Math.min(1, gprog));
            groundMesh.material.transparent = true;
            groundMesh.material.opacity = gprog;
            if (gprog >= 1) groundState.done = true;
        }

        // Animate layers 10 to 1 in sequence (no stone logic here)
        for (let l = 1; l < this.stoneAnimation.layerStates.length; l++) {
            const state = this.stoneAnimation.layerStates[l];
            const mesh = this.scene.children.find(child => child.name === `layer${state.index}`);
            let prog = (t - state.start) / (state.end - state.start);
            prog = Math.max(0, Math.min(1, prog));
            state.progress = prog;
            if (mesh) {
                mesh.material.transparent = true;
                // Fade in opacity in first `fadeSeconds` seconds of the drop
                const fadeSeconds = 0.3; // seconds to fully fade a layer in
                const layerDuration = (state.end - state.start) || this.stoneAnimation.duration;
                let fade = 0;
                if (layerDuration > 0) {
                    // prog is normalized [0,1] over layerDuration seconds
                    const elapsed = prog * layerDuration;
                    fade = Math.min(1, elapsed / fadeSeconds);
                }
                mesh.material.opacity = fade;
                // Animate Y from above
                mesh.position.y = mesh.userData.targetY + (1 - prog) * this.stoneAnimation.heightAbove;
                if (prog >= 1) {
                    mesh.position.y = mesh.userData.targetY;
                    state.done = true;
                }
                // Only show shadow when opacity is above threshold
                const shadowOpacityThreshold = 0.5;
                mesh.castShadow = fade > shadowOpacityThreshold;
                mesh.receiveShadow = true; // Always receive shadow to block penetration
            }
        }

        // Animate all stone layers in a single loop, triggered by parent layer start
        for (let stoneIdx = 0; stoneIdx < this.stonePlanes.length; stoneIdx++) {
            // Find parent layer state
            const parentLayerIndex = this.stoneLayerIndices[stoneIdx];
            const parentState = this.stoneAnimation.layerStates.find(s => s.index === parentLayerIndex);
            if (!parentState) continue;
            const instancedMesh = this.stonePlanes[stoneIdx];
            // Shadow fade-in logic based on parent layer progress
            const shadowOpacityThreshold = 0.5;
            const fade = parentState.progress;
            instancedMesh.castShadow = true;
            instancedMesh.receiveShadow = false;
            // Fade in stone material opacity in sync with parent layer
            if (instancedMesh.material) {
                instancedMesh.material.transparent = true;
                instancedMesh.material.opacity = Math.max(0, Math.min(1, fade));
            }
            // Animate stones
            const delays = this.stoneAnimation.perInstanceDelays[stoneIdx] || [];
            const finals = this.stoneAnimation.finalPositions[stoneIdx] || [];
            const rotations = (this.stoneAnimation.perInstanceRotations && this.stoneAnimation.perInstanceRotations[stoneIdx]) || [];
            const maxDelay = instancedMesh.userData.maxDelay || 1;
            let prog = parentState.progress;
            let anyUpdated = false;
            // Precompute rotation
            const zQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI / 4);
            const yQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 4);
            const combinedQuat = zQuat.clone().multiply(yQuat);
            for (let i = 0; i < instancedMesh.count; i++) {
                let delay = delays[i] || 0;
                let start = delay / maxDelay;
                // Stone drop window (seconds) and fraction of parent duration
                const stoneAnimSeconds = 0.6; // per-stone drop duration in seconds
                let stoneAnimFrac = stoneAnimSeconds / Math.max(0.0001, this.stoneAnimation.duration);
                let end = Math.min(1.0, start + stoneAnimFrac); // Clamp end to 1.0
                const finalPos = finals[i];
                if (!finalPos) continue;
                let y;
                let needsUpdate = false;
                if (prog < start) {
                    // Not started yet
                    y = finalPos.y + this.stoneAnimation.heightAbove;
                    console.log("check state ok")
                    if (instancedMesh._lastY?.[i] !== y) needsUpdate = true;
                } else if (prog >= end || prog >= 1.0) {
                    // Finished
                    y = finalPos.y;
                    if (instancedMesh._lastY?.[i] !== y) needsUpdate = true;
                } else {
                    // Animate
                    let localProg = (prog - start) / (end - start);
                    localProg = Math.max(0, Math.min(1, localProg));
                    // ease out for a nicer settle
                    localProg = easeOutCubic(localProg);
                    y = finalPos.y + (1 - localProg) * this.stoneAnimation.heightAbove;
                    if (instancedMesh._lastY?.[i] !== y) needsUpdate = true;
                }
                if (needsUpdate) {
                    const pos = new THREE.Vector3(finalPos.x, y, finalPos.z);
                    const instanceMatrix = new THREE.Matrix4();
                    const rot = rotations[i] || 0;
                    const rotQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), rot);
                    const finalQuat = combinedQuat.clone().multiply(rotQuat);
                    instanceMatrix.compose(pos, finalQuat, new THREE.Vector3(1, 1, 1));
                    instancedMesh.setMatrixAt(i, instanceMatrix);
                    anyUpdated = true;
                    if (!instancedMesh._lastY) instancedMesh._lastY = [];
                    instancedMesh._lastY[i] = y;
                }
            }
            // If any instances were updated this frame, mark matrices dirty
            if (anyUpdated) instancedMesh.instanceMatrix.needsUpdate = true;

            // Finalize: when the parent layer is fully complete, ensure all instances
            // are explicitly set to their final positions to avoid any remaining
            // visual mismatch or missed updates. This also enforces final opacity.
            if (parentState.progress >= 1.0) {
                const finalsLen = finals.length;
                // safety: if counts mismatch, log debug info
                if (instancedMesh.count !== finalsLen) {
                    // eslint-disable-next-line no-console
                    console.debug('[Lining] instance count mismatch', { count: instancedMesh.count, finalsLen });
                }
                // Write final matrices for all instances (defensive)
                for (let i = 0; i < Math.min(instancedMesh.count, finalsLen); i++) {
                    const pos = new THREE.Vector3(finals[i].x, finals[i].y, finals[i].z);
                    const m = new THREE.Matrix4();
                    const rot = (this.stoneAnimation.perInstanceRotations && this.stoneAnimation.perInstanceRotations[stoneIdx] && this.stoneAnimation.perInstanceRotations[stoneIdx][i]) || 0;
                    const rotQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), rot);
                    const finalQuat = combinedQuat.clone().multiply(rotQuat);
                    m.compose(pos, finalQuat, new THREE.Vector3(1, 1, 1));
                    instancedMesh.setMatrixAt(i, m);
                }
                instancedMesh.instanceMatrix.needsUpdate = true;
                // Diagnostics: log instance counts and finalize material/mesh state
                try {
                    var finalCount = Array.isArray(finals) ? finals.length : undefined;
                    console.debug('[Lining] finalizing layer', parentLayerIndex, 'stoneIdx', stoneIdx, 'seed', this.stoneSeed, 'allocatedInstances', instancedMesh.count || '(unknown)', 'finalPositions', finalCount);
                } catch (e) {
                    console.warn('[Lining] failed to log finalizing diagnostics', e);
                }

                // Ensure instanced count matches finals length
                if (typeof instancedMesh.count === 'number' && typeof finalsLen === 'number') {
                    if (instancedMesh.count !== finalsLen) {
                        console.warn('[Lining] instance count mismatch — correcting instancedMesh.count', instancedMesh.count, '->', finalsLen);
                        instancedMesh.count = finalsLen;
                    }
                }

                // Ensure material is fully opaque at the end and adjust test flags for robustness
                if (instancedMesh.material) {
                    instancedMesh.material.opacity = 1;
                    instancedMesh.material.transparent = false;
                    // force depth writing for final opaque state and request material update
                    instancedMesh.material.depthWrite = true;
                    // Temporarily enable double-sided + alphaTest to diagnose disappearance issues
                    try {
                        instancedMesh.material.side = THREE.DoubleSide;
                    } catch (e) {
                        // THREE should be available here; if not, ignore
                    }
                    instancedMesh.material.alphaTest = Math.max(instancedMesh.material.alphaTest || 0, 0.1);
                    instancedMesh.material.needsUpdate = true;
                }
                // clear lastY cache to free memory
                instancedMesh._lastY = null;
            }
        }
    }

    destroy() {
        // Clean up GUI and container
        if (this.gui) {
            this.gui.destroy();
        }
        if (this.guiContainer && this.guiContainer.parentNode) {
            this.guiContainer.parentNode.removeChild(this.guiContainer);
        }
        
        // Clean up stone planes
        this.stonePlanes.forEach(p => {
            this.scene.remove(p);
            p.geometry.dispose();
            p.material.dispose();
        });
        this.stonePlanes = [];
        this.layerMeshes.forEach(m => {
            this.scene.remove(m);
        });
    }

    generateStoneLayerPlanes() {
    this.stoneAnimation.perInstanceDelays = [];
    this.stoneAnimation.finalPositions = [];
        // Remove previous stone planes
        this.stonePlanes.forEach(p => this.scene.remove(p));
        this.stonePlanes = [];

        // Exact box dimensions for each layer
        const boxDefs = {
            layer2: { x: 4, z: 4, y: 0.180905, color: 0x00ff00 },
            layer3: { x: 4, z: 4, y: 0.092328, color: 0x0000ff },
            layer7: { x: 4, z: 4, y: 0.180905, color: 0xff00ff },
            layer8: { x: 4, z: 4, y: 0.092328, color: 0xff8800 },
        };
        this.stoneLayerDefs.forEach((def, idx) => {
            // Use exact box dimensions and center from the original mesh
            const mesh = this.scene.children.find(child => child.name === def.name);
            if (!mesh) {
                console.warn(`Stone layer mesh not found: ${def.name}`);
                return;
            }
            const center = mesh.position.clone();
            // Apply a small inset to stone boxes so stones/ghosts don't protrude past main layers
            const rawBox = boxDefs[def.name];
            const shrinkFactor = 0.98; // 5% inset
            const box = {
                x: rawBox.x * shrinkFactor,
                y: rawBox.y,
                z: rawBox.z * shrinkFactor,
                color: rawBox.color
            };

            // Strict grid: fill box with stones, allow slight overlap and jitter, but never stick out past box bounds
            const gridY = 3; // Number of vertical layers (rows)
            // Compute stone size based on the layer thickness (box.y) and desired rows
            const stoneSize = (box.y / gridY) * 0.98 * def.sizeScale * this.stoneSizeMultiplier;
            // Compute horizontal grid counts from stoneSize so stones tile the box consistently
            let gridX = Math.max(1, Math.floor(box.x / stoneSize));
            let gridZ = Math.max(1, Math.floor(box.z / stoneSize));
            // Ensure at least one column/row when box is smaller than stoneSize
            if (gridX < 1) gridX = 1;
            if (gridZ < 1) gridZ = 1;
            const planeGeo = new THREE.PlaneGeometry(stoneSize, stoneSize);
            // Use MeshStandardMaterial for shadow compatibility
            const mat = new THREE.MeshStandardMaterial({
                map: this.resources.items.stoneTexture,
                transparent: true,
                roughness: 0.7,
                metalness: 0.1,
                depthWrite: false,
                opacity: 0, // Start fully transparent
                side: THREE.DoubleSide,
                alphaTest: 0.05
            });
            const totalInstances = gridX * gridY * gridZ;
            let instancedMesh = new THREE.InstancedMesh(planeGeo, mat, totalInstances);
            instancedMesh.castShadow = true;
            // Stones should cast shadows but not receive shadows from other layers
            instancedMesh.receiveShadow = false;
            instancedMesh.frustumCulled = false; // Prevent popping for large instanced meshes
            // Manual rotation: 45deg Z and 45deg Y for diamond effect
            const zQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI / 4);
            const yQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 4);
            const combinedQuat = zQuat.clone().multiply(yQuat);
            // Create a deterministic RNG for this layer so jitter/delays are repeatable
            const seed = hashStringToInt(`${def.name}:${this.stoneSeed}:${idx}`);
            const rng = mulberry32(seed);
            // Animation: store per-instance delay and final position
            let delays = [];
            let finalPositions = [];
            let rotations = [];
            for (let iy = 0; iy < gridY; iy++) {
                for (let ix = 0; ix < gridX; ix++) {
                    for (let iz = 0; iz < gridZ; iz++) {
                        // Compute normalized [0,1] position in each axis (safe for single-cell dims)
                        const fx = gridX > 1 ? ix / (gridX - 1) : 0.5;
                        const fy = gridY > 1 ? iy / (gridY - 1) : 0.5;
                        const fz = gridZ > 1 ? iz / (gridZ - 1) : 0.5;
                        // Centered position in box
                        let px = center.x - box.x / 2 + fx * box.x;
                        let py = center.y - box.y / 2 + fy * box.y;
                        let pz = center.z - box.z / 2 + fz * box.z;
                        // Jitter, but clamp so stone never sticks out past box bounds
                        const jitterMax = stoneSize * 0.1;
                        const clamp = (val, min, max) => Math.max(min, Math.min(max, val));
                        // jitter deterministically
                        px += clamp((rng() - 0.5) * jitterMax, -(px - (center.x - box.x / 2)), (center.x + box.x / 2) - px);
                        py += clamp((rng() - 0.5) * jitterMax, -(py - (center.y - box.y / 2)), (center.y + box.y / 2) - py);
                        pz += clamp((rng() - 0.5) * jitterMax, -(pz - (center.z - box.z / 2)), (center.z + box.z / 2) - pz);
                        py = Math.min(py, center.y + box.y / 2 - stoneSize * 0.5);
                        // Animation: assign a random per-instance delay to simulate rain-like falling
                        // Delays are normalized later against maxDelay so keep in [0,1]
                        const randDelay = rng();
                        delays.push(randDelay);
                        finalPositions.push({x: px, y: py, z: pz});
                        rotations.push(rng() * Math.PI * 2);
                    }
                }
            }
            // Store maxDelay for this layer for animation logic
            let maxDelay = Math.max.apply(null, delays);
            instancedMesh.userData.maxDelay = maxDelay;
            // Diagnostic: ensure counts match and log useful info
            const finalsLen = finalPositions.length;
            if (finalsLen !== instancedMesh.count) {
                // If finalPositions shorter, shrink instanced count to avoid undefined finals during animation
                if (finalsLen < instancedMesh.count) {
                    instancedMesh.count = finalsLen;
                    // eslint-disable-next-line no-console
                    console.debug('[Lining] adjusted instancedMesh.count down', { name: def.name, gridX, gridY, gridZ, original: totalInstances, adjusted: instancedMesh.count, finalsLen });
                } else {
                    // finalsLen > allocated count: log and recreate a new InstancedMesh with correct count
                    // eslint-disable-next-line no-console
                    console.warn('[Lining] finalPositions exceed instanced allocation; recreating mesh', { name: def.name, allocated: instancedMesh.count, needed: finalsLen });
                    const newMesh = new THREE.InstancedMesh(planeGeo, mat, finalsLen);
                    newMesh.castShadow = instancedMesh.castShadow;
                    newMesh.receiveShadow = instancedMesh.receiveShadow;
                    newMesh.frustumCulled = instancedMesh.frustumCulled;
                    // replace in scene and stonePlanes
                    this.scene.remove(instancedMesh);
                    this.scene.add(newMesh);
                    instancedMesh = newMesh; // eslint-disable-line no-param-reassign
                }
            }
            // Set initial positions for all stones (apply per-instance rotation)
            for (let k = 0; k < finalPositions.length; k++) {
                const pos = finalPositions[k];
                const rot = rotations[k] || 0;
                let stonePos = new THREE.Vector3(pos.x, pos.y + this.stoneAnimation.heightAbove, pos.z);
                let stoneMatrix = new THREE.Matrix4();
                const rotQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), rot);
                const finalQuat = combinedQuat.clone().multiply(rotQuat);
                stoneMatrix.compose(stonePos, finalQuat, new THREE.Vector3(1, 1, 1));
                instancedMesh.setMatrixAt(k, stoneMatrix);
            }
            // Add per-instance UV offsets so each stone samples a slightly different
            // area of the texture. This is done with an InstancedBufferAttribute called
            // `instanceUvOffset` and a small onBeforeCompile shader injection that
            // offsets the varying `vUv` by the per-instance value in the vertex shader.
            try {
                // Ensure stone texture wraps so per-instance UV offsets can sample outside [0,1]
                const stoneTex = this.resources.items.stoneTexture;
                if (stoneTex) {
                    stoneTex.wrapS = THREE.RepeatWrapping;
                    stoneTex.wrapT = THREE.RepeatWrapping;
                    stoneTex.needsUpdate = true;
                }

                const uvOffsets = new Float32Array(finalPositions.length * 2);
                const tintColors = new Float32Array(finalPositions.length * 3);
                for (let k = 0; k < finalPositions.length; k++) {
                    // larger offsets in range [-0.4, 0.4] to make differences more visible
                    const ox = (rng() - 0.5) * 0.8;
                    const oy = (rng() - 0.5) * 0.8;
                    uvOffsets[k * 2] = ox;
                    uvOffsets[k * 2 + 1] = oy;
                    // Per-instance tint multiplier in [0.75, 1.0]
                    const tint = 0.75 + rng() * 0.25;
                    tintColors[k * 3] = tint;
                    tintColors[k * 3 + 1] = tint;
                    tintColors[k * 3 + 2] = tint;
                }
                instancedMesh.geometry.setAttribute('instanceUvOffset', new THREE.InstancedBufferAttribute(uvOffsets, 2));
                instancedMesh.geometry.setAttribute('instanceColor', new THREE.InstancedBufferAttribute(tintColors, 3));

                // Inject shader modifications to add the attributes and offset vUv per-instance,
                // and pass per-instance color to fragment shader to modulate diffuse.
                const material = instancedMesh.material;
                if (material && typeof material.onBeforeCompile === 'function') {
                    const injectOnceKey = '__cw_instanced_uv_injected__';
                    if (!material[injectOnceKey]) {
                        material.onBeforeCompile = (shader) => {
                            try {
                                // Work with vertex shader text safely
                                let vs = shader.vertexShader;
                                // Ensure vUv varying exists
                                if (!/varying\s+vec2\s+vUv\s*;/.test(vs)) {
                                    vs = 'varying vec2 vUv;\n' + vs;
                                }
                                // Insert attributes and vInstanceColor before main
                                if (!/attribute\s+vec2\s+instanceUvOffset\s*;/.test(vs)) {
                                    vs = vs.replace(/void\s+main\s*\(\s*\)\s*{/, 'attribute vec2 instanceUvOffset;\nattribute vec3 instanceColor;\nvarying vec3 vInstanceColor;\n\nvoid main() {');
                                }
                                // Apply UV offset after the standard UV include if present,
                                // otherwise try a direct vUv = uv; replacement as a fallback.
                                if (vs.indexOf('#include <uv_vertex>') !== -1) {
                                    vs = vs.replace('#include <uv_vertex>', '#include <uv_vertex>\n    vUv += instanceUvOffset;\n    vInstanceColor = instanceColor;');
                                } else if (vs.indexOf('vUv = uv;') !== -1) {
                                    vs = vs.replace('vUv = uv;', 'vUv = uv + instanceUvOffset;\n    vInstanceColor = instanceColor;');
                                } else {
                                    // As a last resort, append assignments at end of main but avoid duplicate insertion
                                    vs = vs.replace(/\n}\s*$/,'\n    vUv += instanceUvOffset;\n    vInstanceColor = instanceColor;\n}\n');
                                }
                                shader.vertexShader = vs;

                                // Work with fragment shader text safely
                                let fs = shader.fragmentShader;
                                if (!/varying\s+vec3\s+vInstanceColor\s*;/.test(fs)) {
                                    // Try to insert after vUv varying if present
                                    if (/varying\s+vec2\s+vUv\s*;/.test(fs)) {
                                        fs = fs.replace(/varying\s+vec2\s+vUv\s*;/, 'varying vec2 vUv;\nvarying vec3 vInstanceColor;');
                                    } else {
                                        fs = 'varying vec3 vInstanceColor;\n' + fs;
                                    }
                                }
                                // Try to modulate diffuse color if the common pattern exists
                                if (fs.indexOf('vec4 diffuseColor = vec4( diffuse, opacity );') !== -1) {
                                    fs = fs.replace('vec4 diffuseColor = vec4( diffuse, opacity );', 'vec4 diffuseColor = vec4( diffuse * vInstanceColor, opacity );');
                                }
                                shader.fragmentShader = fs;
                            } catch (e) {
                                console.warn('[Lining] failed to inject instanced UV+color shader code', e);
                            }
                        };
                        // Mark as injected to avoid multiple assignments
                        material[injectOnceKey] = true;
                        // Ensure material recompiles with the new onBeforeCompile
                        material.needsUpdate = true;
                    }
                }
            } catch (e) {
                console.warn('[Lining] failed to add per-instance UV offsets', e);
            }
            this.stoneAnimation.perInstanceDelays.push(delays);
            this.stoneAnimation.finalPositions.push(finalPositions);
            if (!this.stoneAnimation.perInstanceRotations) this.stoneAnimation.perInstanceRotations = [];
            this.stoneAnimation.perInstanceRotations.push(rotations);
            this.scene.add(instancedMesh);
            this.stonePlanes.push(instancedMesh);
        }); // End stoneLayerDefs.forEach
    }

}
