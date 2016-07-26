app.factory('GetInfo', function($http, $q) {
    return {
        getData: function() {
            var deferred = $q.defer();

            $http.get('https://omgvamp-hearthstone-v1.p.mashape.com/info', {
                headers: {'X-Mashape-Key': 'YqZfSk62bmmshLBArzCiC8D6cLmSp1O6kpzjsnNtLKBnDyAfm4', 'Accept': 'application/json'}
            })
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (err) {
                deferred.reject(err);
            });

            return deferred.promise;
        }
    }
});