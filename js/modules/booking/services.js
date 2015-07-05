aydoor.factory('Service', ['$resource', 'Config',
	function($resource, Config){

		var url = Config.API + 'service/';

		return $resource(url, {}, {
            // signup: {method: 'POST', url: url + 'signup'}
        });
}]);

aydoor.factory('UserService', ['$resource', 'Config',
    function($resource, Config){

        var url = Config.API + 'userservice/';

        return $resource(url, {}, {
            // signup: {method: 'POST', url: url + 'signup'}
        });
}]);
