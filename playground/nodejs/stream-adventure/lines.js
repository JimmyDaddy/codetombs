let str = '';
let linnum = 1;
process.stdin.on('data', (data) => {
  if (linnum % 2 === 0) {
    str += data.toString().toUpperCase();
  } else {
    str += data.toString().toLowerCase();
  }
  linnum += 1;
}).on('end', () => {
  process.stdout.write(str)
})