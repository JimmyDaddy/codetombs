
const net = require('net');

const fillZero = (num) => num < 10? `0${num}`: num;

const server = net.createServer((socket) => {
  const date = new Date();
  socket.end(`${date.getFullYear()}-${fillZero(date.getMonth()+1)}-${fillZero(date.getDate())} ${fillZero(date.getHours())}:${fillZero(date.getMinutes())}\n`);
});

server.listen(process.argv[2]);
