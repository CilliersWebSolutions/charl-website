'use strict';

(function () {

  // -----------------------------
  // Config: edit these only
  // -----------------------------
  const phoneChunks = ['+27', ' ', '82', ' ', '886', ' ', '9997'];
  const emailChunks = ['cha', 'rl', '@', 'line', 'rw', 'orks', '.co', '.za'];

  // -----------------------------
  // Utility: join chunks
  // -----------------------------
  function joinChunks(chunks) {
    return chunks.join('');
  }

  // -----------------------------
  // Utility: random hidden noise
  // -----------------------------
  function randomString(len) {
    const length = typeof len === 'number' ? len : 8;
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let out = '';

    if (window.crypto && crypto.getRandomValues) {
      const arr = new Uint32Array(length);
      crypto.getRandomValues(arr);
      for (let i = 0; i < length; i++) {
        out += chars[arr[i] % chars.length];
      }
      return out;
    }

    for (let i = 0; i < length; i++) {
      out += chars[Math.floor(Math.random() * chars.length)];
    }
    return out;
  }

  // -----------------------------
  // Build obfuscated <span>
  // -----------------------------
  function buildObfuscatedSpan(text, label) {
    const wrapper = document.createElement('span');
    wrapper.className = 'revealed-wrapper';
    wrapper.dataset.revealed = label;

    const textSpan = document.createElement('span');
    textSpan.className = 'revealed-text';

    for (let i = 0; i < text.length; i++) {
      textSpan.appendChild(document.createTextNode(text[i]));

      if (i < text.length - 1) {
        const noise = document.createElement('span');
        noise.style.display = 'none';
        noise.textContent = randomString(10);
        textSpan.appendChild(noise);
      }
    }

    // Copy icon container
    const copyBtn = document.createElement('span');
    copyBtn.className = 'copy-icon';
    // Accessibility and focusability
    copyBtn.setAttribute('role', 'button');
    copyBtn.setAttribute('tabindex', '0');
    copyBtn.setAttribute('aria-label', `Copy ${label} to clipboard`);

    // Clipboard glyph (initial state) — minimal inline SVG
    const clipboardEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    clipboardEl.setAttribute('class', 'copy-clipboard');
    clipboardEl.setAttribute('viewBox', '0 0 24 24');
    clipboardEl.setAttribute('aria-hidden', 'true');
    clipboardEl.setAttribute('focusable', 'false');
    const clipboardPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    clipboardPath.setAttribute('d', 'M7 16h10v1h-10v-1zm0-1h10v-1h-10v1zm15-13v22h-20v-22h3c1.229 0 2.18-1.084 3-2h8c.82.916 1.771 2 3 2h3zm-11 1c0 .552.448 1 1 1s1-.448 1-1-.448-1-1-1-1 .448-1 1zm9 1h-4l-2 2h-3.898l-2.102-2h-4v18h16v-18zm-13 9h10v-1h-10v1zm0-2h10v-1h-10v1z');
    clipboardPath.setAttribute('fill', '#03854c');
    clipboardEl.appendChild(clipboardPath);

    // Minimal inline SVG for checkbox (no Inkscape metadata)
    const checkSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    checkSvg.setAttribute('class', 'copy-check');
    checkSvg.setAttribute('viewBox', '0 0 24 24');
    checkSvg.setAttribute('aria-hidden', 'true');
    checkSvg.setAttribute('focusable', 'false');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M10.041 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591zm-5.041-15c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-14zm19 3v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5z');
    path.setAttribute('fill', '#03854c');
    checkSvg.appendChild(path);

    // Layer both icons inside the button
    copyBtn.appendChild(clipboardEl);
    copyBtn.appendChild(checkSvg);

    // Copy handler: fade in checkmark, then revert
    function performCopy() {
      navigator.clipboard.writeText(text).catch(() => {});
      copyBtn.classList.add('copied');
      setTimeout(() => {
        copyBtn.classList.remove('copied');
      }, 1200);
    }
    copyBtn.addEventListener('click', performCopy);
    copyBtn.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        performCopy();
      }
    });

    wrapper.appendChild(textSpan);
    wrapper.appendChild(copyBtn);

    return wrapper;
  }

  // -----------------------------
  // Generic reveal handler
  // -----------------------------
  function reveal(buttonEl, chunks, label) {
    if (!buttonEl) return;
    const clean = joinChunks(chunks);
    const span = buildObfuscatedSpan(clean, label);
    buttonEl.replaceWith(span);
  }

  // -----------------------------
  // Attach reveal logic
  // -----------------------------
  function attachReveal(selector, chunks, label) {
    const buttons = document.querySelectorAll(selector);
    if (!buttons.length) return;

    buttons.forEach(btn => {
      const handler = () => reveal(btn, chunks, label);

      btn.addEventListener('click', handler, { once: true });

      btn.addEventListener('keydown', ev => {
        if (ev.key === 'Enter' || ev.key === ' ') {
          ev.preventDefault();
          handler();
        }
      }, { once: true });
    });
  }

  // -----------------------------
  // Init
  // -----------------------------
  function init() {
    attachReveal('.button-phone', phoneChunks, 'phone');
    attachReveal('.button-email', emailChunks, 'email');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }

})();
