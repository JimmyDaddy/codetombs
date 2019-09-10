let str = '';
process.stdin.on('data', (data) => {
  str += data.toString().toUpperCase();
}).on('end', () => {
  process.stdout.write(str)
})
