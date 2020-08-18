const net = require('net');
const port = 5000;
const handler = {
    retries: 0,
    maxRetries: 10,
    interval: 5000,
    quit: false,
    inputHandler(data) {
        if(data.toString().trim().toUpperCase() === 'QUIT') {
            this.quit = true;
            console.log('QUIT!');
            this.conn.end();
            process.stdin.pause();
        } else {
            this.conn.write(data)
        }
    },
    connect() {
        console.log('connecting...');
        this.conn = net.createConnection(port);
        this.conn.on('close', this.close.bind(this));
        this.conn.on('error', this.error.bind(this));
        process.stdin.resume()
        process.stdin.on('data', this.inputHandler.bind(this));
        this.conn.pipe(process.stdout, {end: false});
    },
    close() {
        console.log('Connection closed... Trying again');
        process.stdin.pause();
        this.reconnect();
    },
    error(err) {
        console.log(`Error: ${err}`);
        this.reconnect();
    },
    reconnect() {
        console.log('reconnecting...');
        
    }
};

handler.connect();
