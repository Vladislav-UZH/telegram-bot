const { Schema, default: mongoose, Model } = require('mongoose');

class SuperModel {
  constructor() {
    this.Schema = Schema;
  }

  _mongooseServerError(err, data, next) {
    const { name, code } = err;
    const status = name === 'MongooseServerError' && code === 11000 ? 409 : 400;
    err.status = HTTP_STATUS_CODES;
    return next(err);
  }

  _createSchema(template) {
    if (!template) {
      throw new Error('template required');
    }
    const schema = new Schema(template, { versionKey: false });
    schema.post('save', this._mongooseServerError);
    return schema;
  }

  /**
   *
   * @param {String} name
   * @param {Object} schema
   * @returns
   */

  create(name, schema) {
    return mongoose.model(name, schema);
  }
}

module.exports = { SuperModel };
