import * as THREE from 'three';
import Experience from "./Experience/Experience.js";
// ProgressBar removed per client request




window.Webflow ||= [];
window.Webflow.push(() => {
  // Only load/init desktop features above 991px
  const mq = window.matchMedia('(min-width: 991px)');
  let desktopInited = false;
  const initDesktop = () => {
    if (desktopInited || !mq.matches) return;
    desktopInited = true;
    // Dynamically import to avoid loading on small screens
    Promise.all([
      import('./Experience/World/Counting.js').then(m => { try { new m.default(); } catch (e) { console.warn('Counting init failed', e); } }),
      import('./Experience/World/minimalPointer.js').then(m => { try { m.default(); } catch (e) { console.warn('Pointer init failed', e); } }),
      import('./Experience/World/SwiperInit.js').then(m => { try { m.initSwiper(); } catch (e) { console.warn('Swiper init failed', e); } }),
      import('./Experience/World/transitions.js').then(m => { try { new m.default(); } catch (e) { console.warn('Transitions init failed', e); } }),
    ]).catch(() => {});
  };
  if (mq.matches) initDesktop();
  // Initialize on first time crossing up to desktop
  if (mq.addEventListener) {
    mq.addEventListener('change', (e) => { if (e.matches) initDesktop(); });
  } else if (mq.addListener) {
    mq.addListener((e) => { if (e.matches) initDesktop(); });
  }
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
        console.log('commit achieved');
      } catch (error) {
        console.error('Error initializing Experience:', error);
      }
    });
  }

  // init hero section container
  initializeExperience(document.querySelectorAll('[data-3d="lining"]'));
});
