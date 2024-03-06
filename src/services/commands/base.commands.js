const { CronTime } = require('cron');
const { startVote } = require('../service');

class BaseCommands {
  async register() {}

  async createVotingPool() {
    startVote();
  }

  async startObserving() {}

  async getInfo() {}
}

// const job = new CronJob(
//   '* * * * * *', // cronTime
//   function () {
//     console.log('You will see this message every second');
//   }, // onTick
//   null, // onComplete
//   true, // start
//   'America/Los_Angeles', // timeZone
// );

module.exports = { BaseCommands };
