const assert = require('assert');
const app = require('../../src/app');

describe('\'pairs\' service', () => {
  it('registered the service', () => {
    const service = app.service('pairs');

    assert.ok(service, 'Registered the service');
  });
});
