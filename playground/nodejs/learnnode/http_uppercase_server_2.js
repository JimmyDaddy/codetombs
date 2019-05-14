const http = require('http');
const BufferList = require('bl');

const server = http.createServer((req, res) => {
  if(req.method === 'POST') {
    req.pipe(new BufferList((err, data) => {
      if (err) {
        return res.end(err);
      } else {
        if (data) {
          return res.end(data.toString().toUpperCase());
        } 
      }
      return res.end('');
    }));
  } else {
    res.end('only POST method');
  }
});

server.listen(process.argv[2]);
