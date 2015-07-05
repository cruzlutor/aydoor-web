aydoor.controller('HomeCtrl', ['$scope', '$state', '$location', 'Service', 'AuthManager',  function($scope, $state, $location, Service, AuthManager) {

	$scope.data = {};
    $scope.service = null;

    $scope.init = function(){
        $scope.$watch('service', $scope.onService);
    }

    $scope.onService = function(element){
        if (element) {
            $scope.data.service = element;
        }
    }

	$scope.search = function(){
        $location.url('/search/?service_id='+$scope.data.service.id+'&service_name='+$scope.data.service.name+'&city='+$scope.data.city);
	}

    $scope.init();

}]);