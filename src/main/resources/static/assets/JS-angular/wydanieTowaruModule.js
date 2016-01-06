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
      
      $scope.podmiany = function(pozycje){
      	console.log(pozycje);
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
    	$scope.user = {	id_customer: 		docwz.id_customer,
		    			data_wydania: 		docwz.data_wydania,
		    			};
    	
    	User.post($scope.user);
    };
      
    $scope.podmiany = function(pozycje){
    	console.log(pozycje);
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