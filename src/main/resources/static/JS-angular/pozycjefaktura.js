var angularFakturapos =angular.module('angularFakturapos',["restangular"])
angularFakturapos.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
}]);


angularFakturapos.controller("MainCtrl",["Restangular","$scope","$filter",function(Restangular,$scope,$filter){
	$scope.getFakturapos = function(invoiceposition) {
		console.log("xx");
		var User = Restangular.all('invoicepositions');
		var oneUser = Restangular.one('invoicepositions', invoiceposition.id);
		oneUser.get().then(function(docwzpos) {
			  $scope.userek = user;
				
		});
      };
      
      $scope.addFakturapos = function(invoiceposition){
      	var User = Restangular.all('invoicepositions');
      	$scope.user = {	id_invoice: 			invoiceposition.id_invoice,
  		    			pozycja: 				invoiceposition.pozycja,
  		    			id_uslugi: 				invoiceposition.id_uslugi,
  		    			liczba_dni:  			invoiceposition.liczba_dni,
  		    			id_product:				invoiceposition.id_product,
  		    			ilosc_palet:			invoiceposition.ilosc_palet,
  		    			cena_paleta:			invoiceposition.cena_paleta,
  		    			kwota:					invoiceposition.kwota};
      	
      	User.post($scope.user);
      };
      	
      var User = Restangular.all('invoicepositions');
    	User.getList().then(function(User) {
    	  $scope.users = User[0];
    	  
    	})
    
    	
    
	
}])