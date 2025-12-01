

import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Experience from "./Experience/Experience.js";
import Counting from "./Experience/World/Counting.js";
import ProgressBar from "./Experience/World/ProgressBar.js";

import initMinimalPointer from "./Experience/World/minimalPointer.js";
gsap.registerPlugin(ScrollTrigger);




window.Webflow ||= [];
window.Webflow.push(() => {
  // Initialize counter animation for .number elements
  new Counting();
  new ProgressBar();
  initMinimalPointer();
});
console.log(ProgressBar);
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
