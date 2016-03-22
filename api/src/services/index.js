'use strict';

const colors = require('./colors');

const user = require('./user');

module.exports = function() {
  const app = this;


  app.configure(user);
  app.configure(colors);
};
