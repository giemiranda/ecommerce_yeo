'use strict';

/**
 * @ngdoc function
 * @name stockDogApp.controller:AboutCtrl
 * @description
 * # InvoiceCtrl
 * Controller of the stockDogApp
 */
var app = angular.module('stockDogApp')
app.controller('InvoicePaidCtrl', ['$scope', function($scope) {
    $scope.invoice =
            {
                InvoiceNumber: 'Invoice009',
                InvoiceNumberPd: 'Invoice002',
                InvoiceNumberV: 'Invoice129',
                CreateDate: 'May 1,2016',
                DueDate: 'May 29, 2016',
                Company: 'Cloud First Inc.',
                CompanyAddress: 'Cloud First Inc. 30th Floor Philam Life Tower Paseo De Roxas Makati City 1226 Philippines',
                Name: 'John Doe',
                Email: 'john@ceb.com',
                Number: '+63 912 123 4567',
                CreditCard: 'American Express',
                CreditCardNum: 'xxxxxxxxx1012',
                Item1:'Lorem Ipsum',
                Item2:'Lorem Ipsum',
                Item1Price:500,
                Item2Price:393,
            }
  }]);
