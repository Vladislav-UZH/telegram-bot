const { CronJob } = require('cron');

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

  async startVote() {
    const test = () => {
      console.log('test');
    };
    this.pollCron(test);
  }
}

const testObj = new Service();

module.exports = { testObj };
