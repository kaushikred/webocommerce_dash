(function () {
    'use strict';

    angular
        .module('app.addCategory')

        .factory('addSubCategoryService',  addSubCategoryService)
        

        addSubCategoryService.$injector = ['CONFIG','$http' ];

       

        function addSubCategoryService(CONFIG,$http) {

        var endpoint = CONFIG.api_endpoint;

        return {

         
          getsubCategories:getsubCategories
        
        };

	   
	    
	    function getsubCategories(id) {

	        return $http.get(endpoint + 'product/get_category_by_parent_category/'+ id)
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

 
