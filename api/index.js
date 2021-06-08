var express = require('express');
var router = express.Router();
var app = express();
var port = process.env.PORT || 3000;
//var cementbrand = require('./controllers/homepage/getcementbrand');
var db = require('./db');

var homerouter = require('./routes/home')
app.use('/api', homerouter);


var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});


module.export = app;