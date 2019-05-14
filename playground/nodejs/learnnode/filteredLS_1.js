const fs = require('fs')
const path = require('path')

fs.readdir(process.argv[2], (err, files) => {
  if (err) {
    console.error(err)
  }
  if (files && files.length > 0) {
    const filterd = files.filter((file) => path.extname(file) === `.${process.argv[3]}`)
    filterd.map(f => {
      console.log(f)
    })
  }
})
