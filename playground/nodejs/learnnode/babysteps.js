
if (process.argv.length <= 2) {
  console.error('Please input at least one argument!')
} else {
  const argvs = process.argv.slice(2)
  let sum = 0
  argvs.map((num) => {
    sum += Number(num)
  })
  console.log(sum)
}
