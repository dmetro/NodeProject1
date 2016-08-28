angular.module('myApp', ['ui.router'])
    //browserify  ./public/script.js -o ./public/appbundle.js 
    .config(require('./config/router.js'))
    .controller('MainController', require('./controllers/mainController.js'))
    