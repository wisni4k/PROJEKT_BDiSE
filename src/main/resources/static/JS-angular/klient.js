var angularKlient =angular.module('angularKlient',["restangular"])
angularKlient.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
}]);


angularKlient.controller("MainCtrl",["Restangular","$scope","$filter",function(Restangular,$scope,$filter){
	
	$scope.getCustomer = function(customer) {
		var User = Restangular.all('customers');
		var oneUser = Restangular.one('customers', customer.id);
		oneUser.get().then(function(user) {
			  $scope.userek = user;
			});
      };
      
    $scope.addCustomer = function(customer){
    	var User = Restangular.all('customers');
    	$scope.user = {	customer_name: 		customer.imie,
		    			contact_name: 		customer.nazwa,
		    			customer_adress: 	customer.adres,
		    			phone:				customer.tel,
		    			fax:				customer.fax,
		    			nip:				customer.nip};
    	
    	User.post($scope.user);
    };
      

    var User = Restangular.all('customers');
  	User.getList().then(function(User) {
  	  $scope.users = User[0];
  	})
	
}])