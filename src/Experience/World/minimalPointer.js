// Minimal mouse pointer + mask logic for quickFacts-fadedImage
import { gsap } from 'gsap';

export default function initMinimalPointer() {
  const faded = document.querySelector('.quickfacts-fadedimage');
  if (!faded) return;
  const pointer = document.createElement('div');
  pointer.className = 'cw-mouse-circle';
  document.body.appendChild(pointer);

  // create an overlay to host the mask (avoids repainting the image element)
  const overlay = document.createElement('div');
  overlay.className = 'cw-mouse-overlay';
  faded.appendChild(overlay);

  let active = false;

  const defaultMask = 'radial-gradient(circle 0px at 50% 50%, transparent 0%, transparent 100%)';
  // Ensure the element starts hidden by default
  // initialize mask vars on the overlay (use px coords later)
  overlay.style.setProperty('--mask-x', '50%');
  overlay.style.setProperty('--mask-y', '50%');
  overlay.style.setProperty('--mask-r', '0.01px');
  // Animation state
  // final radius in px (derived from CSS --cw-pointer-size when available)
  let targetRadius = 120;
  let pointerDiameterFromCss = null;
  try {
    const sizeVar = getComputedStyle(document.documentElement).getPropertyValue('--cw-pointer-size').trim();
    const parsed = parseFloat(sizeVar);
    if (Number.isFinite(parsed) && parsed > 0) {
      pointerDiameterFromCss = parsed;
      targetRadius = parsed / 2;
    }
  } catch (err) {}
  // Make transitions snappy — lower duration for faster response
  const duration = 180; // ms
  let gsapTween = null;
  let currentRadius = 0;
  let _savedBodyCursor = null;
  let lastMouse = { x: 50, y: 50 };
  let leaveTimeout = null;
  let leaveSequence = 0;
  // keep last valid mask values to avoid writing invalid CSS vars
  let lastValidMask = { x: 0, y: 0, r: 0 };
  const debug = false;

  // set mask variables (x,y in px relative to faded box, r in px)
  function setMaskVars(x, y, r) {
    // Validate inputs — if any value is not finite, reuse the last valid value
    const vx = Number.isFinite(x) ? x : lastValidMask.x;
    const vy = Number.isFinite(y) ? y : lastValidMask.y;
    // Avoid using exactly 0px for the radius — some browsers produce
    // rendering artifacts when the gradient degenerates to a point.
    const vr = Number.isFinite(r) ? Math.max(0.01, r) : lastValidMask.r;
    // Avoid setting NaN/Infinity into CSS which can invalidate the entire mask-image
    overlay.style.setProperty('--mask-x', `${vx}px`);
    overlay.style.setProperty('--mask-y', `${vy}px`);
    overlay.style.setProperty('--mask-r', `${vr}px`);
    lastValidMask.x = vx;
    lastValidMask.y = vy;
    lastValidMask.r = vr;
    if (debug && (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(r))) {
      // eslint-disable-next-line no-console
      console.debug('[minimalPointer] dropped invalid mask value', { x, y, r, used: { vx, vy, vr } });
    }
  }

  // GSAP-driven radius animation for smooth, interruptible tweens
  function animateRadiusWithGSAP(toRadius) {
    const obj = { r: currentRadius };
    if (gsapTween) gsapTween.kill();
    gsapTween = gsap.to(obj, {
      r: toRadius,
      duration: Math.max(0.01, duration / 1000),
      ease: 'power3.out',
      onStart: () => {
        // pre-warm overlay mask at the current pointer position to avoid a
        // frame where the overlay renders without the correct mask
        try {
          const rect = latestRect || faded.getBoundingClientRect();
          const relX = Math.max(0, Math.min(rect.width, lastMouse.x - rect.left));
          const relY = Math.max(0, Math.min(rect.height, lastMouse.y - rect.top));
          overlay.style.setProperty('--mask-x', `${relX}px`);
          overlay.style.setProperty('--mask-y', `${relY}px`);
          overlay.style.setProperty('--mask-r', `0.01px`);
        } catch (err) {}
        // ensure pointer element is present but keep it visually hidden until
        // the mask has started growing to avoid a flash
        pointer.style.display = 'block';
      },
      onUpdate: () => {
        currentRadius = obj.r;
        // update pointer scale
        const scale = Math.max(0.001, currentRadius / targetRadius);
        pointer.style.setProperty('--cw-scale', String(scale));
        // Hide native cursor while mask is visible (radius > 0). Preserve
        // previous body cursor so we can restore it on hide.
        try {
          if (currentRadius > 0.5) {
            if (_savedBodyCursor === null) _savedBodyCursor = document.body.style.cursor || '';
            document.body.style.cursor = 'none';
          } else if (_savedBodyCursor !== null) {
            document.body.style.cursor = _savedBodyCursor || '';
            _savedBodyCursor = null;
          }
        } catch (err) {
          /* ignore (e.g., document not available) */
        }
        // update mask immediately to keep visuals in sync
        const rect = latestRect || faded.getBoundingClientRect();
        const relX = Math.max(0, Math.min(rect.width, lastMouse.x - rect.left));
        const relY = Math.max(0, Math.min(rect.height, lastMouse.y - rect.top));
        setMaskVars(relX, relY, currentRadius);
        // only add the active class (which flips pointer opacity) once the
        // mask is meaningfully visible — this prevents a momentary flash when
        // entering.
        try {
          const activeThreshold = Math.max(6, targetRadius * 0.06); // px
          if (currentRadius >= activeThreshold && !pointer.classList.contains('cw-active')) {
            pointer.classList.add('cw-active');
          }
        } catch (err) {}
      },
      onComplete: () => { gsapTween = null; }
    });
  }

  // initialize pointer size (base size equals 2 * targetRadius) and hidden
  currentRadius = 0;
  const baseSize = Number.isFinite(pointerDiameterFromCss) && pointerDiameterFromCss > 0 ? pointerDiameterFromCss : (targetRadius * 2);
  // Keep inline size in sync with CSS so scaling stays correct
  pointer.style.width = `${baseSize}px`;
  pointer.style.height = `${baseSize}px`;
  pointer.style.display = 'none';
  // ensure CSS vars start off-screen and at minimal scale
  pointer.style.setProperty('--cw-x', '-9999px');
  pointer.style.setProperty('--cw-y', '-9999px');
  pointer.style.setProperty('--cw-scale', '0.001');

  // track latest faded rect for alignment; update on resize/scroll/mousemove
  let latestRect = faded.getBoundingClientRect();
  function updateRect() { latestRect = faded.getBoundingClientRect(); }
  updateRect();
  window.addEventListener('resize', updateRect, { passive: true });
  window.addEventListener('scroll', () => {
    updateRect();
    // On scroll, avoid writing styles directly — instead ensure visibility state
    // is correct (scroll can move the faded element out from under the pointer).
    if (active) {
      const rect = latestRect;
      const inside = (
        lastMouse.x >= rect.left && lastMouse.x <= rect.right &&
        lastMouse.y >= rect.top && lastMouse.y <= rect.bottom
      );
      if (!inside) {
        // If scrolling moved the pointer outside the faded element, check the
        // element under the cursor — if it's not the faded element, hide
        // immediately for snappy UX.
        const under = document.elementFromPoint(lastMouse.x, lastMouse.y);
        const isStill = under && (under === faded || faded.contains(under));
        if (!isStill) scheduleLeave(0);
        else scheduleLeave();
      } else {
        // schedule a render to keep mask + pointer in sync without direct writes here
        if (!rafScheduled) {
          rafScheduled = true;
          requestAnimationFrame(renderFrame);
        }
      }
    }
  }, { passive: true });

  // Batch high-frequency pointer/mask writes in a single RAF to avoid
  // inconsistencies between the pointer element and the mask element.
  let rafScheduled = false;
  function renderFrame() {
    rafScheduled = false;
    // refresh geometry once per RAF to avoid stale bounding rects
    updateRect();
    const rect = latestRect;
    // update pointer position (viewport coords) and mask position (relative coords)
    pointer.style.setProperty('--cw-x', `${lastMouse.x}px`);
    pointer.style.setProperty('--cw-y', `${lastMouse.y}px`);
    pointer.style.setProperty('--cw-scale', String(Math.max(0.001, currentRadius / targetRadius)));
    const relX = Math.max(0, Math.min(rect.width, lastMouse.x - rect.left));
    const relY = Math.max(0, Math.min(rect.height, lastMouse.y - rect.top));
    const safeX = Number.isFinite(relX) ? relX : 0;
    const safeY = Number.isFinite(relY) ? relY : 0;
    overlay.style.setProperty('--mask-x', `${safeX}px`);
    overlay.style.setProperty('--mask-y', `${safeY}px`);
  }

  document.addEventListener('mousemove', e => {
    lastMouse.x = e.clientX;
    lastMouse.y = e.clientY;
    const rect = latestRect;
    // Treat the pointer as a circle with an effective radius. Use the current
    // animated radius when available, otherwise fall back to the target size.
    const effRadius = Math.max(1, currentRadius || targetRadius);
    // Three containment states:
    // - fullyInside: center is inside the element rect
    // - nearOutside: center is outside rect but within effRadius (circle still overlaps)
    // - farOutside: center is beyond effRadius from the rect (no overlap)
    const cx = e.clientX;
    const cy = e.clientY;
    const fullyInside = (cx >= rect.left && cx <= rect.right && cy >= rect.top && cy <= rect.bottom);
    const expanded = {
      left: rect.left - effRadius,
      right: rect.right + effRadius,
      top: rect.top - effRadius,
      bottom: rect.bottom + effRadius,
    };
    const withinExpanded = (cx >= expanded.left && cx <= expanded.right && cy >= expanded.top && cy <= expanded.bottom);

    if (fullyInside) {
      if (leaveTimeout) { clearTimeout(leaveTimeout); leaveTimeout = null; leaveSequence += 1; }
      handleEnter();
      // Ensure we're grown to the target radius while fully inside
      animateRadiusWithGSAP(targetRadius);
      if (!rafScheduled) { rafScheduled = true; requestAnimationFrame(renderFrame); }
    } else if (withinExpanded) {
      // center is slightly outside but the circle still overlaps the element —
      // start the shrink transition so the circle behaves like an extending cursor
      if (active) {
        animateRadiusWithGSAP(0);
        // keep rendering so mask follows until hide completes
        if (!rafScheduled) { rafScheduled = true; requestAnimationFrame(renderFrame); }
      } else {
        // If not active but within expanded area, activate briefly so users see
        // the pointer while it overlaps
        handleEnter();
        animateRadiusWithGSAP(0);
        if (!rafScheduled) { rafScheduled = true; requestAnimationFrame(renderFrame); }
      }
      // schedule eventual hide (debounced)
      scheduleLeave();
    } else {
      // fully outside
      if (active) scheduleLeave();
    }
  });

  // ----- Extracted handlers for reuse (used by mousemove + scroll) -----
  function handleEnter() {
    if (!active) {
      active = true;
      pointer.style.display = 'block';
      pointer.classList.add('cw-active');
      // refresh element rect on enter to avoid stale geometry
      updateRect();
      animateRadiusWithGSAP(targetRadius);
    }
  }

  // scheduleLeave: hides the pointer after `delay` ms (debounced). Pass 0
  // for immediate hide.
  function scheduleLeave(delay = 30) {
    if (leaveTimeout) clearTimeout(leaveTimeout);
    // increment sequence so any pending hide callbacks can detect cancellation
    leaveSequence += 1;
    const mySeq = leaveSequence;
    leaveTimeout = setTimeout(() => {
      // leaving confirmed
      leaveTimeout = null;
      active = false;
      pointer.classList.remove('cw-active');
      animateRadiusWithGSAP(0);
      const hideWhenDone = () => {
        // if a new leave/enter sequence started, abort this hide
        if (mySeq !== leaveSequence) return;
        if (gsapTween) {
          requestAnimationFrame(hideWhenDone);
        } else {
          // give the CSS opacity transition time to finish before removing
          // the element from layout — this avoids a flash in some browsers.
          if (mySeq === leaveSequence) {
            setTimeout(() => {
              if (mySeq !== leaveSequence) return;
              pointer.style.display = 'none';
              // restore transparent mask radius to a tiny epsilon to avoid
              // degenerating the gradient to a point (which can flash).
              overlay.style.setProperty('--mask-r', '0.01px');
            }, 220); // slightly longer than CSS opacity transition (160ms)
          }
        }
      };
      hideWhenDone();
    }, delay);
  }
}
