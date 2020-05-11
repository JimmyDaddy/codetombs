
function attachTitle(v) {
  return 'DR. '+v
}

Promise.resolve('MANHATTAN')
      .then(attachTitle)
      .then(console.log);