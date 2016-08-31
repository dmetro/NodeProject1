module.exports =  function Signup ($scope , $rootScope, $location)
{
    console.log('Signup');
    $scope.Signup = function()
    {
        console.log('Do it');
        $location.path('/login');
    }
}