const { Telegraf } = require('telegraf');
const { service } = require('./services/service');
const { votedUsers, unvotedUsers } = require('./pseudo-database/users');

const config = require('./config/config');
const BOT_TOKEN = config.BOT_TOKEN;

const bot = new Telegraf(BOT_TOKEN);

let originalPolls = null;
const results = [];
const ids = [];

bot.command('startVoting', async ctx => {
  // service.pollCron(() => service.generatePollsSet(ctx));
  const polls = await service.generatePollsSet(ctx);
  originalPolls = polls;

  bot.on('poll_answer', async ctx => {
    results.push(ctx.pollAnswer);
    ids.push(ctx.pollAnswer.poll_id);
    console.log(ctx.pollAnswer);
  });
});

bot.command('results', async ctx => {
  const response = [];
  if (!originalPolls) {
    return ctx.reply("We don't have polls for you");
  }
  originalPolls.forEach(async originalPoll => {
    await ctx.reply(`"${originalPoll.question}"\n Ті, хто голосував: `);

    const originalPollId = originalPoll.poll_id;

    let i = 1;
    results.forEach(async res => {
      if (res.id === originalPollId) {
        const member = `${i}. ${res.user.first_name} - @${res.user.username}`;
        response.push(member);
      }
      i += 1;
    });

    await ctx.reply(response.join('\n'));
  });
});

/**
 * RESPONSE FORMAT:
 *
 * - має вертати тему голосування
 * - має вертати присутніх
 */

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
