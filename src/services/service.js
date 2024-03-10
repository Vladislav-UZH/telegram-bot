const { CronJob } = require('cron');
const { bot } = require('../main');

class Service {
  startCron(handler, cronTime = '') {
    const job = new CronJob.from({
      cronTime,
      onTick: handler,
      onComplete: null,
      start: true,
      timeZone: 'Ukraine/Kyiv',
    });
    return job;
  }

  pollCron(handler) {
    this.startCron(handler, '1 * * * * *');
  }

  async createPoll(action, callback) {
    await bot.on(action, callback);
  }
}

const service = new Service();

module.exports = { service };
