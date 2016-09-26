'use strict';

/**
 * @ngdoc function
 * @name stockDogApp.controller:AboutCtrl
 * @description
 * # InvoiceCtrl
 * Controller of the stockDogApp
 */
var app = angular.module('stockDogApp')
    app.controller('myAcntCtrl', ['$scope', function($scope, $filter, $http) {

    $scope.save = function() {
        if ($scope.userForm.$valid) {
          alert('User saved');
          $scope.reset();
        } else {
          alert("There are invalid fields");
        }
      };

      $scope.reset = function() {
        $scope.user = { name: '', email: '' };
      }

    $scope.ContactInfo_myA =
            {
                FirstName:'Johnny',
                LastName:'Doe',
                Name: 'Johnny Doe',
                PhoneNum: '+123 456 901',
                MobileNum: '+122 1234 567',
                Email:'johnnyk@ceb.com',
                Timezone:'(UTC+09:30) Australian Central Standard Time',
                Address:'170 West Tasman Drive San Jose California 95134 United States',
                BillingAddress1:'170 West Tasman Drive San Jose California 95134 United States',
                BillingAddress2:'170 West Tasman Drive San Jose California 95134 United States'
            }

    $scope.invlistRecOrd_myA = [
            {
                OrderID: '0-00000204',
                PlacementDate: 'April 27, 2016',
                LastMod:'April 29, 2016',
                Status: 'Completed'
            },
            {
                OrderID: '0-00000205',
                PlacementDate: 'May 13, 2016',
                LastMod:'May 21, 2016',
                Status: 'Completed'
            }
        ];

        $scope.invlistRecOrd_myASubmt = [
                {
                    OrderID: '0-00000202',
                    PlacementDate: 'April 27, 2016',
                    LastMod:'April 29, 2016',
                    Status: 'Submitted'
                }
            ];

            $scope.invlistRecOrd_myACncl = [
                    {
                        OrderID: '0-00000206',
                        PlacementDate: 'April 27, 2016',
                        LastMod:'April 29, 2016',
                        Status: 'Cancelled'
                    }
                ];

    $scope.invlistRecOrdOldr_myA = [
            {
                OrderID: '0-00000004',
                PlacementDate: 'February 27, 2016',
                LastMod:'March 3, 2016',
                Status: 'Completed'
            },
            {
                OrderID: '0-00000008',
                PlacementDate: 'March 13, 2016',
                LastMod:'March 14, 2016',
                Status: 'Completed'
            }
        ];

        $scope.invlistRecOrdOldr_myASbmt = [
                {
                    OrderID: '0-00000206',
                    PlacementDate: 'April 27, 2016',
                    LastMod:'April 29, 2016',
                    Status: 'Cancelled'
                }
            ];


            $scope.invlistRecOrdOldr_myACncl = [
              {
                  OrderID: '0-00000003',
                  PlacementDate: 'March 13, 2016',
                  LastMod:'March 14, 2016',
                  Status: 'Cancelled'
              }
                ];

            $scope.invlistRecOrdOldr_myASbmt = [
                    {
                        OrderID: '0-00000004',
                        PlacementDate: 'February 27, 2016',
                        LastMod:'March 3, 2016',
                        Status: 'Submitted'
                    }
                ];

    $scope.invlistInvPending_myA = [
            {
                InvoiceNumber: 'Invoice001',
                DueDate: 'May 1, 2016',
                Amount: 385
            },
            {
                InvoiceNumber: 'Invoice006',
                DueDate: 'June 9, 2016',
                Amount: 1194
            },
            {
                InvoiceNumber: 'Invoice007',
                DueDate: 'July 1, 2016',
                Amount: 273
            }
        ];

    $scope.invlistInvVoid_myA = [
            {
                InvoiceNumber: 'Invoice003',
                DueDate: 'May 1, 2016',
                Amount: 385
            },
            {
                InvoiceNumber: 'Invoice210',
                DueDate: 'June 1, 2016',
                Amount: 926
            }
            ];

    $scope.invlistInvPaid_myA = [
            {
                InvoiceNumber: 'Invoice002',
                DueDate: 'May 29, 2016',
                Amount: 893
            },
            {
                InvoiceNumber: 'Invoice010',
                DueDate: 'June 1, 2016',
                Amount: 129
            },
            {
                InvoiceNumber: 'Invoice011',
                DueDate: 'June 1, 2016',
                Amount: 842
            }
        ];


    $scope.validateTField = function(data) {
        if (data == '') {
          return "This is a required field!";
        }
      };
  }]);
