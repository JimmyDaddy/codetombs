const through2 = require('through2');
const stream = through2(function (chunk, enc, next) {
  this.push(chunk.toString().toUpperCase());
  next();
});

process.stdin.pipe(stream).pipe(process.stdout);