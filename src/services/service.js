const { pollRepository } = require('../repositories/poll.repository');
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

  async createPollsForSchedule(ctx) {
    for (let i = 0; i < 1; i += 1) {
      const res = await this.createPoll(ctx);
    }
  }

  async createPoll(ctx, question = '', options = ['']) {
    return ctx.telegram.sendPoll(ctx.message.chat.id, question, options, {
      is_anonymous: false,
    });
  }

  async generatePollsSet(ctx, sheduleVariantArr = []) {
    for (const lesson of sheduleVariantArr[0].lessons) {
      await this.createLessonPoll(ctx, lesson.name);
    }
  }

  async createLessonPoll(ctx, question) {
    const OPTIONS = ["Wasn't", 'Was'];
    const res = await this.createPoll(ctx, question, OPTIONS);

    const { poll } = res;

    console.log(poll);

    const result = await pollRepository.create({
      id: poll.id,
      question: poll.question,
      options: poll.options.map(obj => obj.text),
    });

    // console.log(result);

    return result;
  }
}

const service = new Service();

module.exports = { service };
