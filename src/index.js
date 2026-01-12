import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Experience from "./Experience/Experience.js";
import Counting from "./Experience/World/Counting.js";
// ProgressBar removed per client request

import initMinimalPointer from "./Experience/World/minimalPointer.js";
import { initSwiper } from "./Experience/World/SwiperInit.js";
import Transitions from "./Experience/World/transitions.js";
gsap.registerPlugin(ScrollTrigger);




window.Webflow ||= [];
window.Webflow.push(() => {
  // Initialize counter animation for .number elements
  new Counting();
  initMinimalPointer();
  // Initialize Swiper instances for any Webflow-created `.swiper` containers
  try { initSwiper(); } catch (e) { console.warn('Swiper init failed', e); }

  // New: fade-in / fade-out transitions
  new Transitions();
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
