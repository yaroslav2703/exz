const { parentPort } = require('worker_threads');

console.log('start w1');

const f = () => { console.log('w1'); }
setInterval(f, 6000);

parentPort.on('message', (m) => { console.log(m) });