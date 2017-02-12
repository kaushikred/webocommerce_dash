(function () {
    'use strict';

    angular
        .module('app.addProduct')

        .factory('addProductService',  addProductService)
        

        addProductService.$injector = ['CONFIG','$http' ];

       

        function addProductService(CONFIG,$http) {

        var endpoint = CONFIG.api_endpoint;

        return {

         
          getProduct:getProduct
        
        };

	   
	    
	    function getProduct(id) {

	        return $http.get(endpoint + '/product/get_products_by_sub_category/'+ id)
	            .then(getCategoriesComplete)
	            .catch(getCategoriesFailed);

	        function getCategoriesComplete(response) {
	            console.log(response.data.results)
	            return response.data.results;
	        }

	        function getCategoriesFailed(error) {
	            console.log('XHR Failed for getAvengers.' + JSON.stringify(error.data));
	        }
	    }
    }

})(); 

 
