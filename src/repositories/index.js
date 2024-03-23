const { userRepository } = require('./user.repository');
const { voterRepository } = require('./voter.repository');
const { pollRepository } = require('./poll.repository');

module.exports = { userRepository, voterRepository, pollRepository };
