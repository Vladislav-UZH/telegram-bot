const { SuperRepository } = require('./super.repository');

class UserRepository extends SuperRepository {
  constructor() {
    super('User');
  }
}
module.exports = { userRepository: new UserRepository() };
