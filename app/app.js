const angular = require('angular');

const app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});