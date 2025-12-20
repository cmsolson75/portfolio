#!/usr/bin/env node
import { createServer } from 'http';
import { readFile, stat } from 'fs/promises';
import { extname, join, resolve } from 'path';

const root = resolve(process.argv[2] || 'site');
const port = Number(process.argv[3]) || 4173;

const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.svg': 'image/svg+xml; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.ico': 'image/x-icon',
};

const server = createServer(async (req, res) => {
    const urlPath = (req.url || '/').split('?')[0];
    let filePath = join(root, urlPath === '/' ? '/index.html' : urlPath);

    try {
        const stats = await stat(filePath);
        if (stats.isDirectory()) {
            filePath = join(filePath, 'index.html');
        }

        const data = await readFile(filePath);
        const ext = extname(filePath).toLowerCase();
        const contentType = mimeTypes[ext] || 'application/octet-stream';

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    } catch (error) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Not found');
    }
});

server.listen(port, () => {
    console.log(`Serving ${root} at http://localhost:${port}`);
});

process.on('SIGINT', () => {
    console.log('\nShutting down server...');
    process.exit(0);
});
