<<<<<<< HEAD
angular.module('myApp', [])

    .controller('MainController', function ($scope, $http) {
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
        $scope.goToRegitration = function()
        {
            console.log('goToRegistarion');
        };
    });
=======
angular.module('myApp', ['ui.router'])
    //browserify  ./public/script.js -o ./public/appbundle.js 
    .config(require('./config/router.js'))
    .controller('MainController', require('./controllers/mainController.js'))
    
>>>>>>> 14fb280994a8eb4f0fb4af784db63e1adebf52c6
