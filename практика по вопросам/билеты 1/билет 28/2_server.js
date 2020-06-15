let http = require('http');
let url = require('url');
let fs = require('fs');

let server = http.createServer((request, response)=>{
    let parsedUrl = url.parse(request.url, true);
    if (parsedUrl.pathname === '/' && request.method == 'GET') {
        let path = __dirname+'/MyFile.txt';
        fs.access(path, fs.constants.R_OK, err=>{
            if(err){
                response.statusCode=404;
                response.end('Resourse not found!');
            }else{
                fs.createReadStream(path).pipe(response);
            }
        })
    }
}).listen(3000);
