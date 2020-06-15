var http = require('http');

let options = {
    host: 'localhost',
    path: '/fourth',
    port: 5000,
    method: 'GET'
}
const req = http.request(options, (res) => {
    console.log('method: ', req.method);
    console.log('response: ', res.statusCode);
    console.log('statusMessage: ', res.statusMessage);
    let comment;
    let resp = {};
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
        data = JSON.parse(data);
        comment = 'Ответ.' + data.__comment;
        resp = {};
        resp.__comment = comment;
        resp.x_plus_y = data.x + data.y;
        resp.Concatenation_s_o = data.s + ': ' + data.o.surname + ', ' + data.o.name;
        resp.Length_m = data.m.length;
    });
    res.on('end', () => { console.log(`${resp.Concatenation_s_o},${resp.Length_m},${resp.x_plus_y},${resp.__comment}`) });
});

req.on('error', (e) => { console.log('error: ', e.message); });
req.end();