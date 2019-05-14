const http = require('http');

const server = http.createServer((req, res) => {
  if(req.method === 'POST') {
    let data = ''
    req.setEncoding('utf-8')
    req.on('data', (r) => {
      data += r.toUpperCase();
    })
    req.on('end', () => {
      // res.write(data);
      res.end(data);
    })
  } else {
    res.end('only POST method');
  }
});

server.listen(process.argv[2]);
