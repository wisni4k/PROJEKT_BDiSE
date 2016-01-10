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
  	 
  	if(document.cookie){
			if(document.cookie == "username=wszytsko"){
				window.location.href = "#menu";
			}else if(document.cookie == "username=magaz" ){
				window.location.href = "#menum";
			}
		}
  	else if(login != undefined){
     	for(i=0;i<$scope.listaKont.length;i++){
     		var str1 = $scope.listaKont[i].uprawnienia;
     		if($scope.listaKont[i].login == login && $scope.listaKont[i].haslo == haslo && $scope.listaKont[i].status_konta == 1){
     			if($scope.listaKont[i].uprawnienia == "wszystko"){
     				window.location.href = "#menu";
     				document.cookie="username=wszytsko";
     				console.log(document.cookie);
     				break;
     			}
     			else if($scope.listaKont[i].uprawnienia == "magazynier"){
     				window.location.href = "#menum";
     				document.cookie="username=magaz";
     				break;
     			}
     			else{
     				window.location.href = "#menu";
     				break;
     			}
     		}
     		else{
     			window.location.href = "#/";
     		}
     	}
     }
    } 
    
}]);