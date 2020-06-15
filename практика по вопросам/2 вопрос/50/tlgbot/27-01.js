const TelegramBot = require('node-telegram-bot-api');
const config = require('./config.json');
const bot = new TelegramBot(config.token, { polling: true });

bot.on('message', (message) => {
    let id = message.chat.id;

    if (message.text) {
        bot.sendMessage(id, `echo: ${message.text}`);
    } else {
        bot.sendMessage(id, 'Send a text message, please');
    }
});