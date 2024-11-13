const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  const method = req.method;

  if (method === 'GET') {
    // Handle GET request
    const queryObject = url.parse(req.url, true).query;
    res.end('Received GET request with query: ' + JSON.stringify(queryObject));
  } else if (method === 'POST') {
    // Handle POST request
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      res.end('Received POST request with data: ' + body);
    });
  }
}).listen(3000);
