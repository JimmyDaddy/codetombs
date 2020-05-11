
function parsePromised (json) {
  const p = new Promise((resolve, reject) => {
    try {
      const obj = JSON.parse(json)
      resolve(obj)
    } catch (error) {
      reject(error)
    }
  })
  return p
}

// parsePromised(process.argv[2]).then(null, (err) => console.log(err.message))

parsePromised(process.argv[2]).catch((err) => console.log(err.message))
