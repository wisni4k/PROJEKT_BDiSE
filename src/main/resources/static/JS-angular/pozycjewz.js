var angularDocwzpos =angular.module('angularDocwzpos',["restangular"])
angularDocwzpos.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
}]);


angularDocwzpos.controller("MainCtrl",["Restangular","$scope","$filter",function(Restangular,$scope,$filter){
	$scope.getDocwzpos = function(docwzpos) {
		var User = Restangular.all('docwzposes');
		var oneUser = Restangular.one('docwzposes', docwzpos.id);
		oneUser.get().then(function(docwzpos) {
			  $scope.userek = user;
			 
			});
      };
      
      $scope.addDocwzpos = function(docwzpos){
      	var User = Restangular.all('docwzposes');
      	$scope.user = {	id_docwz: 			docwzpos.id_docwz,
  		    			pozycja: 			docwzpos.pozycja,
  		    			id_product: 		docwzpos.id_product,
  		    			ilosc_palet:  		docwzpos.ilosc_palet};
      	
      	User.post($scope.user);
      };
      
      $scope.podmiany = function(pozycje){
      	console.log(pozycje);
      	for(var i = 0;i<pozycje.length;i++){
      		$scope.podmianaProduktu(pozycje[i]);
      		
      	
      	}
      }
      
      $scope.podmianaProduktu = function(pozycja){
      	var ktore = pozycja.id_product;
      	var prod = Restangular.all('products');
		  	var oneProd = Restangular.one('products', ktore);
		  	oneProd.get().then(function(produk) {
			  $scope.produkt = produk.nazwa;
			  pozycja.id_product = $scope.produkt;
		  	});
      }
      	
      var User = Restangular.all('docwzposes');
    	User.getList().then(function(User) {
    	  $scope.users = User[0];
    	  $scope.podmiany($scope.users.docwzposes);
    	})
    
    	
    
	
}])