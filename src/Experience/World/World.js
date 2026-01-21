
import Experience from "../Experience"
import Environment from "./Environment"
import Lining from './Lining.js'


export default class World {
    constructor(experience, container) {

        this.experience = experience

        this.scene = this.experience.scene
        this.resources = this.experience.resources
        if (!this.resources) {
            throw new Error('World: this.resources is undefined. Check Experience initialization and sources.js.');
        }
        //this.floor = this.experience.floor

        this.containerAttribute = container.getAttribute('data-3d');

        //Wait for resources
        this.resources.on('ready', () => {


            // Setup
            if (this.containerAttribute === 'lining') {
                this.Lining = new Lining(this.experience)
                this.environment = new Environment(this.experience, container)
            } 
            else {
                // No matching world component to load for this container
            }
        })
    }

    isIdle() {
        return !!(this.Lining && typeof this.Lining.isFinished === 'function' && this.Lining.isFinished());
    }

    update() {

       if (this.Lining && this.Lining.update) this.Lining.update();

        if (this.experience.camera)
            this.experience.camera.update()
        

    }
}