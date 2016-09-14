'use strict';

angular.module('myApp.destinations', ['ngRoute', 'myApp.services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/destinations', {
    templateUrl: 'components/destinations/destinations.html',
    controller: 'DestinationsCtrl'
  });
}])

.controller('DestinationsCtrl', ['$scope', '$location', 'lazyOceanServices', function($scope, $location, lazyOceanServices) {

  function init() {

    $scope.destinations = [];

    lazyOceanServices.getDestinations().then(function(destinations) {
      $scope.destinations = destinations;
    }, function(reason) {
      alert('Failed' + reason);
    })

  }

  $scope.showDestination = function(destination) {
    // Navigate to the search page.
    $location.path('/search').search({
      'destinationId' : destination.id,
    });
  }

  init();

}]);