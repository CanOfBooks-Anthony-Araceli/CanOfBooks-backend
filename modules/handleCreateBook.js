'use strict';

const Books = require('../model/book');

const handleCreateBook = {};

handleCreateBook.getBooks = function(req, res, next) {
  let queryObject = {};
  Books.find(queryObject)
    .then(data => res.status(200).send(data))
    .catch(error => console.error(error));
}

handleCreateBook.postBooks = function (req, res, next){
  const data = req.body;
  Books.create(data)
    .then(createdBook => res.status(201).send(createdBook))
    .catch(err => next(err));
}

module.exports = handleCreateBook;