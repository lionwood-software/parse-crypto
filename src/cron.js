const cron = require('node-cron');

module.exports = app => {
  cron.schedule('*/5 * * * * *', async () => {
    await app.service('prices').create({});
  });
};
