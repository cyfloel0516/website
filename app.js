var express = require('express');

var app = express();

//Port configuration for heroku
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'jade');

//All controllers are under controller's folder
app.use(require('./controllers'))


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});