var mapaModule =angular.module('mapaModule',["restangular"]);

mapaModule.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
}]);



mapaModule.controller("mapaCtrl",["Restangular","$scope","$filter",function(Restangular,$scope,$filter){
	
	$scope.lista = []; //tutaj są wszytskie dostepna pozycje z bazy danych.
	
	$scope.getX = function(liczba) {
		var xx = [2,303,353,654,704,1005,1055,1356,1406,1706];
		return xx[liczba];
      };
    $scope.getY = function(liczba){
    	var yy = [14,14+1*69,14+2*69,14+3*69+1,14+4*69+2,14+5*69+3,14+6*69+4,14+7*69+5,14+8*69+7,14+9*69+8,14+10*69+9];
    	return yy[liczba];
    };
    
    
    
    var width = 49;
    var height = 69;
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = '#ff0000';
    ctx.lineWidth = 4;
    for(i = 0; i < 11; i++) {
            ctx.moveTo($scope.getX(i),$scope.getY(i));
    		ctx.lineTo($scope.getX(i)+width,$scope.getY(i));
    		ctx.lineTo($scope.getX(i)+width,$scope.getY(i)+height);
    		ctx.lineTo($scope.getX(i)+2,$scope.getY(i)+height);
    		ctx.lineTo($scope.getX(i)+2,$scope.getY(i));
        }
    ctx.stroke();
    
    
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