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
    	$scope.user = {	id_customer: 		docpz.id_customer,
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
	$scope.getDocpzpos = function(docpzpos) {
		var User = Restangular.all('docpzposes');
		var oneUser = Restangular.one('docpzposes', docpzpos.id);
		oneUser.get().then(function(docpzpos) {
			  $scope.userek = user;
			 
			});
      };
      
      $scope.addDocpzpos = function(docpzpos){
      	var User = Restangular.all('docpzposes');
      	$scope.user = {	id_docpz: 			docpzpos.id_docpz,
  		    			pozycja: 			docpzpos.pozycja,
  		    			nazwa: 				docpzpos.nazwa,
  		    			ilosc_palet:  		docpzpos.ilosc_palet};
      	
      	User.post($scope.user);
      };
      	
      var User = Restangular.all('docpzposes');
    	User.getList().then(function(User) {
    	  $scope.users = User[0];
    	})
    
    	
    
	
}])
