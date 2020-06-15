const http = require('http');

http.createServer(function (req, resp) {
    let Url = req.url;
    Url = new RegExp('[\?&]' + 'x' + '=([^&#]*)').exec(Url);
    resp.end(Url)

}).listen(3000, '127.0.0.1', function () {
    console.log('сервер запущен на 3000 порту');
});