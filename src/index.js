
import Experience from "./Experience/Experience.js"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'


window.Webflow ||= []
window.Webflow.push(() => {

  //console.log('Webflow has finished loading');
})
gsap.registerPlugin(ScrollTrigger)
//register();
document.addEventListener('DOMContentLoaded', () => {
  //console.log('DOM fully loaded and parsed');



  function initializeExperience(containers) {
    containers.forEach(container => {
      const canvas = document.createElement('canvas')
      canvas.classList.add('webgl')
      container.appendChild(canvas)
      try {
        new Experience(canvas, container);
        console.log('commit achieved');
      } catch (error) {
        console.error('Error initializing Experience:', error)
      }
    })
  }

  //init Experiences

  // init hero section container
  initializeExperience(document.querySelectorAll('[data-3d="lining"]'))




  
})
