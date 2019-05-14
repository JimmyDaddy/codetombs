
const http = require('http');
const BufferList = require('bl');

http.get(process.argv[2], (res) => {
  // const bl = new BufferList();
  res.pipe(new BufferList((err, data) => {
    if (err) {
      return console.error(err)
    }
    if (data) {
      const s = data.toString();
      console.log(s.length);
      console.log(s);
    }
  }))
}).on('error', console.error);
