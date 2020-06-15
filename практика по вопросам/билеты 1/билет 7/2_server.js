var http = require('http');

let HTTP404 = (req, res) =>{
    console.log(`${req.method}, ${req.url}, HTTP status 404`);
    res.writeHead(404, {'Content-Type':'application/json; charset=utf-8'});
    res.end(`{"error ${req.method}":"${req.url}, HTTP status 404"}`);
}

let debug_handler = (req, res)=>{
    console.log(req.method, req.url);
    res.writeHead(200, {'Content-Type':'application/json; charset=utf-8'});
    res.end(`{"${req.method}":"${req.url}"}`);
}

let http_handler = (req, res)=>{
    switch(req.method){
        case 'GET': debug_handler(req, res); break;
        case 'POST': debug_handler(req, res); break;
        case 'PUT': debug_handler(req, res); break;
        case 'DELETE': debug_handler(req, res); break;
        default: HTTP404(req,res); break;
    }
}

let server = http.createServer();
server.listen(3000, (v)=>{console.log('server.listen(3000)')})
    .on('error', (e)=>{console.log('error: ', e.code)})
    .on('request', http_handler);