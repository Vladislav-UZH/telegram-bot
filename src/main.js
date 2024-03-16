const { Telegraf } = require('telegraf');
const { service } = require('./services/service');
const { votedUsers, unvotedUsers } = require('./pseudo-database/users');

const config = require('./config/config');
const BOT_TOKEN = config.BOT_TOKEN;

const bot = new Telegraf(BOT_TOKEN);

bot.command('startCreatingPolls', ctx => {
  service.pollCron(() => service.generatePollsSet(ctx));
});

bot.command('getPollsResults', async ctx => {
  service.getPollsResults(ctx, votedUsers, unvotedUsers);
});

bot.command('stopCreatingPolls', ctx => {
  service.stopCron(service.startCron());
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
