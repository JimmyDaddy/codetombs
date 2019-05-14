
const http = require('http');
const BufferList = require('bl');

const httpResponseFunc = (url, pipeEnd) => {
  http.get(url, (res) => {
    // const bl = new BufferList();
    res.pipe(new BufferList((err, data) => {
      if (err) {
        return console.error(err)
      }
      if (data) {
        const s = data.toString();
        console.log(s);
        if (pipeEnd && typeof pipeEnd === 'function') {
          pipeEnd();
        }
      }
    }))
  }).on('error', console.error);
}

// const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

// const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

httpResponseFunc(
  process.argv[2], 
  () => httpResponseFunc(
    process.argv[3], 
    () => httpResponseFunc(process.argv[4])
  )
);
