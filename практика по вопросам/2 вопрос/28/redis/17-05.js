const redis = require("redis");

const sub_client = redis.createClient('//redis-12800.c10.us-east-1-2.ec2.cloud.redislabs.com:12800', { password: '92X7yUB9CCKS60tPG0RgnSUrp0t4JzWZ' });
const pub_client = redis.createClient('//redis-12800.c10.us-east-1-2.ec2.cloud.redislabs.com:12800', { password: '92X7yUB9CCKS60tPG0RgnSUrp0t4JzWZ' });

sub_client.on('subscribe', (channel, count) => {
    console.log(`subscribe: channel = ${channel}, count = ${count}`);
});
sub_client.on('message', (channel, message) => {
    console.log(`sub channel = ${channel} : ${message}`);
});
sub_client.on('unsubscribe', (channel) => {
    console.log(`unsubscribe: channel = ${channel}`);
});

var channel = 'channel-01';

sub_client.subscribe(channel);

let mess = setInterval(() => {
    pub_client.publish(channel, 'message from publisher');
}, 1000);

setTimeout(() => {
    sub_client.unsubscribe(channel);
    clearInterval(mess);
    pub_client.quit();
    sub_client.quit()
}, 10000);