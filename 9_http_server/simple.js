const http = require("http");
// const fs = require('fs');
const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/pain'});
    response.end('Hello there form Node.js!')
});

server.listen(8080, () => {console.log('listening')})