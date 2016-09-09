'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', 'lazyOceanServices', function($scope, lazyOceanServices) {

  function init() {
    $scope.featureOffer = null;
    $scope.secondaryOffers = [];
    $scope.destinations = [];
    $scope.lifeOnboardTopics = [];

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
  }

  init();

}]);