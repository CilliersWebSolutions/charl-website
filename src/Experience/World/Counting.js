
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
        const elements = Array.from(document.querySelectorAll('.number'));
        if (!elements.length) return;

        const counters = elements.map((el) => {
            const rawTarget = el.getAttribute('data-target');
            const target = parseInt(rawTarget, 10);
            const shouldFade = el.hasAttribute('fade-in') || el.getAttribute('data-fade') === 'true';

            // Ensure numeric content starts at "00"
            el.textContent = '00';

            return { el, target: isNaN(target) ? 0 : target, obj: { val: 0 }, shouldFade };
        });

        const startAll = () => {
            counters.forEach(({ el, target, obj, shouldFade }) => {
                if (shouldFade) {
                    gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'power1.out' });
                }
                gsap.to(obj, {
                    val: target,
                    duration: 2,
                    ease: 'power1.out',
                    
                    onUpdate: () => {
                        const current = Math.floor(obj.val);
                        el.textContent = current < 10 ? `0${current}` : `${current}`;
                    }
                });
            });
        };

        // Use a single ScrollTrigger to start all counters together.
        // Prefer a group container if present; fallback to first number element.
        const first = elements[0];
        const group = first.closest('[data-count-group]') || first;
        ScrollTrigger.create({
            trigger: group,
            start: 'top 80%',
            once: true,
            onEnter: startAll
        });
    }
}