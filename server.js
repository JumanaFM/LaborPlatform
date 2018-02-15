var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.resolve("./")));

app.get('/', function(req, res) {
  res.sendFile('/Users/jumana/Desktop/Aqaar/d3plus/treemap/index.html');

});

var port = process.env.PORT || 8000;
var server = app.use(express.static(__dirname));
app.listen(port);
