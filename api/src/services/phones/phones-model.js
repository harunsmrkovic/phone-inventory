'use strict';

// phones-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Make Mongoose use the ES6 promise
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/phones');

const phonesSchema = new Schema(
  {
    name: { type: String, required: true },
    colors: [{ name: String, quantity: Number }],
    createdAt: { type: Date, 'default': Date.now },
    updatedAt: { type: Date, 'default': Date.now }
  }
);

const phonesModel = mongoose.model('phones', phonesSchema);

module.exports = phonesModel;
