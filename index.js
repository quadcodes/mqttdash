var app = require('express')();
var http = require('http').Server(app);

// "process.env.PORT" to set port by Heroku
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(port, function() {
	console.log('listening on:' + port);
});
