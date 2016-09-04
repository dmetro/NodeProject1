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