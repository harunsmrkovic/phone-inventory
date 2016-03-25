'use strict';

const service = require('feathers-mongoose');
const phones = require('./phones-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: phones,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/phones', service(options));

  // Get our initialize service to that we can bind hooks
  const phonesService = app.service('/phones');

  // Set up our before hooks
  phonesService.before(hooks.before);

  // Set up our after hooks
  phonesService.after(hooks.after);
};
