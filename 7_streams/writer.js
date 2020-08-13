const fs = require('fs');
const rs = require('./reader');
const log = console.log;

// log(rs)

const writeStream = fs.createWriteStream('./data.new.log');
writeStream.write('yay!')
rs.pipe(writeStream)