(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
     .state('login', {
         url: '/login',
         templateUrl: '/views/login.html',
         controller: require('../controllers/loginController.js')
     })
     .state('todo', {
         url: '/todo',
         templateUrl: '/views/todo.html',
         controller: require('../controllers/todoController.js')
     })
     .state('signup', {
         url: '/signup',
         templateUrl: '/views/signup.html',
         controller: require('../controllers/signupController.js')
     })
     
};
},{"../controllers/loginController.js":2,"../controllers/signupController.js":4,"../controllers/todoController.js":5}],2:[function(require,module,exports){
module.exports = function Login($scope , $http , backend_service,$location ,$rootScope)
{
    //   $scope.isLoading = true;
      console.log('init login controller') ; 
      $scope.beforeLogin = $rootScope.beforeLogin 
      $scope.User = {};
      $scope.Login = function()
      {
<<<<<<< HEAD
          var response =  backend_service.Login($scope.User);
          if(response!=null)
          {
              console.log(response.d);
           //   console.log("data",response.d);

          }
=======
          $rootScope.beforeLogin = true;
          $location.path('/todo');
       
        //  var user =  backend_service.Login($scope.User);
         // console.log("Login",$scope.User);
         // console.log("User",user);

      }
       $scope.goToRegitration = function()
      {
          $rootScope.beforeLogin = false;
          $location.path('/signup');
       
        //  var user =  backend_service.Login($scope.User);
         // console.log("Login",$scope.User);
         // console.log("User",user);
>>>>>>> c5034609210f3bfa7c03cee3240c48c4e5735f4f

      }
      
};

},{}],3:[function(require,module,exports){
module.exports = function mainController($scope , $http,$rootScope, $location)
{
       $scope.isLoading = true;
        $scope.users = [];
        $rootScope.beforeLogin = false;

     $scope.Logout = function()
     {
         console.log('logout');
         $rootScope.beforeLogin = false;
         $location.path('/login');

     }
       
      //  console.log("dima tester");
/*        $http({
            method: 'GET',
            url: '/notes'
        }).then(function (response) {
            console.log('response', response);
            $scope.users = response.data;

            $scope.isLoading = false;

        }, function (err) {
            console.log(err);
        });
        */
};
},{}],4:[function(require,module,exports){
module.exports =  function Signup ($scope , $rootScope, $location)
{
    console.log('Signup');
    $scope.Signup = function()
    {
        console.log('Do it');
        $location.path('/login');
    }
}
},{}],5:[function(require,module,exports){
module.exports = function todo($scope,$rootScope,$location)
{
      
     $scope.beforeLogin = $rootScope.beforeLogin;

     $scope.Logout = function()
     {
         console.log('logout');
         $rootScope.beforeLogin = false;
          $location.path('/login');

     }
    console.log('init to do contrller');
}
},{}],6:[function(require,module,exports){

angular.module('myApp', ['ui.router'])
    //browserify  ./public/script.js -o ./public/appbundle.js 
    .config(require('./config/router.js'))
    .service('backend_service',require('./service/backend_service.js'))
    .controller('mainController', require('./controllers/mainController.js'))
    .controller('loginController', require('./controllers/loginController.js'))
    

},{"./config/router.js":1,"./controllers/loginController.js":2,"./controllers/mainController.js":3,"./service/backend_service.js":7}],7:[function(require,module,exports){
module.exports = function backend_service($http) {
    
        this.Login = function (data) {
<<<<<<< HEAD
       //  console.log('api',data);
         return $http.post('/user/checkuser', data)
          .then(function (response) {
                  // console.log('response',response);
                return response.data;  
=======
         console.log('api',data);
         return $http.post('/user/checkuser', data)
            .then(function (response) {
                return response
               
>>>>>>> c5034609210f3bfa7c03cee3240c48c4e5735f4f
            },
        function (err) {
            err['text'] = 'Something happens when obtaining dictionary file for languages!';
            $state.go('error', { 'error_obj': err });
        })
    }
    
}


},{}]},{},[6]);
