import * as THREE from 'three';
import Experience from "./Experience/Experience.js";
// ProgressBar removed per client request
// Ensure Swiper overrides are always loaded (even when Swiper isn't initialized)
//import './styles/swiper-overrides.css';
// Ensure transition initial state CSS is loaded early to prevent flash
//import './styles/transitions.css';
// Contact anti-bot reveal logic (runs on all viewports)
import './Experience/World/Jingjang.js';




window.Webflow ||= [];
window.Webflow.push(() => {
  // Only load/init desktop features above 991px
  const DESKTOP_BREAKPOINT = 991;
  const mq = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
  const isDesktopWidth = () => {
    try { return window.innerWidth >= DESKTOP_BREAKPOINT; } catch { return mq.matches; }
  };
  let desktopInited = false;
  const initDesktop = () => {
    if (desktopInited) return;
    // Require both checks to reduce false positives
    if (!mq.matches || !isDesktopWidth()) return;
    desktopInited = true;
    // Dynamically import to avoid loading on small screens
    Promise.all([
      import('./Experience/World/Counting.js').then(m => { try { new m.default(); } catch (e) { console.warn('Counting init failed', e); } }),
      import('./Experience/World/minimalPointer.js').then(m => { try { m.default(); } catch (e) { console.warn('Pointer init failed', e); } }),
      import('./Experience/World/SwiperInit.js').then(m => { try { m.initSwiper(); } catch (e) { console.warn('Swiper init failed', e); } }),
      import('./Experience/World/transitions.js').then(m => { try { new m.default(); } catch (e) { console.warn('Transitions init failed', e); } }),
    ]).catch(() => {});
  };
  if (mq.matches && isDesktopWidth()) initDesktop();
  // Initialize on first time crossing up to desktop
  if (mq.addEventListener) {
    mq.addEventListener('change', (e) => { if (e.matches && isDesktopWidth()) initDesktop(); });
  } else if (mq.addListener) {
    mq.addListener((e) => { if (e.matches && isDesktopWidth()) initDesktop(); });
  }
  // Fallback: listen to resize for environments without reliable matchMedia
  window.addEventListener('resize', () => { initDesktop(); }, { passive: true });
});
// ProgressBar removed; no console logging required
document.addEventListener('DOMContentLoaded', () => {
  function initializeExperience(containers) {
    containers.forEach(container => {
      const canvas = document.createElement('canvas');
      canvas.classList.add('webgl');
      container.appendChild(canvas);
      try {
        new Experience(canvas, container);
       
      } catch (error) {
        console.error('Error initializing Experience:', error);
      }
    });
  }

  // init hero section container
  initializeExperience(document.querySelectorAll('[data-3d="lining"]'));
});
