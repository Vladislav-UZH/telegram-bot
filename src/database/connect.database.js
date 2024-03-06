const { mongo, default: mongoose } = require('mongoose');
const config = require('../config/config');

class DatabaseConnect {
  #DB_URI;
  constructor(DB_URI) {
    this.#DB_URI = DB_URI;
  }
  async connect() {
    try {
      await mongoose.connect(this.#DB_URI, {});
      console.log('Database connection is successful');
    } catch (e) {
      console.log('Error while connect to DB, reason:', e);

      process.exit(1);
    }
  }
}

const database = new DatabaseConnect(config.DB_URI);
module.exports = { database };
