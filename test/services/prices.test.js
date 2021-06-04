const assert = require('assert');
const app = require('../../src/app');

describe('\'Prices\' service', () => {
  it('registered the service', () => {
    const service = app.service('prices');

    assert.ok(service, 'Registered the service');
  });
});
