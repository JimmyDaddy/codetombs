
const http = require('http')

http.get(process.argv[2], (res) => {
  res.setEncoding('utf8');
  res.on('data', (data) => {
    if (data) {
      console.log(data.toString())
    }
  })
  res.on('error', console.error);
}).on('error', console.error);
