const path = require('path');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketio = require('socket.io');
const port = 9090;

const io = socketio(server);

const points = [];

app.get('/', (req, res) => {
    const filepath = path.join(__dirname, 'index.html');
    res.sendFile(filepath);
});

app.get('/analytics', (req, res) => {
    const filepath = path.join(__dirname, 'analysis.html');
    res.sendFile(filepath);
});

io.on('connection', socket => {
    console.log('connected')
    socket.on('click', msg => {
        const {x, y} = msg;
        points.push({x, y});
    });
    socket.on('retrieve', () => {
        io.emit('analytics', points)
    })
});

server.listen(port, () => {
    console.log(`now listening on port ${port}`)
});


