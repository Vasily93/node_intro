const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 8080;

const server = http.createServer();
server.on('request', requestHandler);
server.listen(port, onListen);

function onListen() {
    console.log(`listening on ${port}`)
};

function requestHandler(req, res) {
    let filepath;
    switch(req.url) {
        case '/':
        case '/hello':
            filepath = path.join(__dirname, 'public', 'index.html');
            res.writeHead(200);
            break;
        default:
            filepath = path.join(__dirname, 'errors', '404.html');
            res.writeHead(404);
            break;
    }
    const rs = fs.createReadStream(filepath);
    rs.pipe(res);
};
