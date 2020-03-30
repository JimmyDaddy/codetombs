function Scheduler () {
  this.concurrency = 2
  this.running = 0
  this.queue = []
  this.add = function (task) {
    return new Promise(resolve => {
      this.queue.push({
        taskGenerator: task,
        resolve
      })
      this.schedule()
    })
  }
  this.schedule = function() {
    while (this.queue.length > 0 && this.running < this.concurrency) {
      const curTask = this.queue.shift()
      this.running += 1
      curTask.taskGenerator().then(result => {
        this.running -= 1
        curTask.resolve(result)
        this.schedule()
      })
    }
  }
}

const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time)
})

const scheduler = new Scheduler() 
const addTask = (time, order) => {
  scheduler.add(
      () => timeout(time), order
  ).then(
      () =>
          console.log(order)
    )
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')