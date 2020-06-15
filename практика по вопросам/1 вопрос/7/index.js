const http = require('http');
const fs = require('fs');

http.createServer(function (req, resp) {
    switch(req.url) {
        case '/html' :
            let html = fs.readFileSync("./..");
            resp.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            resp.end(html);
            break;
        case '/png' :
            let jpg = fs.readFileSync('./..');
            resp.writeHead(200, {'Content-Type': 'image/jpeg; charset=utf-8'});
            resp.end(jpg, 'binary');
            break;
        default:
            resp.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
            resp.end('404 page not found');

    }
}).listen(3000, '127.0.0.1', function () {
    console.log('сервер зарущен на 3000 порту');
});