(function () {
    'use strict';

    angular
        .module('app.addCategory')
        .controller('addCategoryCtrl', addCategoryCtrl);

        //addCategoryCtrl.$injector = [ 'EmailService' ];
    
        addCategoryCtrl.$injector = [ 'LoginService','$location','$mdDialog','$scope','addCategoryService' ];
        
        function addCategoryCtrl(LoginServices,$location,$mdDialog,$scope,addCategoryService) {

               // console.log(CONFIG)
                
                var vm = this;
               
                vm.showAdvanced = showAdvanced;
                vm.showAlert = showAlert;

                activate();
                function activate() {
                   
                    return getParentCategories().then(function() {
                        console.log('Activated Categories View');
                    });
                }

                function getParentCategories() {
                    return addCategoryService.getParentCategories()
                        .then(function(data) {
                            console.log(data)
                          return  vm.categories = data;
                           
                        });
                }

                function showAlert(ev) {
    
                    $mdDialog.show(
                      $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#popupContainer')))
                        .clickOutsideToClose(true)
                        .title('Delete this category?')
                        .textContent('')
                        .ariaLabel('Alert Dialog Demo')
                        .ok('Got it!')
                        .targetEvent(ev)
                    );
                };

                function showAdvanced(ev){
                    $mdDialog.show({
                      controller: DialogController,
                      templateUrl: 'dialog1.tmpl.html',
                      parent: angular.element(document.body),
                      targetEvent: ev,
                      clickOutsideToClose:true,
                      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                    })
                    .then(function(answer) {
                      $scope.status = 'You said the information was "' + answer + '".';
                    }, function() {
                      $scope.status = 'You cancelled the dialog.';
                    });
                  }; 

                

                
        }

        function DialogController($scope, $mdDialog) {
            $scope.hide = function() {
              $mdDialog.hide();
            };

            $scope.cancel = function() {
              $mdDialog.cancel();
            };

            $scope.answer = function(answer) {
              $mdDialog.hide(answer);
            };
        }

})(); 