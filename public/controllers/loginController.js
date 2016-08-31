module.exports = function Login($scope , $http , backend_service,$location ,$rootScope)
{
    //   $scope.isLoading = true;
      console.log('init login controller') ; 
      $scope.beforeLogin = $rootScope.beforeLogin 
      $scope.User = {};
      $scope.Login = function()
      {
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

      }
      
};
