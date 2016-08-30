module.exports = function mainController($scope , $http,$rootScope)
{
       $scope.isLoading = true;
        $scope.users = [];
        $rootScope.beforeLogin = false;

       
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