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
     
};