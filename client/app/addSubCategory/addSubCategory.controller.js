(function () {
    'use strict';

    angular
        .module('app.addSubCategory')
        .controller('addSubCategoryCtrl', addSubCategoryCtrl);

        //addSubCategoryCtrl.$injector = [ 'EmailService' ];
    
        addSubCategoryCtrl.$injector = [ 'LoginService','$location','$stateParams','addSubCategoryService' ];
        
        function addSubCategoryCtrl(LoginServices,$location,$stateParams,addSubCategoryService) {

                var vm = this;

                activate();
                
                function activate() {
                   
                    return getCategories($stateParams.id).then(function() {
                        console.log('Activated Categories View');
                    });
                }

                function getCategories(id) {
                    return addSubCategoryService.getsubCategories(id)
                        .then(function(data) {
                            
                            vm.categories = data;
                            return data;
                        });
                }

                
        }

})(); 