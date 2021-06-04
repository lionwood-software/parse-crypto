// Initializes the `pairs` service on path `/pairs`
const { Pairs } = require('./pairs.class');
const hooks = require('./pairs.hooks');

module.exports = function (app) {
  const options = {
    paginate: false
  };

  // Initialize our service with any options it requires
  app.use('/pairs', new Pairs(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('pairs');

  service.hooks(hooks);
};
