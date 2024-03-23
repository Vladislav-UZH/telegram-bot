const { SuperRepository } = require('./super.repository');

class UserRepository extends SuperRepository {
  constructor() {
    super('User');
  }

  async getUserById(objId) {}
}
module.exports = { UserRepository };
