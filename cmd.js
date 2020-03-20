const EventEmitter = require('events');
const myEvent = new EventEmitter();

myEvent.on('vishnuTrigger', (p1, p2, obj) => {
  console.log('this is triggered by vish', p1, p2, obj);
  
});


myEvent.emit('vishnuTrigger', 1, 2, [{w: 'vishnu'}])
console.log(myEvent.eventNames());
