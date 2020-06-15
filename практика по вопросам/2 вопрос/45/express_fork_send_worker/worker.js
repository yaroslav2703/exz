//node --experimental-worker worker.js

const { Worker, isMainThread, parentPort } = require('worker_threads')

console.log('start main');

let w1 = new Worker('./file-2.js');

const f = () => { console.log('main'); }
setInterval(f, 3000);

w1.on('online', () => {
    console.log('main: w1.on onliner');
    setTimeout((p) => { w1.postMessage('MAIN') }, 7000);
})