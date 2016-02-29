var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

//app.use(express.static(__dirname + '/public'));


app.set('view engine', 'mustache');


app.get('/', function(request, response) {
	  var view = {
	  title: "Joe",
	  calc: function () {
	    return 2 + 4;
	  }
	};
 
	var output = Mustache.render("{{title}} spends {{calc}}", view);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});