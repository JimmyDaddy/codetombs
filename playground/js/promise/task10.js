
function alwaysThrows () {
  throw new Error("OH NOES")
}

function iterate(v) {
  console.log(v)
  return v + 1
}

Promise
  .resolve(1)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(null, (err) => console.log(err.message))
