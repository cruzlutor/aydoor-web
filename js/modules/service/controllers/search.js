aydoor.controller('SearchCtrl', ['$scope', '$location', 'AuthManager', 'Ads',  function($scope, $location, AuthManager, Ads) {

    $scope.filter = {};
    $scope.serviceList = [1,2,3,4,5,6];

    $scope.init = function(){
        $scope.filter = $location.search();
        $scope.search();
    }

    $scope.search = function(){
        Ads.query({id_service:$scope.filter.service_id}, $scope.onSearch, $scope.onSearchErr);
    }

    $scope.onSearch = function(response){
        $scope.serviceList = response;
    }

    $scope.onSearchErr = function(){

    }

    $scope.init();
	// $scope.data = {};

	// $scope.login = function(response){
 //        AuthManager.login(response.token);
	// 	// Auth.save($scope.data, $scope.onLogin, $scope.onLoginErr );
	// }

	// $scope.onLogin = function(response){
	// 	console.log(response);
	// }

	// $scope.onLoginErr = function(response){
	// 	console.log(response);
	// }

}]);