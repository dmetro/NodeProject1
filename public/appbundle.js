(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
     .state('login', {
         url: '/login',
         templateUrl: '/app/views/login/login.html',
         controller: require('../controllers/loginController.js')
     })
};
},{"../controllers/loginController.js":2}],2:[function(require,module,exports){
module.exports = function Login($scope , $http)
{
       $scope.isLoading = true;
        
};

},{}],3:[function(require,module,exports){
module.exports = function mainController($scope , $http)
{
       $scope.isLoading = true;
        $scope.users = [];

       
        console.log("dima tester");

        $http({
            method: 'GET',
            url: '/notes'
        }).then(function (response) {
            console.log('response', response);
            $scope.users = response.data;

            $scope.isLoading = false;

        }, function (err) {
            console.log(err);
        });
};

},{}],4:[function(require,module,exports){
angular.module('myApp', ['ui.router'])
    //browserify  ./public/script.js -o ./public/appbundle.js 
    .config(require('./config/router.js'))
    .controller('MainController', require('./controllers/mainController.js'))
    
},{"./config/router.js":1,"./controllers/mainController.js":3}]},{},[4]);
