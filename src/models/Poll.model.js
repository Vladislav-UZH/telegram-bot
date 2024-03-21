const { SuperModel } = require('./super.model');

const model = new SuperModel();

const schema = {
  owner: {
    type: model.Schema.ObjectId,
    ref: 'Voter',
  },
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  question: {
    type: String,
    required: true,
  },
  options: {
    type: String,
    enum: ["Wasn't", 'Was'],
    required: true,
  },
};

const PollModel = model.create('Poll', schema);

module.exports = { PollModel };
