// const { CronJob } = require('cron');
// const { bot } = require('../main');
const cron = require('node-cron');

class Service {
  // start node-cron
  startCron(handler, shedule) {
    cron.schedule(shedule, handler);
  }

  // stop node-cron
  stopCron() {}

  pollCron(handler) {
    this.startCron(handler, '15 * * * * *');
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

  async createPollsForShedule(ctx) {
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
    for (let i = 0; i < 3; i += 1) {
      await this.createPoll(ctx);
      await this.sleep(3000);
    }
  }

  async sleep(time) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }

  async createPoll(ctx) {
    const res = await ctx.telegram.sendPoll(
      ctx.message.chat.id,
      'test',
      ['1', '2'],
      { is_anonymous: false },
    );
    return res;
  }
}

const service = new Service();

module.exports = { service };
