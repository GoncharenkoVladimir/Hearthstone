app.factory('GetClassesCards', function($http, $location, $q) {
    return {
        getData: function(classHeroes) {
            var deferred = $q.defer();

            $http.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/' + classHeroes, {
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