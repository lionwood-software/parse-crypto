const getPairs = require('../../hooks/get-pairs');
const parsePrices = require('../../hooks/parse-prices');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [getPairs(), parsePrices()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
