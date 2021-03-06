
var express = require("express");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
//mongoose.connect('mongodb://localhost/test');



// Set static routes
app.use('/', express.static('./public'));

// Set routing

app.use('/notes', require('./controllers/notesController.js'));
app.use('/user', require('./controllers/userController.js'));

app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function (req, res) {
  res.redirect('/notes');
});


// Start app
app.listen(3000,function () {
    console.log("server started");
});