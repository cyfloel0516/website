var express = require('express')
  , router = express.Router();

router.use('/', require('./home'))
router.use('/work', require('./work'))
router.use('/blog', require('./blog'))

router.use('/aboutme', require('./aboutme'))

module.exports = router