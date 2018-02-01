'use strict';

//Aplication dependancies
const express = require('express');
const errorHandler = require('./error-handler');
const cors = require('cors');
const mongoose = require('mongoose');
const debug = require('debug')('http:server');

//Application Set Up
const app = express();
const PORT = process.env.PORT;
const router = express.Router();
const MONGODB_URI = process.env.MONGODB_URI;

//Middleware
app.use(cors());
app.use('/api/v1', router);
require('../route/route-note')(router);
app.use('/{0,}', (req, res) => errorHandler(new Error ('Path Error. Route not found.'), res));

//Server controls
const server = module.exports = {};
debug('server');

server.start = () => {
  return new Promise((resolve, reject) => {
    if(server.isOn) return reject(new Error('Server running.  Cannot start server again.'));

    server.http = app.listen(PORT, () => {
      console.log(`Listening on ${PORT}`);
      server.isOn = true;
      server.db = mongoose.connect(MONGODB_URI);
      return resolve(server);
    });
  });
};

server.stop = () => {
  return new Promise((resolve, reject) => {
    if(!server.isOn) return reject(new Error('Server not running.  Cannot shut down server.'));

    server.http = app.listen(PORT, () => {
      console.log('Shutting down server.');
      server.db.disconnect();
      server.isOn = false;
      return resolve(server);
    });
  });
};
