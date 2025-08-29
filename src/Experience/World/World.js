
import Experience from "../Experience"
import Environment from "./Environment"
//import Floor from './Floor'
//import Resources from '../utils/Resources'
import Lining from './Lining.js'


export default class World {
    constructor(experience, container) {

        this.experience = experience

        this.scene = this.experience.scene
        this.resources = this.experience.resources
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
                console.log('nothing was loaded')
            }
        })
    }

    update() {

       if (this.Lining && this.Lining.update) this.Lining.update();

        if (this.experience.camera)
            this.experience.camera.update()
        

    }
}