const { database } = require('./database/connect.database');

const { bot } = require('./app');

require('./commands.js');

// const BOT_TOKEN = config.BOT_TOKEN;

// const bot = new Telegraf(BOT_TOKEN);

// bot.command('registerUsers', async ctx => {
//   try {
//     let limit = 1;
//     const creationPollCount = Math.ceil(students.length / limit);
//     const splittedStudents = [];
//     for (let i = 0; i < creationPollCount; i += 1) {
//       const studentsCopy = [...students]
//       const arr = studentsCopy.splice(limit)
//     }
//     console.log(splittedStudents);

//     // for (let i = 1; i <= creationPollCount; i += 1) {
//     //   const pollOptions = [];
//     //   const studentsIterationLimit = limit * i;
//     //   for (let j = limit / i; j < studentsIterationLimit; j += 1) {
//     //     if (!students[j]) {
//     //       break;
//     //     }
//     //     const fullName = `${students[j].firstName} ${students[j].lastName}`;
//     //     pollOptions.push(fullName);
//     //   }
//     //   await service.createPoll(ctx, 'Проголосуйте', pollOptions);
//     // }
//     bot.on('poll_answer', async ctx => {
//       const user = ctx.pollAnswer.user;
//       console.log(user);
//     });
//   } catch (e) {
//     console.log('register error', e);
//   }
// });

function formatePollAnswer(data) {
  return {
    owner: data.userObjId,
    pollId: data.poll_id,
    voteResult: data.option_ids[0],
  };
}

// bot.command('startVoting', async ctx => {
//   try {
//     const polls = await service.generatePollsSet(ctx, sheduleVariantTwo);

//     bot.on('poll_answer', async ctx => {
//       console.log(ctx.pollAnswer);
//       const poll = ctx.pollAnswer;
//       const user = await userRepository.findOne({ tgId: poll.user.id });
//       await voterRepository.create({
//         // owner: user._id,
//         pollId: poll.poll_id,
//         voteResult: !poll.option_ids[0] ? "Wasn't" : 'Was',
//       });
//     });
//   } catch (e) {
//     console.log(e);
//   }
//   // {
//   //   poll_id: '5474159861426030117',
//   //   user: {
//   //     id: 2111054056,
//   //     is_bot: false,
//   //     first_name: 'Влад',
//   //     username: 'vlad_uzhgor',
//   //     language_code: 'uk'
//   //   },
//   //   option_ids: [ 0 ]
//   // }
// });

function getVotedUsers() {
  const votedUsers = results.map(vote => {
    return {
      poll_id: vote.poll_id,
      user: {
        id: vote.user.id,
        first_name: vote.user.first_name,
        username: vote.user.username,
      },
      isAttend: !!vote.option_ids[0],
    };
  });
  return votedUsers;
}
function getPollResults(pollId) {
  const students = [];
  const voters = getVotedUsers();

  for (const voter of voters) {
    if (pollId === voter.poll_id) {
      students.push(voter);
    }
  }

  return students;
}

// bot.command('results', async ctx => {
//   async function checkPolls(origPolls) {
//     for (const { id, question } of origPolls) {
//       const students = getPollResults(id);
//       await sendResult({ students, subject: question });
//     }
//   }
//   async function sendResult(result) {
//     const { students, subject } = result;
//     const attended = students.filter(student => {
//       return student.isAttend;
//     });

//     const notAttended = students.filter(student => {
//       return !student.isAttend;
//     });

//     const serialized = [...attended, null, ...notAttended]
//       .map(student => {
//         if (!student) {
//           return `Не присутні: `;
//         }
//         return `${student.user.first_name} - @${student.user.username}`;
//       })
//       .join('\n');

//     const template = `${subject} - присутні: \n ${serialized}`;
//     await ctx.reply(template);
//   }

//   await checkPolls(originalPolls);
// });

// bot.command('test', async ctx => {
//   service.createPoll(ctx, 'test');
// });

async function execute() {
  await database.connect();
  bot.start();

  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));
}

execute();

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
