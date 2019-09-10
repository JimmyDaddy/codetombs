const fs = require('fs');
const path = require('path');

fs.createReadStream(path.resolve(process.argv[2])).pipe(process.stdout);
