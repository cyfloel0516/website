var express = require('express')
  , router = express.Router()

router.get('/edit', function (req, res) {
	debugger;
  res.render('blog_edit');
});

router.post('/', function(req, res){
	console.info(req.body);
});


var mongoose = require('mongoose');
mongoose.connect('mongodb://cyfloel0516:1990516yjk@ds025239.mlab.com:25239/personal_site');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  	
  	var kittySchema = mongoose.Schema({
	    name: String
	});
	var Kitten = mongoose.model('Kitten', kittySchema);

	var k = new Kitten({name:'kkk'});
	k.save();

});

module.exports = router