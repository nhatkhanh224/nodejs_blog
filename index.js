var express = require('express');
var app = express();
var http = require('http');
app.set('port', process.env.PORT || 3000);
app.get('/', function(req, res){
   res.send('Nguyen Nhat Khanh');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});