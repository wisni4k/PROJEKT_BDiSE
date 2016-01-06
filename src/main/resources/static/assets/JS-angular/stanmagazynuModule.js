var stanmagazynuModule =angular.module('stanmagazynuModule',["restangular"])
stanmagazynuModule.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
}]);


stanmagazynuModule.controller("stanmagazynuCtrl",["Restangular","$scope","$filter",function(Restangular,$scope,$filter){
	$scope.getProduct = function(product) {
		var User = Restangular.all('products');
		var oneUser = Restangular.one('products', product.id);
		oneUser.get().then(function(product) {
			  $scope.userek = user;
			 
			});
      };
      
      $scope.addProduct = function(product){
      	var User = Restangular.all('products');
      	$scope.user = {	nazwa: 			product.nazwa,
  		    			ilosc: 			product.ilosc,
  		    			dostawca: 		product.dostawca};
      	
      	User.post($scope.user);
      };
      	
      var User = Restangular.all('products');
    	User.getList().then(function(User) {
    	  $scope.users = User[0];
    	})
    	
}])