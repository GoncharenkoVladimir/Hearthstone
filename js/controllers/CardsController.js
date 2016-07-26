app.controller('AllCardsController', function($scope, GetAllCards) {
    GetAllCards.getData().then(function(data){
        $scope.cards = data;
        $scope.title = 'All Cards of HearthStone!';
    });
});

app.controller('CardsOfClassController', function($scope, GetClassesCards, $stateParams, $state) {
    GetClassesCards.getData($state.params.name).then(function(data) {
        $scope.cards = data;
        $scope.title = 'All ' + $state.params.name + '\'s cards!';
    }, function() {
        $scope.error = 'Error!'
    })
});

app.controller('SingleCardController', function($scope, GetSingleCard, $stateParams, $state) {
    GetSingleCard.getData($state.params.idCard).then(function(data) {
        $scope.card = data[0];
        $scope.title = data[0].name;
    }, function() {
        $scope.error = 'Error!'
    })
});
