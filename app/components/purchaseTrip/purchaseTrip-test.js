'use strict';

describe('myApp.purchaseTrip module', function() {

  beforeEach(module('myApp.purchaseTrip'));

  describe('purchaseTrip controller', function(){

    var scope;
    var controller;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller('PurchaseTripCtrl', {$scope: scope});
    }));


    it('should be defined', inject(function() {
      expect(controller).toBeDefined();
    }));

  });
});