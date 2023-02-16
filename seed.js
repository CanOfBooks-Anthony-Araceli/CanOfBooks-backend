'use strict';

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL);

const Book = require('./model/book');

const seed = async () => {

  await Book.create({
    title: 'Harry Potter',
    desc: 'A famous wizard with a scar on his forehead.',
    status: false,
  })
  .then(book => console.log('Saved Harry Potter to Database'))
  .catch(error => console.error(error));

  await Book.create({
    title: 'Hunger Games',
    desc: 'Survival of the fitest!',
    status: true,
  })
  .then(book => console.log('Saved Hunger Games to Database'))
  .catch(error => console.error(error));

  await Book.create({
    title: 'The Shadow of the Wind',
    desc: 'A story within a story.',
    status: true,
  })
  .then(book => console.log('Saved The Shadow of the Wind to Database'))
  .catch(error => console.error(error));
}

mongoose.disconnect;

seed();