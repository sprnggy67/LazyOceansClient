'use strict';

describe('myApp.home module', function() {

  beforeEach(module('myApp.home'));

  describe('home controller', function(){

    var scope;
    var controller;
    var lazyOceanServiceMock;

    beforeEach(inject(function($rootScope, $controller, $q) {
      scope = $rootScope.$new();
      lazyOceanServiceMock = {
        getDestinations : function() {
          var deferred = $q.defer();
          deferred.resolve([]);
          return deferred.promise;
        },
        getSpecialOffers : function() {
          var deferred = $q.defer();
          deferred.resolve([]);
          return deferred.promise;
        },
        getLifeOnBoardTopics : function() {
          var deferred = $q.defer();
          deferred.resolve([]);
          return deferred.promise;
        }
      };
      controller = $controller('HomeCtrl', {$scope: scope, "lazyOceanServices": lazyOceanServiceMock});
    }));

    it('should be defined', inject(function() {
      expect(controller).toBeDefined();
    }));

    it('has an initial state', inject(function() {
      expect(scope.featureOffer).toBeNull();
      expect(scope.secondaryOffers).toEqual([]);
      expect(scope.destinations).toEqual([]);
      expect(scope.search.destinationId).toEqual("001");
    }));

    it('retrieves the destinations', inject(function() {
       // expect(lazyOceanServiceMock.getDestinations).toHaveBeenCalled();
    }));

  });
});