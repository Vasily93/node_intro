const net = require('net');
const port = 5000;
const handler = {
    retries: 0,
    maxRetries: 10,
    interval: 5000,
    connect() {
        console.log('connecting...');
        this.conn = net.createConnection(port);
        this.conn.on('close', this.close.bind(this));
        this.conn.on('error', this.error.bind(this));
    },
    close() {
        console.log('closing.....')
    },
    error() {
        console.log('oops! something is wrong')
    },
    reconnect() {

    }
};

handler.connect();
