import * as esbuild from 'esbuild';

// Config output
const BUILD_DIRECTORY = 'docs';

// Config entrypoint files
const ENTRY_POINTS = ['src/index.js'];

// Add logging to verify settings
console.log('Starting production build...');
console.log('Build directory:', BUILD_DIRECTORY);
console.log('Entry points:', ENTRY_POINTS);

(async () => {
    // Create context
    const context = await esbuild.context({
        bundle: true,
        entryPoints: ENTRY_POINTS,
        outdir: BUILD_DIRECTORY,
        minify: true,
        sourcemap: false,
        target: 'es2020',
        inject: undefined,  // Do not include live-reload.js in production
        define: {},
        loader: {
            '.glsl': 'text' // <-- Add this line
        },
    // Do not externalize three or lil-gui; bundle them
    // external: ['three', 'lil-gui']
    });

    // Build files in production
    await context.rebuild();
    context.dispose();

    console.log('Production build completed successfully.');
})();