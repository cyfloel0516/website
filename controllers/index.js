var express = require('express')
  , router = express.Router();

router.use('/', require('./home'))


module.exports = router