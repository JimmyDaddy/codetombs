const http = require('http');
const concat = require('concat-stream');

const server = http.createServer((req, res) => {
  if(req.method === 'POST') {
    const concatStream = concat((str) => {
      if (str) {
        res.end(str.toUpperCase());
      }
    });
    req.setEncoding('utf-8')
    req.pipe(concatStream);
  } else {
    res.end('only POST method');
  }
});

server.listen(process.argv[2]);
