import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


export default class Camera {
    constructor(experience, container) {

        this.experience = experience
        //console.log(experience)
        this.sizes = experience.sizes
        this.scene = experience.scene
        this.canvas = experience.canvas
        this.containerAttribute = container.getAttribute('data-3d');
        this.setInstance()
      


    }

    setInstance() {
        const aspectRatio = this.sizes.width / this.sizes.height;
        this.instance = new THREE.PerspectiveCamera(60, aspectRatio, 0.1, 10000);
        this.instance.position.set(5, 4, 6);
        this.instance.lookAt(0, 0, 0);
        this.scene.add(this.instance);
    }

   
    

    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update() {
      
    }
}
