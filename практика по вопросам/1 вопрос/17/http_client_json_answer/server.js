var http = require('http');
let url = require('url');
let fs = require('fs');
let parseString = require('xml2js').parseString;
let mp = require('multiparty');


let server = http.createServer((request, response) => {
    let parsedUrl = url.parse(request.url, true);

    if (parsedUrl.pathname === '/') {
        response.statusCode = '201';
        response.end("first task of lab09");
    } else if (parsedUrl.pathname === '/fourth') {
        let params = JSON.stringify({
            __comment: "comment",
            x: 1,
            y: 2,
            s: "message",
            m: ["a", "b"],
            o: { surname: "Metla", name: "Polina" }
        });
        response.end(params);
    }
}).listen(5000);

console.log('Server running at http://localhost:5000/');