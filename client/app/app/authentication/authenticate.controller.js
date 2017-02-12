(function () {
    'use strict';

    angular
        .module('app.authenticate')
        .controller('authenticateCtrl', authenticateCtrl);

        //authenticateCtrl.$injector = [ 'EmailService' ];
    
        authenticateCtrl.$injector = [ 'LoginService','$location' ];
        function authenticateCtrl(LoginServices,$location) {

                console.log("herererere")
                var vm = this;
                vm.login = login;

                 

                function login(user){
                    console.log("in login")
                    LoginServices.login(user).then(function(dataResponse) {
                      
                      console.log(dataResponse);
                      $location.url('/')

                    }, function(error) {
                      console.log(error);
                    });

                }

                
        }

})(); 