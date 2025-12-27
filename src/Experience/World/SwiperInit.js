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

        const options = {
            loop: true,
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

            // Debug summary: expose and log useful info to help diagnose missing controls
            try {
                if (typeof window !== 'undefined') {
                    window.__cw_swipers = window.__cw_swipers || [];
                    window.__cw_swipers.push(sw);
                }
                const wrapper = container.querySelector('.swiper-wrapper');
                const slidesCount = wrapper ? wrapper.querySelectorAll('.swiper-slide').length : container.querySelectorAll('.swiper-slide').length;
                // eslint-disable-next-line no-console
                console.debug('Swiper initialized', {
                    container: container.id || container.className || container.tagName,
                    slides: slidesCount,
                    hasWrapper: !!wrapper,
                    pagination: !!container.querySelector('.swiper-pagination'),
                    navigationPrev: !!container.querySelector('.swiper-button-prev'),
                    navigationNext: !!container.querySelector('.swiper-button-next'),
                    options
                });
            } catch (dbgErr) {
                // eslint-disable-next-line no-console
                console.warn('Swiper debug logging failed', dbgErr);
            }
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
