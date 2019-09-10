const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let resStr = '';
    req.on('data', (chunk) => {
      resStr += chunk.toString().toUpperCase();
    })
    req.on('end', () => {
      res.end(resStr);
    })
  } else {
    console.error('pls use post request'); 
  }
});

server.listen(process.argv[2]);
