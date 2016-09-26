'use strict';

/**
 * @ngdoc function
 * @name stockDogApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the stockDogApp
 */
var app = angular.module('stockDogApp')
  app.controller('myInvoiceCtrl', ['$scope', function($scope) {
    $scope.invlist = [
            {
                InvoiceNumber: 'Invoice001',
                DueDate: 'July 27,2016',
                Amount: 385,
                Status: 'Pending'
            },
            {
                InvoiceNumber: 'Invoice002',
                DueDate: 'August 13,2016',
                Amount: 121,
                Status: 'Pending'
            },
            {
                InvoiceNumber: 'Invoice003',
                DueDate: 'August 19,2016',
                Amount: 192,
                Status: 'Pending'
            }
        ]
  }]);

/*var app = angular.module('stockDogApp')
  app.controller('InvoiceListCtrl', ['$scope', function($scope) {
        $scope.th1 = 'Invoice Number';
        $scope.invlist = 
            {
                InvoiceNumber: 'Invoice001',
                DueDate: 'July 27,2016',
                Status: 'Pending',
                Amount: 385
            }
 }]);*/
