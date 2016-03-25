'use strict';

const phones = require('./phones');

const colors = require('./colors');

const user = require('./user');

module.exports = function() {
  const app = this;


  app.configure(user);
  app.configure(colors);
  app.configure(phones);
};
