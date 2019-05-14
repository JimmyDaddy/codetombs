const fs = require('fs');
const path = require('path');

module.exports = (dirname, extname, callback) => {
  const _myCallback = callback && typeof callback === 'function'? callback : function () {};
  if (!dirname || typeof dirname !== 'string') {
    return _myCallback(new Error('dirname needed!'));
  }
  if (!extname || typeof extname !== 'string') {
    return _myCallback(new Error('dirname needed!'));
  }

  fs.readdir(path.resolve(dirname), (err, files) => {
    if (err) {
      return _myCallback(err);
    }
    let filterd = [];
    if (files && files.length > 0) {
      filterd = files.filter((file) => path.extname(file) === `.${extname}`)
    }
    return _myCallback(null, filterd)
  })
}