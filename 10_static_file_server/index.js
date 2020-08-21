const http = require('http');
const path = require('path');
const fs = require('fs');

const port = 8080;
const server = http.createServer(handler);
const rootFolder = './public';
server.listen(port, onListen);



function onListen() {
    console.log('now listening on port 8080')
}

function handler(req, res) {
    const filePath = path.join(`${rootFolder}`, `${req.url}`)
    if(fs.existsSync(filePath)) {
        const rs = fs.createReadStream(filePath);
        rs.pipe(res);
    } else {
        handle404(res);
    }    
}

function handle404(res) {
    res.writeHead(404);
    res.end('File not found, try again');
}