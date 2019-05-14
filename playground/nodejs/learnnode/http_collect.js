
const http = require('http')

http.get(process.argv[2], (res) => {
  let result = '';
  res.setEncoding('utf8');
  res.on('data', (data) => {
    if (data) {
      result += data.toString();
    }
  })
  res.on('error', console.error);
  res.on('end', () => {
    console.log(result.length)
    console.log(result)
  })
}).on('error', console.error);
