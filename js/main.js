var aydoor = angular.module('aydoor', ['ui.router', 'ngResource'])


/* define routes and config app */
aydoor.config(function($stateProvider, $urlRouterProvider, $resourceProvider, $httpProvider){

	$resourceProvider.defaults.stripTrailingSlashes = false;

	$urlRouterProvider.otherwise('/home');

	$stateProvider

	.state('home', {
		url: '/home',
		templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
	})

    .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
    })

	.state('logout', {
		url: '/logout',
		controller: 'LogoutCtrl',
	})

    .state('signup', {
        url: '/signup',
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
    })

    .state('search', {
        url: '/search/',
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
    })

    .state('user-service', {
        url: '/user-service/:id',
        templateUrl: 'views/user-service.html',
        controller: 'UserServiceCtrl',
    })

    .state('pay-booking', {
        url: '/pay/booking/:id',
        templateUrl: 'views/pay-booking.html',
        controller: 'PayBookCtrl',
        params: {
            date:'', 
            time:'', 
            amount:''
        },
    })

    .state('schedule', {
        url: '/schedule',
        templateUrl: 'views/schedule.html',
        controller: 'ScheduleCtrl',
    })

    .state('booking', {
        url: '/booking/:id',
        templateUrl: 'views/booking.html',
        controller: 'BookingCtrl',
    })

    .state('appointment', {
        url: '/appointment',
        templateUrl: 'views/appointment.html',
        controller: 'AppointmentCtrl',
    })

    .state('ads', {
        url: '/ads',
        templateUrl: 'views/ads.html',
        controller: 'AdsCtrl',
    })

	.state('ads-new', {
		url: '/ads/new',
		templateUrl: 'views/ads-new.html',
        controller: 'AdsNewCtrl',
	})

    $httpProvider.interceptors.push('Interceptor');
});


aydoor.run([ 'AuthManager', function(AuthManager){
    setTimeout(function(){
        AuthManager.check();
    }, 100)
    
}]);

aydoor.controller('nav', function($scope, $rootScope, $location, AuthManager){
	$scope.data = {home: false, login:false};

    $scope.logout = function(){
        AuthManager.lgout();
    }

	$scope.$on("$locationChangeStart",function(event, next, current){
		$scope.data.home = ($location.$$path == '/home');
	});

    $rootScope.$on('login', function(){
        $scope.data.login = true;
    })
    $rootScope.$on('logout', function(){
        $scope.data.login = false;
    })
})


aydoor.constant('Config', {
    API: 'http://localhost:8081/api/',
    MEDIA: 'http://localhost:8081/api/',
})