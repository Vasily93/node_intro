const net = require('net');
const server = net.createServer(onConnection);
const log = console.log;

let count = 0;
let users = {};


const port = 5000;
server.listen(port, function onListen() {
    log(`listening on port ${port}`);
});

function onConnection(conn) {
    log('connection established')

    const message = `Welcome to <noder-char \\>
    ${count} other people are connected at this time.
    Please write your name and press enter... \n`;

    conn.setEncoding('utf8');
    conn.write(message);

    let name;
    count += 1;
    conn.on('data', function onData(data) {
        if(!name) {
            if(users[name]) {
                conn.write(`Name: ${data} already taken. Choose another one\n`);
            }
        } else {
            conn.write(`${name}: ${data}`)
        }
    });
    conn.on('close', () => {
        count -= 1;
        delete users[name];
        // conn.write();
        log(`${name} left the chat\n`)
    })
}
