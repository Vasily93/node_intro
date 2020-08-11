const fs = require('fs');
const log = console.log;

log(fs.existsSync('./results.log')); // returns true if file exists


log(fs.readFileSync('./results.log').toString()); //sinc call

//try to use async calls whenever possible

const advice = 'Vasily! You wrote it here with writeFile()';

fs.writeFile('results.log', advice, (err) => {
    if(err) {
        console.log('error');
    }
})


log(fs.readFile('./results.log', (err, data) => console.log( data.toString()))); // async call