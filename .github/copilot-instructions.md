# Charl Website — Copilot AI Instructions

Purpose: concise, actionable guidance to make an AI coding agent productive in this Three.js-based site.

Big picture
- Container-scoped Three.js Experiences. `src/index.js` finds `[data-3d]` containers and boots an `Experience` per container (separate canvas/sizing per instance).
- `src/Experience/Experience.js` composes Scene, `utils/Camera`, `utils/Renderer`, World, `utils/Time`, and `utils/Resources`. World children (e.g., `World/Lining.js`) are created after `Resources` emits `ready`.

Key files & locations
- Entry: `src/index.js` — initializes Experiences for `[data-3d="lining"]`; gates other desktop-only features via `window.Webflow` and `matchMedia(>=991px)`.
- Core wiring: `src/Experience/Experience.js`, `src/Experience/utils/Renderer.js`, `src/Experience/utils/Camera.js`.
- World: `src/Experience/World/World.js`, `src/Experience/World/Lining.js` (animates GLTF layers + stones), `src/Experience/World/Environment.js`.
- Utilities: `src/Experience/utils/Resources.js`, `src/Experience/utils/Sizes.js`, `src/Experience/utils/Time.js`, `src/Experience/utils/EventEmitter.js`.
- Asset sources: `src/Experience/utils/sources.js` (Webflow-hosted assets; GLTFs may use `.glb.txt`).
- Shaders: `src/Experience/utils/shaders/*.glsl` (bundled as text in dev/build via esbuild loader).
- Build/dev scripts: `bin/build-dev.js` (esbuild watch + Express server, live-reload inject), `bin/build-prod.js`.

Developer workflows
- Dev server: run `pnpm dev` (serves from `docs/` at http://localhost:3000, defines `SERVE_ORIGIN`, loads `.glsl` as text, sets permissive CORS headers).
- Production build: run `pnpm build` (outputs static site to `docs/`).
- Tests: run `pnpm test`. Playwright `webServer` auto-starts `pnpm dev` on port 3000 and reuses an existing server.
- Deploy: run `pnpm deploy` (publishes `docs/` via `gh-pages`).

Project-specific conventions
- Per-container sizing: use `Sizes(container)`; never assume a global full-window canvas.
- Resource-first: create World components only after `Resources.on('ready')` (see `World/World.js`).
- Frame loop: `Time` emits `tick` → update camera/world → renderer renders.
- Color spaces: renderer uses `SRGBColorSpace` + ACES; color textures usually `SRGBColorSpace`, normal maps `NoColorSpace`. See `World/Lining.js` `setupTexture()`/`setupNormalTexture()`.
- Stone/Layer animation: `World/Lining.js` manages GLTF layer opacity/position and delegates stone generation/updates to `World/StoneField.js`.

Integration points & deps
- Rendering: `three`.
- UI: `swiper` with site overrides in `src/styles/swiper-overrides.css`; additional CSS in `src/styles/transitions.css`.
- GLTF/Draco: `Resources` wires `GLTFLoader` + `DRACOLoader`. Decoder path points to a CDN (see `Resources.setLoaders()`), not local `docs/draco` during dev.
- Dev server: `bin/build-dev.js` injects `bin/live-reload.js` and sets CORS headers (including Private-Network) used by tests.

Debugging tips
- Assets not loading: verify URLs in `utils/sources.js` and CORS in `bin/build-dev.js`.
- Shaders: ensure `.glsl` files compile as text (esbuild `loader: { '.glsl': 'text' }`).
- Scene not rendering: confirm Experience is attached to a container with `[data-3d="lining"]` and that `Resources` reached `ready`.
- Visual issues: check texture `flipY` and color space, and that materials are updated before animation.

Need more detail on a specific area (e.g., Playwright app tests, asset hosting changes, or adding a new World component)? Ask and I’ll expand with focused examples.