var fakturaModule =angular.module('fakturaModule',["restangular"])
fakturaModule.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
}]);

	
fakturaModule.config(['$routeProvider',
                     function($routeProvider) {
        			    $routeProvider.
        			      when('/dodajPozFaktura/:number', {
        			        templateUrl: 'fakturaVAT/dodajPozycjeFaktura.html',
        			        controller: 'fakturaPozycjeCtrl'
        			      }).
        			      when('/listaFaktury', {
          			        templateUrl: 'fakturaVAT/fakturylista.html',
          			        controller: 'fakturaCtrl'
          			      }).
        			      when('/szczegolyFaktura/:number', {
            			        templateUrl: 'fakturaVAT/szczegolyPozycjaFaktura.html',
            			        controller: 'fakturaPozycjeCtrl'
            			  })
        			  }
        ]);



fakturaModule.controller("fakturaCtrl",["Restangular","$scope","$filter",function(Restangular,$scope,$filter){
	
	$scope.ostatniaPozycja;
	
	$scope.getFaktura = function(invoice) {
		var User = Restangular.all('invoices');
		var oneUser = Restangular.one('invoices', invoice.id);
		oneUser.get().then(function(user) {
			  $scope.userek = user;
			});
      };
      
    $scope.addFaktura = function(invoice){
    	console.log(invoice);
    	
   	 	var data = invoice.data;
   	 	var data2 = new Date(invoice.data);
   	 	data2.setHours(invoice.data.getHours()+1);
   	 		
   	 
    	var User = Restangular.all('invoices');
    	$scope.user = {	
    					id_invoice:			invoice.id_invoice,
    					id_customer: 		invoice.id_customer,
    					kwota:				0,
		    			data_wystawienia: 	data2
		    			};
    	
    	User.post($scope.user);
    };
      
    
    $scope.podmiany = function(pozycje){
    	for(var i = 0;i<pozycje.length;i++){
    		$scope.podmianaKlienta(pozycje[i]);
    	}
    	if(pozycje.length != 0){
    		$scope.ostatniaPozycja = pozycje[pozycje.length-1].id_faktury;
    	}
    	else{
    		$scope.ostatniaPozycja = " BRAK"
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



fakturaModule.controller("fakturaPozycjeCtrl",["Restangular","$scope","$filter","$route",function(Restangular,$scope,$filter,$route){
	
	var paramValue = $route.current.params.number;
	console.log(paramValue);
	
	$scope.lista = [];
	$scope.prawidloweSczegoly = [];
	$scope.listaPozycji = [];
	$scope.pozycja = 1;
	
	
	$scope.addToFaktList = function(invoiceposition) {
		$scope.listaPozycji.push({
			id_invoice:	    paramValue,
			pozycja: 		$scope.pozycja,
			id_uslugi:		invoiceposition.id_uslugi,
			liczba_dni:		invoiceposition.liczba_dni,
			id_product: 	invoiceposition.id_product,
			ilosc_palet:	invoiceposition.ilosc_palet,
			cena_paleta:	invoiceposition.cena_paleta,
			kwota:			invoiceposition.cena_paleta*invoiceposition.ilosc_palet*invoiceposition.liczba_dni
		});
		$scope.pozycja = $scope.pozycja +1;
	}
	$scope.removeFromPozLista = function(index){
		
	    $scope.listaPozycji.splice(index, 1);
	    for(i=0;i<$scope.listaPozycji.length;i++){
	    	$scope.listaPozycji[i].pozycja = i+1;
	    	$scope.pozycja = i+2;
      	}
	    if($scope.listaPozycji.length == 0) {
	    	$scope.pozycja = 1;
	    }
	    
	    
	  }
      
      $scope.addFakturapos = function(invoiceposition){
      	var fakturapozycje = Restangular.all('invoicepositions');
		console.log($scope.listaPozycji);
      	for(i=0;i<=$scope.listaPozycji.length;i++){
      		fakturapozycje.post($scope.listaPozycji[i]);
      	}

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
    
      
      $scope.pobranie = function(invoicepositions){
    	  for(var i = 0;i<invoicepositions.length;i++){
    		  $scope.lista.push(invoicepositions[i]);
      	}
    	  $scope.prawidlowePozycje($scope.lista);
    	  console.log($scope.lista);
      }
      
      $scope.prawidlowePozycje = function(listapozycji){
    	  for(var i = 0;i<listapozycji.length;i++){
    		  if(listapozycji[i].id_invoice == paramValue){
    			  $scope.prawidloweSczegoly.push(listapozycji[i]);
    		  }
    		  
    	  }
    	  $scope.podmiany($scope.prawidloweSczegoly);
    	  
      }
      
    var User = Restangular.all('invoicepositions');
  	User.getList().then(function(User) {
  	  $scope.users = User[0];
  	  $scope.pobranie($scope.users.invoicepositions);
  	  
  	});
  	   
	
}]);