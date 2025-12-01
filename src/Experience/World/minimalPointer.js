// Minimal mouse pointer + mask logic for quickFacts-fadedImage
export default function initMinimalPointer() {
  const faded = document.querySelector('.quickfacts-fadedimage');
  if (!faded) return;
  const pointer = document.createElement('div');
  pointer.className = 'cw-mouse-circle';
  document.body.appendChild(pointer);

  let active = false;

  const defaultMask = 'radial-gradient(circle 0px at 50% 50%, transparent 0%, transparent 100%)';
  // Ensure the element starts hidden by default
  // initialize mask vars (use px coords later)
  faded.style.setProperty('--mask-x', '50%');
  faded.style.setProperty('--mask-y', '50%');
  faded.style.setProperty('--mask-r', '0px');
  // Animation state
  const targetRadius = 120; // final radius in px
  const duration = 2000; // ms
  let animId = null;
  let animStart = null;
  let startRadius = 0;
  let destRadius = 0;
  let currentRadius = 0;
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
    const vr = Number.isFinite(r) ? Math.max(0, r) : lastValidMask.r;
    // Avoid setting NaN/Infinity into CSS which can invalidate the entire mask-image
    faded.style.setProperty('--mask-x', `${vx}px`);
    faded.style.setProperty('--mask-y', `${vy}px`);
    faded.style.setProperty('--mask-r', `${vr}px`);
    lastValidMask.x = vx;
    lastValidMask.y = vy;
    lastValidMask.r = vr;
    if (debug && (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(r))) {
      // eslint-disable-next-line no-console
      console.debug('[minimalPointer] dropped invalid mask value', { x, y, r, used: { vx, vy, vr } });
    }
  }

  // easing (easeOutCubic)
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  function animateRadius(timestamp) {
    if (!animStart) animStart = timestamp;
    const elapsed = timestamp - animStart;
    const t = Math.min(1, elapsed / duration);
    const eased = easeOutCubic(t);
    currentRadius = startRadius + (destRadius - startRadius) * eased;

    // compute scale (pointer size will be baseSize * scale)
    const scale = Math.max(0.001, currentRadius / targetRadius);
    // update pointer scale via CSS var; position is updated on mousemove for immediate response
    pointer.style.setProperty('--cw-scale', String(scale));

    // keep pointer position in sync while radius animates (covers cases where
    // mousemove RAFs aren't scheduled during the animation). Use viewport coords.
    pointer.style.setProperty('--cw-x', `${lastMouse.x}px`);
    pointer.style.setProperty('--cw-y', `${lastMouse.y}px`);

    // update mask radius; position (x/y) is updated on mousemove/scroll for responsiveness
    const rect = latestRect || faded.getBoundingClientRect();
    const relX = Math.max(0, Math.min(rect.width, lastMouse.x - rect.left));
    const relY = Math.max(0, Math.min(rect.height, lastMouse.y - rect.top));
    // Guard against invalid numbers which can invalidate the CSS mask
    const safeX = Number.isFinite(relX) ? relX : 0;
    const safeY = Number.isFinite(relY) ? relY : 0;
    const safeR = Number.isFinite(currentRadius) ? Math.max(0, currentRadius) : 0;
    setMaskVars(safeX, safeY, safeR);

    if (t < 1) {
      animId = requestAnimationFrame(animateRadius);
    } else {
      animId = null;
      animStart = null;
      startRadius = currentRadius;
    }
  }

  function startAnimate(toRadius) {
    if (animId) cancelAnimationFrame(animId);
    startRadius = currentRadius;
    destRadius = toRadius;
    animStart = null;
    animId = requestAnimationFrame(animateRadius);
  }

  // initialize pointer size (base size equals 2 * targetRadius) and hidden
  currentRadius = 0;
  const baseSize = targetRadius * 2;
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
    // keep pointer/mask in sync if it's active while scrolling
    if (active) {
      const relX = Math.max(0, Math.min(latestRect.width, lastMouse.x - latestRect.left));
      const relY = Math.max(0, Math.min(latestRect.height, lastMouse.y - latestRect.top));
      const safeX = Number.isFinite(relX) ? relX : 0;
      const safeY = Number.isFinite(relY) ? relY : 0;
      faded.style.setProperty('--mask-x', `${safeX}px`);
      faded.style.setProperty('--mask-y', `${safeY}px`);
      // keep transform updates consistent by using the same CSS-vars-driven transform
      pointer.style.setProperty('--cw-x', `${lastMouse.x}px`);
      pointer.style.setProperty('--cw-y', `${lastMouse.y}px`);
      pointer.style.setProperty('--cw-scale', String(Math.max(0.001, currentRadius / targetRadius)));
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
    faded.style.setProperty('--mask-x', `${safeX}px`);
    faded.style.setProperty('--mask-y', `${safeY}px`);
  }

  document.addEventListener('mousemove', e => {
    lastMouse.x = e.clientX;
    lastMouse.y = e.clientY;
    const rect = latestRect;
    const inside = (
      e.clientX >= rect.left && e.clientX <= rect.right &&
      e.clientY >= rect.top && e.clientY <= rect.bottom
    );

    if (inside) {
      // Cancel pending leave if we re-enter quickly
      if (leaveTimeout) { clearTimeout(leaveTimeout); leaveTimeout = null; leaveSequence += 1; }
      if (!active) {
        active = true;
        pointer.style.display = 'block';
        pointer.classList.add('cw-active');
        // refresh element rect on enter to avoid stale geometry
        updateRect();
        startAnimate(targetRadius);
      }
      // schedule a batched render so pointer and mask update together
      if (!rafScheduled) {
        rafScheduled = true;
        requestAnimationFrame(renderFrame);
      }
    } else if (active) {
      // Debounce small, quick exits to avoid accidental mask resets
      if (leaveTimeout) clearTimeout(leaveTimeout);
      // increment sequence so any pending hide callbacks can detect cancellation
      leaveSequence += 1;
      const mySeq = leaveSequence;
      leaveTimeout = setTimeout(() => {
        // leaving confirmed
        leaveTimeout = null;
        active = false;
        pointer.classList.remove('cw-active');
        startAnimate(0);
        const hideWhenDone = () => {
          // if a new leave/enter sequence started, abort this hide
          if (mySeq !== leaveSequence) return;
          if (animId) {
            requestAnimationFrame(hideWhenDone);
          } else {
            // ensure still the same sequence before hiding
            if (mySeq === leaveSequence) {
              pointer.style.display = 'none';
              // restore transparent mask radius
              faded.style.setProperty('--mask-r', '0px');
            }
          }
        };
        hideWhenDone();
      }, 60); // 60ms debounce
    }
  });
}
