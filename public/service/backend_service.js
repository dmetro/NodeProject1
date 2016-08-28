module.exports = function backend_service($http) {


    this.requests = {};

    this.Login = function (data)
        {
           // return data;
      return $http.post('/user/checkuser').then(function (data)
            {
            return response //it is only content of file, what is JSON dictionary with terns
            }, function (err)
            {
            err['text'] = 'Something happens when obtaining dictionary file for languages!';
            $state.go('error',{'error_obj':err});
            })
     };
    
}

