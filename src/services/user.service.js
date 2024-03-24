const { userRepository } = require('../repositories/user.repository');

class UserService {
  async getUser(id) {
    return await userRepository.findOne({ tgId: id });
  }
  async createUser(data) {
    return await userRepository.create(data);
  }
}

module.exports = { userService: new UserService() };
