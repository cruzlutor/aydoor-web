aydoor.controller('SearchCtrl', ['$scope', '$location', 'AuthManager', 'Ads',  function($scope, $location, AuthManager, Ads) {

    $scope.filter = {};

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

}]);