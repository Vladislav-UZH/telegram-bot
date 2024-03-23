const models = require('../models');

class SuperRepository {
  constructor(modelName = '') {
    this.model = models[modelName];
  }
}

module.exports = { SuperRepository };
