const { Telegraf } = require('telegraf');
const config = require('./config/config');
const BOT_TOKEN = config.BOT_TOKEN;

class Bot {
  constructor({ defaultCommands = {}, BOT_TOKEN }) {
    this.instance = new Telegraf(BOT_TOKEN);
    this.commands = defaultCommands;
  }

  getInstance() {
    return this.instance;
  }

  async listen(event, listener) {
    this.instance.on(event, listener);
  }

  async _checkCommands(command) {
    return new Promise((resolve, reject) => {
      if (this.commands.includes(command)) {
        return reject(`Entered command: "${command}" already exists`);
      }
      resolve(true);
    });
  }

  async registerCommand(command = '', handler) {
    try {
      await this._checkCommands(command);

      this.commands[command] = handler;

      this.instance.command(command, handler);
    } catch (e) {
      console.log(e);
    }
  }

  start() {
    this.instance.launch();
    console.log('Bot started successfully');
  }
}

module.exports = { bot: new Bot({ BOT_TOKEN }) };
