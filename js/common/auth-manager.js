aydoor.service('AuthManager', ['$rootScope', 'Storage', function($rootScope, Storage) {
    
    this.isLogin = false;

    this.get_token = function(){
        return Storage.get('token');
    }

    this.get_user = function(){
        return Storage.get('user_id');
    }

    this.login = function(token, user_id){
        this.isLogin = true;
        Storage.set('token', token);
        Storage.set('user_id', user_id);
        $rootScope.$broadcast('login');
    }

    this.logout = function(){
        this.isLogin = false;
        Storage.del('token');
        Storage.del('user_id');
        $rootScope.$broadcast('logout');
    }

    this.check = function(){
        if (Storage.get('token') != null) {
            this.login(Storage.get('token'), Storage.get('user_id'));
        }else{
            console.log('offline');
        }
    }
}])