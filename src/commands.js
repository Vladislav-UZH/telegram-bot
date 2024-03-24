const { bot } = require('./app');

const {
  sheduleVariantOne,
  sheduleVariantTwo,
} = require('./pseudo-database/schedule');

const { pollService } = require('./services/poll.service');
const { userService } = require('./services/user.service');
const { voterService } = require('./services/voter.service');

bot.registerCommand('startVoting', async ctx => {
  try {
    await pollService.generatePollsForShedule(ctx, sheduleVariantOne);
    await voterService.voteListener();
  } catch (e) {
    console.log(e);
  }
});

bot.registerCommand('getVotingResults', async ctx => {
  try {
    await voterService.getVotedUsers();
  } catch (e) {
    console.log(e);
  }
});

bot.registerCommand('identifyUsers', async ctx => {
  try {
    const options = ['Перебзяк Владислав', 'Сівко Антон'];
    const poll = await pollService.createPoll(ctx, 'test', options);
    await voterService.voteListener();
  } catch (e) {
    console.log(e);
  }
});
