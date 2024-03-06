require('dotenv').config();
const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
const config = require('./config/config');
const BOT_TOKEN = config.BOT_TOKEN;

class Bot {
  constructor(TOKEN) {
    this.bot = new Telegraf(TOKEN);
  }

  async listen(event, listener) {
    this.bot.on(event, listener);
  }
  start() {
    this.bot.launch();
  }
}
const bot = new Bot(BOT_TOKEN).bot;

bot.command('quit', async ctx => {
  // Using context shortcut
  await ctx.leaveChat();
});

// bot.on(message('text'), async ctx => {
//   // Explicit usage

//   console.log(ctx.message);

//   await ctx.telegram.sendMessage(ctx.message.chat.id, `Hello Tina`);
//   //   console.log(ctx);
//   // Using context shortcut
//   //   await ctx.reply(`Hello ${ctx.state.role}`);
// });

// bot.on('callback_query', async ctx => {
//   // Explicit usage
//   await ctx.telegram.answerCbQuery(ctx.callbackQuery.id);

//   // Using context shortcut
//   await ctx.answerCbQuery();
// });

// bot.on('inline_query', async ctx => {
//   const result = [];
//   // Explicit usage
//   await ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, result);

//   // Using context shortcut
//   await ctx.answerInlineQuery(result);
// });

bot.command('start', async ctx => {
  await ctx.reply('Hello there!');
});

bot.command('observe', async ctx => {
  await ctx.reply('Start observing');
});

/**
 * виб'є помилку, бо має передаватися тільки
 * стрінг, число або буль
 */

// bot.command('inline', async ctx => {
//   const result = [];
//   await ctx.reply(result); // виб'є error
// });

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
