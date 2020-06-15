var http = require('http');
let url = require('url');
let fs = require('fs');
let mp = require('multiparty');


let server = http.createServer((request, response) => {
    let parsedUrl = url.parse(request.url, true);

    if (parsedUrl.pathname === '/') {
        response.statusCode = '201';
        response.end("first task of lab09");
    } else if (parsedUrl.pathname === '/fourth') {
        let data = '';
        request.on('data', (chunk) => {
            data += chunk;
        });
        request.on('end', () => {
            data = JSON.parse(data);
            response.writeHead(200, { 'Content-type': 'application/json; charset=utf-8' });
            let comment = 'Ответ.' + data.__comment;
            let resp = {};
            resp.__comment = comment;
            resp.x_plus_y = data.x + data.y;
            resp.Concatenation_s_o = data.s + ': ' + data.o.surname + ', ' + data.o.name;
            resp.Length_m = data.m.length;
            response.end(JSON.stringify(resp));
        });
    }
}).listen(5000);

console.log('Server running at http://localhost:5000/');