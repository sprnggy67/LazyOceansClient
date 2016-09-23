'use strict';

angular.module('myApp.purchaseTrip', ['ngRoute', 'myApp.services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/purchaseTrip', {
    templateUrl: 'components/purchaseTrip/purchaseTrip.html',
    controller: 'PurchaseTripCtrl'
  });
}])

.controller('PurchaseTripCtrl', ['$scope', '$location', 'lazyOceanServices', function($scope, $location, lazyOceanServices) {

  function init() {

    // Extract the search parameters
    var search = $location.search();
    var tripId = search.tripId;

    $scope.purchaseData = {
      tripId: tripId,
      passengerCount: "2",
      roomCount: "1",
      roomType: "interior"
    };

    lazyOceanServices.getTrip(tripId).then(function(trip) {
      $scope.trip = trip;
    }, function(reason) {
      alert('Failed' + reason);
    });

  }

  init();

}]);