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

  // set mask variables (x,y in px relative to faded box, r in px)
  function setMaskVars(x, y, r) {
    faded.style.setProperty('--mask-x', `${x}px`);
    faded.style.setProperty('--mask-y', `${y}px`);
    faded.style.setProperty('--mask-r', `${r}px`);
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
    // update pointer transform to follow last mouse (GPU-accelerated)
    pointer.style.transform = `translate3d(${lastMouse.x}px, ${lastMouse.y}px, 0) translate(-50%,-50%) scale(${scale})`;

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
  pointer.style.transform = `translate3d(-9999px,-9999px,0) translate(-50%,-50%) scale(0.001)`;

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
      pointer.style.transform = `translate3d(${lastMouse.x}px, ${lastMouse.y}px, 0) translate(-50%,-50%) scale(${Math.max(0.001, currentRadius / targetRadius)})`;
    }
  }, { passive: true });

  document.addEventListener('mousemove', e => {
    lastMouse.x = e.clientX;
    lastMouse.y = e.clientY;
    latestRect = faded.getBoundingClientRect();
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
        startAnimate(targetRadius);
      }
      // update pointer position (transform) immediately for responsiveness
      pointer.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%,-50%) scale(${Math.max(0.001, currentRadius / targetRadius)})`;

      // update mask position vars immediately
      const relX = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
      const relY = Math.max(0, Math.min(rect.height, e.clientY - rect.top));
      const safeX = Number.isFinite(relX) ? relX : 0;
      const safeY = Number.isFinite(relY) ? relY : 0;
      faded.style.setProperty('--mask-x', `${safeX}px`);
      faded.style.setProperty('--mask-y', `${safeY}px`);
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
