var angularKlient =angular.module('angularKlient',["restangular"])
angularKlient.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
}]);


angularKlient.controller("MainCtrl",["Restangular","$scope",function(Restangular,$scope){
	$scope.getCustomer = function(customer) {
		console.log("6");
		var User = Restangular.all('customers');
		var oneUser = Restangular.one('customers', customer.id);
		oneUser.get().then(function(user) {
			  $scope.userek = user;
			  console.log($scope.userek)
			});
      };
      
    $scope.getAllCustomers = function() {
    	console.log("5");
    	var User = Restangular.all('customers');
    	User.getList()
    	.then(function(User) {
    	  // returns a list of users
    	  $scope.users = User[0];
    	  console.log($scope.users.customers);
    	})
    }
	
}])