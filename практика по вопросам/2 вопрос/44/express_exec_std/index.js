const exec = require('child_process').exec;
const dir = exec('dir ', { encoding: 'utf8' }, (error, stdout, stderr) => {
    console.log(stdout);
})

const app = exec('app', { cwd: 'C:\\Users\\Tom\\Desktop\\пскп\\express_exec_std\\app\\app\\bin\\Debug' }, (error, stdout, stderr) => {
    if (stderr) {
        console.log(`stderr: ${stderr}`);
    } else {
        console.log(`stdout: ${stdout}`);
    }
})
app.stdin.write('from Node');
app.stdin.end();