var express = require('express')
  , router = express.Router()

router.get('/edit', function (req, res) {
  res.render('blog_edit');
});

module.exports = router