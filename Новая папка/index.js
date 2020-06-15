const app = require('express')();
const https = require('https');
const fs = require('fs');


let options = {
  key: fs.readFileSync(__dirname + '\\cerificates\\KYA.key').toString(),
  cert: fs.readFileSync(__dirname + '\\cerificates\\KYA.crt').toString()
};

https.createServer(options, (req, res) => {
  console.log('hello from https');
  res.end('hello from https');
}).listen(3000, () => {
  console.log('Listening on https://localhost:3000 & https://LAB22:3000 & https://KYA:3000');
}).on('error', (e) => { console.log(`Listener | error: ${e.code}`) });

