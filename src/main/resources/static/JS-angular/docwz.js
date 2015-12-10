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
      

    var User = Restangular.all('docwzes');
  	User.getList().then(function(User) {
  	  $scope.users = User[0];
  	})
	
}])