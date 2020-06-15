var http=require('http');
const fs=require('fs');

let options= {
    host: 'localhost',
    path: '/',
    port: 3000,
    method:'GET'
}

const req = http.request(options,(res)=> {
    let file=fs.createWriteStream('Client.txt');
    res.pipe(file);
}); 
req.on('error', (e)=> {
    console.log('http.request: error:', e.message);
});
req.end();