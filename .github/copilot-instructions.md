# Charl Website — Copilot AI Instructions

Purpose: concise, actionable guidance to make an AI coding agent productive in this Three.js-based site.

Big picture
- Small, modular Three.js "Experience" system. `src/index.js` finds DOM containers (data-3d) and boots an `Experience` instance per container.
- `src/Experience/Experience.js` composes Scene, Camera, Renderer, World, Time and Resources; World components (e.g., `World/World.js`, `World/Lining.js`) are instantiated after Resources finish loading.

Key files & locations
- Entry: `src/index.js` — discovers containers and creates Experiences.
- Core wiring: `src/Experience/Experience.js`, `src/Experience/Renderer.js`, `src/Experience/Camera.js`.
- World: `src/Experience/World/World.js`, `src/Experience/World/Lining.js`, `src/Experience/World/ProgressBar.js`.
- Utilities: `src/Experience/utils/Resources.js`, `Sizes.js`, `Time.js`, `EventEmitter.js`.
- Asset sources: `src/Experience/sources.js` (Webflow URLs, `.glb.txt` usage).
- Shaders: `src/Experience/utils/shaders/*.glsl` (loaded as text via esbuild).
- Build scripts / dev server: `bin/build-dev.js`, `bin/build-prod.js`.

Developer workflows
- Development: `pnpm dev` — runs `bin/build-dev.js` (esbuild watch + express dev server). Default dev port: 3000.
- Production build: `pnpm build` — runs `bin/build-prod.js`, outputs static site into `docs/`.
- Tests: `pnpm test` — Playwright tests; the test suite expects the dev server (port 3000) to be available. The test runner does not automatically start the dev server.
- Packaging: `pnpm deploy` publishes `docs/` via `gh-pages` (see `package.json` scripts).

Project-specific conventions & patterns
- Container-scoped Experiences: don't assume a single global canvas — canvases and sizes are per-container (see `Sizes.js`).
- Resource-first instantiation: always wait for `Resources` loader to finish before creating World components.
- Global update flow: `Time` emits ticks → update camera → update world children → renderer renders each frame.
- Geometry refresh pattern: use `refreshLayers()` (used in `Lining.js`) and explicitly dispose old geometries/materials/textures to avoid memory leaks.
- Shaders and asset loading: shaders are kept as `.glsl` and must be treated as text by bundling; external assets often come from Webflow and may use `.glb.txt` wrappers.
- Texture settings: ensure `texture.flipY = false` and `texture.colorSpace = SRGBColorSpace` when processing textures.

Integration points & external deps
- Three.js for rendering (`three` in `package.json`).
- Swiper for slides in UI (`swiper`). Overrides live at `src/styles/swiper-overrides.css`.
- Draco helper files in `draco/` for GLTF decoding.
- Dev server uses `express` inside `bin/build-dev.js` — that script also sets headers/CORS used by tests.

Debugging and common fixes
- If assets fail to load, inspect `src/Experience/sources.js` for CDN URLs and `bin/build-dev.js` for CORS. Playwright tests break if CORS or port mismatches occur.
- To reproduce UI/render issues: run `pnpm dev`, open browser console and network, and verify shaders are loaded as text and GLTF URLs resolve.
- When changing geometry or textures, run a local session and check memory snapshots or watch for console warnings about disposed resources.

If any section needs more examples (small code snippets, test adjustments, or a walkthrough of a failing test), tell me which area to expand and I will iterate.