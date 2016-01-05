var angularDocpz =angular.module('angularDocpz',["restangular"])
angularDocpz.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
}]);


angularDocpz.controller("MainCtrl",["Restangular","$scope","$filter",function(Restangular,$scope,$filter){
	
	$scope.getDocpz = function(docpz) {
		var User = Restangular.all('docpzes');
		var oneUser = Restangular.one('docpzes', docpz.id);
		oneUser.get().then(function(user) {
			  $scope.userek = user;
			});
      };
      
    $scope.addDocpz = function(docpz){
    	var User = Restangular.all('docpzes');
    	$scope.user = {	id_customer: 		docpz.id_customer,
		    			data_przyjecia: 	docpz.data_przyjecia,
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
      

    var User = Restangular.all('docpzes');
  	User.getList().then(function(User) {
  	  $scope.users = User[0];
  	$scope.podmiany($scope.users.docpzes);
  	})
	
}])