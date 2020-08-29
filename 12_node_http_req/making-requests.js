const http = require("http");
const url = require('url');

const apiUrl = 'http://jsonplaceholder.typicode.com/posts';
// http.get(apiUrl, responseHandler);

const data = {
    title: 'Vasily',
    body: 'perfect',
    userId: '991'
}

const options = {
    host: 'jsonplaceholder.typicode.com',
    path: '/posts',
    method: 'POST',
    headers: {
            "Content-type": 'application/json'
        }
    }
    const request = http.request(options, responseHandler);
    request.write(JSON.stringify(data))
    request.end()

function responseHandler(response) {
    response.pipe(process.stdout)
}