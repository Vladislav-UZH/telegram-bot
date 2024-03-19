// const { CronJob } = require('cron');
// const { bot } = require('../main');
const { lessons } = require('../pseudo-database/lessons');
const {
  sheduleVariantOne,
  sheduleVariantTwo,
} = require('../pseudo-database/schedule');
const cron = require('node-cron');

class Service {
  // start node-cron
  startCron(handler, schedule) {
    cron.schedule(schedule, handler);
  }

  // stop node-cron
  stopCron() {}

  pollCron(handler) {
    this.startCron(handler, '* * * * * *');
  }

  async getPollsResults(ctx, votedUsers, unvotedUsers) {
    const destructVotedUsers = await votedUsers.map(user => {
      const { firstName, lastName, username } = user;
      return { firstName, lastName, username };
    });
    const destructUnvotedUsers = await unvotedUsers.map(user => {
      const { firstName, lastName, username } = user;
      return { firstName, lastName, username };
    });

    const votedUsersList = await this.formateResultToList(destructVotedUsers);
    const unvotedUsersList = await this.formateResultToList(
      destructUnvotedUsers,
    );

    await ctx.reply('Ті, хто голосував:');
    await ctx.reply(votedUsersList);
    await ctx.reply('Ті, хто не голосував:');
    await ctx.reply(unvotedUsersList);
  }

  async formateResultToList(data) {
    return data
      .map(user => `${user.username}: ${user.firstName} ${user.lastName}`)
      .join('\n');
  }

  async createPollsForschedule(ctx) {
    for (let i = 0; i < 1; i += 1) {
      const res = await this.createPoll(ctx);
      console.log(res);
    }
  }

  // async pollInterval(handler) {
  //   setInterval(() => {
  //     handler();
  //   }, 10000);
  // }

  async generatePollsSet(ctx) {
    const polls = [];
    // console.log(sheduleVariantOne[0]);
    for (const lesson of sheduleVariantOne[0].lessons) {
      const { poll } = await this.createPoll(ctx, lesson.name, [
        "Wasn't",
        'Was',
      ]);
      polls.push(poll);
    }
    return polls;
  }

  async createPoll(ctx, question, options = []) {
    const res = await ctx.telegram.sendPoll(
      ctx.message.chat.id,
      question,
      options,
      { is_anonymous: false },
    );
    return res;
  }
}

const service = new Service();

module.exports = { service };
