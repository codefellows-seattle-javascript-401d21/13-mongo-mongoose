'use strict';

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const errorHandler = require('./error-handler');

const app = express();
const PORT = process.env.PORT;
const router = express.Router();
const MONGODB_URI = process.env.MONGODB_URI;

app.use.apply(cors());
app.use('api/v1/track', router);
require('../route/route-track');
app.use('/{0,}', (req, res) => errorHandler(new Error('Path error. Route not found.'), res));

const server = module.exports = {};
server.start = () => {
  return new Promise((resolve, reject) => {
    if (server.isON) return reject(new Error('Server running. Cannot start server again,'));
    server.http = app.listen(PORT, () => {
      console.log(`Listening on ${PORT}`);
      server.isON = true;
      server.db = mongoose.connect(MONGODB_URI);
      return resolve(server);
    });
  });
};

server.stop = () => {
  return new Promise ((resolve, reject) => {
    if(!server.isON) return reject(new Error('Server not running. Cannot sut server down'));
    server.http.close(() => {
      console.log('Shutting down server');

    })
  })
}
