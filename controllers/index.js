var express = require('express')
  , router = express.Router();

router.use('/', require('./home'))
router.use('/works', require('./works'))
router.use('/blogs', require('./blogs'))

module.exports = router