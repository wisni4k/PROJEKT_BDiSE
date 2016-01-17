var przyjecieTowaruModule  = angular.module('przyjecieTowaruModule',["restangular"])
przyjecieTowaruModule.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
}]);


przyjecieTowaruModule.config(['$routeProvider',
                        function($routeProvider) {
           			    $routeProvider.
           			      when('/dodajPozycjePZ/:number', {
           			        templateUrl: 'przyjecieTowaru/dodajPozycjePZ.html',
           			        controller: 'listaPozycjiPZ'
           			      }).
           			      when('/listaDokumentowPZ', {
             			        templateUrl: 'przyjecieTowaru/listaDokumentowPZ.html',
             			        controller: 'przyjecieTowaruCtrl'
             			  }).
             			 when('/szczegolyPZ/:number', {
          			        templateUrl: 'przyjecieTowaru/szczegolyPozycjaPZ.html',
          			        controller: 'listaPozycjiPZ'
             			 })
           			  }
           ]);




przyjecieTowaruModule.controller("przyjecieTowaruCtrl",["Restangular","$scope","$filter","$route",function(Restangular,$scope,$route,$filter){
	
	$scope.ostatniaPozycja;
	

	
    $scope.addDocpz = function(docpz){
    	
    	
    	 var data = docpz.data;
    	 var data2 = new Date(docpz.data);
    	 data2.setHours(docpz.data.getHours()+1);
    	
    	var User = Restangular.all('docpzes');
    	$scope.user = {	id_docpz:			docpz.id_docpz,
    					id_customer: 		docpz.id_customer,
		    			data_przyjecia: 	data2
		    			};
    	
    	User.post($scope.user);
    };
    
    
    $scope.podmiany = function(pozycje){
    	for(var i = 0;i<pozycje.length;i++){
    		$scope.podmianaKlienta(pozycje[i]);
    	}
    	if(pozycje.length != 0){
    		$scope.ostatniaPozycja = pozycje[pozycje.length-1].id_dpz;
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
      

    var User = Restangular.all('docpzes');
  	User.getList().then(function(User) {
  	  $scope.users = User[0];
  	  $scope.podmiany($scope.users.docpzes);
  	})
	
}]);


przyjecieTowaruModule.controller("listaPozycjiPZ",["Restangular","$scope","$filter","$route",function(Restangular,$scope,$filter,$route){
	
	var paramValue = $route.current.params.number;
	
	$scope.lista = [];
	$scope.prawidloweSczegoly = [];
	$scope.listaPozycji = [];
	$scope.pozycja = 1;
	
	
	$scope.addToPozList = function(docpzpos) {
		var docPozycjePZ = Restangular.all('docpzposes');
		$scope.poz = {
			id_docpz:	    paramValue,
			pozycja: 		$scope.pozycja,
			nazwa: 			docpzpos.nazwa,
			ilosc_palet: 	docpzpos.ilosc_palet
		};
		$scope.listaPozycji.push({
			id_docpz:	    paramValue,
			pozycja: 		$scope.pozycja,
			nazwa: 			docpzpos.nazwa,
			ilosc_palet: 	docpzpos.ilosc_palet
		});
		$scope.pozycja = $scope.pozycja +1;
		docPozycjePZ.post($scope.poz);
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
      
      $scope.addDocpzpos = function(docpzpos){
      	var docPozycjePZ = Restangular.all('docpzposes');
      	for(i=0;i<=$scope.listaPozycji.length;i++){
      		docPozycjePZ.post($scope.listaPozycji[i]);
      	}

      };
      	
      $scope.pobranie = function(docpzposes){
    	  for(var i = 0;i<docpzposes.length;i++){
    		  $scope.lista.push(docpzposes[i]);
      	}
    	  $scope.prawidlowePozycje($scope.lista);
      }
      
      $scope.prawidlowePozycje = function(listapozycji){
    	  for(var i = 0;i<listapozycji.length;i++){
    		  if(listapozycji[i].id_docpz == paramValue){
    			  $scope.prawidloweSczegoly.push(listapozycji[i]);
    		  }
    	  }
      }
      
      var User = Restangular.all('docpzposes');
    	User.getList().then(function(User) {
    	  $scope.users = User[0];
    	  $scope.pobranie($scope.users.docpzposes);
    	})
    
    	
    
	
}])
