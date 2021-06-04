const prices = require('./prices/prices.service.js');
const pairs = require('./pairs/pairs.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(prices);
  app.configure(pairs);
};
