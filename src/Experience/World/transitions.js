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
      '[fade-section], [Fade-section], [fade-hero], [Fade-hero], [fade-in], [Fade-in]'
    ));

    candidates.forEach((el) => {
      const hasFadeSection = el.hasAttribute('fade-section') || el.hasAttribute('Fade-section');
      const hasFadeHero = el.hasAttribute('fade-hero') || el.hasAttribute('Fade-hero');
      const hasFadeIn = el.hasAttribute('fade-in') || el.hasAttribute('Fade-in');

      if (hasFadeHero) {
        this._setupFadeHero(el);
        return;
      }
      if (hasFadeSection) {
        this._setupFadeSection(el);
        return;
      }
      if (hasFadeIn) {
        this._setupFadeInOnce(el);
        return;
      }
    });
  }

  _setupFadeInImmediate(el) {
    // Ensure starting state and animate once on load; minimum duration 1s
    const d = Math.max(1, this.duration);
    gsap.set(el, { opacity: 0 });
    return new Promise((resolve) => {
      gsap.to(el, {
        opacity: 1,
        duration: d,
        ease: this.ease,
        onComplete: () => {
          try { ScrollTrigger.refresh(); } catch { /* noop */ }
          resolve();
        }
      });
    });
  }

  _setupFadeToggle(el, opts = {}) {
    // Unified fade in on enter and fade out on leave to avoid double triggers
    const { initialVisible = false } = opts;
    if (!initialVisible) {
      gsap.set(el, { opacity: 0 });
    }
    let skipFirstEnter = !!initialVisible;
    ScrollTrigger.create({
      trigger: el,
      // Sections have ~8rem top/bottom padding; start slightly deeper to avoid premature reveal
      start: 'top 85%',
      end: 'bottom 30%',
      onEnter: () => {
        if (skipFirstEnter) { gsap.set(el, { opacity: 1 }); skipFirstEnter = false; return; }
        gsap.to(el, { opacity: 1, duration: this.duration, ease: this.ease });
      },
      onEnterBack: () => {
        if (skipFirstEnter) { gsap.set(el, { opacity: 1 }); skipFirstEnter = false; return; }
        gsap.to(el, { opacity: 1, duration: this.duration, ease: this.ease });
      },
      onLeave: () => gsap.to(el, { opacity: 0, duration: this.duration, ease: this.ease }),
      onLeaveBack: () => gsap.to(el, { opacity: 0, duration: this.duration, ease: this.ease })
    });
  }

  _setupFadeSection(el) {
    // Section behavior: fade in on enter, fade out on leave
    this._setupFadeToggle(el);
  }

  _setupFadeHero(el) {
    // Hero behavior: one-time immediate fade, no scroll toggle afterwards
    const isPinned = (() => {
      try {
        const pos = window.getComputedStyle(el).position;
        return pos === 'fixed' || pos === 'sticky';
      } catch { return false; }
    })();

    this._setupFadeInImmediate(el).then(() => {
      // No toggle attached; keep visible (especially for pinned UI)
      if (isPinned) {
        try { ScrollTrigger.refresh(); } catch { /* noop */ }
      }
    });
  }

  _setupFadeInOnce(el) {
    // One-time fade when entering viewport the first time; not affected by subsequent scrolls
    gsap.set(el, { opacity: 0 });
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => gsap.to(el, { opacity: 1, duration: this.duration, ease: this.ease })
    });
  }
}