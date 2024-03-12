const { CronJob } = require('cron');
// const { bot } = require('../main');

class Service {
  // ObjectCron
  startCron(handler, cronTime = '* * * * * *') {
    const job = new CronJob({
      cronTime,
      onTick: handler,
      onComplete: null,
      start: true,
      timeZone: 'America/Los_Angeles',
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

  // в handler, який в параметрах, забивається значення функції createPoll
  // і потім пробує викликатися всередині інтервалу, але так як там передається
  // команда боту створити опитування(це не є функцією), то вибиває помилку

  async pollInterval(handler) {
    setInterval(async () => {
      handler;
    }, 1000);
  }

  async createPoll(context) {
    await context;
  }
}

const service = new Service();

module.exports = { service };
