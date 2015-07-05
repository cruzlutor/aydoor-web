aydoor.factory('Auth', ['$resource', 'Config',
	function($resource, Config){

		var url = Config.API + 'account/auth/';

		return $resource(url, {}, {
        });
}]);


aydoor.factory('Account', ['$resource', 'Config',
    function($resource, Config){

        var url = Config.API + 'account/';

        return $resource(url, {}, {
            signup: {method: 'POST'}
        });
}]);