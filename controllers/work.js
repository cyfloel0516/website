var express = require('express')
  , router = express.Router()

router.get('/', function (req, res) {
  res.render('works');
});

router.get('/personal_website_2', function(req, res){
	res.render('work_details/personal_website_2');
});

router.get('/captioning_system', function(req, res){
	res.render('work_details/captioning_system');
});

module.exports = router