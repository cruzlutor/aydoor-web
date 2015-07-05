aydoor.factory('Service', ['$resource', 'Config',
	function($resource, Config){

		var url = Config.API + 'service/';

		return $resource(url, {}, {

        });
}]);


aydoor.factory('Ads', ['$resource', 'Config',
    function($resource, Config){

        var url = Config.API + 'advert/:id/';

        return $resource(url, {}, {

        });
}]);

