'use strict';

/**
 * @ngdoc function
 * @name stockDogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stockDogApp
 */
var app = angular.module('stockDogApp')
    app.controller('productCartCtrl', ['$scope', function($scope) {
    $scope.prodCart = [
        {
            Image: 'images/50x50.png',
            ProdName:'CIO On Site',
            NetPrice:'9,800.00'
        },
        {
            Image:'images/50x50.png',
            ProdName:'SES Challenger Solution',
            NetPrice:'9,800.00'
        },
        {
            Image:'images/50x50.png',
            ProdName:'SES Challenger Solution (Request Quote)',
            NetPrice:'N/A'
        }
    ];
  }]);
