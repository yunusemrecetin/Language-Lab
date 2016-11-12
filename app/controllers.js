angular.module('languageLab.controllers', ['ngRoute', 'ui.router', 'pascalprecht.translate'])

.controller('GlobalController', function($scope, Config) {
    $scope.config = Config;
})

.controller('HomePageCtrl', function($scope, $rootScope) {
    
    // init js input from root scope
    $rootScope.fileInput();

});
