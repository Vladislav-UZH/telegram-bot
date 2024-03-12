const { Telegraf } = require('telegraf');
const { service } = require('./services/service');

const config = require('./config/config');
const BOT_TOKEN = config.BOT_TOKEN;

const bot = new Telegraf(BOT_TOKEN);

// With Cron & interval
bot.command('startPoll', ctx => {
  // service.pollCron(
  service.pollInterval(
    service.createPoll(
      ctx.telegram.sendPoll(ctx.message.chat.id, 'test', ['1', '2']),
    ),
  );
  // );
});

// With Cron
// bot.command('createPoll', ctx => {
//   service.pollCron(
//     service.createPoll(
//       ctx.telegram.sendPoll(ctx.message.chat.id, 'test', ['2', '3']),
//     ),
//   );
// });

// Without Cron
// bot.command('createPoll', ctx => {
//   service.createPoll(
//     ctx.telegram.sendPoll(ctx.message.chat.id, 'test', ['2', '3']),
//   );
// });

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
