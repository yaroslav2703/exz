var http = require('http');
let url = require('url');

let server = http.createServer((request, response)=>{
    let parsedUrl = url.parse(request.url, true);
    if (parsedUrl.pathname === '/' && request.method == 'POST') {
        let data = '';
        request.on('data', (chunk) => {
            data += chunk;
        });
        request.on('end', () => {
            data = JSON.parse(data);
            response.writeHead(200, {'Content-type': 'application/json; charset=utf-8'});
            response.end("Params: "+data.x+", "+data.y+", "+data.s);
        });
    }
}).listen(3000); 