const http = require('http');

http.createServer(function (request, response) {
    if(request.method === 'GET'){
        response.end('get response')
    }
    else if(request.method === 'PUT'){
        response.end('PUT response')
    }
    else if(request.method === 'POST'){
        response.end('POST response')
    }
    else if(request.method === 'DELETE'){
        response.end('DELETE response')
    }
    else{
        response.statusCode = 404;
        response.end('страница не найдена')
    }
}).listen(3000, '127.0.0.1', function () {
    console.log('сервер зарущен на 3000 порту');
});