var app = angular.module("hearthStone", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/app/home");
    $stateProvider
        .state('app', {
            url: "/app",
            abstract: true,
            views: {
                content: {
                    templateUrl: "views/app.html",
                    controller: 'AppController'
                }
            }
        })
        .state('app.home', {
            url: "/home",
            views: {
                inner: {
                    controller: 'MainController',
                    templateUrl: "views/home.html"
                }
            }
        })
        .state('app.allCards', {
            url: "/all-cards",
            views: {
                inner: {
                    controller: 'AllCardsController',
                    templateUrl: 'views/all-cards.html'
                }
            }
        })
        .state('app.class', {
            url: "/class/:name",
            views: {
                inner : {
                    controller: 'CardsOfClassController',
                    templateUrl: 'views/class-cards.html'
                }
            }
        })
        .state('app.class.card', {
            url: "/card/:idCard",
            views: {
                inner : {
                    controller: 'SingleCardController',
                    templateUrl: 'views/card.html'
                }
            }
        })


});