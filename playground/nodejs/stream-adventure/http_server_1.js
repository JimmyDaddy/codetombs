const http = require('http');
const concat = require('concat-stream');

// or const BufferList = require('bl');
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(concat((buf) => {
      res.end(buf.toString().toUpperCase());
    }))
  } else {
    console.error('pls use post request'); 
  }
});

server.listen(process.argv[2]);
