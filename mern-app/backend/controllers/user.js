/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/api/users`
---------------------------------------------------------------------------------------
*/


/* Require modules
--------------------------------------------------------------- */
const jwt = require('jwt-simple')
const express = require('express')
const router = express.Router()


/* Require the db connection and models
--------------------------------------------------------------- */
const db = require('../models')


/* Require the JWT config
--------------------------------------------------------------- */
const config = require('../../jwt.config.js')


/* Routes
--------------------------------------------------------------- */


/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router
