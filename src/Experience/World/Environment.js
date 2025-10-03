import Experience from '../Experience';
import * as THREE from 'three';
export default class Environment {
    constructor(experience, container) {
        this.experience = experience;
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.containerAttribute = container.getAttribute('data-3d');

        // Three-point lighting setup
        this.addThreePointLights();

        if (this.containerAttribute === 'lining') {
            //this.setEnvironmentMap();
            //this.setDirectionalLightMap();
        }

        console.log(this.scene.children);
    }

    addThreePointLights() {
            // Top-down light, positioned at stone pour origin (min x, min z, above)
            const topLight = new THREE.DirectionalLight(0xffffff, 2);
            topLight.position.set(1, 15, -10); // Northwest corner, above, aiming southeast
            topLight.target.position.set(0, 0, 0);
            topLight.castShadow = true;
            topLight.shadow.mapSize.width = 4096;
            topLight.shadow.mapSize.height = 4096;
            topLight.shadow.bias = 0.005; // Increased bias to prevent shadow leaking
            topLight.shadow.normalBias = 0.2; // Higher normalBias for soft contact and less penetration
            topLight.shadow.radius = 60; // Increase for softer shadows
            // Make sure shadow camera covers the whole scene
            topLight.shadow.camera.left = -8;
            topLight.shadow.camera.right = 8;
            topLight.shadow.camera.top = 8;
            topLight.shadow.camera.bottom = -8;
            topLight.shadow.camera.near = 1;
            topLight.shadow.camera.far = 40;
            this.scene.add(topLight);
            this.scene.add(topLight.target);

            // Add helper for top light
            const topLightHelper = new THREE.DirectionalLightHelper(topLight, 2, 0xff0000);
            this.scene.add(topLightHelper);

            // Ambient light for soft fill
            const ambientLight = new THREE.AmbientLight(0x888888, 8);
            this.scene.add(ambientLight);
    }
}
