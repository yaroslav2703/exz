const express = require('express');
const app = express();
const cookieparser = require('cookie-parser')();

app.use(cookieparser);

app.get('/', (req, res, next) => {
    let myid = req.cookies.myid;
    if (isFinite(myid)) ++myid;
    else myid = 0;

    if (myid > 5)
        res.clearCookie('myid').send(`myid = ${myid=0}`)
    else
        res.cookie('myid', myid).send(`myid = ${myid}`);
});

app.listen(3000, () => console.log('Start server, port: 3000'));