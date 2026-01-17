import EventEmitter from './EventEmitter.js'

export default class Time extends EventEmitter {
    constructor() {
        super()

        //Setup
        this.start = Date.now()
        this.current = this.start
        this.elapsed = 0
        this.delta = 16

        this.running = true
        this._rafId = null
        this._boundTick = this.tick.bind(this)

        this._schedule()
    }

    _schedule() {
        if (!this.running) return
        this._rafId = window.requestAnimationFrame(this._boundTick)
    }

    tick() {
        if (!this.running) return
        const currentTime = Date.now()
        this.delta = currentTime - this.current
        this.current = currentTime
        this.elapsed = this.current - this.start

        this.trigger('tick')

        this._schedule()
    }

    stop() {
        this.running = false
        if (this._rafId != null) {
            try { cancelAnimationFrame(this._rafId) } catch {}
            this._rafId = null
        }
    }

    startLoop() {
        if (this.running) return
        this.running = true
        this._schedule()
    }
}