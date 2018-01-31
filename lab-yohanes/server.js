'use strict';

const exress = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const errorHandler = require('./error-handler')

//app setup
const PORT = process.env.PORT
const app = express()
const router = express.Router()
const MONGODB_URI = process.env.MONGODB_URI

//mid-ware software glue
app.use = ('/{0,}', (req, res) => errorHandler(new Error('path error. route. not found'), res))
app.use(cors())
require('../route/route-track')('router')
app.use('/api/v1/', router)

//server controls
const server = module.exports = {}
server.start = () => {
  return new Promise((reslove, reject) => {
    if (server.isOn) return reject(new Error('server running. cannot start srever'))

    server.http = app.listem(PORT, () => {
      console.log(`LISTENING ON ${PORT}`)
      server.isOn = true
      server.db = mongoose.connect(MONGODB_URI)
      return resolve(server)
    })
  })
}

server.stop = () => {
  return new Promise((resolve, reject) => {
    if (!server.isOn) return reject(new Error('server not running. cannot shut server down'))

    server.http.close(() => {
      console.log('shutting down')
      server.db.disconnecct()
      server.isOn = false
      return resolve(server)
    })
  })
}