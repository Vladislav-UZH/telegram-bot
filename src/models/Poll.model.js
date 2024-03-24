const { SuperModel } = require('./super.model');

const model = new SuperModel();

const schema = {
  // owner: {
  //   type: model.Schema.ObjectId,
  //   ref: 'Voter',
  // },
  id: {
    type: BigInt,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [{ type: String }],
    // enum: ["Wasn't", 'Was'],
    required: true,
  },
};

const PollModel = model.create('Poll', schema);

module.exports = { PollModel };

// {
//   message_id: 1345,
//   from: {
//     id: 7171972463,
//     is_bot: true,
//     first_name: 'KN-helper',
//     username: 'KN_slave_bot'
//   },
//   chat: { id: -1002010719063, title: 'Bots test', type: 'supergroup' },
//   date: 1711199935,
//   poll: {
//     id: '5474159861426030045',
//     question: 'test',
//     options: [ [Object], [Object] ],
//     total_voter_count: 0,
//     is_closed: false,
//     is_anonymous: false,
//     type: 'regular',
//     allows_multiple_answers: false
//   }
// }
