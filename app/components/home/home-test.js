'use strict';

describe('myApp.home module', function() {

  beforeEach(module('myApp.home'));

  describe('home controller', function(){

    var scope;
    var controller;
    var lazyOceanServiceMock;

    var initController = function($controller) {
      controller = $controller('HomeCtrl', {$scope: scope, "lazyOceanServices": lazyOceanServiceMock});
    };

    beforeEach(inject(function($rootScope, $controller, $q) {
      scope = $rootScope.$new();

      lazyOceanServiceMock = {
        getDestinations: function () {
          var deferred = $q.defer();
          deferred.resolve([ {
            id:"001",
            name: "Alaska",
            primary: true,
            thumbnail: 'http://dummyimage.com/400x200/cccccc/888888.png'
          }]);
          return deferred.promise;
        },
        getSpecialOffers: function () {
          var deferred = $q.defer();
          deferred.resolve([]);
          return deferred.promise;
        },
        getLifeOnBoardTopics: function () {
          var deferred = $q.defer();
          deferred.resolve([]);
          return deferred.promise;
        }
      };

    }));

    it('should be defined', inject(function($controller) {
      initController($controller);
      expect(controller).toBeDefined();
    }));

    it('has an initial state', inject(function($controller) {
      initController($controller);
      expect(scope.featureOffer).toBeNull();
      expect(scope.secondaryOffers).toEqual([]);
      expect(scope.destinations).toEqual([]);
      expect(scope.search.destinationId).toEqual("001");
    }));

    it('retrieves the destinations', inject(function($rootScope, $controller, $q) {
      spyOn(lazyOceanServiceMock, 'getDestinations').and.callThrough();
      initController($controller);
      $rootScope.$digest();
      expect(lazyOceanServiceMock.getDestinations).toHaveBeenCalled();
      expect(scope.destinations.length).toEqual(1);
    }));

  });
});