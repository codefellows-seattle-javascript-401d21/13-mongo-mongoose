'use strict';

const Book = require('../model/book');
const bodyParser = require('body-parser').json();
// const debug = require('debug');
const errorHandler = require('../lib/error-handler');


module.exports = (router) => {
  router.route('/:_id?')
    .get((req, res) => {
      // debug(`${req.method}: ${req.url} `);
      if(req.params._id) {
        Book.findById(req.params._id)
          .then(book => res.status(200).json(book))
          .catch(err => errorHandler(err, res));
      } else((!req.params._id), err => errorHandler(err, res)); 
      if(req.params.Schema) {
        Book.find(req.params.Schema)
          .then(book => res.status(200).json(book))
          .catch(err => errorHandler(err, res));
      }
    })
    .post(bodyParser,(req,res) => {
      new Book(req.body).save()
        .then(book => res.status(202).json(book))
        .catch(err => errorHandler(err, res));
    })
    // .put((req,res) => {
    //   debug(`${req.method}: ${req.url} `);
    //   if(req.params._id) {
    //     Track.findByIdAndUpdate(req.params._id, 'book') 
    //       .then('book' => ({
    //       }))
    //   }
    // })
    .delete((req,res) => {
      // debug(`${req.method}: ${req.url} `);
      if(req.params._id) {
        Book.findByIdAndRemove(req.params._id)
          .then(book => res.status(204).json(book))
          .catch(err => errorHandler(err, res));
      }
    });
};