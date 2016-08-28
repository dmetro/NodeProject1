var bodyParser = require('body-parser');
var express = require("express");
var mongoose = require('mongoose');

var app = express();
//mongoose.connect('mongodb://localhost/test');

// Set view engine
//app.set('view engine', 'pug');

// Set static routes
app.use('/', express.static('./public'));

// Set routing
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/notes', require('./controllers/notesController.js'));

app.get('/', function (req, res) {
    res.redirect('/notes');
});


// Start app
app.listen(3002,function () {
    console.log("server started");
});