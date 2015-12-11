var angularDocpzpos =angular.module('angularDocpzpos',["restangular"])
angularDocpzpos.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
}]);


angularDocpzpos.controller("MainCtrl",["Restangular","$scope","$filter",function(Restangular,$scope,$filter){
	$scope.getDocpzpos = function(docpzpos) {
		var User = Restangular.all('docpzposes');
		var oneUser = Restangular.one('docpzposes', docpzpos.id);
		oneUser.get().then(function(docpzpos) {
			  $scope.userek = user;
			 
			});
      };
      
      $scope.addDocpzpos = function(docpzpos){
      	var User = Restangular.all('docpzposes');
      	$scope.user = {	id_docpz: 			docpzpos.id_docpz,
  		    			pozycja: 			docpzpos.pozycja,
  		    			nazwa: 				docpzpos.nazwa,
  		    			ilosc_palet:  		docpzpos.ilosc_palet};
      	
      	User.post($scope.user);
      };
      	
      var User = Restangular.all('docpzposes');
    	User.getList().then(function(User) {
    	  $scope.users = User[0];
    	})
    
    	
    
	
}])