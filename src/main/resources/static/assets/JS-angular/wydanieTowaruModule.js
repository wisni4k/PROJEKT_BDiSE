var wydanieTowaruModule =angular.module('wydanieTowaruModule',["restangular"])
wydanieTowaruModule.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
}]);

wydanieTowaruModule.config(['$routeProvider',
                              function($routeProvider) {
                 			    $routeProvider.
                 			      when('/listaDokumentowWZ', {
                   			        templateUrl: 'wydanieTowaru/docwzlista.html',
                   			        controller: 'przyjecieTowaruCtrl'
                 			      }).
                 			     when('/dodajPozycjeWZ', {
                    			        templateUrl: 'wydanieTowaru/dodajPozycjeWZ.html',
                    			        controller: 'pozycjeWZCtrl'
                    			  }).
                      			 when('/szczegolyWZ', {
                   			        templateUrl: 'wydanieTowaru/szczegolyPozycjaWZ.html',
                   			        controller: 'pozycjeWZCtrl'
                      			 })

                 			  }
                 ]);



wydanieTowaruModule.controller("pozycjeWZCtrl",["Restangular","$scope","$filter",function(Restangular,$scope,$filter){

      
	$scope.listaPozycji = [];
	$scope.pozycja = 1;
	$scope.addToPozList = function(docwzpos) {
		$scope.listaPozycji.push({
			id_docwz: 		docwzpos.id_docwz,
			pozycja: 		$scope.pozycja,
			id_product: 	docwzpos.id_product,
			ilosc_palet: 	docwzpos.ilosc_palet
		});
		$scope.pozycja = $scope.pozycja +1;
		console.log($scope.listaPozycji);
	}
	$scope.removeFromPozLista = function(index){
	    $scope.listaPozycji.splice(index, 1);
	    for(i=0;i<$scope.listaPozycji.length;i++){
	    	$scope.listaPozycji[i].pozycja = i+1;
	    	if(i==0){
	    		$scope.pozycja = 1;
	    	}else
	    	{$scope.pozycja = i+2;}

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
      	
      var User = Restangular.all('docwzposes');
    	User.getList().then(function(User) {
    	  $scope.users = User[0];
    	  $scope.podmiany($scope.users.docwzposes);
    	})
    
    	
    
	
}]);



wydanieTowaruModule.controller("wzCtrl",["Restangular","$scope","$filter",function(Restangular,$scope,$filter){
	
	$scope.getDocwz = function(docwz) {
		var User = Restangular.all('docwzes');
		var oneUser = Restangular.one('docwzes', docpz.id);
		oneUser.get().then(function(user) {
			  $scope.userek = user;
			});
      };
      
    $scope.addDocwz = function(docwz){
    	var User = Restangular.all('docwzes');
    	$scope.user = {	
    					id_docwz:			docwz.id_docwz,
    					id_customer: 		docwz.id_customer,
		    			data_wydania: 		docwz.data_wydania,
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
    
    
    var User = Restangular.all('docwzes');
  	User.getList().then(function(User) {
  	  $scope.users = User[0];
  	 $scope.podmiany($scope.users.docwzes);
  	})
	
}])