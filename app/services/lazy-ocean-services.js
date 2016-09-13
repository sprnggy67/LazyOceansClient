/**
 * Created by Dave on 2016-08-30.
 */

angular.module('myApp.services', [])

.service("lazyOceanServices", ['$http', function($http) {

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

    service.getTrips = function(destinationId, startDate, passengerCount) {
        var url = service.encodeUrl("http://localhost:3000/api/trips", {
            "destinationId" : destinationId,
            "startDate" : startDate,
            "passengerCount" : passengerCount
        });

        return $http.get(url)
            .then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                console.log(response);
                return response;
            });
    };

    service.encodeUrl = function(url, dataObject) {
        var dataArray = [];
        for (var d in dataObject) {
            if (dataObject[d]) {
                dataArray.push(encodeURIComponent(d) + "=" + encodeURIComponent(dataObject[d]));
            }
        }
        var result = url;
        if (dataArray.length > 0) {
            result += "?" + dataArray.join("&");
        }
        return result;
    }

    return service;

}]);
