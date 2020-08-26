const url = require('url');
const querystring = require('querystring');

const apiUrl = 'https://vasily.me/one/1?three=seven';
const parsedUrl = url.parse(apiUrl);
const {query} = parsedUrl;
const parsedQuery = querystring.parse(query);

console.log(parsedUrl)
console.log(parsedQuery)