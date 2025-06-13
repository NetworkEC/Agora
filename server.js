const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 8080;
const mime = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg'
};

http.createServer((req, res) => {
  const reqPath = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(__dirname, reqPath);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end('Not found');
      return;
    }
    res.setHeader('Content-Type', mime[path.extname(filePath)] || 'application/octet-stream');
    res.end(data);
  });
}).listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
