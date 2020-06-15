const child = require('child_process');
const fp = child.fork('file-1.js');

const f = () => { console.log('file-1'); }
setInterval(f, 3000);

let x = 0;
const s = () => { fp.send(`from file-1: ${++x}`) };
setInterval(s, 6000);