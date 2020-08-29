const url = require('url');
const querystring = require('querystring');

const apiUrl = 'http://jsonplaceholder.typicode.com/posts/1';
const parsedUrl = url.parse(apiUrl);
const {query} = parsedUrl;
const parsedQuery = querystring.parse(query);

console.log(parsedUrl)
console.log(parsedQuery)