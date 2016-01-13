var wydanieTowaruModule =angular.module('wydanieTowaruModule',["restangular"])
wydanieTowaruModule.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
}]);

wydanieTowaruModule.config(['$routeProvider',
                              function($routeProvider) {
                 			    $routeProvider.
                 			      when('/listaDokumentowWZ', {
                   			        templateUrl: 'wydanieTowaru/docwzlista.html',
                   			        controller: 'wzCtrl'
                 			      }).
                 			     when('/dodajPozycjeWZ/:number', {
                    			        templateUrl: 'wydanieTowaru/dodajPozycjeWZ.html',
                    			        controller: 'pozycjeWZCtrl'
                    			  }).
                      			 when('/szczegolyWZ/:number', {
                   			        templateUrl: 'wydanieTowaru/szczegolyPozycjaWZ.html',
                   			        controller: 'pozycjeWZCtrl'
                      			 })

                 			  }
                 ]);



wydanieTowaruModule.controller("pozycjeWZCtrl",["Restangular","$scope","$filter","$route",function(Restangular,$scope,$filter,$route){

	var paramValue = $route.current.params.number;
	$scope.lista = [];
	$scope.prawidloweSczegoly = [];
	$scope.listaPozycji = [];
	$scope.pozycja = 1;
	
	
	$scope.addToPozList = function(docwzpos) {
		$scope.listaPozycji.push({
			id_docwz: 		paramValue,
			pozycja: 		$scope.pozycja,
			id_product: 	docwzpos.id_product,
			ilosc_palet: 	docwzpos.ilosc_palet
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
	
	
      $scope.addDocwzpos = function(){
      	var docPozycjeWZ = Restangular.all('docwzposes');
      	for(i=0;i<$scope.listaPozycji.length;i++){
      		docPozycjeWZ.post($scope.listaPozycji[i]);
      	}
      };
      
      $scope.podmiany = function(pozycje){
      	for(var i = 0;i<pozycje.length;i++){
      		$scope.podmianaProduktu(pozycje[i]);
      	}
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
      
      $scope.pobranie = function(docpzposes){
    	  for(var i = 0;i<docpzposes.length;i++){
    		  $scope.lista.push(docpzposes[i]);
      	}
    	  $scope.prawidlowePozycje($scope.lista);
      }
      
      $scope.prawidlowePozycje = function(listapozycji){
    	  for(var i = 0;i<listapozycji.length;i++){
    		  if(listapozycji[i].id_docwz == paramValue){
    			  $scope.prawidloweSczegoly.push(listapozycji[i]);
    		  }
    	  }
      }
      	
      var User = Restangular.all('docwzposes');
    	User.getList().then(function(User) {
    	  $scope.users = User[0];
    	  $scope.podmiany($scope.users.docwzposes);
    	  $scope.pobranie($scope.users.docwzposes);
    	})
    
    	
    
	
}]);



wydanieTowaruModule.controller("wzCtrl",["Restangular","$scope","$filter","$route",function(Restangular,$scope,$filter,$route){
	
	$scope.ostatniaPozycja;
      
    $scope.addDocwz = function(docwz){
    	var User = Restangular.all('docwzes');
    	$scope.user = {	
    					id_docwz:			docwz.id_docwz,
    					id_customer: 		docwz.id_customer,
		    			data_wydania: 		new Date(),
		    			};
    	
    	User.post($scope.user);
    };
      
    $scope.podmiany = function(pozycje){
    	for(var i = 0;i<pozycje.length;i++){
    		$scope.podmianaKlienta(pozycje[i]);
    	}
    	if(pozycje.length != 0){
    		console.log(pozycje);
    		$scope.ostatniaPozycja = pozycje[pozycje.length-1].id_dwz;
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
    
    
    var User = Restangular.all('docwzes');
  	User.getList().then(function(User) {
  	  $scope.users = User[0];
  	 $scope.podmiany($scope.users.docwzes);
  	})
	
}])