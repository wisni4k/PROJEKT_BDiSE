var logowanieModule =angular.module('logowanieModule',["restangular"])
logowanieModule.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
}]);

	

logowanieModule.controller("logowanieCtrl",["Restangular","$scope","$filter","$route",function(Restangular,$scope,$filter,$route){
	
	var konta = Restangular.all('kontas');
 	konta.getList().then(function(User) {
 	  $scope.acc = User[0];
 	  $scope.pobranie($scope.acc.kontas);
 	})
	
	
	$scope.listaKont = [];
	
    $scope.pobranie = function(kont){
    var login = $route.current.params.login;
    var haslo = $route.current.params.haslo;
  	  for(var i = 0;i<kont.length;i++){
  		  $scope.listaKont.push(kont[i]);
    	}
  	 if(login != undefined){
     	for(i=0;i<$scope.listaKont.length;i++){
     		if($scope.listaKont[i].login == login && $scope.listaKont[i].haslo == haslo && $scope.listaKont[i].status_konta == 1){
     			window.location.href = "#menu";
     		}
     	}
     }
    } 
    
}]);