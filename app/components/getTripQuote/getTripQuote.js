'use strict';

angular.module('myApp.getTripQuote', ['ngRoute', 'myApp.services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/getTripQuote', {
    templateUrl: 'components/getTripQuote/getTripQuote.html',
    controller: 'GetTripQuoteCtrl'
  });
}])

.controller('GetTripQuoteCtrl', ['$scope', '$location', 'lazyOceanServices', function($scope, $location, lazyOceanServices) {

  function init() {

    // Extract the search parameters
    var search = $location.search();
    var tripId = search.tripId;

    $scope.bookingData = {
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

  $scope.finishWizard = function() {
      var bookingData = $scope.bookingData;

      lazyOceanServices.createBooking(bookingData).then(function(booking) {
          $location.path('/bookingConfirmation').search({
              'bookingId' : booking._id,
          });
      }, function(reason) {
          alert('Failed' + reason);
      });

  }

  init();

}]);