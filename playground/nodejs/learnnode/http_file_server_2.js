const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  res.setHeader(200, { 'content-type': 'text/plain' });
  const stream = fs.createReadStream(path.resolve(process.argv[3]));
  stream.pipe(res);
});

server.listen(process.argv[2]);