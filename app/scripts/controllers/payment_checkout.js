'use strict';

/**
 * @ngdoc function
 * @name stockDogApp.controller:AboutCtrl
 * @description
 * # InvoiceCtrl
 * Controller of the stockDogApp
 */
angular.module('stockDogApp')
  .controller('ThankyouCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.myVar = true;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };

  });
