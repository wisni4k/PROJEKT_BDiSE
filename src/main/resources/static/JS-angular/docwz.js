var angularDocwz =angular.module('angularDocwz',["restangular"])
angularDocwz.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
}]);


angularDocwz.controller("MainCtrl",["Restangular","$scope","$filter",function(Restangular,$scope,$filter){
	
	$scope.getDocwz = function(docwz) {
		var User = Restangular.all('docwzes');
		var oneUser = Restangular.one('docwzes', docpz.id);
		oneUser.get().then(function(user) {
			  $scope.userek = user;
			});
      };
      
    $scope.addDocwz = function(docwz){
    	var User = Restangular.all('docwzes');
    	$scope.user = {	id_customer: 		docwz.id_customer,
		    			data_wydania: 		docwz.data_wydania,
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
    
    
    var User = Restangular.all('docwzes');
  	User.getList().then(function(User) {
  	  $scope.users = User[0];
  	 $scope.podmiany($scope.users.docwzes);
  	})
	
}])