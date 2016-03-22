'use strict';

const path = require('path');
const NeDB = require('nedb');
const service = require('feathers-nedb');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const db = new NeDB({
    filename: path.join(app.get('nedb'), 'colors.db'),
    autoload: true
  });

  let options = {
    Model: db,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/colors', service(options));

  // Get our initialize service to that we can bind hooks
  const colorsService = app.service('/colors');

  // Set up our before hooks
  colorsService.before(hooks.before);

  // Set up our after hooks
  colorsService.after(hooks.after);
};
