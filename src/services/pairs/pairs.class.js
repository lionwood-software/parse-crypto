/* eslint-disable no-unused-vars */
exports.Pairs = class Pairs {
  constructor (options, app) {
    this.options = options || {};
    this.pairs = app.get('pairs');
  }

  async find (params) {
    return this.pairs;
  }

  async create (data, params) {
    return this.pairs = data;
  }
};
