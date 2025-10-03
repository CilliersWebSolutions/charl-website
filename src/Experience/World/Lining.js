import * as THREE from 'three';


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
        duration: 1.0,         // seconds for full wave (configurable)
        heightAbove: 8.0,      // how high above to start for all layers
        layerStates: [],       // Animation state for each layer
        groundFadeDuration: 0.5, // seconds for ground fade
    };
    constructor(experience) {
        // Multiplier for stone size (GUI adjustable)
        this.stoneSizeMultiplier = 2;
        this.experience = experience;
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.resource = this.resources.items.liningModel;
        this.liningTexture = this.resources.items.liningTexture;
        this.layerMeshes = [];
        this.stonePlanes = [];

        this.setupLayers();

        
       
    }

    // ...existing code...

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
                // Fade in opacity in first 0.3s of the drop
                let fade = Math.min(1, prog / 0.15); // 0.3s = 0.15 of 2s
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
            instancedMesh.receiveShadow = true;
            // Fade in stone material opacity in sync with parent layer
            if (instancedMesh.material) {
                instancedMesh.material.transparent = true;
                instancedMesh.material.opacity = Math.max(0, Math.min(1, fade));
            }
            // Animate stones
            const delays = this.stoneAnimation.perInstanceDelays[stoneIdx] || [];
            const finals = this.stoneAnimation.finalPositions[stoneIdx] || [];
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
                let stoneAnimFrac = 0.3; // Fraction of parent duration for each stone's drop
                let end = Math.min(1.0, start + stoneAnimFrac); // Clamp end to 1.0
                const finalPos = finals[i];
                if (!finalPos) continue;
                let y;
                let needsUpdate = false;
                if (prog < start) {
                    // Not started yet
                    y = finalPos.y + this.stoneAnimation.heightAbove;
                    if (instancedMesh._lastY?.[i] !== y) needsUpdate = true;
                } else if (prog >= end || prog >= 1.0) {
                    // Finished
                    y = finalPos.y;
                    if (instancedMesh._lastY?.[i] !== y) needsUpdate = true;
                } else {
                    // Animate
                    let localProg = (prog - start) / (end - start);
                    localProg = Math.max(0, Math.min(1, localProg));
                    y = finalPos.y + (1 - localProg) * this.stoneAnimation.heightAbove;
                    if (instancedMesh._lastY?.[i] !== y) needsUpdate = true;
                }
                if (needsUpdate) {
                    const pos = new THREE.Vector3(finalPos.x, y, finalPos.z);
                    const instanceMatrix = new THREE.Matrix4();
                    instanceMatrix.compose(pos, combinedQuat, new THREE.Vector3(1, 1, 1));
                    instancedMesh.setMatrixAt(i, instanceMatrix);
                    anyUpdated = true;
                    if (!instancedMesh._lastY) instancedMesh._lastY = [];
                    instancedMesh._lastY[i] = y;
                }
            }
            if (anyUpdated) instancedMesh.instanceMatrix.needsUpdate = true;
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
            const box = boxDefs[def.name];

            // Strict grid: fill box with stones, allow slight overlap and jitter, but never stick out past box bounds
            const gridY = 4; // Number of vertical layers (rows)
            const gridX = Math.ceil(box.x / (box.y / gridY));
            const gridZ = Math.ceil(box.z / (box.y / gridY));
            const stoneSize = (box.y / gridY) * 0.98 * def.sizeScale * this.stoneSizeMultiplier;
            const planeGeo = new THREE.PlaneGeometry(stoneSize, stoneSize);
            // Use MeshStandardMaterial for shadow compatibility
            const mat = new THREE.MeshStandardMaterial({
                map: this.resources.items.stoneTexture,
                transparent: true,
                roughness: 0.7,
                metalness: 0.1,
                depthWrite: false,
                opacity: 0 // Start fully transparent
            });
            const totalInstances = gridX * gridY * gridZ;
            const instancedMesh = new THREE.InstancedMesh(planeGeo, mat, totalInstances);
            instancedMesh.castShadow = true;
            instancedMesh.receiveShadow = true;
            instancedMesh.frustumCulled = false; // Prevent popping for large instanced meshes
            // Manual rotation: 45deg Z and 45deg Y for diamond effect
            const zQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI / 4);
            const yQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 4);
            const combinedQuat = zQuat.clone().multiply(yQuat);
            // Animation: store per-instance delay and final position
            let delays = [];
            let finalPositions = [];
            for (let iy = 0; iy < gridY; iy++) {
                for (let ix = 0; ix < gridX; ix++) {
                    for (let iz = 0; iz < gridZ; iz++) {
                        // Compute normalized [0,1] position in each axis
                        const fx = ix / (gridX - 1);
                        const fy = iy / (gridY - 1);
                        const fz = iz / (gridZ - 1);
                        // Centered position in box
                        let px = center.x - box.x / 2 + fx * box.x;
                        let py = center.y - box.y / 2 + fy * box.y;
                        let pz = center.z - box.z / 2 + fz * box.z;
                        // Jitter, but clamp so stone never sticks out past box
                        const jitterMax = stoneSize * 0.25;
                        const clamp = (val, min, max) => Math.max(min, Math.min(max, val));
                        px += clamp((Math.random() - 0.5) * jitterMax, -(px - (center.x - box.x / 2)), (center.x + box.x / 2) - px);
                        py += clamp((Math.random() - 0.5) * jitterMax, -(py - (center.y - box.y / 2)), (center.y + box.y / 2) - py);
                        pz += clamp((Math.random() - 0.5) * jitterMax, -(pz - (center.z - box.z / 2)), (center.z + box.z / 2) - pz);
                        py = Math.min(py, center.y + box.y / 2 - stoneSize * 0.5);
                        // Animation: delay based on distance from (ix=0, iz=gridZ-1) (anti-clockwise corner)
                        const dist = Math.abs(ix) + Math.abs((gridZ - 1) - iz); // diamond pattern from min x, max z
                        delays.push(dist);
                        finalPositions.push({x: px, y: py, z: pz});
                    }
                }
            }
            // Store maxDelay for this layer for animation logic
            let maxDelay = Math.max.apply(null, delays);
            instancedMesh.userData.maxDelay = maxDelay;
            // Set initial positions for all stones
            for (let k = 0; k < finalPositions.length; k++) {
                const pos = finalPositions[k];
                let stonePos = new THREE.Vector3(pos.x, pos.y + this.stoneAnimation.heightAbove, pos.z);
                let stoneMatrix = new THREE.Matrix4();
                stoneMatrix.compose(stonePos, combinedQuat, new THREE.Vector3(1, 1, 1));
                instancedMesh.setMatrixAt(k, stoneMatrix);
            }
            this.stoneAnimation.perInstanceDelays.push(delays);
            this.stoneAnimation.finalPositions.push(finalPositions);
            this.scene.add(instancedMesh);
            this.stonePlanes.push(instancedMesh);
        }); // End stoneLayerDefs.forEach
    }

}
