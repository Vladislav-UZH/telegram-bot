const { PollModel } = require('./Poll.model');
const { UserModel } = require('./User.model');
const { VoterModel } = require('./Voter.model');

UserModel;
PollModel;
VoterModel;

module.exports = { User: UserModel, Poll: PollModel, Voter: VoterModel };
