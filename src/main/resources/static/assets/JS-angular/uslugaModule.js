var uslugaModule =angular.module('uslugaModule',["restangular"])
uslugaModule.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
}]);

uslugaModule.config(['$routeProvider',
                      function($routeProvider) {
         			    $routeProvider.
         			      when('/dodajUsluge', {
         			        templateUrl: 'uslugi/nowausluga.html',
         			        controller: 'MainCtrl'
         			      })
         			  }
         ]);

angularUsluga.controller("MainCtrl",["Restangular","$scope","$filter","$route",function(Restangular,$scope,$filter,$route){
	
	$scope.getUsluga = function(uslugi) {
		var User = Restangular.all('uslugis');
		var oneUser = Restangular.one('uslugis', uslugi.id);
		oneUser.get().then(function(user) {
			  $scope.userek = user;
			});
      };
      
    $scope.addUsluga = function(uslugi){
    	var User = Restangular.all('uslugis');
    	$scope.user = {	opis: 		uslugi.opis
    			};
    	
    	User.post($scope.user);
    };
    
   
      

    var User = Restangular.all('uslugis');
  	User.getList().then(function(User) {
  	  $scope.users = User[0];
  	})
	
}])