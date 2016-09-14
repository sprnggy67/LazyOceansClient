'use strict';

angular.module('myApp.search', ['ngRoute', 'myApp.services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'components/search/search.html',
    controller: 'SearchCtrl'
  });
}])

.controller('SearchCtrl', ['$scope', '$location', 'lazyOceanServices', function($scope, $location, lazyOceanServices) {

  function init() {

    // Extract the search parameters
    var search = $location.search();
    var destinationId = search.destinationId;
    var passengerCount = search.passengerCount;
    var startDate = lazyOceanServices.decodeDate(search.startDate);

    if (!destinationId) {
      destinationId = "001";
    }

    $scope.search = {
      destinationId: destinationId,
      startDate: startDate,
      passengerCount: passengerCount
    };

    // Get the search results.
    $scope.trips = [];

    $scope.findCruises = function(search) {
      if (!search.destinationId)
        return;
      lazyOceanServices.getTrips(search.destinationId, search.startDate, search.passengerCount).then(function(trips) {
        $scope.trips = trips;
      }, function(reason) {
        alert('Failed' + reason);
      })
    }

    $scope.findCruises($scope.search);
  }

  init();

}]);