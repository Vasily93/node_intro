const fs = require('fs');
const { Transform } = require('stream');
const transformOptions = { objectMode: true };
const log = console.log;

const rs = fs.createReadStream('./data.log');
const ws = fs.createWriteStream('./transform.data.log');
 

const metaTransform = new Transform(transformOptions);
metaTransform._transform = function(obj, encoding, callback) {
    log('meta')
    this.push({
        obj: obj.toString(),
        date: new Date()
    });
};
const jsonTransform = new Transform(transformOptions);
jsonTransform._transform = function(obj, encoding, callback) {
    log('json ')
    obj = JSON.stringify(obj);
    this.push(obj);
    callback()
};

rs.pipe(metaTransform)
    .pipe(jsonTransform)
    .pipe(ws);


