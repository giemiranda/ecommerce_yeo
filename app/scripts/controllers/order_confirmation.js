'use strict';

/**
 * @ngdoc function
 * @name stockDogApp.controller:AboutCtrl
 * @description
 * # InvoiceCtrl
 * Controller of the stockDogApp
 */
var app = angular.module('stockDogApp')
  app.controller('orderConCtrl', ['$scope', function($scope, $filter, $http) {
    $scope.orderConfirmDetails =
        {
        OrderNum:'0-00000204',
        PurchasedDate:'July 14, 2016',
        Tax:'23',
        Promotion:'15',
        BillingMethod:'Card',
        BillingAddress:'170 West Tasman Drive San Jose California 95134 United States'
    }

    $scope.orderConfirm_Details = [
        {
            PartNum:'014',
            Item1:'SES Challenger Solution',
            Quantity:2,
            UnitPrice:'45.00'
        },
        {
            PartNum:'015',
            Item1:'SES Challenger Solution 2',
            Quantity:1,
            UnitPrice:'45.00'
        }
    ];

    $scope.getTotal = function(){
            var total = 0;
            for(var i = 0; i < $scope.orderConfirm_Details.length; i++){
                var orders = $scope.orderConfirm_Details[i];
                total += (orders.Quantity * orders.UnitPrice);
            }
            return total;
        }

  }]);
