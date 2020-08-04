const EventEmitter = require('events');

const ee = new EventEmitter();
const callback = (data) => {
    console.log('running now')
    console.log(data)
}
ee.on('run', callback)

let count = 0;
ee.emit('run', count);
count += 10;
ee.emit('run', count);
ee.removeListener('run', callback)

count += 10;
ee.emit('run')