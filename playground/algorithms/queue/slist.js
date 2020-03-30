function Node (value) {
  this.value = value
  this.next = null
  this.setNext = function (nextNode) {
    this.next = nextNode
  }
}

function Queue (firstNode) {
  this.first = firstNode
  this.last = firstNode

  this.push = function (value) {
    this.last.setNext(value)
    this.last = value
  }

  this.shift = function (value) {
    value.setNext(this.first)
    this.first = value
  }

  this.unshift = function () {
    this.first = this.first.next
  }

  this.pop = function () {
    var it = this.first
    var itPrev = null
    while (it.next) {
      itPrev = it
      it = it.next
    }
    itPrev.next = null
  }

  this.ouput = function () {
    var it = this.first
    while (it) {
      console.log(it.value)
      it = it.next
    }
  }
}

var queue = new Queue(new Node(1))

queue.push(new Node(2))

queue.push(new Node(3))

queue.ouput()

console.log('====================================')
queue.shift(new Node(0))

queue.ouput()

console.log('====================================')

queue.unshift()

queue.ouput()

console.log('====================================')

queue.pop()

queue.ouput()
console.log('====================================')
