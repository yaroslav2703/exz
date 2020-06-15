const JsonPRCServer = require('jsonrpc-server-http-nats');
const server = new JsonPRCServer();

let multi_validator = (param, res) => {
    if (!Array.isArray(param)) {
        throw new Error(`It's not Array: ${param}`);
    }

    return param;
};

let duo_validator = (param, res) => {
    if (!Array.isArray(param)) {
        throw new Error(`It's not Array: ${param}`);
    }
    if (param.length != 2) {
        throw new Error(`Two parameters are expected: ${param}`);
    }

    return param;
};

server.on('sum', multi_validator, (params, channel, res) => {
    res(null, params.reduce((a, b) => a + b));
});

server.on('mul', multi_validator, (params, channel, res) => {
    res(null, params.reduce((a, b) => a * b));
});

server.on('div', duo_validator, (params, channel, res) => {
    res(null, params[0] / params[1]);
});

server.on('proc', duo_validator, (params, channel, res) => {
    res(null, params[0] * 100 / params[1]);

});


server.listenHttp({ host: 'localhost', port: 3000 }, () => {
    console.log('Listening to http://localhost:3000');
});