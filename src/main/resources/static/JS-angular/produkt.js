var angularProdukt =angular.module('angularProdukt',["restangular"])
angularProdukt.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
}]);


angularProdukt.controller("MainCtrl",["Restangular","$scope","$filter",function(Restangular,$scope,$filter){
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