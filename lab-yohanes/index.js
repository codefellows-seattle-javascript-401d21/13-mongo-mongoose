'use strict'

require('dotenv').config()
require('./lib/server').start()
.catch(console.error)

