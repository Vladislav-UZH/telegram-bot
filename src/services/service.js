const { CronJob } = require('cron');
// const { bot } = require('../main');

class Service {
  // ObjectCron
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

  // nonObjCron
  // startCron(handler, cronTime = '') {
  //   const job = new CronJob(
  //     cronTime,
  //     handler,
  //     null,
  //     true,
  //     'America/Los_Angeles',
  //   );
  //   return job;
  // }

  pollCron(handler) {
    this.startCron(handler, '1 * * * * *');
  }

  async createPoll(context) {
    await context;
  }
}

const service = new Service();

module.exports = { service };
