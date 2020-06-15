var http = require('http');
//var query = require('querystring');

//let params = query.stringify({x:3, y:4});
//let path = `/second?${params}`;

//console.log('path: ', path);


let path = '/get?x=7&y=8';

let options = {
    host: 'localhost',
    path: path,
    port: 3000,
    method: 'GET'
}
const req = http.request(options, (res)=>{
    console.log('method: ', req.method);    
    console.log('path: ', path);
    console.log('response: ', res.statusCode);
    console.log('statusMessage: ', res.statusMessage);
    console.log('remoteAddress: ', res.socket.remoteAddress);
    console.log('remotePort: ', res.socket.remotePort);
    console.log('response headers: ', res.headers);

    let data ='';
    res.on('data', (chunk)=>{
        data += chunk.toString('utf-8');
    });
    res.on('end', ()=>{console.log('end: body: ', data);});
});

req.on('error', (e)=>{console.log('error: ', e.message);});
req.end();