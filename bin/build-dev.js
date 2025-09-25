import * as esbuild from 'esbuild';
import express from 'express';
import { readdirSync } from 'fs';
import { join, sep } from 'path';

// Config output
const BUILD_DIRECTORY = 'docs';
const SERVE_PORT = 3000;
const SERVE_ORIGIN = `http://localhost:${SERVE_PORT}`;

// Config entrypoint files
const ENTRY_POINTS = ['src/index.js'];

// Create context
const context = await esbuild.context({
    bundle: true,
    entryPoints: ENTRY_POINTS,
    outdir: BUILD_DIRECTORY,
    minify: false,
    sourcemap: true,
    target: 'esnext',
    inject: ['./bin/live-reload.js'],  // Include live-reload.js in development
    define: {
        SERVE_ORIGIN: JSON.stringify(SERVE_ORIGIN),
    },
    loader: {
        '.glsl': 'text' // <-- Add this line
    },
    // Do not externalize three or lil-gui; bundle them
    // external: ['three', 'lil-gui']
});

// Watch and serve files in development
await context.watch();

// Start Express server to serve files with CORS headers
const app = express();
app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (origin) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Private-Network', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        res.sendStatus(204);
    } else {
        next();
    }
});
app.use(express.static(BUILD_DIRECTORY));
app.get('/esbuild', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    // Send a dummy message every 10 seconds to keep connection alive
    const interval = setInterval(() => {
        res.write('data: ping\n\n');
    }, 10000);

    req.on('close', () => {
        clearInterval(interval);
        res.end();
    });
});
app.listen(SERVE_PORT, () => {
    console.log(`Serving on ${SERVE_ORIGIN}`);
    logServedFiles();
});

/**
 * Logs information about the files that are being served during local development.
 */
function logServedFiles() {
    /**
     * Recursively gets all files in a directory.
     * @param {string} dirPath
     * @returns {string[]} An array of file paths.
     */
    const getFiles = (dirPath) => {
        const files = readdirSync(dirPath, { withFileTypes: true }).map((dirent) => {
            const path = join(dirPath, dirent.name);
            return dirent.isDirectory() ? getFiles(path) : path;
        });

        return files.flat();
    };

    const files = getFiles(BUILD_DIRECTORY);

    const filesInfo = files
        .map((file) => {
            if (file.endsWith('.map')) return;

            // Normalize path and create file location
            const paths = file.split(sep);
            paths[0] = SERVE_ORIGIN;

            const location = paths.join('/');

            // Create import suggestion
            const tag = location.endsWith('.css')
                ? `<link href="${location}" rel="stylesheet" type="text/css"/>`
                : `<script defer src="${location}"></script>`;

            return {
                'File Location': location,
                'Import Suggestion': tag,
            };
        })
        .filter(Boolean);

    // eslint-disable-next-line no-console
    console.table(filesInfo);
}
