const models = require('../models');

class SuperRepository {
  constructor(modelName = '') {
    this.model = models[modelName];
  }

  async findById(objId) {
    return this.model.findById(objId);
  }

  async create(data) {
    return this.model.create(data);
  }

  async removeById(objId) {
    return this.model.findByIdAndRemove(objId);
  }

  async findAll({ skip, limit }) {
    return this.model.find({}, '', { skip, limit });
  }

  async findOne(searchParams) {
    return this.model.findOne(searchParams);
  }

  async update(objId, data) {
    return this.model.findByIdAndUpdate(objId, data, { new: true });
  }
}

module.exports = { SuperRepository };
