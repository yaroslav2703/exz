const redis = require("redis");

const client = redis.createClient('//redis-12800.c10.us-east-1-2.ec2.cloud.redislabs.com:12800', { password: '92X7yUB9CCKS60tPG0RgnSUrp0t4JzWZ' });

client.on("ready", () => { console.log("ready"); });
client.on("error", (err) => { console.log("error " + err); });
client.on("connect", () => { console.log("connect"); });
client.on("end", () => { console.log("end"); });

var count = 10000;
startIncr(client, count);
startDecr(client, count);

function startIncr(client, count) {
    let timer = Date.now();
    for (let i = 0; i < count; i++) {
        client.incr('incr_decr', () => {
            if (++i == count) {
                console.log(`incr: ${Date.now() - timer} ms`);
            }
        });
    }
}

function startDecr(client, count) {
    let timer = Date.now();
    for (let i = 0; i < count; i++) {
        client.decr('incr_decr', () => {
            if (++i == count) {
                console.log(`decr: ${Date.now() - timer} ms`);
            }
        });
    }
}

client.quit();