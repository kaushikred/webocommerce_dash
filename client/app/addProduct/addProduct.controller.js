(function () {
    'use strict';

    angular
        .module('app.addProduct')
        .controller('addProductCtrl', addProductCtrl);

        //addProductCtrl.$injector = [ 'EmailService' ];
    
        addProductCtrl.$injector = [ 'LoginService','$location','$stateParams','addProductService' ];
        
        function addProductCtrl(LoginServices,$location,$stateParams,addProductService) {

                var vm = this;

                activate();
                
                function activate() {
                   
                    return getProduct($stateParams.id).then(function() {
                        console.log('Activated Product View');
                    });
                }

                function getProduct(id) {
                    return addProductService.getProduct(id)
                        .then(function(data) {
                            
                            vm.categories = data;
                            return data;
                        });
                }

                
        }

})(); 