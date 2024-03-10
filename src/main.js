const { Telegraf } = require('telegraf');

/**
 * робим, так, шоб можна було викроистати сервіси, але не можна було в сервісах використати бота
 */

const { service } = require('./services/service');

//

const config = require('./config/config');
const BOT_TOKEN = config.BOT_TOKEN;

const bot = new Telegraf(BOT_TOKEN);

bot.command('createPoll', async ctx => {
  await ctx.reply(
    service.createPoll(
      'createPoll',
      async ctx => await ctx.replyWithPoll('1', ['2', '3']),
    ),
  );
});

bot.launch(console.log('bot on work'));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

// module.exports = { bot };

// const { bot } = require('./app');
// const { database } = require('./database/connect.database');

// async function execute() {
//   // await database.connect();

//   bot.start();
//   // Enable graceful stop
//   process.once('SIGINT', () => bot.stop('SIGINT'));
//   process.once('SIGTERM', () => bot.stop('SIGTERM'));
// }

// execute();

///////////////

// код без модулів

// bot.command('createPoll', ctx => {
//   ctx.reply(
//     createPoll('createPoll', ctx => ctx.replyWithPoll('1', ['2', '3'])),
//   );
// });

// async function createPoll(event, listener) {
//   bot.on(event, listener);
// }
