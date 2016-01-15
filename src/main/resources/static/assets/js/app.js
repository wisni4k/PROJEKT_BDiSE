var globalModule = angular.module('globalModule', [
  'ngRoute',
  'stanmagazynuModule',
  'pracownikModule',
  'przyjecieTowaruModule',
  'klientModule',
  'fakturaModule',
  'wydanieTowaruModule',
  'mapaModule',
  'logowanieModule'
]);


globalModule.config(['$routeProvider',
             function($routeProvider) {
			    $routeProvider.
			    	when('/', {
			        templateUrl: 'logowanie.html',
			        controller: 'logowanieCtrl'
			      }).
			      when('/logowanie/:login?/:haslo?', {
			        templateUrl: 'logowanie.html',
			        controller: 'logowanieCtrl'
			      }).
			      when('/menu', {
				     templateUrl: 'menu.html',
				     controller: 'testCtrl'
				  }).
				  when('/menum', {
					     templateUrl: 'menum.html',
					     controller: 'testCtrl'
				  }).

			      when('/stanmagazynu',{
			    	 templateUrl: 'stanmagazynu/stanmagazynu.html',
			    	 controller: 'stanmagazynuCtrl'
			      }).
			      when('/pracownicy',{
				    	 templateUrl: 'pracownicy/pracownicy.html',
				    	 controller: 'pracownikCtrl'
				  }).
			      when('/dokumentacja',{
				    	 templateUrl: 'dokumentacja/dokumentacja.html'
				  }).
			      when('/mapa',{
				    	 templateUrl: 'mapa/mapa.html',
				    	 controller: 'mapaCtrl'
				  }).
			      when('/przyjecietowaru',{
				    	 templateUrl: 'przyjecieTowaru/przyjecietowaru.html',
				    	 controller: 'przyjecieTowaruCtrl'
				  }).
			      when('/klient',{
				    	 templateUrl: 'klient/klient.html',
				    	 controller: 'klientCtrl'
				  }).
			      when('/docwz',{
				    	 templateUrl: 'wydanieTowaru/docwz.html',
				    	 controller: 'wzCtrl'
				  }).
			      when('/faktura',{
				    	 templateUrl: 'fakturaVAT/faktura.html',
				    	 controller: 'fakturaCtrl'
				  }).
				  when('/wydanieTowaru',{
					  templateUrl:	'wydanieTowaru/docwz.html',
					  controller:	'wzCtrl'
				  }).
				  when('/uslugi',{
					  templateUrl:	'uslugi/listauslug.html',
					  controller:	'MainCtrl'
				  })
				 
			  }
]);

globalModule.controller('testCtrl', function($scope) {
	$scope.tekst = 'Magazyn';
     
});