const app = require('express')();
const { createClient } = require('webdav');
const fs = require('fs');
const client = createClient('https://webdav.yandex.ru', { username: 'metlapolina', password: 'mpg5858!' });

const port = 3000;

app.post('/md/:dir', (req, res) => {
    client.exists(`/${req.params.dir}`)
        .then((result) => {
            if (result) {
                res.status(408);
                res.end();
            } else {
                client.createDirectory(`/${req.params.dir}`);
                res.end('success');
            }
        })
        .catch((err) => {
            console.log(`----ERROR----\n${err}\n`);
        });
});

app.post('/rd/:dir', (req, res) => {
    client.exists(`/${req.params.dir}`)
        .then((result) => {
            if (result) {
                client.deleteFile(`/${req.params.dir}`);
                res.end('success');
            } else {
                res.status(408);
                res.end();
            }
        })
        .catch((err) => {
            console.log(`----ERROR----\n${err}\n`);
        });

});

app.post('/up/:file', (req, res) => {
    let ws = client.createWriteStream(`/${req.params.file}`);
    req.pipe(ws);
    ws.on('drain', function() {
        console.log('drain', new Date());
        req.resume();
    });
    req.on('end', function() {
        res.sendStatus(200);
    });
});

app.post('/down/:file', (req, res) => {
    client.exists(`/${req.params.file}`)
        .then((result) => {
            if (result) {
                client.createReadStream(`/${req.params.file}`).pipe(res);
            } else {
                res.status(404);
                res.end();
            }
        })
        .catch((err) => {
            console.log(`----ERROR----\n${err}\n`);
        });
});

app.post('/del/:file', (req, res) => {
    client.exists(`/${req.params.file}`)
        .then((result) => {
            if (result) {
                client.deleteFile(`/${req.params.file}`);
                res.end('success');
            } else {
                res.status(404);
                res.end();
            }
        })
        .catch((err) => {
            console.log(`----ERROR----\n${err}\n`);
        });
});

app.post('/copy/:from/:to', (req, res) => {
    client.exists(`/${req.params.from}`)
        .then((result) => {
            if (result) {
                client.copyFile(`${req.params.from}`, `${req.params.to}`);
                res.end('success');
            } else {
                res.status(404);
                res.end();
            }
        })
        .catch((err) => {
            console.log(`----ERROR----\n${err}\n`);
            res.status(408);
        });
});

app.post('/move/:from/:dir/:to', (req, res) => {
    client.exists(`/${req.params.from}`)
        .then((result) => {
            if (result) {
                client.moveFile(`/${req.params.from}`, `/${req.params.dir}/${req.params.to}`);
                res.end('success');
            } else {
                res.status(404);
                res.end();
            }
        })
        .catch((err) => {
            console.log(`----ERROR----\n${err}\n`);
            res.status(408);
        });
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});