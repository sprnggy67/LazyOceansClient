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
    var search = $location.search();

    var destinationId = search.destinationId;
    var startDate = search.startDate;
    var passengerCount = search.passengerCount;

    $scope.search = {
      destinationId: destinationId,
      startDate: startDate,
      passengerCount: passengerCount
    };

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