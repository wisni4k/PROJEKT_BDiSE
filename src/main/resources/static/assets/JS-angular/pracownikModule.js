var pracownikModule =angular.module('pracownikModule',["restangular"])
pracownikModule.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
}]);



pracownikModule.config(['$routeProvider',
                     function($routeProvider) {
        			    $routeProvider.
        			      when('/nowekonto', {
        			        templateUrl: 'pracownicy/noweKontoLogowanie.html',
        			        controller: 'noweKontoCtrl'
        			      }).
        			      when('/zwolnij', {
          			        templateUrl: 'pracownicy/zwolnienie.html',
          			        controller: 'zwolnieniePracownikaCtrl'
          			      }).
          			      when('/wyplata',{
          			    	  templateUrl: 'pracownicy/wyplata.html',
          			    	  controller: 'pensjaCtrl'
          			      }).
          			      when('/wyplata2/:number',{
          			    	  templateUrl:	'pracownicy/wyplatylista.html',
          			    	  controller: 'pensjaCtrl'
          			      })
          			 
        			  }
        ]);





pracownikModule.controller("pracownikCtrl",["Restangular","$scope","$filter",function(Restangular,$scope,$filter){
	
	$scope.getPracownik = function(pracownik) {
		var User = Restangular.all('pracowniks');
		var oneUser = Restangular.one('pracowniks', pracownik.id);
		oneUser.get().then(function(user) {
			  $scope.userek = user;
			});
      };
      
      $scope.addPracownik = function(pracownik){
      	var User = Restangular.all('pracowniks');
      	$scope.user = {		nazwisko: 			pracownik.nazwisko,
  		    				imie: 				pracownik.imie,
  		    				adres: 				pracownik.adres,
  		    				miasto:				pracownik.miasto,
  		    				kod_pocztowy:		pracownik.kod_pocztowy,
  		    				kraj:				pracownik.kraj,
  		    				telefon:			pracownik.telefon,
  		    				stanowisko:			pracownik.stanowisko};
      	User.post($scope.user);
      };
      
    

    var User = Restangular.all('pracowniks');
  	User.getList().then(function(User) {
  	  $scope.users = User[0];
  	});
}]);


pracownikModule.controller("noweKontoCtrl",["Restangular","$scope","$filter",function(Restangular,$scope,$filter){
	
	$scope.getKonta = function(konta) {
		var User = Restangular.all('kontas');
		var oneUser = Restangular.one('kontas', konta.id);
		oneUser.get().then(function(user) {
			  $scope.userek = user;
			});
      };
      
    $scope.addKonta = function(konta){
    	var User = Restangular.all('kontas');
    	$scope.user = {	login: 			konta.login,
		    			haslo: 		   	konta.haslo,
		    			uprawnienia:  	konta.uprawnienia,
		    			id_pracownik: 	konta.id_pracownik,
		    			};
    	
    	User.post($scope.user);
    };
      

    var User = Restangular.all('kontas');
  	User.getList().then(function(User) {
  	  $scope.users = User[0];
  	})
	
}]);


pracownikModule.controller("zwolnieniePracownikaCtrl",["Restangular","$scope","$filter",function(Restangular,$scope,$filter){
	
	$scope.getUsun = function(usun) {
		var User = Restangular.all('usuns');
		var oneUser = Restangular.one('usuns', usun.id);
		oneUser.get().then(function(user) {
			  $scope.userek = user;
			});
      };
      
    $scope.addUsun = function(usun){
    	var User = Restangular.all('usuns');
    	$scope.user = {
		    			id_pracownik: 	usun.id_pracownik,
		    			};
    	
    	User.post($scope.user);
    };
      

    var User = Restangular.all('usuns');
  	User.getList().then(function(User) {
  	  $scope.users = User[0];
  	})
	
}]);


pracownikModule.controller("pensjaCtrl",["Restangular","$scope","$filter","$route",function(Restangular,$scope,$filter,$route){
	
	var paramValue = $route.current.params.number;
	$scope.lista = [];
	$scope.prawidlowePozycje =[];
	$scope.prawidloweSczegoly =[];
	$scope.getUsun = function(wyplata) {
		var User = Restangular.all('wyplatas');
		var oneUser = Restangular.one('wyplatas', wyplata.id);
		oneUser.get().then(function(user) {
			  $scope.userek = user;
			});
      };
      
    $scope.addWyplata = function(wyplata){
    	var User = Restangular.all('wyplatas');
    	$scope.user = {
		    			id_pracownik: 	wyplata.id_pracownik,
		    			miesiac:		wyplata.miesiac,
		    			stawka:			wyplata.stawka,
		    			ilosc_godz:		wyplata.ilosc_godz,
		    			pensja_netto:	0.8*wyplata.stawka*wyplata.ilosc_godz,
		    			pensja_brutto:	wyplata.stawka*wyplata.ilosc_godz
		    			};
    	
    	User.post($scope.user);
    };
      
    
    
    $scope.pobranie = function(wyplatas){
  	  for(var i = 0;i<wyplatas.length;i++){
  		  $scope.lista.push(wyplatas[i]);
    	}
  	  $scope.prawidlowePozycje($scope.lista);
    }
    
    $scope.prawidlowePozycje = function(listapozycji){
  	  for(var i = 0;i<listapozycji.length;i++){
  		  if(listapozycji[i].id_pracownik == paramValue){
  			  $scope.prawidloweSczegoly.push(listapozycji[i]);
  		  }
  	  }
    }

    var User = Restangular.all('wyplatas');
  	User.getList().then(function(User) {
  	  $scope.users = User[0];
  	  $scope.pobranie($scope.users.wyplatas);
  	})
  	
  	
  	
	
}]);
