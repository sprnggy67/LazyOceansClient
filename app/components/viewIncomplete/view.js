'use strict';

angular.module('myApp.viewIncomplete', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewIncomplete', {
    templateUrl: 'components/viewIncomplete/view.html',
    controller: 'ViewIncompleteCtrl'
  });
}])

.controller('ViewIncompleteCtrl', [function() {

}]);