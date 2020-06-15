const spawn = require('child_process').spawn;
const dir = spawn('cmd.exe', ['/U', '/C', 'dir']);
const findstr = spawn('findstr', ['/c:index-']);

dir.stdout.setEncoding('utf16le');

dir.stdout.on('data', (data) => {
    console.log('dir stdout: ', data.toString());
})

dir.stdout.on('error', (err) => {
    console.log('dir error: ', err.toString());
})

dir.stdout.on('close', (code) => {
    console.log('dir close code: ', code);
})

dir.stdout.pipe(findstr.stdin);

findstr.stdout.on('data', (data) => {
    console.log('findcts stdout: ', data.toString());
})

findstr.stdout.on('close', (code) => {
    console.log('findstr close code: ', code);
})