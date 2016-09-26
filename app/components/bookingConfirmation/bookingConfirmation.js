'use strict';

angular.module('myApp.bookingConfirmation', ['ngRoute', 'myApp.services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bookingConfirmation', {
    templateUrl: 'components/bookingConfirmation/bookingConfirmation.html',
    controller: 'BookingConfirmationCtrl'
  });
}])

.controller('BookingConfirmationCtrl', ['$scope', '$location', 'lazyOceanServices', function($scope, $location, lazyOceanServices) {

  function init() {

    // Extract the search parameters
    var search = $location.search();
    var bookingId = search.bookingId;

    $scope.bookingData = {
        _id: bookingId
    };

    lazyOceanServices.getBooking(bookingId).then(function(bookingData) {
      $scope.bookingData = bookingData;
    }, function(reason) {
      alert('Failed' + reason);
    });

  }

  init();

}]);