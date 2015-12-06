var angularKlient =angular.module('angularKlient',["restangular"])
angularKlient.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
}]);


angularKlient.controller("MainCtrl",["Restangular","$scope","$filter",function(Restangular,$scope,$filter){
	$scope.naglowek = 0;
	
	$scope.getCustomer = function(customer) {
		var User = Restangular.all('customers');
		var oneUser = Restangular.one('customers', customer.id);
		oneUser.get().then(function(user) {
			  $scope.userek = user;
			});
      };
      

    var User = Restangular.all('customers');
  	User.getList().then(function(User) {
  	  $scope.users = User[0];
  	  $scope.naglowek = 1;
  	})
	
}])