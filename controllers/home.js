var express = require('express')
  , router = express.Router()

router.get('/', function (req, res) {
  //res.send("12345");
  res.render('index');
});

module.exports = router