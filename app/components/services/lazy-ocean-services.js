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
        var queryParameters = {
            "destinationId" : destinationId,
            "passengerCount" : passengerCount
        };
        if (startDate) {
            queryParameters.startDate = service.encodeDate(startDate);
        }

        var url = service.encodeUrl("http://localhost:3000/api/trips", queryParameters);

        return $http.get(url)
            .then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                console.log(response);
                return response;
            });
    };

    service.encodeDate = function(date) {
        if (date) {
            return encodeURIComponent(date.toJSON()); // Encode the start date in ISO 8601 format.
        } else {
            return null;
        }
    }

    service.decodeDate = function(dateString) {
        if (dateString) {
            return new Date(decodeURIComponent(dateString));
        } else {
            return null;
        }
    }

    service.encodeUrl = function(url, queryParameters) {
        var data = [];
        for (var name in queryParameters) {
            if (queryParameters[name]) {
                data.push(encodeURIComponent(name) + "=" + encodeURIComponent(queryParameters[name]));
            }
        }
        var result = url;
        if (data.length > 0) {
            result += "?" + data.join("&");
        }
        return result;
    }

    return service;

}]);
