app.factory('GetAllCards', function($http, $q) {
    return {
        getData: function() {
            var deferred = $q.defer();

            $http.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards', {
                headers: {'X-Mashape-Key': 'YqZfSk62bmmshLBArzCiC8D6cLmSp1O6kpzjsnNtLKBnDyAfm4'}
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