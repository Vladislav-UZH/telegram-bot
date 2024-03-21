const { Telegraf } = require('telegraf');
const { service } = require('./services/service');
const { database } = require('./database/connect.database');
// const { votedUsers, unvotedUsers } = require('./pseudo-database/users');

const config = require('./config/config');
const { func } = require('joi');
const BOT_TOKEN = config.BOT_TOKEN;

const bot = new Telegraf(BOT_TOKEN);

const results = [];
// const ids = [];

bot.command('startVoting', async ctx => {
  // service.pollCron(() => service.generatePollsSet(ctx));
  const polls = await service.generatePollsSet(ctx);

  bot.on('poll_answer', async ctx => {
    results.push(ctx.pollAnswer);
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

bot.launch(console.log('bot on work'));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

// module.exports = { bot };

// const { bot } = require('./app');

async function execute() {
  await database.connect();
}

execute();
