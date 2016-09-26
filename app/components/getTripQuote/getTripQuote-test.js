'use strict';

describe('myApp.getTripQuote module', function() {

  beforeEach(module('myApp.getTripQuote'));

  describe('getTripQuote controller', function(){

    var scope;
    var controller;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller('GetTripQuoteCtrl', {$scope: scope});
    }));


    it('should be defined', inject(function() {
      expect(controller).toBeDefined();
    }));

  });
});