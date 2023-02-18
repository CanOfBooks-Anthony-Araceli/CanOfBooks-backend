'use strict';

const Books = require('../model/book');

const handleCreateBook = {};

// Function that gets book data in json format
handleCreateBook.getBooks = function(req, res, next) {
  let queryObject = {};
  Books.find(queryObject)
    .then(data => res.status(200).send(data))
    .catch(error => console.error(error));
}

// Function that creates a new book
handleCreateBook.postBook = function(req, res, next){
  const data = req.body;
  Books.create(data)
    .then(createdBook => res.status(201).send(createdBook))
    .catch(err => next(err));
}

// Function that deletes a book
handleCreateBook.deleteBook = function(req, res, next){
  const id = req.params.id;
  Books.findByIdAndDelete(id)
    .then(deletedBook => res.status(200).send(deletedBook))
    .catch(err => next(err));
}

// Function that updates a book 
handleCreateBook.putBook = function(req, res, next){
  const id = req.params.id;
  const data = req.body;
  Books.findByIdAndUpdate(id, data, {new: true, overwrite: true})
    .then(updatedBook => res.status(200).send(updatedBook))
    .catch(err => next(err))
}


module.exports = handleCreateBook;