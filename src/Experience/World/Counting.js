
// Use only global objects
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// ...existing code...

export default class Counting {
    constructor() {
        this.initCounters();
    }

    initCounters() {
        document.querySelectorAll(".number").forEach((el) => {
            const target = parseInt(el.getAttribute("data-target"), 10);
            const shouldFade = el.getAttribute("data-target") === "fade-in";

            // Ensure numeric content starts at "00"
            el.textContent = "0";

            // Create a dummy counter object
            const counter = { val: 0 };

            // Build timeline for fade + count
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    once: true
                }
            });

            if (shouldFade) {
                tl.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: "power1.out" });
            }

            tl.to(counter, {
                val: target,
                duration: 2,
                ease: "power1.out",
                onUpdate: () => {
                    const current = Math.floor(counter.val);
                    el.textContent = current < 10 ? `0${current}` : `${current}`;
                }
            });
        });
    }
}