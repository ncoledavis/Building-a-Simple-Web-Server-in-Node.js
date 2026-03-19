import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

const send = (res, status, headers, body) => {
  res.writeHead(status, headers);
  res.end(body);
};

const serveFile = (res, filePath, contentType) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      return serve404(res);
    }
    send(res, 200, { 'Content-Type': contentType }, data);
  });
};

const serve404 = (res) => {
  const notFoundPath = path.join(__dirname, '404.html');
  fs.readFile(notFoundPath, (err, data) => {
    if (err) {
      return send(res, 404, { 'Content-Type': 'text/plain; charset=utf-8' }, '404 Not Found');
    }
    send(res, 404, { 'Content-Type': 'text/html; charset=utf-8' }, data);
  });
};

const server = http.createServer((req, res) => {
  const urlPath = (req.url || '/').split('?')[0].split('#')[0];

  if (req.method !== 'GET') {
    return send(res, 405, { 'Content-Type': 'text/plain; charset=utf-8', 'Allow': 'GET' }, '405 Method Not Allowed');
  }

  if (urlPath === '/' || urlPath === '/home') {
    const homePath = path.join(__dirname, 'home.html');
    return serveFile(res, homePath, 'text/html; charset=utf-8');
  }

  if (urlPath === '/about') {
    return send(res, 200, { 'Content-Type': 'text/plain; charset=utf-8' }, 'This is the About page.');
  }

  return serve404(res);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
``