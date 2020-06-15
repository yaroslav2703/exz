const fs = require('fs');
const { createClient } = require('webdav');

const client = createClient('https://webdav.yandex.ru', { username: 'metlapolina', password: 'Mpg5858!' });

client.exists('/MyDirectory')
    .then((result) => {
        if (result) return client.deleteFile('/MyDirectory');
        else return true;
    })
    .then(() => {
        return client.createDirectory('/MyDirectory');
    })
    .catch((err) => {
        console.log(`----ERROR----\n${err}\n`);
    });

client.exists('/Sea.jpg')
    .then((result) => {
        client.createReadStream('/Sea.jpg').pipe(fs.createWriteStream('./Sea2.jpg'))
    })
    .catch((err) => {
        console.log(err);
    })

let rs = fs.createReadStream('./Sea2.jpg');
let ws = client.createWriteStream('/MyDirectory/Sea2.jpg');
rs.pipe(ws);

//client.copyFile('/Sea.jpg', '/MyDirectory/Sea.jpg');

//client.moveFile('/Winter.jpg', '/MyDirectory/Winter.jpg');