app.controller('AllCardsController', function($scope, GetAllCards) {
    GetAllCards.getData().then(function(data){
        $scope.cards = data;
        $scope.title = 'All Cards of HearthStone!';
    });
});

app.controller('CardsOfClassController', function($scope, GetClassesCards, $stateParams, $state) {
    GetClassesCards.getData($state.params.name).then(function(data) {
        $scope.cards = data;
        $scope.title = 'All' + $state.params.name + '\'s cards!';
    }, function() {
        $scope.error = 'Error!'
    })
});

app.controller('SingleCardController', function($scope, GetSingleCard, $stateParams, $state) {
    console.log('dsfgs');
    GetSingleCard.getData($state.params.idCard).then(function(data) {
        console.log('dsfgs');
        $scope.card = data;
        $scope.title = 'Card';
    }, function() {
        $scope.error = 'Error!'
    })
});
