const path = require('path');
const express = require('express');
const app = express();
const io = require('socket.io')(http);
const port = 9090;

console.log(io)

app.get('/', (req, res) => {
    const filepath = path.join(__dirname, 'index.html');
    res.sendFile(filepath);
});

app.listen(port, () => {
    console.log(`now listening on port ${port}`)
});


