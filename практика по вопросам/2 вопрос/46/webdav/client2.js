const http = require('http');
const fs = require('fs');
const file = fs.createWriteStream('./FromServer.txt');
let options = {
    host: 'localhost',
    path: '/down/ref.txt',
    port: 3000,
    method: 'POST'
}
const req = http.request(options, (res) => {
    res.pipe(file);
});
req.on('error', (e) => {
    console.log('http.request: error:', e.message);
});
req.end();