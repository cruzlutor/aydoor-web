aydoor.controller('SignupCtrl', ['$scope', '$state', 'Account', 'AuthManager',  function($scope, $state, Account, AuthManager) {

	$scope.data = {};

	$scope.signup = function(response){
		Account.signup($scope.data, $scope.onSignup, $scope.onSignupErr );
	}

	$scope.onSignup = function(response){
		$state.go('login');
	}

	$scope.onSignupErr = function(response){
		console.log(response);
	}

}]);