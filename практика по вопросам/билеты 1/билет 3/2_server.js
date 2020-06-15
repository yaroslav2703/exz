let http = require('http');
let url = require('url');

let server = http.createServer((request, response)=>{
    let parsedUrl = url.parse(request.url, true);

    if (parsedUrl.pathname === '/get' && request.method == 'GET') {
        let x = Number(parsedUrl.query.x);
        let y = Number(parsedUrl.query.y);
        if(Number.isInteger(x) && Number.isInteger(y)){
            response.end('x+y='+(x+y)+
                        '\nx-y='+(x-y)+
                        '\nx*y='+(x*y)+
                        '\nx/y='+(x/y));
        }else{
            response.end('Error: values are not integers');
        }
    }
}).listen(3000);