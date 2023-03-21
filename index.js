const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Serve the index.html file
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.write('<h1>Internal Server Error</h1>');
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === '/styles.css') {
    // Serve the styles.css file
    const filePath = path.join(__dirname, 'styles.css');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.write('<h1>Internal Server Error</h1>');
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(data);
        res.end();
      }
    });
  } else {
    // Serve a 404 page for any other requests
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>Page Not Found</h1>');
    res.end();
  }
});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Server running on port ${port}`));
