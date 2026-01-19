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

    // Copy icon
    const copyBtn = document.createElement('span');
    copyBtn.className = 'copy-icon';
    copyBtn.textContent = '📋';
    // Accessibility and focusability
    copyBtn.setAttribute('role', 'button');
    copyBtn.setAttribute('tabindex', '0');
    copyBtn.setAttribute('aria-label', `Copy ${label} to clipboard`);

    // Copy handler
    function performCopy() {
      navigator.clipboard.writeText(text).catch(() => {});
      copyBtn.classList.add('copied');
      const prev = copyBtn.textContent;
      copyBtn.textContent = '✔️';
      setTimeout(() => {
        copyBtn.classList.remove('copied');
        copyBtn.textContent = prev || '📋';
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
