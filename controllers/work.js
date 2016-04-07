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

router.get('/edms', function(req, res){
	res.render('work_details/edms');
});

router.get('/personal_website_1', function(req, res){
	res.render('work_details/personal_website_1');
});

router.get('/calendar', function(req, res){
	res.render('work_details/calendar');
});

module.exports = router