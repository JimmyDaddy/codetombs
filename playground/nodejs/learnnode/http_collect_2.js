
const http = require('http');
const concat = require('concat-stream');

http.get(process.argv[2], (res) => {
  const concatStream = concat((data) => {
    if (data) {
      const s = data.toString();
      console.log(s.length);
      console.log(s);
    }
  });
  res.on('error', console.error);
  res.pipe(concatStream);
}).on('error', console.error);
