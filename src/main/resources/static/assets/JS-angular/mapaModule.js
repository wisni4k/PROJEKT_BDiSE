var mapaModule =angular.module('mapaModule',["restangular"]);

mapaModule.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
}]);



mapaModule.controller("mapaCtrl",["Restangular","$scope","$filter",function(Restangular,$scope,$filter){
	
	$scope.lista = []; //tutaj są wszytskie dostepna pozycje z bazy danych.
	   var width = 49;
	    var height = 69;
		 var canvas = document.getElementById("myCanvas");
		 var ctx = canvas.getContext("2d");
		 ctx.strokeStyle = '#ff0000';
		 ctx.lineWidth = 4;
		
	    
	$scope.metoda=function(p){
	
		 ctx.clearRect(0,0,1775,850);
		 ctx.beginPath();
		for(var i=0; i<$scope.lista.length;i++)
			{
				if($scope.lista[i].z==p && $scope.lista[i].status_pozycja==0)
					{
						$scope.getX($scope.lista[i].x);
						$scope.getY($scope.lista[i].y);
						
						
						ctx.moveTo($scope.getX($scope.lista[i].x-1),$scope.getY($scope.lista[i].y-1));
				    	ctx.lineTo($scope.getX($scope.lista[i].x-1)+width,$scope.getY($scope.lista[i].y-1));
				    	ctx.lineTo($scope.getX($scope.lista[i].x-1)+width,$scope.getY($scope.lista[i].y-1)+height);
				    	ctx.lineTo($scope.getX($scope.lista[i].x-1)+2,$scope.getY($scope.lista[i].y-1)+height);
				    	ctx.lineTo($scope.getX($scope.lista[i].x-1)+2,$scope.getY($scope.lista[i].y-1));
						
						
					}
					
				
			}
		
		ctx.stroke();
		
		
		
	}
	
	$scope.getX = function(liczba) {
		var xx = [10,311,353+8,654+8,704+8,1005+8,1055+8,1356+8,1406+8,1706+8];
		return xx[liczba];
      };
    $scope.getY = function(liczba){
    	var yy = [14+8,14+1*69+8,14+2*69+8,14+3*69+1+8,14+4*69+2+8,14+5*69+3+8,14+6*69+4+8,14+7*69+5+8,14+8*69+7+8,14+9*69+8+8,14+10*69+9+8];
    	return yy[liczba];
    };
    
    
    
//    var width = 49;
//    var height = 69;
//    var canvas = document.getElementById("myCanvas");
//    var ctx = canvas.getContext("2d");
//    ctx.strokeStyle = '#ff0000';
//    ctx.lineWidth = 4;
//    for(i = 0; i < 11; i++) {
//            ctx.moveTo($scope.getX(i),$scope.getY(i));
//    		ctx.lineTo($scope.getX(i)+width,$scope.getY(i));
//    		ctx.lineTo($scope.getX(i)+width,$scope.getY(i)+height);
//    		ctx.lineTo($scope.getX(i)+2,$scope.getY(i)+height);
//    		ctx.lineTo($scope.getX(i)+2,$scope.getY(i));
//        }
//    ctx.stroke();
    
    
    $scope.pobranie = function(pozycje){
  	  for(var i = 0;i<pozycje.length;i++){
  		  $scope.lista.push(pozycje[i]);
    	}
  	  console.log($scope.lista);
    }
    
    var mapaPozycje = Restangular.all('pozycjas');
    mapaPozycje.getList().then(function(mapa) {
	  $scope.pozycje = mapa[0];
	  $scope.pobranie($scope.pozycje.pozycjas);
	})
    
	
}])