aydoor.controller('UserServiceCtrl', ['$scope', '$state', '$stateParams', 'AuthManager', 'Ads',  function($scope, $state, $stateParams, AuthManager, Ads) {

	$scope.data = {};

    $scope.booking = {
        amount: 1
    };

    $scope.billing = {};

    $scope.init = function(){
        $scope.booking.amount = 1;
        $scope.populate();
    }

    $scope.round = function(value){
        return Math.round(value * 100) / 100;
    }

    $scope.populate = function(){
        Ads.get({id: $stateParams.id}, $scope.onPopulate, $scope.onPopulateErr);
        $scope.calculate();
    }

    $scope.onPopulate = function(response){
        $scope.data = response;
    }

    $scope.onPopulateErr = function(response){
        $console.log('error');
    }

    $scope.calculate = function(){
        $scope.billing.amount = $scope.round($scope.booking.amount * $scope.data.price);
        $scope.billing.service = $scope.round($scope.billing.amount * 0.1);
        $scope.billing.total = $scope.round($scope.billing.amount + $scope.billing.service);
    }

    $scope.booking = function(){

        console.log($scope.booking);
        $state.go('pay-booking', {
            id: $stateParams.id, 
            time: $scope.booking.time, 
            date: $scope.booking.date, 
            amount: $scope.booking.amount 
        });
    }

    $scope.init();

}]);