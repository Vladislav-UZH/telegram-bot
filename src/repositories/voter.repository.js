const { SuperRepository } = require('./super.repository');

class VoterRepository extends SuperRepository {
  constructor() {
    super('Voter');
  }
}
module.exports = { voterRepository: new VoterRepository() };
