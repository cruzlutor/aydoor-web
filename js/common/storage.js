aydoor.service('Storage', function () {
    this.set = function(key, value){
        localStorage.setItem(key, value);
    }

    this.get = function(key){
        return localStorage.getItem(key);
    }

    this.del = function(key){
        localStorage.removeItem(key);
    }
})