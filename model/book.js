'use strict';

const mongoose = require('mongoose');

const {Schema} = mongoose;

const bookSchema = new Schema({
  title: String,
  desc: String,
  status: Boolean,
  email: String,
})

module.exports = mongoose.model('Book', bookSchema);