require('dotenv').config();
const { Telegraf, Telegram } = require('telegraf');
const { message } = require('telegraf/filters');
const config = require('./config/config');
const BOT_TOKEN = config.BOT_TOKEN;
const { BaseCommands } = require('./services/commands/base.commands');
const { cronJob, CronJob } = require('cron');
const { override } = require('joi');
const { testObj } = require('./services/service');

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

  async registerCommand(command = '', handler = '') {
    try {
      await this._checkCommands(command);
      this.commands[command] = handler;
    } catch (e) {
      console.log(e);
    }
  }
  start() {
    this.instance.launch();
  }
}

async function leave(ctx) {
  await ctx.telegram.leaveChat(ctx.message.chat.id);

  // Using context shortcut
  await ctx.leaveChat();
}
const defaultCommands = { leave };
const bot = new Bot({ defaultCommands, BOT_TOKEN }).instance;

// console.log(bot.action('message'));
bot.command('go', ctx => {
  (async () => {
    await ();
  })();
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
