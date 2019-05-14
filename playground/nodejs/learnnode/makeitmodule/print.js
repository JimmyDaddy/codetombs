const mmode = require('./mmodule');

mmode(process.argv[2], process.argv[3], (err, files) => {
  if (err) {
    console.error(err)
  }
  if (files && files.length > 0) {
    files.map(f => {
      console.log(f)
    })
  }
})
