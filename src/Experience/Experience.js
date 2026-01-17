import * as THREE from 'three';
import Sizes from './utils/Sizes.js'
import Time from './utils/Time.js'
import Camera from './utils/Camera.js'
import Renderer from './utils/Renderer.js'
import World from './World/World.js'
import Resources from './utils/Resources.js'
import sources from './utils/sources.js'

export default class Experience {
    constructor(canvas, container) {

        //Options 
        this.container = container
        this.canvas = canvas

        this.containerAttribute = container.getAttribute('data-3d');

        //Setup 
        this.scene = new THREE.Scene()
        this.sizes = new Sizes(container)
        this.time = new Time()
        this.camera = new Camera(this, container)
        this.renderer = new Renderer(this)
        this.resources = new Resources(sources)


        this.world = new World(this, container)
        this._stopped = false

        // Optional UI effect is now handled by `initMinimalPointer` in the site entry.

        // Sizes resize event
        this.sizes.on('resize', () => {
            this.resize()
            if (this._stopped) {
                try { this.renderer.update() } catch {}
            }
        })
        try {
            document.addEventListener('visibilitychange', () => {
                if (this._stopped) return
                if (document.hidden) this.time.stop()
                else this.time.startLoop()
            })
        } catch {}
        // Time tick event
        this.time.on('tick', () => {
            this.update()
        })
    }

    resize() {
        this.camera.resize()
        this.renderer.resize()
    }

    update() {
        this.camera.update()
        this.world.update()
        this.renderer.update()
        if (!this._stopped && this.world.isIdle && this.world.isIdle()) {
            this._stopped = true
            this.time.stop()
            try { this.renderer.update() } catch {}
        }
    }
}   