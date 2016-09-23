'use strict';

describe('myApp.trip module', function() {

  beforeEach(module('myApp.trip'));

  describe('trip controller', function(){

    var scope;
    var controller;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller('TripCtrl', {$scope: scope});
    }));


    it('should be defined', inject(function() {
      expect(controller).toBeDefined();
    }));

  });
});