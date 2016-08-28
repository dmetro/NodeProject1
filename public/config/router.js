module.exports = function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
     .state('login', {
         url: '/login',
         templateUrl: '/app/views/login/login.html',
         controller: require('../controllers/loginController.js')
     })
};