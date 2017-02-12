(function () {
    'use strict';

    angular
        .module('app.addSuperSubCategory')

        .factory('addSuperSubCategoryService',  addSuperSubCategoryService)
        

        addSuperSubCategoryService.$injector = ['CONFIG','$http' ];

       

        function addSuperSubCategoryService(CONFIG,$http) {

        var endpoint = CONFIG.api_endpoint;

        return {

          getCategories: getCategories,
         
        
        };

	    function getCategories(id) {	

	        return $http.get(endpoint + 'product/get_sub_category_by_category/'+id)
	            .then(getCategoriesComplete)
	            .catch(getCategoriesFailed);

	        function getCategoriesComplete(response) {
	            console.log(response.data)
	            return response.data;
	        }

	        function getCategoriesFailed(error) {
	            console.log('XHR Failed for getAvengers.' + JSON.stringify(error.data));
	        }

	    }
	    
	    
    }

})(); 

 
