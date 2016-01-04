var angularFakturapos =angular.module('angularFakturapos',["restangular"])
angularFakturapos.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
}]);


angularFakturapos.controller("MainCtrl",["Restangular","$scope","$filter",function(Restangular,$scope,$filter){
	
	
      
      $scope.addFakturapos = function(invoiceposition){
      	var User = Restangular.all('invoicepositions');
      	$scope.user = {	id_invoice: 			invoiceposition.id_invoice,
  		    			pozycja: 				invoiceposition.pozycja,
  		    			id_uslugi: 				invoiceposition.id_uslugi,
  		    			liczba_dni:  			invoiceposition.liczba_dni,
  		    			id_product:				invoiceposition.id_product,
  		    			ilosc_palet:			invoiceposition.ilosc_palet,
  		    			cena_paleta:			invoiceposition.cena_paleta,
  		    			kwota:					invoiceposition.cena_paleta*invoiceposition.ilosc_palet*invoiceposition.liczba_dni
  		    				};
      	
      	User.post($scope.user);
      };
      
      
        
        
        $scope.podmiany = function(pozycje){
        	console.log(pozycje);
        	for(var i = 0;i<pozycje.length;i++){
        		$scope.podmianaUslugi(pozycje[i]);
        		$scope.podmianaProduktu(pozycje[i]);
        	}
        }
        
        $scope.podmianaUslugi = function(pozycja){
        	var ktore = pozycja.id_uslugi;
        	var usluga = Restangular.all('uslugis');
  		  	var oneUsluga = Restangular.one('uslugis', ktore);
  		  	oneUsluga.get().then(function(uslug) {
  			  $scope.usluga = uslug.opis;
  			  pozycja.id_uslugi = $scope.usluga;
  		  	});
        }
        
        $scope.podmianaProduktu = function(pozycja){
        	var ktore = pozycja.id_product;
        	var prod = Restangular.all('products');
  		  	var oneProd = Restangular.one('products', ktore);
  		  	oneProd.get().then(function(produk) {
  			  $scope.produkt = produk.nazwa;
  			  pozycja.id_product = $scope.produkt;
  		  	});
        }
        
        
      var User = Restangular.all('invoicepositions');
    	User.getList().then(function(User) {
    	  $scope.users = User[0];
    	  $scope.podmiany($scope.users.invoicepositions);
    	});
    	   
	
}])