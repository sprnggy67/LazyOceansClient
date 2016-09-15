'use strict';

angular.module('myApp.search')

.directive('searchView', function() {

    var controller = ['$scope', function($scope) {

        function init() {
            // TODO: Get the list of destinations here.
        }

        init();

        $scope.findCruisesLocal = function(search) {
            $scope.findCruises(search);
        }

    }];

    return {
        restrict: 'EA', // Default in 1.3+
        scope: {
            search: '=',
            findCruises: '&onFindCruises'
        },
        controller: controller,
        templateUrl: 'shared/search/search-view.html'
    };

});
