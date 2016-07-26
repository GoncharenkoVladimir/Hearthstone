app.factory('GetSingleCard', function($http, $q) {
    console.log('factory');
    return {
        getData: function(idCard) {
            var deferred = $q.defer();

            $http.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards/' + idCard, {
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