'use strict'

const p = first().then((v) => {
  return second(v)
})

p.then(console.log)