const { SuperRepository } = require('./super.repository');

class PollRepository extends SuperRepository {
  constructor() {
    super('Poll');
  }
}

module.exports = { pollRepository: new PollRepository() };
