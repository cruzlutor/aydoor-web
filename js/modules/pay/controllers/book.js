aydoor.controller('PayBookCtrl', ['$scope', '$state', '$stateParams', 'AuthManager', 'Ads', 'Booking', function($scope, $state, $stateParams, AuthManager, Ads, Booking) {

    $scope.data = {};
    $scope.booking = {};
    $scope.billing = {};
    $scope.cc = {};

    $scope.init = function(){
        $scope.booking.date = $stateParams.date;
        $scope.booking.time = $stateParams.time;
        $scope.booking.amount = $stateParams.amount;
        $scope.populate();
    }

    $scope.round = function(value){
        return Math.round(value * 100) / 100;
    }

    $scope.populate = function(){
        Ads.get({id: $stateParams.id}, $scope.onPopulate, $scope.onPopulateErr);
        
    }

    $scope.onPopulate = function(response){
        $scope.data = response;
        $scope.calculate();
    }

    $scope.onPopulateErr = function(response){
    }

    $scope.calculate = function(){
        $scope.billing.amount = $scope.round($scope.booking.amount * $scope.data.price);
        $scope.billing.service = $scope.round($scope.billing.amount * 0.1);
        $scope.billing.total = $scope.round($scope.billing.amount + $scope.billing.service);
    }


    $scope.init();

    $scope.payment = function(){

        var data = {
            amount: $scope.booking.amount,
            price: $scope.data.price,
            datetime: '2015-01-01 12:10',
            advert: $scope.data.id,
            place: 'Bogota',
            address: $scope.booking.address,
            user_client: AuthManager.get_user(),
        }

        Booking.save(data, $scope.onPayment, $scope.onPaymentErr);
    }

    $scope.onPayment = function(){
        console.log('payments success');
        $state.go('appointment');
    }

    $scope.onPaymentErr = function(){
        console.log('payments error');
    }

}]);
