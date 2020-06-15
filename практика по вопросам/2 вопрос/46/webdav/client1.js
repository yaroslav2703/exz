const request = require('request');
const fs = require('fs');
const rs = fs.createReadStream('Client.txt');

let options = 'http://localhost:3000/up/New.txt';

const req = request.post(options);

req.on('drain', function() {
    console.log('drain', new Date());
    rs.resume();
});

rs.on('end', function() {
    console.log('uploaded to ' + options);
});

req.on('error', function(err) {
    console.error('cannot send file to ' + options + ': ' + err);
});

rs.pipe(req);