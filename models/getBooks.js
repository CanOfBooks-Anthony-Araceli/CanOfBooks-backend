'use strict';

const Books = require('../schema/book');

const getBooks = (req, res, next) => {
  let queryObject = {};
  Books.find(queryObject)
    .then(data => res.status(200).send(data))
    .catch(error => console.error(error));
}

module.exports = getBooks;