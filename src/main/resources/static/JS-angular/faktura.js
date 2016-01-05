var angularFaktura =angular.module('angularFaktura',["restangular"])
angularFaktura.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
}]);


angularFaktura.controller("MainCtrl",["Restangular","$scope","$filter",function(Restangular,$scope,$filter){
	
	$scope.getFaktura = function(invoice) {
		var User = Restangular.all('invoices');
		var oneUser = Restangular.one('invoices', invoice.id);
		oneUser.get().then(function(user) {
			  $scope.userek = user;
			});
      };
      
    $scope.addFaktura = function(invoice){
    	var User = Restangular.all('invoices');
    	$scope.user = {	id_customer: 		invoice.id_customer,
		    			data_wystawienia: 	invoice.data_wystawienia,
		    			};
    	
    	User.post($scope.user);
    };
      
    
    $scope.podmiany = function(pozycje){
    	console.log(pozycje);
    	for(var i = 0;i<pozycje.length;i++){
    		$scope.podmianaKlienta(pozycje[i]);
    	
    	}
    }
    
    $scope.podmianaKlienta = function(pozycja){
    	var ktore = pozycja.id_customer;
    	var usluga = Restangular.all('customers');
		  	var oneUsluga = Restangular.one('customers', ktore);
		  	oneUsluga.get().then(function(uslug) {
			  $scope.usluga = uslug.customer_name;
			  pozycja.id_customer = $scope.usluga;
		  	});
    }

    
    var User = Restangular.all('invoices');
  	User.getList().then(function(User) {
  	  $scope.users = User[0];
  	  $scope.podmiany($scope.users.invoices);
  	})
	
}])