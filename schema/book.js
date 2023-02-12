'use stric';

const mongoose = require('mongoose');

const {Schema} = mongoose;

const bookSchema = new Schema({
  title: String,
  desc: String,
  status: Boolean,
})

module.exports = mongoose.model('Book', bookSchema);