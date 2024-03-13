const { CronJob } = require('cron');
// const { bot } = require('../main');

class Service {
  // start CronJob
  startCron(handler, cronTime = '* * * * * *') {
    const job = new CronJob({
      cronTime,
      onTick: handler,
      // onComplete: null,
      start: true,
      timeZone: 'Europe/Kyiv',
    });

    return job;
  }

  // stop CronJob
  // stopCron(job) {
  //   job.stop()
  // }

  pollCron(handler) {
    this.startCron(handler, '1 * * * * *');
  }

  async pollInterval(handler) {
    setInterval(async () => {
      handler();
    }, 10000);
  }

  async createPoll(context) {
    const ctx = await context;
    return ctx;
  }
}

const service = new Service();

module.exports = { service };
