var angularUsluga =angular.module('angularUsluga',["restangular"])
angularUsluga.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
}]);


angularUsluga.controller("MainCtrl",["Restangular","$scope","$filter",function(Restangular,$scope,$filter){
	
	$scope.getUsluga = function(uslugi) {
		var User = Restangular.all('uslugis');
		var oneUser = Restangular.one('uslugis', uslugi.id);
		oneUser.get().then(function(user) {
			  $scope.userek = user;
			});
      };
      
    $scope.addUsluga = function(uslugi){
    	var User = Restangular.all('uslugis');
    	$scope.user = {	opis: 		uslugi.opis
    			};
    	
    	User.post($scope.user);
    };
    
   
      

    var User = Restangular.all('uslugis');
  	User.getList().then(function(User) {
  	  $scope.users = User[0];
  	})
	
}])