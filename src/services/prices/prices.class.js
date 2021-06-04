/* eslint-disable no-unused-vars */
exports.Prices = class Prices {
  constructor (options) {
    this.options = options || {};
    this.prices = {};
  }
  
  async find (params) {
    return this.prices;
  }

  async create (data, params) {
    return this.prices = data;
  }

};
