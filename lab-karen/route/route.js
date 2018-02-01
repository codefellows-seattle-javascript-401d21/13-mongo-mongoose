'use strict';

const Book = require('../model/book');
const bodyParser = require('body-parser').json();
const errorHandler = require('../lib/error-handler');
const debug = require('debug')('http:route');

module.exports = function(router) {

  router.route('/book/:_id?')
    .get((req, res) => {
      debug(`${req.method}: ${req.url}`);

      if(req.params._id) {
        return Book.findById(req.params._id)
          .then(book => res.status(200).json(book))
          .catch(err => errorHandler(err, res));
      }

      return Book.find()
        .then(book => book.map(book => book._id))
        .then(book => res.status(200).json(book))
        .catch(err => errorHandler(err, res));

    })

    .post(bodyParser, (req, res) => {
      new Book(req.body).save()
        .then(book => res.status(201).json(book))
        .catch(err => errorHandler(err, res));
    })

    .put(bodyParser, (req, res) =>{
      let updateBook = req.body;
      return Book.findByIdAndUpdate(req.params._id, updateBook)
        .then(book => res.status(200).json(book))
        .catch(err => errorHandler(err, res));
    })

    .delete(bodyParser, (req, res) =>{
      return Book.findByIdAndRemove(req.params._id)
        .then(book => res.status(200).json(book))
        .catch(err => errorHandler(err, res));
    });
};
