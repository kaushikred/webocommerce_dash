(function () {
    'use strict';

    angular
        .module('app.addSuperSubCategory')
        .controller('addSuperSubCategoryCtrl', addSuperSubCategoryCtrl);

        //addSuperSubCategoryCtrl.$injector = [ 'EmailService' ];
    
        addSuperSubCategoryCtrl.$injector = [ 'LoginService','$location','$mdDialog','$scope','addSuperSubCategoryService' ,'$stateParams'];
        
        function addSuperSubCategoryCtrl(LoginServices,$location,$mdDialog,$scope,addSuperSubCategoryService,$stateParams) {

               // console.log(CONFIG)
                
                var vm = this;
               
                vm.showAdvanced = showAdvanced;
                vm.showAlert = showAlert;

                activate();
                function activate() {
                   
                    return getCategories().then(function() {
                        console.log('Activated Categories View');
                    });
                }

                function getCategories() {
                    return addSuperSubCategoryService.getCategories($stateParams.id)
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
                        .title('Delete this SuperSubCategory?')
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