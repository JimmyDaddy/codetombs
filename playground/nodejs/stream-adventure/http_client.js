const request = require('request');

const stream = request.post('http://localhost:8099');
stream.pipe(process.stdout);
