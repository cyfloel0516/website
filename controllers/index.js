var express = require('express')
  , router = express.Router();

router.use('/', require('./home'))
router.use('/work', require('./work'))
router.use('/blog', require('./blog'))

module.exports = router