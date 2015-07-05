aydoor.controller('LoginCtrl', ['$scope', '$state', 'Auth', 'AuthManager',  function($scope, $state, Auth, AuthManager) {

	$scope.data = {};

	$scope.login = function(response){
		Auth.save($scope.data, $scope.onLogin, $scope.onLoginErr );
	}

	$scope.onLogin = function(response){
		AuthManager.login(response.token, response.id);
        $state.go('home');
	}

	$scope.onLoginErr = function(response){
		console.log(response);
	}

}]);