'use strict';

angular.module('myApp.home', ['ngRoute', 'myApp.services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'components/home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', '$location', 'lazyOceanServices', function($scope, $location, lazyOceanServices) {

  function init() {
    $scope.featureOffer = null;
    $scope.secondaryOffers = [];
    $scope.destinations = [];
    $scope.lifeOnboardTopics = [];
    $scope.search = {
      destinationId: "001",
      startDate: null,
      passengerCount: "2"
    };

    lazyOceanServices.getSpecialOffers().then(function(specialOffers) {
      if (specialOffers.length > 0) {
        $scope.featureOffer = specialOffers[0];
      }
      if (specialOffers.length > 1) {
        $scope.secondaryOffers = specialOffers.slice(1);
      }
    }, function(reason) {
      alert('Failed' + reason);
    })

    lazyOceanServices.getDestinations().then(function(destinations) {
      $scope.destinations = destinations;
    }, function(reason) {
      alert('Failed' + reason);
    })

    lazyOceanServices.getLifeOnBoardTopics().then(function(lifeOnboardTopics) {
      $scope.lifeOnboardTopics = lifeOnboardTopics;
    }, function(reason) {
      alert('Failed' + reason);
    })

    $scope.findCruises = function(search) {
      // Generate the search query parameters.
      var queryParameters = {
        'destinationId' : search.destinationId,
        'passengerCount' : search.passengerCount
      };
      if (search.startDate) {
        queryParameters.startDate = lazyOceanServices.encodeDate(search.startDate);
      }

      // Navigate to the search page.
      $location.path('/search').search(queryParameters);
    }

    $scope.showDestination = function(destination) {
      // Navigate to the search page.
      $location.path('/search').search({
        'destinationId' : destination.id,
      });
    }

    $scope.showLifeOnBoardTopic = function(topic) {
      $location.path('/viewIncomplete');
    };
  }

  init();

}]);