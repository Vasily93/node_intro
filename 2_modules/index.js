const express = require('express')

const server = express();

server.get('/', (req, res) => res.send('hello vasua yay'));

server.listen(8000)