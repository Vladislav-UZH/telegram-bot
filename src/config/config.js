require('dotenv').config();

class Config {
  static required(name) {
    if (typeof name === 'undefined') {
      throw new Error(`Env variable "${name}" required`);
    }
    // console.log(process.env);
    return process.env[name];
  }
  constructor() {
    this.BOT_TOKEN = Config.required('BOT_TOKEN');
    this.DB_URI = Config.required('DB_URI');
  }
}

module.exports = new Config();
