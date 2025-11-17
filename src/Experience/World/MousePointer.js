// MousePointer: circular cursor + mask reveal for .section-quickfacts
// Usage: import MousePointer from './MousePointer'; new MousePointer();

export default class MousePointer {
	constructor(opts = {}) {
		this.opts = Object.assign({
			sectionSelector: '.section-quickFacts',
			fadedImageSelector: '.quickFacts-fadedImage'
		}, opts);

		this.section = document.querySelector(this.opts.sectionSelector);
		if (!this.section) return; // nothing to do

		// Attempt to find the faded image wrapper or the inner img
		this.faded = this.section.querySelector(this.opts.fadedImageSelector);

		// Decide which element should be masked. Prefer the faded wrapper when present
		// so the stats wrapper (sibling) is not affected. Fall back to the section only
		// when no faded wrapper exists.
		this.maskTarget = this.faded || this.section;

		// Make sure the faded element sits behind the stats wrapper and does not capture pointer events.
		if (this.faded) {
			try {
				this.faded.style.pointerEvents = 'none';
				// If faded is not explicitly positioned, keep it absolute as intended
				const pos = window.getComputedStyle(this.faded).position;
			
				this.faded.style.left = this.faded.style.left || '0';
				this.faded.style.top = this.faded.style.top || '0';
				this.faded.style.right = this.faded.style.right || '0';
				this.faded.style.bottom = this.faded.style.bottom || '0';
				// Place faded behind stats
				
				// const stats = this.section.querySelector('.quickFacts-stats-wrapper');
				// if (stats) {
				// 	stats.style.position = stats.style.position || 'relative';
				// 	stats.style.zIndex = stats.style.zIndex || '1';
				// }
			} catch (e) {
				// ignore styling errors
			}
		}

		// If the mask target has a CSS background-image or a child <img>, create an
		// overlay element that copies that visual content and will be the actual
		// element we mask. This avoids issues where the background is applied via
		// pseudo-elements or where the original element would still show through.
		try {
			// Prefer an <img> child if present (common in Webflow exports)
			const imgChild = this.faded ? this.faded.querySelector('img') : null;
			if (imgChild && (imgChild.currentSrc || imgChild.src)) {
				const src = imgChild.currentSrc || imgChild.src;
				this._overlay = document.createElement('div');
				this._overlay.className = 'cw-mouse-overlay';
				if (window.getComputedStyle(this.maskTarget).position === 'static') this.maskTarget.style.position = 'relative';
				this._overlay.style.position = 'absolute';
				this._overlay.style.left = '0';
				this._overlay.style.top = '0';
				this._overlay.style.right = '0';
				this._overlay.style.bottom = '0';
				this._overlay.style.pointerEvents = 'none';
				this._overlay.style.zIndex = '2';
				this._overlay.style.backgroundImage = `url("${src}")`;
				this._overlay.style.backgroundSize = imgChild.style.backgroundSize || 'cover';
				this._overlay.style.backgroundPosition = imgChild.style.backgroundPosition || 'center';
				this._overlay.style.backgroundRepeat = 'no-repeat';
				// hide original image so it doesn't show underneath
				imgChild.style.visibility = 'hidden';
				this.maskTarget.appendChild(this._overlay);
				// set the overlay as the mask target
				this.maskTarget = this._overlay;
			} else {
				const cs = window.getComputedStyle(this.maskTarget);
				const bg = cs && cs.getPropertyValue('background-image');
				if (bg && bg !== 'none') {
					// create overlay
					this._overlay = document.createElement('div');
					this._overlay.className = 'cw-mouse-overlay';
					// ensure parent is positioned
					const parentPos = window.getComputedStyle(this.maskTarget).position;
					if (!parentPos || parentPos === 'static') this.maskTarget.style.position = 'relative';
					// copy key background properties
					this._overlay.style.position = 'absolute';
					this._overlay.style.left = '0';
					this._overlay.style.top = '0';
					this._overlay.style.right = '0';
					this._overlay.style.bottom = '0';
					this._overlay.style.pointerEvents = 'none';
					this._overlay.style.zIndex = '40';
					this._overlay.style.backgroundImage = bg;
					this._overlay.style.backgroundSize = cs.getPropertyValue('background-size') || 'cover';
					this._overlay.style.backgroundPosition = cs.getPropertyValue('background-position') || 'center';
					this._overlay.style.backgroundRepeat = cs.getPropertyValue('background-repeat') || 'no-repeat';
					// append and hide original background
					this.maskTarget.appendChild(this._overlay);
					this.maskTarget.style.backgroundImage = 'none';
					// switch mask target to overlay
					this.maskTarget = this._overlay;
				}
			}

			// Ensure overlay is fully hidden by default by applying a zero-radius mask.
			if (this._overlay) {
				const hideGrad = `radial-gradient(circle 0px at 0px 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,0) 1px)`;
			
				this._overlay.style.maskImage = hideGrad;
		
				this._overlay.style.maskRepeat = 'no-repeat';
			
				this._overlay.style.maskPosition = '0 0';
			}
		} catch (e) {
			// ignore overlay creation errors
		}

		this._radius = 0;
		this._targetRadius = this.opts.pointerSize / 2;
		this._animFrame = null;
		this._maskActive = false;

		this._createPointerElement();
		this._bind();
	}

	_createPointerElement() {
		this.pointer = document.createElement('div');
		this.pointer.className = 'cw-mouse-circle';
		this.pointer.style.width = `${this.opts.pointerSize}px`;
		this.pointer.style.height = `${this.opts.pointerSize}px`;
		this.pointer.style.opacity = '0';
		this.pointer.style.transform = 'translate(-50%,-50%) scale(0.8)';
		this.pointer.style.pointerEvents = 'none';
		this.pointer.setAttribute('aria-hidden', 'true');
		this.pointer.style.display = 'none';
		document.body.appendChild(this.pointer);
	}

	// _injectStyles removed. Styles live in project CSS (webflowCSSOutput.txt)

	_bind() {
		this._onMouseMove = this._onMouseMove.bind(this);
		this._onEnter = this._onEnter.bind(this);
		this._onLeave = this._onLeave.bind(this);

		// Prefer attaching enter/leave to the mask target (the faded image) so
		// only the image area triggers the pointer. Fall back to the section.
		this._triggerEl = this.maskTarget || this.section;
		this._triggerEl.addEventListener('mouseenter', this._onEnter);
		this._triggerEl.addEventListener('mouseleave', this._onLeave);

		// Also track moves while inside (and when pointer active). Use the
		// trigger element for coordinate consistency when possible.
		try {
			this._triggerEl.addEventListener('mousemove', this._onMouseMove, { passive: true });
		} catch (e) {
			window.addEventListener('mousemove', this._onMouseMove, { passive: true });
		}
		// If touch device, hide pointer (no masking)
	}

	_onEnter(e) {
		// Activate pointer visuals and begin mask
		this._setCursorHidden(true);
		this.pointer.style.display = 'block';
		// Force a layout so transition will run predictably
		// eslint-disable-next-line no-unused-expressions
		this.pointer.offsetHeight;
		this.pointer.classList.add('cw-active');
		this._maskActive = true;
		// animate radius from 0 to target
		this._animateRadius(0, this._targetRadius, this.opts.enterDuration);
		// Immediately update mask for this position
		this._onMouseMove(e);
	}

	_onLeave(e) {
		// Deactivate pointer and remove mask after shrink animation
		this._setCursorHidden(false);
		this.pointer.classList.remove('cw-active');
		this._animateRadius(this._radius, 0, this.opts.leaveDuration, () => {
			this._maskActive = false;
			this._clearMask();
			// hide visually after animation completes
			this.pointer.style.display = 'none';
		});
	}

	_onMouseMove(e) {
		const x = e.clientX;
		const y = e.clientY;
		// Position the visual pointer
		this.pointer.style.left = `${x}px`;
		this.pointer.style.top = `${y}px`;

		// store last client coords for animation fallback
		this._lastClientX = x;
		this._lastClientY = y;

	if (!this._maskActive || !this.maskTarget) return;

		// Compute coordinates relative to faded element for mask
		const rect = this.maskTarget.getBoundingClientRect();
		const relX = Math.max(0, Math.min(rect.width, x - rect.left));
		const relY = Math.max(0, Math.min(rect.height, y - rect.top));

		// Update mask using radial-gradient centered on (relX, relY)
		this._applyMask(relX, relY, this._radius, this.opts.feather);
	}

	_applyMask(x, y, radius, feather = 16) {
		const smooth = Math.max(8, Math.min(64, feather));
		const r1 = Math.max(0, Math.round(radius));
		const r2 = Math.max(0, Math.round(radius + smooth));
		const grad = `radial-gradient(circle ${r2}px at ${x}px ${y}px, rgba(0,0,0,1) ${r1}px, rgba(0,0,0,0) ${r2}px)`;
		// Apply both standard and -webkit for wider compatibility
		const el = this.maskTarget || this.faded;
		el.style.webkitMaskImage = grad;
		el.style.maskImage = grad;
		// Make sure mask origin is local
		el.style.webkitMaskRepeat = 'no-repeat';
		el.style.maskRepeat = 'no-repeat';
		el.style.webkitMaskPosition = '0 0';
		el.style.maskPosition = '0 0';
	}

	_clearMask() {
		const el = this.maskTarget || this.faded;
		if (!el) return;
		el.style.webkitMaskImage = '';
		el.style.maskImage = '';
	}

	_animateRadius(from, to, duration = 200, cb) {
		if (this._animFrame) cancelAnimationFrame(this._animFrame);
		const start = performance.now();
		const diff = to - from;
		const ease = (t) => 1 - Math.pow(1 - t, 3); // easeOutCubic

		const step = (now) => {
			const t = Math.min(1, (now - start) / duration);
			this._radius = from + diff * ease(t);
			if (this._maskActive && this.faded) {
				// If we have a last known pointer pos, use it; otherwise approximate center
				const lastRect = this.faded.getBoundingClientRect();
				const cx = this._lastClientX ? (this._lastClientX - lastRect.left) : (lastRect.width / 2);
				const cy = this._lastClientY ? (this._lastClientY - lastRect.top) : (lastRect.height / 2);
				this._applyMask(cx, cy, this._radius, this.opts.feather);
			}
			if (t < 1) {
				this._animFrame = requestAnimationFrame(step);
			} else {
				this._animFrame = null;
				if (cb) cb();
			}
		};
		this._animFrame = requestAnimationFrame(step);
	}

	_setCursorHidden(hide) {
		try {
			if (hide) {
				this.section.style.cursor = 'none';
			} else {
				this.section.style.cursor = '';
			}
		} catch (e) {
			// ignore
		}
	}
}
// Note: auto-init removed. Instantiate explicitly from the Experience entry point:
// import MousePointer from './World/MousePointer.js'; new MousePointer();
