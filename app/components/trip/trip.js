'use strict';

angular.module('myApp.trip', ['ngRoute', 'myApp.services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/trip', {
    templateUrl: 'components/trip/trip.html',
    controller: 'TripCtrl'
  });
}])

.controller('TripCtrl', ['$scope', '$location', 'lazyOceanServices', function($scope, $location, lazyOceanServices) {

  function init() {

    // Extract the search parameters
    var search = $location.search();
    var tripId = search.tripId;

    lazyOceanServices.getTrip(tripId).then(function(trip) {
      $scope.featureOffer = trip;
    }, function(reason) {
      alert('Failed' + reason);
    });

  }

  init();

}]);