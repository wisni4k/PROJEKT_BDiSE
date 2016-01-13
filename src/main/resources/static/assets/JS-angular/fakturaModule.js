var fakturaModule =angular.module('fakturaModule',["restangular"])
fakturaModule.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
}]);

	
fakturaModule.config(['$routeProvider',
                     function($routeProvider) {
        			    $routeProvider.
        			      when('/dodajPozFaktura', {
        			        templateUrl: 'fakturaVAT/dodajPozycjeFaktura.html',
        			        controller: 'fakturaPozycjeCtrl'
        			      }).
        			      when('/listaFaktury', {
          			        templateUrl: 'fakturaVAT/fakturylista.html',
          			        controller: 'fakturaCtrl'
          			      }).
        			      when('/szczegolyFaktura', {
            			        templateUrl: 'fakturaVAT/szczegolyPozycjaFaktura.html',
            			        controller: 'fakturaPozycjeCtrl'
            			  })
        			  }
        ]);



fakturaModule.controller("fakturaCtrl",["Restangular","$scope","$filter",function(Restangular,$scope,$filter){
	
	
	
	$scope.getFaktura = function(invoice) {
		var User = Restangular.all('invoices');
		var oneUser = Restangular.one('invoices', invoice.id);
		oneUser.get().then(function(user) {
			  $scope.userek = user;
			});
      };
      
    $scope.addFaktura = function(invoice){
    	var User = Restangular.all('invoices');
    	$scope.user = {	id_customer: 		invoice.id_customer,
		    			data_wystawienia: 	invoice.data_wystawienia,
		    			};
    	
    	User.post($scope.user);
    };
      
    
    $scope.podmiany = function(pozycje){
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

    
    var User = Restangular.all('invoices');
  	User.getList().then(function(User) {
  	  $scope.users = User[0];
  	  $scope.podmiany($scope.users.invoices);
  	})
	
}]);



fakturaModule.controller("fakturaPozycjeCtrl",["Restangular","$scope","$filter",function(Restangular,$scope,$filter){
	
	
    
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
  	   
	
}]);