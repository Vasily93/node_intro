const fs = require('fs');
const log = console.log;

const readStream = fs.createReadStream('./data.log');

readStream.setEncoding('utf8');

// readStream.on('open', () => {
//     log('opening tha file')
// });
readStream.on('data', (data) => {
    log(data)
});
// readStream.on('close', () => {
//     log('closing the file')
// });


// log(readStream);

module.exports = readStream;