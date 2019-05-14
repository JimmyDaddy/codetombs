const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream(path.resolve(process.argv[3]), {
    encoding: 'utf-8'
  });
  stream.pipe(res);
});

server.listen(process.argv[2])