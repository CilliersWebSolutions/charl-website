// Swiper integration helper for Webflow-exported markup
// Usage: import { initSwiper, destroySwiper } from './SwiperInit';
// Call `initSwiper()` after the Webflow DOM is ready (e.g. inside Webflow.push callback).

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// Use local copy of Swiper CSS (copied from node_modules) so styles are bundled
// during local development and immediately visible in the dev preview.
import '../../styles/swiper-bundle.css';
// Local pointer and overrides (keeps visuals editable in Designer if desired)
// Keep imports after the bundle so custom rules take precedence.
import '../../styles/minimalpointer-overrides.css';
import '../../styles/swiper-overrides.css';

// Register modules if using tree-shaken build
Swiper.use([Navigation, Pagination]);

const instances = new WeakMap();

export function initSwiper(scope = document) {
    // Scope allows initializing only within a Webflow component container
    const containers = Array.from(scope.querySelectorAll('.swiper'));
    containers.forEach(container => {
        // Defensive: ensure container is a real Element (avoid passing window/document)
        if (!container || !(container instanceof Element)) return;
        // Avoid double-init
        if (instances.has(container)) return;

        // Add a short class so designers can target this swiper instance with CSS variables
        container.classList.add('cw-swiper');
        // Default direction for first interaction
        container.classList.add('cw-dir-forward');

        // Look for optional navigation/pagination elements inside the container
        const nextEl = container.querySelector('.swiper-button-next');
        const prevEl = container.querySelector('.swiper-button-prev');
        const pagEl = container.querySelector('.swiper-pagination');

        // Defensive: only use navigation/pagination if the found nodes are Elements
        const nav = (nextEl instanceof Element && prevEl instanceof Element) ? { nextEl, prevEl } : false;
        const pagElIsValid = (pagEl instanceof Element);

        // Designer-editable labels for pagination. Update this array to change visible labels.
        const paginationLabels = ['Quality Assurance', 'Design Review', 'Construction Support'];

        const pag = pagElIsValid ? {
            el: pagEl,
            clickable: true,
            renderBullet: function (index, className) {
                const txt = paginationLabels[index] || `Slide ${index + 1}`;
                // Only include the dot for all but the last label
                const includeDot = index < paginationLabels.length - 1;
                const dotHtml = includeDot ? `<span class="cw-swiper-dot" aria-hidden="true"></span>` : '';
                return `<span class="${className} cw-swiper-bullet-wrapper"><span class="cw-swiper-label">${txt}</span>${dotHtml}</span>`;
            }
        } : false;

        // Count slides early so we can tune loop cloning behaviour when loop:true
        const slideElements = container.querySelectorAll('.swiper-slide');
        const slidesCount = slideElements.length || 0;

        const options = {
            loop: true,
            loopedSlides: Math.max(1, slidesCount), // help Swiper map pagination to looped clones
            slidesPerView: 1,
            spaceBetween: 16,
            centeredSlides: false,
            watchOverflow: true,
            // Force a single slide per view at all sizes (Designer preference)
            breakpoints: {
                0:    { slidesPerView: 1, spaceBetween: 12 },
                640:  { slidesPerView: 1, spaceBetween: 16 },
                900:  { slidesPerView: 1, spaceBetween: 24 },
                1200: { slidesPerView: 1, spaceBetween: 32 },
            },
            // Navigation & pagination (validated above)
            navigation: nav,
            pagination: pag,
            // Accessibility and keyboard navigation
            a11y: true,
            keyboard: { enabled: true },
            // Allow swiping on desktop if desired
            simulateTouch: true,
           
                 
            
        };

        try {
            const sw = new Swiper(container, options);
            // store instance
            instances.set(container, sw);

                sw.__cw_prevRealIndex = sw.realIndex;
                const setDirectionClass = () => {
                    try {
                        const prev = typeof sw.__cw_prevRealIndex === 'number' ? sw.__cw_prevRealIndex : sw.realIndex;
                        const curr = sw.realIndex;
                        if (prev === curr) return;
                        let dirClass = 'cw-dir-forward';
                        if (typeof sw.swipeDirection === 'string') {
                            dirClass = sw.swipeDirection === 'prev' ? 'cw-dir-backward' : 'cw-dir-forward';
                        } else {
                            const total = Math.max(1, slidesCount);
                            const forwardDist = (curr - prev + total) % total;
                            const backwardDist = (prev - curr + total) % total;
                            dirClass = forwardDist <= backwardDist ? 'cw-dir-forward' : 'cw-dir-backward';
                        }
                        container.classList.toggle('cw-dir-forward', dirClass === 'cw-dir-forward');
                        container.classList.toggle('cw-dir-backward', dirClass === 'cw-dir-backward');
                    } catch (e) {
                        
                    }
                };
                sw.on('slideChange', setDirectionClass);
                sw.on('slideChangeTransitionEnd', () => { sw.__cw_prevRealIndex = sw.realIndex; });

                // If navigation exists, keep prev button dimmed/disabled on first real slide
                if (nav) {
                    const updateNavState = () => {
                        try {
                            const isFirst = sw.realIndex === 0;
                            const isLast = sw.realIndex === Math.max(0, slidesCount - 1);
                            if (prevEl instanceof Element) {
                                prevEl.classList.toggle('cw-swiper-nav-inactive', isFirst);
                                prevEl.setAttribute('aria-disabled', isFirst ? 'true' : 'false');
                            }
                            if (nextEl instanceof Element) {
                                nextEl.classList.toggle('cw-swiper-nav-inactive', isLast);
                                nextEl.setAttribute('aria-disabled', isLast ? 'true' : 'false');
                            }
                        } catch (e) {
                            // swallow non-critical nav state update issues in production
                        }
                    };
                    // Update on init and on slide changes
                    updateNavState();
                    sw.on('slideChange', updateNavState);
                }

            // Debug summary removed for production cleanliness
        } catch (err) {
            // Provide context to debug why Swiper failed to initialize in this environment
            // eslint-disable-next-line no-console
            console.error('Swiper init failed for container', container, err);
        }
    });
}

export function destroySwiper(scope = document) {
    const containers = Array.from(scope.querySelectorAll('.swiper'));
    containers.forEach(container => {
        const sw = instances.get(container);
        if (sw) {
            try { sw.destroy(true, true); } catch (e) { /* ignore */ }
            instances.delete(container);
        }
    });
}

export default { initSwiper, destroySwiper };
