
angular.module('myApp', ['ui.router'])
    //browserify  ./public/script.js -o ./public/appbundle.js 
    .config(require('./config/router.js'))
    .service('backend_service',require('./service/backend_service.js'))
    .controller('MainController', require('./controllers/mainController.js'))
    
