import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

export default class ProgressBar {
  constructor(opts = {}) {
    this.progressBar = document.querySelector('.progress-bar');
    this.menuItems = Array.from(document.querySelectorAll('.nav-link-content-wrapper'));
    this.waypoints = Array.from(document.querySelectorAll('.waypoint'));
    this.sections = Array.from(document.querySelectorAll('[id^="service-content-"]'));

    // small config
  this.topVH = 0.3; // 30vh
  this.bottomVH = 0.5; // 50vh
    this.observerDebounceMs = 80;

  // compute a pixel-based top offset to match sticky navigation (e.g. 12rem)
  // prefer reading the computed `top` from the sticky nav element if present;
  // otherwise fall back to using a fraction of the viewport height (`topVH`).
  this._computeTopOffset = () => {
    const stickyEl = document.querySelector('.services-nav-wrapper');
    if (stickyEl) {
      try {
        const cs = window.getComputedStyle(stickyEl);
        // computed top is typically returned in pixels (e.g. '192px')
        const topPx = parseFloat(cs.top);
        if (Number.isFinite(topPx) && topPx >= 0) return topPx;
      } catch (e) {
        // ignore and fallback
      }
    }
    return window.innerHeight * this.topVH;
  };
  // initial pixel offsets
  this._topOffsetPx = this._computeTopOffset();
  this._bottomOffsetPx = window.innerHeight * (1 - this.bottomVH);

  // state
  this.programmaticScroll = false;
  this.lastMenuIdx = -1;
  this.debug = Boolean(window && window.PROGRESS_BAR_DEBUG);

    // allow optional mapping (menu index -> progress rem) from CSV in future
    this.progressMap = opts.progressMap || this._defaultProgressMap();

    // precompute section -> menu index mapping (prefer first menu item that targets the section)
    this.sectionToMenu = {};
    this.sections.forEach((s) => {
      const id = s.id;
      for (let idx = 0; idx < this.menuItems.length; idx++) {
        const mi = this.menuItems[idx];
        if (mi.getAttribute('data-target') === id) { this.sectionToMenu[id] = idx; break; }
      }
    });

    this._bind();
    this._init();
    // Recompute offsets and recreate observer on resize to remain in sync with CSS (responsive)
    window.addEventListener('resize', () => {
      this._topOffsetPx = this._computeTopOffset();
      this._bottomOffsetPx = window.innerHeight * (1 - this.bottomVH);
      if (this.observer) {
        try { this.observer.disconnect(); } catch (e) {}
        this.observer = new IntersectionObserver(this.onIntersect, { root: null, rootMargin: `-${this._topOffsetPx}px 0px -${this._bottomOffsetPx}px 0px`, threshold: [0, 0.01, 0.5, 1] });
        // re-observe sections
        this.sections.forEach(s => this.observer.observe(s));
      }
    });
  }

  // Apply active classes (menu parents and waypoints) up to menuIdx
  applyActive(menuIdx) {
    // Only toggle active on menu parent elements. CSS handles waypoint visuals via
    // `.nav-link-content-wrapper.active .waypoint` selectors. Keep JS lean.
    this.menuItems.forEach((mi, i) => mi.classList.toggle('active', i <= menuIdx));
  }

  // Apply a single 'currentActive' class to the menu item that corresponds
  // to the content currently in focus. This is not cumulative — only one
  // menu item should have .currentActive at a time.
  applyCurrent(menuIdx) {
    this.menuItems.forEach((mi, i) => mi.classList.toggle('currentActive', i === menuIdx));
  }

  // Animate progress bar to rem and trigger applyActive when tween >= 90%
  animateBarTo(rem, duration, menuIdx) {
    if (!this.progressBar) return this.applyActive(menuIdx);
    // kill previous
    if (this.currentTween) {
      this.currentTween.kill();
      this.currentTween = null;
    }
    this._activatedDuringTween = false;
    // use GSAP tween and monitor progress()
    this.currentTween = gsap.to(this.progressBar, {
      height: `${rem}rem`,
      duration: duration,
      ease: 'power2.out',
      onUpdate: () => {
        try {
          const p = this.currentTween ? this.currentTween.progress() : 1;
          if (!this._activatedDuringTween && p >= 0.9) {
            this._activatedDuringTween = true;
            this.applyActive(menuIdx);
            // mark the single current item as active (content in focus)
            this.applyCurrent(menuIdx);
          }
        } catch (e) {
          // ignore
        }
      },
      onComplete: () => {
        if (!this._activatedDuringTween) this.applyActive(menuIdx);
        // ensure currentActive is also applied on completion
        this.applyCurrent(menuIdx);
        this.currentTween = null;
      }
    });
  }

  _defaultProgressMap() {
    // index -> rem (string or number)
    // Updated defaults to match the CSV 'AI Element Context - updates to content headings.csv'
    // menu-item-0..11 -> 3,3,6,9,15,15,18,21,24,27,30,33
    return ['0','3','6','9','12','15','18','21','24','27','30','33'];
  }

  // Compute rem for a given menu index. Prefer explicit mapping from progressMap
  // (allows future CSV wiring). Otherwise fall back to default behaviour.
  getRemForMenu(menuIdx) {
    if (this.progressMap && typeof this.progressMap[menuIdx] !== 'undefined') {
      const v = parseFloat(this.progressMap[menuIdx]);
      if (!Number.isNaN(v)) return v;
    }
    // Fallback: each step increases by 3rem
    return (menuIdx + 1) * 3;
  }

  _bind() {
    this.onMenuClick = this.onMenuClick.bind(this);
    this.onIntersect = this.onIntersect.bind(this);
  }

  _init() {
    // attach listeners
    this.menuItems.forEach((mi, i) => mi.addEventListener('click', (e) => this.onMenuClick(e, i)));

    // IntersectionObserver with rootMargin computed from the sticky menu top offset (px)
    const rootMargin = `-${this._topOffsetPx}px 0px -${this._bottomOffsetPx}px 0px`;
    this.observer = new IntersectionObserver(this.onIntersect, { root: null, rootMargin, threshold: [0, 0.01, 0.5, 1] });

    // Delay starting observation briefly so initial active state is visible and not immediately overridden
    setTimeout(() => {
      this.sections.forEach(s => this.observer.observe(s));
      this._observerStarted = true;
    }, 350);

  // initial state: first menu item should be active visually but the progress bar
  // should start at 0rem. The bar only progresses when the user clicks another
  // menu item or scrolls to different content.
  const initialMenuIdx = 0;
  if (this.progressBar) gsap.set(this.progressBar, { height: `0rem` });
  this.applyActive(initialMenuIdx);
  this.applyCurrent(initialMenuIdx);
  // record current logical index so further observer updates behave normally
  this.lastMenuIdx = initialMenuIdx;
  }

  onMenuClick(e, idx) {
    e.preventDefault();
    const parent = this.menuItems[idx];
    const targetId = parent && parent.getAttribute('data-target');
    if (!targetId) return this.updateStateByIndex(idx, { source: 'click' });

    const targetSection = this.sections.find(s => s.id === targetId);
    if (!targetSection) return this.updateStateByIndex(idx, { source: 'click' });

    // Use pixel offset derived from the sticky nav (e.g. 12rem -> computed px)
    const offset = this._computeTopOffset();
    const rect = targetSection.getBoundingClientRect();
    const scrollToY = window.scrollY + rect.top - offset;

    // mark programmatic to avoid observer fight and animate bar immediately
    this.programmaticScroll = true;
  // animate bar proactively to the target rem so user sees immediate feedback
  const rem = this.getRemForMenu(idx);
    this.animateBarTo(rem, 0.45, idx);

    // perform smooth scroll; when scroll completes allow a short settle time before re-enabling observer
    gsap.to(window, {
      duration: 0.8,
      ease: 'power2.inOut',
      scrollTo: { y: scrollToY, autoKill: false },
      onComplete: () => {
        // give a small buffer to ensure intersection settles
        setTimeout(() => { this.programmaticScroll = false; }, 300);
      }
    });
  }

  onIntersect(entries) {
    if (this.programmaticScroll) return;
    // debounce
    clearTimeout(this._debounceTimer);
    this._debounceTimer = setTimeout(() => {
      // find the section that is inside the sticky window (30vh..50vh) by checking bounding rect
      // Use pixel-based targetTop (sticky nav top) to find which section lines up under the menu
      const targetTop = this._topOffsetPx;
      const targetBottom = window.innerHeight * this.bottomVH;
      // find all sections whose center lies within the target window, pick the one closest to the midpoint
      const inWindow = [];
      const windowMid = (targetTop + targetBottom) / 2;
      for (let i = 0; i < this.sections.length; i++) {
        const s = this.sections[i];
        const r = s.getBoundingClientRect();
        const center = r.top + r.height / 2;
        if (center >= targetTop && center <= targetBottom) inWindow.push({ i, center });
      }
      let foundIdx = -1;
      if (inWindow.length) {
        inWindow.sort((a,b) => Math.abs(a.center - windowMid) - Math.abs(b.center - windowMid));
        foundIdx = inWindow[0].i;
      }

      if (foundIdx === -1) {
        // fallback: pick the section with top just above targetTop
        let best = { idx: -1, top: -Infinity };
        this.sections.forEach((s, i) => {
          const r = s.getBoundingClientRect();
          if (r.top <= targetBottom && r.top > best.top) { best = { idx: i, top: r.top }; }
        });
        foundIdx = best.idx;
      }

      if (foundIdx !== -1) {
        if (this.debug) console.debug('[ProgressBar] onIntersect -> foundIdx', foundIdx, 'sectionId', this.sections[foundIdx].id);
        this.updateStateByIndex(foundIdx, { source: 'observer' });
      }
    }, this.observerDebounceMs);
  }

  updateStateByIndex(sectionIdx, opts = { source: 'observer' }) {
    // find the menu index whose data-target matches this section
    const section = this.sections[sectionIdx];
    if (!section) return;
    const sectionId = section.id;
    // use precomputed mapping if available
    let menuIdx = typeof this.sectionToMenu[sectionId] === 'number' ? this.sectionToMenu[sectionId] : -1;
    // fallback: approximate by position
    if (menuIdx < 0) menuIdx = Math.min(sectionIdx, this.menuItems.length - 1);

  // debug
  if (this.debug) console.debug('[ProgressBar] updateStateByIndex', { sectionIdx, sectionId, menuIdx, lastMenuIdx: this.lastMenuIdx, source: opts.source });

  // If the selected menu item is the same as last and there's no active tween, skip
  if (this.lastMenuIdx === menuIdx && opts.source !== 'click' && !this.currentTween) return;
    // Update lastMenuIdx so subsequent calls know current target
    this.lastMenuIdx = menuIdx;

  // compute target progress rem based on menuIdx
  const rem = this.getRemForMenu(menuIdx);

    // determine duration by source
    let duration = 0.4;
    if (opts.source === 'observer') duration = 0.3;
    if (opts.source === 'click') duration = 0.6;

    // For init: set instantly and apply active immediately
    if (opts.source === 'init') {
      if (this.progressBar) gsap.set(this.progressBar, { height: `${rem}rem` });
      this.applyActive(menuIdx);
      return;
    }

    // For observer and click: animate bar and apply active when tween reaches 90%
    this.animateBarTo(rem, duration, menuIdx);
  }
}

