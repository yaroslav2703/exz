const app = require('express')();
const https = require('https');
const fs = require('fs');


let options = {
    key: fs.readFileSync(`${__dirname}/KYA.key`).toString(),
    cert: fs.readFileSync(`${__dirname}/KYA.crt`).toString()
};


https.createServer(options, (req, res) => {
  res.end('https');
}).listen(3000, () => {
  console.log('Listening on https://LAB22:3000 & https://KYA:3000');
}).on('error', (e) => { console.log(`Listener | error: ${e.code}`) });