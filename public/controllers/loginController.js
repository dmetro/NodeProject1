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
>>>>>>> c5034609210f3bfa7c03cee3240c48c4e5735f4f

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
