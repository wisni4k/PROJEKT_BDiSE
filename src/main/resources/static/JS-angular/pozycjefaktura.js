var angularFakturapos =angular.module('angularFakturapos',["restangular"])
angularDocwzpos.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
}]);


angularFakturapos.controller("MainCtrl",["Restangular","$scope","$filter",function(Restangular,$scope,$filter){
	$scope.getDocwzpos = function(docwzpos) {
		var User = Restangular.all('docwzposes');
		var oneUser = Restangular.one('docwzposes', docwzpos.id);
		oneUser.get().then(function(docwzpos) {
			  $scope.userek = user;
			 
			});
      };
      
      $scope.addDocwzpos = function(docwzpos){
      	var User = Restangular.all('docwzposes');
      	$scope.user = {	id_docwz: 			docwzpos.id_docwz,
  		    			pozycja: 			docwzpos.pozycja,
  		    			id_product: 		docwzpos.id_product,
  		    			ilosc_palet:  		docwzpos.ilosc_palet};
      	
      	User.post($scope.user);
      };
      	
      var User = Restangular.all('docwzposes');
    	User.getList().then(function(User) {
    	  $scope.users = User[0];
    	})
    
    	
    
	
}])