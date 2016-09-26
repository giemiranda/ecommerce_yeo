'use strict';

/**
 * @ngdoc function
 * @name stockDogApp.controller:AboutCtrl
 * @description
 * # InvoiceCtrl
 * Controller of the stockDogApp
 */
var app = angular.module('stockDogApp')
app.controller('InvoiceCtrl', ['$scope', function($scope) {
    $scope.invoice =
            {
                InvoiceNumber: 'Invoice001',
                InvoiceNumberPd: 'Invoice002',
                InvoiceNumberVd: 'Invoice003',
                InvoiceNumberV: 'Invoice129',
                CreateDate: 'May 1,2016',
                DueDate: 'July 14, 2016',
                Company: 'Cloud First Inc.',
                CompanyAddress: 'Cloud First Inc. 30th Floor Philam Life Tower Paseo De Roxas Makati City 1226 Philippines',
                Name: 'John Doe',
                Email: 'john@ceb.com',
                Number: '+63 912 123 4567',
                CreditCard: 'American Express',
                CreditCardNum: 'xxxxxxxxx1012',
                Item1:'Lorem Ipsum',
                Item2:'Lorem Ipsum',
                Item1Price:300,
                Item2Price:85,
            }
  }]);
