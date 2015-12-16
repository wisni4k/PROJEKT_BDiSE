var angularUsun =angular.module('angularUsun',["restangular"])
angularUsun.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
}]);


angularUsun.controller("MainCtrl",["Restangular","$scope","$filter",function(Restangular,$scope,$filter){
	
	$scope.getUsun = function(usun) {
		var User = Restangular.all('usuns');
		var oneUser = Restangular.one('usuns', usun.id);
		oneUser.get().then(function(user) {
			  $scope.userek = user;
			});
      };
      
    $scope.addUsun = function(usun){
    	var User = Restangular.all('usuns');
    	$scope.user = {
		    			id_pracownik: 	usun.id_pracownik,
		    			};
    	
    	User.post($scope.user);
    };
      

    var User = Restangular.all('usuns');
  	User.getList().then(function(User) {
  	  $scope.users = User[0];
  	})
	
}])