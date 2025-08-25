import * as THREE from 'three';
import Experience from '../Experience';

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
        // Top-down light
        const topLight = new THREE.DirectionalLight(0xffffff, 2);
        // Instead of (0, 10, 0), try a slight tilt:
        topLight.position.set(5, 10, 5); // Tilted from the side and above
        topLight.target.position.set(0, 0, 0);
        topLight.castShadow = true;
        topLight.shadow.mapSize.width = 4096;
        topLight.shadow.mapSize.height = 4096;
        topLight.shadow.normalBias = 0.02; // Added bias to reduce shadow artifacts
        this.scene.add(topLight);
        this.scene.add(topLight.target);

        // Secondary angled light for definition
        const sideLight = new THREE.DirectionalLight(0xffffff, 2);
        sideLight.position.set(8, 6, 8); // From the side and above
        sideLight.target.position.set(0, 0, 0);
        sideLight.castShadow = false; // Optional: set to true if you want more shadows
        this.scene.add(sideLight);
        this.scene.add(sideLight.target);

        // Ambient light for soft fill
        const ambientLight = new THREE.AmbientLight(0x888888, 1);
        this.scene.add(ambientLight);
    }
}
