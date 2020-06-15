const redis = require("redis");

const client = redis.createClient('//redis-12800.c10.us-east-1-2.ec2.cloud.redislabs.com:12800', { password: '92X7yUB9CCKS60tPG0RgnSUrp0t4JzWZ' });

client.on("ready", () => { console.log("ready"); });
client.on("error", (err) => { console.log("error " + err); });
client.on("connect", () => { console.log("connect"); });
client.on("end", () => { console.log("end"); });

var count = 10000;
startSet(client, count);
startGet(client, count);
startDel(client, count);

function startSet(client, count) {
    let timer = Date.now();
    for (let i = 0; i < count; i++) {
        client.set(i, `set ${i}`, () => {
            if (++i == count) {
                console.log(`set: ${Date.now() - timer} ms`);
            }
        });
    }
}

function startGet(client, count) {
    let timer = Date.now();
    for (let i = 0; i < count; i++) {
        client.get(i, () => {
            if (++i == count) {
                console.log(`get: ${Date.now() - timer} ms`);
            }
        });
    }
}

function startDel(client, count) {
    let timer = Date.now();
    for (let i = 0; i < count; i++) {
        client.del(i, () => {
            if (++i == count) {
                console.log(`del: ${Date.now() - timer} ms`);
            }
        });
    }
}

client.quit();