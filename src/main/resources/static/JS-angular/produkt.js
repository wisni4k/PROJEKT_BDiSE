var angularProdukt =angular.module('angularProdukt',["restangular"])
angularProdukt.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
}]);


angularProdukt.controller("MainCtrl",["Restangular","$scope","$filter",function(Restangular,$scope,$filter){
	$scope.getProduct = function(product) {
		var Product = Restangular.all('products');
		var oneProduct = Restangular.one('products', product.id);
		oneProduct.get().then(function(product) {
			  $scope.producter = product;
			  console.log($scope.producter)
			});
      };
      
    $scope.getAllProducts = function() {
    	var Product = Restangular.all('products');
    	Product.getList()
    	.then(function(Product) {
    	  // returns a list of users
    	  $scope.products = Product[0];
    
    	})
    }
	
}])