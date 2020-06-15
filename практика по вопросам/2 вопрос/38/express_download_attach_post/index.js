const app = require('express')();
const fs = require('fs');

app.get('/download', (req, res, next) => {
    console.log('download');
    res.download('./file.txt', 'file.txt');
})

app.get('/attachment', (req, res, next) => {
    console.log('attachment');
    res.attachment('./file.txt');
    let rs = fs.ReadStream('./file.txt');
    rs.pipe(res);
})

app.listen(3000);