const http = require('http')
const qs = require('qs')

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (qs.parse(req.url.split('?'))[1]) {
    res.write(qs.parse(req.url.split('?')[1]).num)
  }
  res.end()
})
server.on('connection', () => {
  console.log('connect');
})

server.listen(3000)