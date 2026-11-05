const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const BASE_DIR = __dirname;
const DATA_FILE = path.join(BASE_DIR, 'assets', 'data.json');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.ico': 'image/x-icon'
};

// Simple Live Reload with SSE
const clients = [];
function notifyReload() {
  while (clients.length) {
    const res = clients.pop();
    res.write('data: reload\n\n');
  }
}

// Watch directory for changes
let reloadTimeout;
fs.watch(BASE_DIR, { recursive: true }, (eventType, filename) => {
  if (filename && !filename.includes('.git') && !filename.includes('node_modules')) {
    clearTimeout(reloadTimeout);
    reloadTimeout = setTimeout(() => {
      console.log(`[Reload] File changed: ${filename}`);
      notifyReload();
    }, 150);
  }
});

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);
  let pathname = parsedUrl.pathname;

  // Live Reload SSE
  if (pathname === '/livereload') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    });
    clients.push(res);
    req.on('close', () => {
      const idx = clients.indexOf(res);
      if (idx !== -1) clients.splice(idx, 1);
    });
    return;
  }

  // API Routes
  if (pathname === '/api/upload' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        const filename = (payload.filename || `upload_${Date.now()}.png`).replace(/[^a-zA-Z0-9_.-]/g, '_');
        const rawData = payload.data || '';
        const base64Data = rawData.replace(/^data:image\/\w+;base64,/, '');
        const buffer = Buffer.from(base64Data, 'base64');
        const savePath = path.join(BASE_DIR, 'assets', 'img', filename);
        
        fs.writeFile(savePath, buffer, err => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Gagal menyimpan file upload' }));
            return;
          }
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: true, url: `assets/img/${filename}`, filename }));
        });
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Payload tidak valid' }));
      }
    });
    return;
  }

  if (pathname === '/api/data') {
    if (req.method === 'GET') {
      fs.readFile(DATA_FILE, 'utf-8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Gagal membaca data' }));
          return;
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
      });
      return;
    } else if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          fs.writeFile(DATA_FILE, JSON.stringify(parsed, null, 2), 'utf-8', err => {
            if (err) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Gagal menyimpan data' }));
              return;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true, message: 'Data berhasil disimpan!' }));
          });
        } catch (e) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Format JSON tidak valid' }));
        }
      });
      return;
    }
  }

  // Route shortcuts
  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  } else if (pathname === '/admin' || pathname === '/admin/') {
    pathname = '/admin.html';
  }

  const filePath = path.join(BASE_DIR, pathname);
  const ext = path.extname(filePath).toLowerCase();

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }

    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Inject live-reload script into HTML
    if (ext === '.html') {
      fs.readFile(filePath, 'utf-8', (readErr, content) => {
        if (readErr) {
          res.writeHead(500);
          res.end('Error loading file');
          return;
        }
        const liveReloadScript = `
          <!-- Dev Live Reload -->
          <script>
            (function() {
              const es = new EventSource('/livereload');
              es.onmessage = function() {
                console.log('[Dev] Reloading page...');
                window.location.reload();
              };
            })();
          </script>
        `;
        const modified = content.replace('</body>', `${liveReloadScript}</body>`);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(modified);
      });
    } else {
      res.writeHead(200, {
        'Content-Type': contentType,
        'Content-Length': stats.size
      });
      fs.createReadStream(filePath).pipe(res);
    }
  });
});

server.listen(PORT, () => {
  console.log('\n  ============================================================');
  console.log('  ✨ FARHAN HILAL PORTFOLIO - DEV SERVER');
  console.log('  ============================================================\n');
  console.log(`  ➜  Local:   http://localhost:${PORT}/`);
  console.log(`  ➜  Admin:   http://localhost:${PORT}/admin`);
  console.log(`  ➜  Network: use --host to expose\n`);
  console.log('  ⚡ Ready with Auto Live-Reload. Press Ctrl+C to stop.\n');
});
