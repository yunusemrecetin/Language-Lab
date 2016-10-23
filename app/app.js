var languageLab = angular.module('languageLab', ['ngRoute', 'ui.router']);

languageLab.config(function($urlRouterProvider, $routeProvider) {

    $routeProvider
    .when("/home", {
        templateUrl : "page-list/home-page.html",
        controller : "HomePageCtrl"
    });

    $urlRouterProvider.otherwise('/home');

});

languageLab.controller('HomePageCtrl', function($scope) {
    
});
