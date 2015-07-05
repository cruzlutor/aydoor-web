aydoor.controller('ScheduleCtrl', ['$scope', 'AuthManager', 'Booking',  function($scope, AuthManager, Booking) {

	$scope.data = {
    };

	$scope.init = function(response){
        $scope.populate();
	}

    $scope.populate = function(){
        Booking.filter({provider:1}, $scope.onPopulate, $scope.onPopulateErr);
    }

    $scope.onPopulate = function(response){
        console.log(response)
        $scope.bookingList = response;
    }

    $scope.onPopulateErr = function(){

    }

	$scope.init();

}]);