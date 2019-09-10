const through2 = require('through2');
const split = require('split');

let linnum = 1;
const stream = through2(function (chunk, enc, next) {
  if (linnum % 2 === 0) {
    this.push(`${chunk.toString().toUpperCase()}\n`);
  } else {
    this.push(`${chunk.toString().toLowerCase()}\n`);
  }
  linnum += 1;
  next();
});

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);