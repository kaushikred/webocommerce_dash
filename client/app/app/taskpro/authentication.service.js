(function () {
    'use strict';

    angular.module('app.authentication')
         
         .factory('LoginServices', [ '$http','$q','$log', LoginServices])
         // .factory('AuthInterceptor',['$rootScope', '$q', AuthInterceptor])
         .config(['$httpProvider', 

        function($httpProvider) {
            // $httpProvider.interceptors.push('AuthInterceptor');
            
        }]);
    
    // function config($httpProvider) {
    //         $httpProvider.interceptors.push('AuthInterceptor');
    //     }

    // function AuthInterceptor($rootScope, $q) {


    //       // return {
    //       //   responseError: function (response) {
    //       //     $rootScope.$broadcast({
    //       //       401: AUTH_EVENTS.notAuthenticated,
    //       //       403: AUTH_EVENTS.notAuthorized
    //       //     }[response.status], response);
    //       //     return $q.reject(response);
    //       //   }
    //       // };

    //     }

    function LoginServices($http,$q,$log) {

        var LOCAL_TOKEN_KEY = 'yourTokenKey';
        var username = '';
        var isAuthenticated = false;
        var role = '';
        var authToken;

        function loadUserCredentials() {
          var token = window.localStorage.getItem(LOCAL_TOKEN_KEY);
          if (token) {
            useCredentials(token);
          }
        }

        function storeUserCredentials(token) {
          window.localStorage.setItem(LOCAL_TOKEN_KEY, token);
          useCredentials(token);
        }

        function useCredentials(token) {
          username = token.split('.')[0];
          isAuthenticated = true;
          authToken = token;

          if (username == 'admin') {
         //   role = USER_ROLES.admin
          }
          if (username == 'user') {
         //   role = USER_ROLES.public
          }

          // Set the token as header for your requests!
          $http.defaults.headers.common['X-Auth-Token'] = token;
        }

        function destroyUserCredentials() {
          authToken = undefined;
          username = '';
          isAuthenticated = false;
          $http.defaults.headers.common['X-Auth-Token'] = undefined;
          window.localStorage.removeItem(LOCAL_TOKEN_KEY);
        }
        
        var login = function login(data) {
                console.log(data.email)

                return $q(function(resolve, reject) {
                    console.log("data is",data)
                  if ((data.email == 'naya@gmail.com' && data.password == '1') || (name == 'user' && pw == '1')) {
                    // Make a request and receive your auth token from your server
                   // storeUserCredentials(name + '.yourServerToken');
                   storeUserCredentials(data.email + '.yourServerToken');
                   resolve('Login success.');
                  } else {
                   reject('Login Failed.');
                  }
                });
  
                
        }

        var logout = function() {
          destroyUserCredentials();
        };

        var isAuthorized = function(authorizedRoles) {
          if (!angular.isArray(authorizedRoles)) {
            authorizedRoles = [authorizedRoles];
          }
          return (isAuthenticated && authorizedRoles.indexOf(role) !== -1);
        };

        loadUserCredentials();

        return {
          login: login,
          logout: logout,
          isAuthorized: isAuthorized,
          isAuthenticated: function() {return isAuthenticated;},
          username: function() {return username;},
          role: function() {return role;}
        };
                
        }
    
})(); 