const { pollRepository } = require('../repositories/poll.repository');

class PollService {
  async formateResultToList(data) {
    return data
      .map(user => `${user.username}: ${user.firstName} ${user.lastName}`)
      .join('\n');
  }

  async getPollResults(ctx, votedUsers, unvotedUsers) {
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

  async createPoll(ctx, question = '', options = ['']) {
    const { poll } = await ctx.telegram.sendPoll(
      ctx.message.chat.id,
      question,
      options,
      {
        is_anonymous: false,
      },
    );

    return await pollRepository.create({
      id: poll.id,
      question: poll.question,
      options: poll.options.map(obj => obj.text),
    });
  }

  async createPollForLesson(ctx, question) {
    const OPTIONS = ["Wasn't", 'Was'];
    const res = await this.createPoll(ctx, question, OPTIONS);

    const { poll } = res;

    console.log(poll);

    return result;
  }

  async generatePollsForShedule(ctx, sheduleVariantArr = []) {
    for (const lesson of sheduleVariantArr[0].lessons) {
      await this.createPollForLesson(ctx, lesson.name);
    }
  }

  async sendVotingResult(ctx, resultArr) {
    if (!resultArr) {
      await ctx.reply("Sorry, you don't have any voters");
      return;
    }
    await ctx.reply(this.formateResultToList(resultArr));
  }
}

module.exports = { pollService: new PollService() };
