'use strict';

describe('myApp.search module', function() {

  beforeEach(module('myApp.search'));

  describe('home controller', function(){

    var scope;
    var controller;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller('SearchCtrl', {$scope: scope});
    }));


    it('should be defined', inject(function() {
      expect(controller).toBeDefined();
    }));

  });
});