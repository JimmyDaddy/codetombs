// 'use strict'
// const promise = new Promise((resolve, reject) => {
//   reject(new Error('error'))
// })

// promise.catch((err) => console.log(err.message))

// const promise1 = new Promise((resolve, reject) => {
//   resolve('resolve')
// })

// promise1.then(console.log)
// const promise2 = Promise.resolve('resolve1')
// promise2.then(console.log)
// const promise3 = Promise.reject(new Error('error3'))
// promise3.then(console.log)
// promise3.catch((err) => console.log(err.message))

    
var message;
var promise;

function randomBytes(n) {
  return (Math.random() * Math.pow(256, n) | 0).toString(16);
}

message =
  'A fatal exception ' + randomBytes(1) + ' has occurred at ' +
  randomBytes(2) + ':' + randomBytes(4) + '. Your system\nwill be ' +
  'terminated in 3 seconds.';

promise = Promise.reject(new Error(message));

promise.catch(function (err) {
  var i = 3;

  process.stderr.write(err.message);

  setTimeout(function boom() {
    process.stderr.write('\rwill be terminated in ' + (--i) + ' seconds.');
    if (!i) {
      process.stderr.write('\n..... . . . boom . . . .....\n');
    } else {
      setTimeout(boom, 1000);
    }
  }, 1000);
});