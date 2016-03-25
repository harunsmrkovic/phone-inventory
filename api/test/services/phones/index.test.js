'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('phones service', () => {
  it('registered the phones service', () => {
    assert.ok(app.service('phones'));
  });
});
