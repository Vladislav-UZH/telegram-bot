const { bot } = require('../app');
const { userRepository } = require('../repositories/user.repository');
const { voterRepository } = require('../repositories/voter.repository');

class VoterService {
  async voteListener() {
    bot.listen('poll_answer', async ctx => {
      const poll = ctx.pollAnswer;
      const user = await userRepository.findOne({ tgId: poll.user.id });
      await this.vote({
        // owner: user._id,
        pollId: poll.poll_id,
        voteResult: poll.option_ids[0],
      });
    });
  }

  async getVotedUsers() {
    const results = await voterRepository.findAll();
    if (!results) {
      return false;
    }
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

  async vote(voterData) {
    return await voterRepository.create(voterData);
  }
}

module.exports = { voterService: new VoterService() };
