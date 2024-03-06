const { bot } = require('./app');
const { database } = require('./database/connect.database');

async function execute() {
  await database.connect();

  bot.start();
  // Enable graceful stop
  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));
}

execute();
