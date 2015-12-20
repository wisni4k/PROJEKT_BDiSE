var angularKonta =angular.module('angularKonta',["restangular"])
angularKonta.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
}]);


angularKonta.controller("MainCtrl",["Restangular","$scope","$filter",function(Restangular,$scope,$filter){
	
	$scope.getKonta = function(konta) {
		var User = Restangular.all('kontas');
		var oneUser = Restangular.one('kontas', konta.id);
		oneUser.get().then(function(user) {
			  $scope.userek = user;
			});
      };
      
    $scope.addKonta = function(konta){
    	var User = Restangular.all('kontas');
    	$scope.user = {	login: 			konta.login,
		    			haslo: 		   	konta.haslo,
		    			uprawnienia:  	konta.uprawnienia,
		    			id_pracownik: 	konta.id_pracownik,
		    			};
    	
    	User.post($scope.user);
    };
      

    var User = Restangular.all('kontas');
  	User.getList().then(function(User) {
  	  $scope.users = User[0];
  	})
	
}])