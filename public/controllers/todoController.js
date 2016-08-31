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