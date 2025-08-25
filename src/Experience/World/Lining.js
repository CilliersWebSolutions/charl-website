import * as THREE from 'three';

export default class Lining {
    constructor(experience, containerAttribute) {
        this.experience = experience;
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.resource = this.resources.items.liningModel;
        this.liningTexture = this.resources.items.liningTexture;
        this.layers = [];
        this.animationDone = false; // Track animation state
        this.setupLayers();
        // Don't add mousemove listener yet
    }

    setupLayers() {
        this.setupTexture(this.liningTexture);

        // Fade-in group for layer12 and layer11
        this.baseGroup = new THREE.Group();
        this.baseMeshes = [];
        const mesh12 = this.resource.scene.children.find(child => child.name === 'layer12');
        const mesh11 = this.resource.scene.children.find(child => child.name === 'layer11');
        [mesh12, mesh11].forEach(mesh => {
            if (mesh) {
                mesh.material = new THREE.MeshStandardMaterial({
                    map: this.liningTexture,
                    roughness: 0.7,
                    metalness: 0.1,
                    transparent: true,
                    opacity: 0 // Start invisible
                });
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                mesh.userData.targetY = mesh.position.y;
                this.baseGroup.add(mesh);
                this.baseMeshes.push(mesh);
            }
        });
        this.baseGroup.position.y = 0;
        this.scene.add(this.baseGroup);

        // Falling layers
        this.layerMeshes = [];
        for (let i = 10; i >= 1; i--) {
            const name = `layer${i}`;
            const mesh = this.resource.scene.children.find(child => child.name === name);
            if (mesh) {
                // Default material
                mesh.material = new THREE.MeshStandardMaterial({
                    map: this.liningTexture,
                    roughness: 0.7,
                    metalness: 0.1
                });

                // Custom color for layers 1, 4, 6, and 9 (idx will be 9, 5, 1 in this loop)
                if (i === 1 || i === 4 || i === 6 || i === 9) {
                    mesh.material = new THREE.MeshStandardMaterial({
                        color: 0x03854c, // Flat color
                        roughness: 0.7,
                        metalness: 0.1
                    });
                }

                mesh.castShadow = true;
                mesh.receiveShadow = true;
                mesh.userData.targetY = mesh.position.y;
                mesh.position.y = 20; // Start above
                this.scene.add(mesh);
                this.layerMeshes.push(mesh);
            }
        }
    }

    setupTexture(texture) {
        if (!texture) return;
        texture.flipY = false;
        texture.encoding = THREE.SRGBColorSpace;
    }

    onMouseMove(event) {
        const mouseX = event.clientX / window.innerWidth;
        const mouseY = event.clientY / window.innerHeight;
        const spread = 0.5;

        this.layers.forEach((layer, i) => {
            //layer.position.y = -(i - (this.layers.length - 1) / 2) * spread * mouseY;
            layer.position.x = (i - (this.layers.length - 1) / 2) * spread * mouseX;
        });
    }

    enableMouseMove() {
        if (!this.mouseMoveEnabled) {
            window.addEventListener('mousemove', this.onMouseMove.bind(this));
            this.mouseMoveEnabled = true;
        }
    }

    update() {
        // Fade in base layers (layer12 and layer11)
        let baseDone = true;
        this.baseMeshes.forEach(mesh => {
            if (mesh.material.opacity < 1) {
                mesh.material.opacity += 0.05;
                if (mesh.material.opacity > 1) mesh.material.opacity = 1;
                baseDone = false;
            }
        });

        // Animate falling layers after base layers are visible
        let allLayersDone = true;
        if (baseDone) {
            this.layerMeshes.forEach((mesh, idx) => {
                // Stagger: only animate if previous mesh has landed
                if (idx === 0 || this.layerMeshes[idx - 1].position.y === this.layerMeshes[idx - 1].userData.targetY) {
                    // Fade in
                    if (mesh.material.opacity < 1) {
                        mesh.material.opacity += 0.05;
                        if (mesh.material.opacity > 1) mesh.material.opacity = 1;
                    }
                    // Fall
                    const speed = 0.12 + idx * 0.03;
                    if (mesh.position.y > mesh.userData.targetY) {
                        mesh.position.y += (mesh.userData.targetY - mesh.position.y) * speed;
                        if (Math.abs(mesh.position.y - mesh.userData.targetY) < 0.01) mesh.position.y = mesh.userData.targetY;
                        allLayersDone = false;
                    }
                    if (mesh.position.y !== mesh.userData.targetY || mesh.material.opacity < 1) allLayersDone = false;
                } else {
                    allLayersDone = false;
                }
            });
        } else {
            allLayersDone = false;
        }

        // Force shadow map update during animation
        if (this.experience.renderer && this.experience.renderer.instance) {
            this.experience.renderer.instance.shadowMap.needsUpdate = true;
        }

        // Enable mousemove only after animation is done
        if (!this.animationDone && allLayersDone) {
            this.animationDone = true;
            this.enableMouseMove();
        }
    }
}