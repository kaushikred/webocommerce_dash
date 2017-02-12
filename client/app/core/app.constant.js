(function () {
    'use strict';

    angular
        .module('app')
        .constant('CONFIG', {
 
          api_endpoint : "http://35.154.125.179/"
  
         })

        // .run(runBlock);

        // runBlock.$inject = ['$rootScope', '$state', 'LoginServices'];

        // function runBlock($rootScope, $state, LoginServices) {
            
        //   $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
        //     console.log("authenticated",toState.authenticate)
        //     console.log("login",!LoginServices.isAuthenticated())
        //     if (toState.authenticate && !LoginServices.isAuthenticated()){
        //       // User isn’t authenticated
        //       console.log("herecscs")
        //       $state.transitionTo("login");
        //       event.preventDefault(); 
        //     }
        //     else{
        //       console.log("login go")
        //      //  event.preventDefault(); 
        //     }
            
        //   });

        // }  

        // .constant('AUTH_EVENTS',{
        //   notAuthenticated:'auth-not-authenticated',
        //   notAuthorised:'auth-not-authorized'
        // })

        // .constant('USER_ROLES',{
        //   admin: 'admin',
        //   public: 'public'
        // })
        

})(); 