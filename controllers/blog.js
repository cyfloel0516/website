var express = require('express')
  , router = express.Router()

var mongoose = require('mongoose');
var jsonFile = require('jsonfile')
var dbConfig = jsonFile.readFileSync("./config/db.config");
var Schema = mongoose.Schema;

router.get('/edit', function (req, res) {
	res.render('blog_edit');
});

router.put('/', function(req, res){
	var db = mongoose.connection;
	mongoose.connect(dbConfig.mongodb);
	
	db.once('open', function() {
	  	var BlogsSchema = new Schema({ content: String, title: String}, 
           { collection : 'blogs' });   // collection name
		var Blog = mongoose.model('blogs', BlogsSchema);

		var blog = new Blog({content: req.body.blog, title:'12345'});
		blog.save();
		console.log('finish');
	});
});







module.exports = router