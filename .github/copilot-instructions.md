# Charl Website - AI Agent Instructions

## Project Overview
This is a Three.js-powered website built with a modular Experience architecture for 3D visualizations. The project uses esbuild for bundling, GSAP for animations, and loads 3D models into Webflow-based pages.

## Architecture Patterns

### Experience System
- **Entry Point**: `src/index.js` initializes Experience instances for elements with `data-3d` attributes
- **Core Class**: `src/Experience/Experience.js` orchestrates Scene, Camera, Renderer, World, and Resources
- **World Factory**: `src/Experience/World/World.js` creates different 3D scenes based on `data-3d` attribute values
- **Event-Driven**: Uses custom `EventEmitter.js` for resize/tick events across components

### Data Flow
1. DOM element with `data-3d="lining"` triggers Experience creation
2. Resources load from `sources.js` (external CDN URLs for models/textures)
3. World class conditionally instantiates scene components (e.g., `Lining.js`)
4. Update loop: Time → Camera → World → Renderer

### Key Components
- **Sizes.js**: Responsive canvas sizing with container-based dimensions
- **Time.js**: RAF-based animation loop with delta time
- **Resources.js**: Async loading of GLTF models and textures
- **Camera.js**: Three.js camera management with container context
- **Renderer.js**: WebGL renderer setup with shadows and tone mapping

## Development Workflow

### Build System
- **Dev**: `pnpm dev` → esbuild watch + Express server on port 3000 with live reload
- **Prod**: `pnpm build` → minified bundle to `docs/` directory
- **GLSL Loader**: `.glsl` files loaded as text via esbuild config in both build scripts

### Testing
- **Playwright**: Cross-browser testing with `pnpm test`
- **Dev Server**: Tests run against local dev server on port 3000

### Key Files
- **Build Scripts**: `bin/build-dev.js` (live reload + CORS) and `bin/build-prod.js`
- **Entry**: `src/index.js` handles Webflow integration and Experience initialization
- **Sources**: `src/Experience/sources.js` defines external asset URLs

## Project-Specific Conventions

### Asset Loading
- Models and textures loaded from Webflow CDN URLs (see `sources.js`)
- Use `.glb.txt` extension for GLTF models (Webflow hosting requirement)
- Textures require `flipY = false` and `SRGBColorSpace` encoding

### Three.js Patterns
- Instanced meshes for performance (see `Lining.js` stone generation)
- Material opacity and transparency for layered effects
- Shadow casting/receiving enabled on most meshes
- World position calculations for accurate placement

### GUI Integration
- `lil-gui` for runtime parameter tweaking (dev only)
- Parameters stored as class properties for easy GUI binding
- `refreshLayers()` pattern for real-time scene updates

### Memory Management
- Clear previous meshes before regenerating (`refreshLayers()` in `Lining.js`)
- Dispose contexts after production builds
- Remove event listeners on component destruction

## Common Gotchas
- Canvas elements are dynamically created and appended to containers
- Container attributes determine which 3D scene loads
- Resources must be loaded before World instantiation
- esbuild requires explicit `.glsl` text loader configuration
- Express dev server needs CORS headers for local development