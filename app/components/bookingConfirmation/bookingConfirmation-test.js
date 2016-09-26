'use strict';

describe('myApp.bookingConfirmation module', function() {

  beforeEach(module('myApp.bookingConfirmation'));

  describe('bookingConfirmation controller', function(){

    var scope;
    var controller;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller('BookingConfirmationCtrl', {$scope: scope});
    }));


    it('should be defined', inject(function() {
      expect(controller).toBeDefined();
    }));

  });
});