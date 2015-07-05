aydoor.controller('AdsCtrl', ['$scope', '$state', 'AuthManager',  function($scope, $state, AuthManager) {

    $scope.adsList = [1,2,3,4,5];
    
    $scope.init = function(){
        console.log('ads');
    }

    $scope.init();

}]);