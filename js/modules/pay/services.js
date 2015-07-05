aydoor.factory('Booking', ['$resource', 'Config',
	function($resource, Config){

		var url = Config.API + 'booking/:id/';

		return $resource(url, {}, {
            filter: { method:'GET', url: url + 'filtered/', isArray:true},
            accept: { method:'POST', params:{id: '@id'}, url: url + 'accept/'},
            cancel: { method:'POST', params:{id: '@id'}, url: url + 'cancel/'},
            // signup: {method: 'POST', url: url + 'signup'}
        });
}]);
