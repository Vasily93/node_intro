const http = require("http");
const fs = require('fs');
const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'video/mp4'});
    const rs = fs.createReadStream('./teleport.mp4');
    rs.pipe(response);
});

server.listen(8080, () => {console.log('listening')})