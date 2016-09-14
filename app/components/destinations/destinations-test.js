'use strict';

describe('myApp.destinations module', function() {

  beforeEach(module('myApp.destinations'));

  describe('destinations controller', function(){

    var scope;
    var controller;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller('DestinationsCtrl', {$scope: scope});
    }));


    it('should be defined', inject(function() {
      expect(controller).toBeDefined();
    }));

  });
});