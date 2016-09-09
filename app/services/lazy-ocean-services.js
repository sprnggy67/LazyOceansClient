/**
 * Created by Dave on 2016-08-30.
 */

angular.module('myApp').factory("lazyOceanServices", ['$http', function($http) {

    var service = this;

    service.getSpecialOffers = function() {
        return $http.get("http://localhost:3000/api/specialOffers")
            .then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                console.log(response);
                return response;
            });
    };

    service.getDestinations = function() {
        return $http.get("http://localhost:3000/api/destinations")
            .then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                console.log(response);
                return response;
            });
    };

    service.getLifeOnBoardTopics = function() {
        return $http.get("http://localhost:3000/api/lifeOnBoardTopics")
            .then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                console.log(response);
                return response;
            });
    };

    return service;

}]);
