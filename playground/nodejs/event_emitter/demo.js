const EventEmitter = require('./event_emitter');

const eventEmitter = new EventEmitter(10);

eventEmitter.addListener('hello', (name) => {
  console.log('====================================');
  console.log('hello', name);
  console.log('====================================');
})

eventEmitter.once('hello', (name, sexy) => {
  console.log('====================================');
  console.log('hello', name, 'you are', sexy? 'sexy' : 'dumb');
  console.log('====================================');
})

console.log(eventEmitter.listeners('hello'));

eventEmitter.emit('hello', 'john', false);

console.log(eventEmitter.listeners('hello'));
