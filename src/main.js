const { Telegraf } = require('telegraf');
const { service } = require('./services/service');
const { votedUsers, unvotedUsers } = require('./pseudo-database/users');

const config = require('./config/config');
const { func } = require('joi');
const BOT_TOKEN = config.BOT_TOKEN;

const bot = new Telegraf(BOT_TOKEN);

let originalPolls = null;
const results = [];
// const ids = [];

bot.command('startVoting', async ctx => {
  // service.pollCron(() => service.generatePollsSet(ctx));
  const polls = await service.generatePollsSet(ctx);
  originalPolls = polls;

  bot.on('poll_answer', async ctx => {
    results.push(ctx.pollAnswer);
    // ids.push(ctx.pollAnswer.poll_id);
    // console.log(ctx.pollAnswer);
    console.log(results);
  });
});

function getVotedUsers() {
  const votedUsers = results.map(vote => {
    return {
      poll_id: vote.poll_id,
      user: {
        id: vote.user.id,
        first_name: vote.user.first_name,
        username: vote.user.username,
      },
      isAttend: !!vote.option_ids[0],
    };
  });
  return votedUsers;
}
function getPollResults(pollId) {
  const students = [];
  const voters = getVotedUsers();

  for (const voter of voters) {
    if (pollId === voter.poll_id) {
      students.push(voter);
    }
  }

  return students;
}

bot.command('results', async ctx => {
  async function checkPolls(origPolls) {
    for (const { id, question } of origPolls) {
      const students = getPollResults(id);
      console.log('3123141413', students);
      await sendResult({ students, subject: question });
    }
  }
  async function sendResult(result) {
    const { students, subject } = result;
    const attended = students.filter(student => {
      return student.isAttend;
    });

    const notAttended = students.filter(student => {
      return !student.isAttend;
    });

    const serialized = [...attended, null, ...notAttended]
      .map(student => {
        if (!student) {
          return `Не присутні: `;
        }
        return `${student.user.first_name} - @${student.user.username}`;
      })
      .join('\n');

    const template = `${subject} - присутні: \n ${serialized}`;
    await ctx.reply(template);
  }

  await checkPolls(originalPolls);
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
