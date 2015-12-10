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
      

    var User = Restangular.all('docpzes');
  	User.getList().then(function(User) {
  	  $scope.users = User[0];
  	})
	
}])