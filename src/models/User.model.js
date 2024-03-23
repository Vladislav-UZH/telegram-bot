const { SuperModel } = require('./super.model');

const model = new SuperModel();

const schema = {
  tgId: {
    type: BigInt,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
};

const UserModel = model.create('user', schema);

module.exports = { UserModel };
