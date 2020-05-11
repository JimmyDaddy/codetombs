
function all (p1, p2) {
  return new Promise((resolve, reject) => {
    let counter = 0
    const values = []
    p1.then((res1) => {
      values.push(res1)
      counter += 1
      if(counter === 2)
        resolve(values)
    })
    p2.then((res2) => {
      values.push(res2)
      counter += 1
      if(counter === 2)
        resolve(values)
    })
  })
}

all(getPromise1(), getPromise2()).then(console.log)