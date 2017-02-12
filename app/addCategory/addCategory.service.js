(function () {
    'use strict';

    angular
        .module('app.addCategory')

        .factory('addCategoryService',  addCategoryService)
        

        addCategoryService.$injector = ['CONFIG','$http' ];

       

        function addCategoryService(CONFIG,$http) {

        var endpoint = CONFIG.api_endpoint;

        return {

          getParentCategories: getParentCategories,
         
        
        };

	    function getParentCategories() {	

	        return $http.get(endpoint + 'product/get_p_categories/')
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

 
