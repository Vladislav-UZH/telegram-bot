class User {
  constructor({ userId, is_bot = false, firstName, lastName = '', username }) {
    this.userId = userId;
    this.is_bot = is_bot;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
  }
}

const votedUsers = [];
const unvotedUsers = [];

for (let i = 0; i < 4; i += 1) {
  const user = new User({
    userId: i + 1,
    firstName: `user_who_voted#${i + 1}`,
    lastName: `Userenko${i + 1}`,
    username: `username_who_voted#${i + 1}`,
  });

  votedUsers.push(user);
}

for (let i = 0; i < 4; i += 1) {
  const user = new User({
    userId: i + 1,
    firstName: `user_who_not_voted#${i + 1}`,
    // lastName: `Userenko${i + 1}`,
    username: `username_who_not_voted#${i + 1}`,
  });

  unvotedUsers.push(user);
}

module.exports = { votedUsers, unvotedUsers };

// {
//     update_id: 758133768,
//     message: {
//       message_id: 800,
//       from: {
//         id: 5936731331,
//         is_bot: false,
//         first_name: 'Anton_Sivko',
//         username: 'random_words1'
//       },
//       chat: { id: -1002010719063, title: 'Bots test', type: 'supergroup' },
//       date: 1710530043,
//       text: '/startCreatingPolls',
//       entities: [ [Object] ]
//     }
// }
