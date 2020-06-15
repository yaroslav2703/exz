var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer((request, response)=>{
    if(url.parse(request.url).pathname==='/api/name'){
        response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
        response.end('Метла Полина Георгиевна');
    }
    else if(url.parse(request.url).pathname==='/request'){
        let html = fs.readFileSync('./2_test.html');
        response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        response.end(html);
    }
}).listen(5000);

console.log('Server running at http://localhost:5000/');
