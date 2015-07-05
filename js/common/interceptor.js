aydoor.service('Interceptor', Interceptor);

function Interceptor($q, $rootScope, AuthManager){
    return {
        request: function(request){
            if(!request.cache){
                if(AuthManager.get_token() != undefined){
                    request.headers['Authorization'] = 'Token '+AuthManager.get_token();
                }
            }
            
            return request; 
        }
    }
}
