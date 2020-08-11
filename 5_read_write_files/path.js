const path = require('path');
const log = console.log;

const filepath = path.resolve('./results.log'); //returns full path
log(filepath);
const directory = path.dirname(filepath); //returns path to current dir
log(directory)
const filename = path.basename(filepath); //returns base name
log(filename)
const newFilename = path.join(directory, 'results.data'); //adds 2nd paremeter to a path
log(newFilename)
const parsedPath = path.parse(newFilename); //parses path as an {}
log(parsedPath)