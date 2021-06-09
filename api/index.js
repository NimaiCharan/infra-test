var express = require('express');
const cors = require('cors')
var router = express.Router();
var app = express();
var bodyParser =  require('body-parser');
var port = process.env.PORT || 3000;
//var cementbrand = require('./controllers/homepage/getcementbrand');
var db = require('./db');
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var homerouter = require('./routes/home');
var userRouter = require('./routes/user');
app.use('/api', homerouter);
app.use('/api/user', userRouter);

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
//this is a comment

module.export = app;