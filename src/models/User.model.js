const { Schema, default: mongoose } = require('mongoose');

const user = new Schema({ id: String });

const UserModel = mongoose.model('User', user);

module.exports = { UserModel };
