'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.services',
  'myApp.search',
  'myApp.destinations',
  'myApp.trip',
  'myApp.purchaseTrip',
  'myApp.viewIncomplete',
  'mgo-angular-wizard'
]).

config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
