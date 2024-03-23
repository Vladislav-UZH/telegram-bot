const { SuperModel } = require('./super.model');

const model = new SuperModel();

const schema = {
  owner: {
    type: model.Schema.ObjectId,
    ref: 'User',
  },
  pollId: {
    type: BigInt,
    required: true,
  },
  voteResult: {
    type: String,
    required: true,
  },
};

const VoterModel = model.create('Voter', schema);

module.exports = { VoterModel };
