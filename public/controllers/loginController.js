module.exports = function Login($scope , $http , backend_service)
{
    //   $scope.isLoading = true;
      console.log('init login controller') ; 
      $scope.User = {};
      $scope.Login = function()
      {
          var response =  backend_service.Login($scope.User);
          if(response!=null)
          {
              console.log(response.d);
           //   console.log("data",response.d);

          }

      }
};
