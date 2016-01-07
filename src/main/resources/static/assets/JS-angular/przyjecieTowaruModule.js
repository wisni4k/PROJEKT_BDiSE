var przyjecieTowaruModule  = angular.module('przyjecieTowaruModule',["restangular"])
przyjecieTowaruModule.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
}]);


przyjecieTowaruModule.config(['$routeProvider',
                        function($routeProvider) {
           			    $routeProvider.
           			      when('/dodajPozycjePZ', {
           			        templateUrl: 'przyjecieTowaru/dodajPozycjePZ.html',
           			        controller: 'listaPozycjiPZ'
           			      }).
           			      when('/listaDokumentowPZ', {
             			        templateUrl: 'przyjecieTowaru/listaDokumentowPZ.html',
             			        controller: 'przyjecieTowaruCtrl'
             			  }).
             			 when('/szczegolyPZ', {
          			        templateUrl: 'przyjecieTowaru/szczegolyPozycjaPZ.html',
          			        controller: 'listaPozycjiPZ'
             			 })
           			  }
           ]);




przyjecieTowaruModule.controller("przyjecieTowaruCtrl",["Restangular","$scope","$filter",function(Restangular,$scope,$filter){
	
	$scope.getDocpz = function(docpz) {
		var User = Restangular.all('docpzes');
		var oneUser = Restangular.one('docpzes', docpz.id);
		oneUser.get().then(function(user) {
			  $scope.userek = user;
			});
      };
      
    $scope.addDocpz = function(docpz){
    	var User = Restangular.all('docpzes');
    	$scope.user = {	id_docpz:			docpz.id_docpz,
    					id_customer: 		docpz.id_customer,
		    			data_przyjecia: 	docpz.data_przyjecia,
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
      

    var User = Restangular.all('docpzes');
  	User.getList().then(function(User) {
  	  $scope.users = User[0];
  	$scope.podmiany($scope.users.docpzes);
  	})
	
}]);


przyjecieTowaruModule.controller("listaPozycjiPZ",["Restangular","$scope","$filter",function(Restangular,$scope,$filter){
	
	
	$scope.listaPozycji = [];
	$scope.pozycja = 1;
	$scope.addToPozList = function(docpzpos) {
		$scope.listaPozycji.push({
			id_docpz: 		docpzpos.id_docpz,
			pozycja: 		$scope.pozycja,
			nazwa: 			docpzpos.nazwa,
			ilosc_palet: 	docpzpos.ilosc_palet
		});
		$scope.pozycja = $scope.pozycja +1;
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
      
      $scope.addDocpzpos = function(docpzpos){
      	var docPozycjePZ = Restangular.all('docpzposes');
      	
      	for(i=0;i<$scope.listaPozycji.length;i++){
      		docPozycjePZ.post($scope.listaPozycji[i]);
      	}

      };
      	
      var User = Restangular.all('docpzposes');
    	User.getList().then(function(User) {
    	  $scope.users = User[0];
    	})
    
    	
    
	
}])
