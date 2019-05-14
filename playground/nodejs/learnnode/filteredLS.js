const fs = require('fs')

fs.readdir(process.argv[2], (err, files) => {
  if (err) {
    console.error(err)
  }
  if (files && files.length > 0) {
    const filterd = files.filter((file) => file.endsWith(`.${process.argv[3]}`))
    filterd.map(f => {
      console.log(f)
    })
  }
})
