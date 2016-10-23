var languageLab = angular.module('languageLab', ['ngRoute', 'ui.router']);


languageLab.constant('Config', {
    'APP_NAME' : 'Language Lab'
})

languageLab.config(function($urlRouterProvider, $routeProvider) {

    $routeProvider
    .when("/home", {
        templateUrl : "page-list/home-page.html",
        controller : "HomePageCtrl"
    });

    $urlRouterProvider.otherwise('/home');

});

languageLab.controller('GlobalController', function($scope, Config) {
    $scope.config = Config;
});

languageLab.controller('HomePageCtrl', function($scope) {
    console.log("You are home controller");
});
