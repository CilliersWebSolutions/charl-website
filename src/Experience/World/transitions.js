import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default class Transitions {
  constructor(opts = {}) {
    this.duration = opts.duration ?? 1;
    this.ease = opts.ease ?? 'power1.out';
    this._init();
  }

  _init() {
    const candidates = Array.from(document.querySelectorAll(
      '[data-target], [data-anim], [fade-in], [Fade-in]'
    ));

    candidates.forEach((el) => {
      const targetVal = ((el.getAttribute('data-anim') || el.getAttribute('data-target') || '') + '').toLowerCase().trim();
      const fadeInAttrVal = ((el.getAttribute('fade-in') || el.getAttribute('Fade-in') || '') + '').toLowerCase().trim();
     
      const wantsIn = targetVal === 'fade-in' || el.hasAttribute('fade-in') || el.hasAttribute('Fade-in');

      // Mode detection for special cases
      const isHeroImmediate = fadeInAttrVal === 'hero' || targetVal === 'fade-in:hero';

      // Only fade-in attribute is used; fade-out happens automatically on leave
      if (wantsIn) {
        if (isHeroImmediate) {
          // Immediate reveal on load, then attach scroll toggle for subsequent interactions
          this._setupFadeInImmediate(el);
          this._setupFadeToggle(el);
        } else {
          this._setupFadeToggle(el);
        }
      }
    });
  }

  _setupFadeInImmediate(el) {
    // Ensure starting state and animate once on load; minimum duration 1s
    const d = Math.max(1, this.duration);
    gsap.set(el, { opacity: 0 });
    gsap.to(el, { opacity: 1, duration: d, ease: this.ease });
  }

  

  _setupFadeToggle(el) {
    // Unified fade in on enter and fade out on leave to avoid double triggers
    gsap.set(el, { opacity: 0 });
    ScrollTrigger.create({
      trigger: el,
      // Sections have ~8rem top/bottom padding; start slightly deeper to avoid premature reveal
      start: 'top 85%',
      end: 'bottom 15%',
      onEnter: () => gsap.to(el, { opacity: 1, duration: this.duration, ease: this.ease }),
      onEnterBack: () => gsap.to(el, { opacity: 1, duration: this.duration, ease: this.ease }),
      onLeave: () => gsap.to(el, { opacity: 0, duration: this.duration, ease: this.ease }),
      onLeaveBack: () => gsap.to(el, { opacity: 0, duration: this.duration, ease: this.ease })
    });
  }
}