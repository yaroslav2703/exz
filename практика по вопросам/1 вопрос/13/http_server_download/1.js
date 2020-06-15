var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    //let html = fs.readFileSync('./index.html');
    //response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.setHeader('Content-disposition', 'attachment; filename=index.txt');
    res.setHeader('Content-type', 'text/plain');
    res.end("Hello, here is a file for you!");
}).listen(5000);

console.log('Server running at http://localhost:5000/');