var angularPracownik =angular.module('angularPracownik',["restangular"])
angularPracownik.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
}]);


angularPracownik.controller("MainCtrl",["Restangular","$scope","$filter",function(Restangular,$scope,$filter){
	
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
  	
  	
	
}])