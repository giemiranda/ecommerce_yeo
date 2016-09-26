'use strict';
/**
 * @ngdoc function
 * @name stockDogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stockDogApp
 */
var app = angular.module('stockDogApp');
  app.controller('MainCtrl', ['$scope', function($scope) {
        $scope.titlePage = 'ALL PRODUCTS';
        $scope.product = [
            {
                Image: 'images/200x115.jpg',
                Name: 'CEB Enterprise Leadership',
                Price: 19
            },
            {
                Image: 'images/200x115.jpg',
                Name: 'CEB Enterprise Leadershipe1e11',
                Price: 1932
            },
            {
                Image: 'images/200x115.jpg',
                Name: 'CEB Enterprise Leadershipe1e11',
                Price: 1932
            },
            {
                Image: 'images/200x115.jpg',
                Name: 'CEB Enterprise Leadershipe1e11',
                Price: 1932
            },
            {
                Image: 'images/200x115.jpg',
                Name: 'CEB Enterprise Leadershipe1e11',
                Price: 1932
            },
            {
                Image: 'images/200x115.jpg',
                Name: 'CEB Enterprise Leadershipe1e11',
                Price: 1932
            },
        ]
 }]);