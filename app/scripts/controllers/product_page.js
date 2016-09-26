'use strict';

/**
 * @ngdoc function
 * @name stockDogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stockDogApp
 */
var app = angular.module('stockDogApp')
    app.controller('productPageCtrl', ['$scope', function($scope) {
    $scope.prodPage =
        {
        Image:'images/250x250.png',
        ProductName:'CEB Enterprise Leadership',
        Price:'0.00',
        Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tellus turpis, maximus non elit ut, vestibulum pellentesque orci. Nulla facilisi. Duis scelerisque fermentum nibh, id efficitur orci ullamcorper eleifend. Donec ut ligula hendrerit, accumsan massa a, varius enim. Sed pulvinar dolor magna, quis rhoncus risus dapibus et. Aliquam non tincidunt leo, vitae scelerisque ante. Aenean eu nisl non tortor ultrices feugiat. Proin eu velit at ex suscipit malesuada.'
    }
  }]);
