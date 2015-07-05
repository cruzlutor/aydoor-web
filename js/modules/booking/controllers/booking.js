aydoor.controller('BookingCtrl', ['$scope', '$state', '$stateParams', 'AuthManager', 'Booking',  function($scope, $state, $stateParams, AuthManager, Booking) {

	$scope.data = {};
    $scope.billing = {};

	$scope.init = function(response){
        $scope.populate();
    }

    $scope.populate = function(){
        Booking.get({id:$stateParams.id}, $scope.onPopulate, $scope.onPopulateErr);
	}

    $scope.onPopulate = function(response){
        $scope.data = response;
        if(response.user_client.id == AuthManager.get_user()){
            $scope.data.user = response.user_provider;
        }else{
            $scope.data.user = response.user_client;  
        }

        $scope.calculate();
    }

    $scope.onPopulateErr = function(){

    }

    $scope.accept = function(){
        console.log('accept');
    }

    $scope.calculate = function(){
        $scope.billing.amount = $scope.round($scope.data.amount * $scope.data.price);
        $scope.billing.service = $scope.round($scope.billing.amount * 0.1);
        $scope.billing.total = $scope.billing.amount;
    }

    $scope.round = function(value){
        return Math.round(value * 100) / 100;
    }

    $scope.accept = function(){
        Booking.accept({id:$stateParams.id}, $scope.onAccept, $scope.onAcceptErr);
    }

    $scope.onAccept = function(response){
        console.log(response);
        $state.go('schedule');
    }

    $scope.onAcceptErr = function(response){
        console.log('error');
    }

    $scope.cancel = function(){
        Booking.cancel({id:$stateParams.id}, $scope.onCancel, $scope.onCancelErr);
    }

    $scope.onCancel = function(response){
        console.log(response);
        $state.go('schedule');
    }

    $scope.onCancelErr = function(response){
        console.log('error');
    }

	$scope.init();

}]);