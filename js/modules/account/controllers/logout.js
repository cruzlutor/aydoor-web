aydoor.controller('LogoutCtrl', ['$scope', '$state', 'AuthManager',  function($scope, $state, AuthManager) {

	$scope.data = {};

	$scope.init = function(response){
		AuthManager.logout();
        $state.go('home');
	}

    $scope.init();

}]);