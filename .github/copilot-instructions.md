# Charl Website — Copilot AI Instructions

Purpose: concise, actionable guidance to make an AI coding agent productive in this Three.js-based site.

Big picture
- Container-scoped Three.js Experiences. `src/index.js` finds `[data-3d]` containers and boots an `Experience` per container (separate canvas/sizing per instance).
- `src/Experience/Experience.js` composes Scene, `utils/Camera`, `utils/Renderer`, World, `utils/Time`, and `utils/Resources`. World children (e.g., `World/Lining.js`) are created after `Resources` emits `ready`. The frame loop auto-stops when `World.isIdle()` reports finished.
- Desktop-only features (counters, pointer, swiper, transitions) are dynamically imported inside `window.Webflow.push` and gated behind `matchMedia('(min-width: 991px)')` plus an `innerWidth` check.

Key files & locations
- Entry/runtime: `src/index.js` — always wires contact anti-bot (`World/Jingjang.js`); on desktop initializes `World/Counting.js`, `World/minimalPointer.js`, `World/SwiperInit.js`, `World/transitions.js`.
- Core wiring: `src/Experience/Experience.js`, `src/Experience/utils/Renderer.js` (SRGB + ACES, shadows), `src/Experience/utils/Camera.js`.
- World: `src/Experience/World/World.js` (waits for `Resources.ready`, chooses component by container `data-3d`), `src/Experience/World/Lining.js` (GLTF layers + stone animation), `src/Experience/World/Environment.js` (three‑point lights & shadow tuning).
- Utilities: `src/Experience/utils/Resources.js` (GLTF/DRACO/Texture loaders), `src/Experience/utils/Sizes.js` (per-container), `src/Experience/utils/Time.js` (RAF + pause/resume), `src/Experience/utils/EventEmitter.js`.
- Assets: `src/Experience/utils/sources.js` (Webflow-hosted URLs; GLTF can be `.glb.txt`).
- UI & styles: `src/Experience/World/SwiperInit.js` (local Swiper CSS via `src/styles/*.css`), `src/styles/transitions.css`, `src/styles/minimalpointer-overrides.css`.
- Custom CSS: `src/styles/webflow.css` is the consolidated site CSS. After building/testing locally, its contents are pasted into the Webflow Designer “Custom Code” head section for deployment.
- Build/dev: `bin/build-dev.js` (esbuild watch + Express server + SSE live reload), `bin/build-prod.js`.

Developer workflows
- Dev server: `pnpm dev` serves from `docs/` at http://localhost:3000, defines `SERVE_ORIGIN`, loads `.glsl` as text, and sets permissive CORS (incl. `Access-Control-Allow-Private-Network`).
- Production build: `pnpm build` outputs static site to `docs/` (no live-reload injection).
- Tests: `pnpm test` starts Playwright with `webServer: { command: 'pnpm dev', port: 3000, reuseExistingServer: true }`. Example spec currently targets playwright.dev as a placeholder.
- Deploy: `pnpm deploy` publishes `docs/` via `gh-pages` (runs `pnpm build` first).

Project-specific conventions
- Per-container sizing: always pass the container to `Sizes`; each Experience manages its own canvas.
- Resource-first world: construct World components only after `Resources.on('ready')` fires.
- Frame loop: `Time` emits `tick` → update camera/world → render; auto-stops when `World.isIdle()` and can resume on `visibilitychange`.
- Color spaces: renderer uses `SRGBColorSpace` + ACES; base color textures usually `SRGBColorSpace`, normal maps `NoColorSpace`. See `Lining.setupTexture()`.
- Stones: `World/StoneField.js` uses `THREE.InstancedMesh` plus `material.onBeforeCompile` injection to add per-instance UV offsets and tints; update `material.needsUpdate` if customizing.
- Desktop gating: initialize Swiper, transitions, counters, and pointer only when `(min-width: 991px)` is satisfied; imports are lazy and guarded.

Integration points & deps
- Rendering: `three` (0.164.x).
- Animation/scroll: `gsap` + `ScrollTrigger` in `World/transitions.js` and `World/Counting.js`.
- UI: `swiper` via `World/SwiperInit.js` with local CSS copies (`src/styles/swiper-bundle.css`, overrides) to ensure bundling.
- GLTF/Draco: `Resources` wires `GLTFLoader` + `DRACOLoader`; decoder path is a CDN (not local `docs/draco`) in dev/build.
- Dev server: `bin/live-reload.js` uses SSE at `/esbuild` for reload; `bin/build-dev.js` logs served files + import tags.

Debugging tips
- Assets not loading: check `utils/sources.js` URLs and CORS headers in `bin/build-dev.js`.
- Shaders: ensure `.glsl` files bundle as text via esbuild `loader: { '.glsl': 'text' }`.
- Scene not rendering: verify a container with `[data-3d="lining"]` exists and `Resources` reached `ready`.
- Visual issues: confirm texture `flipY` and color space; shadow artifacts can be tuned in `World/Environment.js` (bias/normalBias/radius).

Extending
- New container Experience: add a `[data-3d="..."]` container, branch in `World/World.js`, and add assets to `utils/sources.js`.
- Swiper: call `initSwiper(scope?)` after Webflow DOM is ready; direction classes `cw-dir-forward/backward` are toggled for CSS.