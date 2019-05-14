const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream(path.resolve(process.argv[3]), {
    encoding: 'utf-8'
  });
  let str = '';
  stream.on('data', (res) => {
    str += res;
  });
  stream.on('end', () => {
    // res.write(str);
    res.end(str);
  })
});

server.listen(process.argv[2])