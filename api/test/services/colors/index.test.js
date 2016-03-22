'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('colors service', () => {
  it('registered the colors service', () => {
    assert.ok(app.service('colors'));
  });
});
