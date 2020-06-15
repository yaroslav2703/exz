const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {

    if(request.url === '/'){
        response.end(fs.readFileSync('./home.html'));
    }
    else if( request.url === '/api/fetch'){
        console.log("Url: " + request.url);
        console.log("Тип запроса: " + request.method);
        console.log("User-Agent: " + request.headers["user-agent"]);
        console.log("Все заголовки");
        console.log(request.headers);

        response.setHeader("UserId", 12);
        response.setHeader("Content-Type", "text/html; charset=utf-8;");
        response.write("hello world");
        response.end();
    }
    else{
        response.end();
    }


}).listen(3000, '127.0.0.1', function () {
    console.log("Сервер начал прослушивание запросов на порту 3000");
});