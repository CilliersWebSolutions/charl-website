import * as THREE from 'three';
import StoneField from './StoneField.js';

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
    // stoneLayerMap removed — not needed for simplified generation
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
        duration: 0.33,         // seconds for full wave (configurable)
        heightAbove: 8.0,      // how high above to start for all layers
        layerStates: [],       // Animation state for each layer
        groundFadeDuration: 0.33, // seconds for ground fade
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
        this.stoneField = new StoneField(this.scene, this.resources, { stoneSizeMultiplier: this.stoneSizeMultiplier, stoneSeed: this.stoneSeed, heightAbove: this.stoneAnimation.heightAbove });

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

    // Generate stone layers using StoneField helper
    this.stoneField.generate(this.stoneLayerDefs);
    }

    // helper functions intentionally minimized — no extra generators

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

        // Delegate stone updates to StoneField
        if (this.stoneField) {
            this.stoneField.update(this.stoneAnimation, this.stoneLayerIndices);
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
        if (this.stoneField) this.stoneField.destroy();
        this.layerMeshes.forEach(m => {
            this.scene.remove(m);
        });
    }

    generateStoneLayerPlanes() {
        // Deprecated — stone generation is handled by StoneField
        this.stoneField.generate(this.stoneLayerDefs);
    }
}
