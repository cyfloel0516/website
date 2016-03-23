var express = require('express')
  , router = express.Router();

router.use('/', require('./home'))
router.use('/works', require('./works'))

module.exports = router