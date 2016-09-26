'use strict';

/**
 * @ngdoc function
 * @name stockDogApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the stockDogApp
 */
var app = angular.module('stockDogApp')
  app.controller('InvoiceListCtrl', ['$scope', function($scope) {
    $scope.invlist = [
            {
                InvoiceNumber: 'Invoice001',
                DueDate: 'July 27, 2016',
                CreationDate:'May 1, 2016',
                Amount: 385,
                Status: 'Unpaid'
            },
            {
                InvoiceNumber: 'Invoice009',
                DueDate: 'August 2, 2016',
                CreationDate:'June 12, 2016',
                Amount: 145,
                Status: 'Unpaid'
            },
            {
                InvoiceNumber: 'Invoice007',
                DueDate: 'August 29, 2016',
                CreationDate:'July 1, 2016',
                Amount: 543,
                Status: 'Unpaid'
            }
        ]
    $scope.invlist2 =[
            {
                InvoiceNumber: 'Invoice002',
                DueDate: 'August 13, 2016',
                CreationDate:'July 15, 2016',
                Amount: 121,
                Status: 'Paid'
            }
        ]

        $scope.invlist3 =[
                {
                    InvoiceNumber: 'Invoice003',
                    DueDate: 'August 19, 2016',
                    CreationDate:'May 13, 2016',
                    Amount: 192,
                    Status: 'Void'
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
