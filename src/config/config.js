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
  }
}

module.exports = new Config();
