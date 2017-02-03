'use strict';

describe('Gallery Service', function() {
  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, authService, galleryService, $window, $httpBackend) => {
      this.$window = $window;
      this.$rootScope = $rootScope;
      this.authService = authService;
      this.galleryService = galleryService;
      this.$httpBackend = $httpBackend;
    });

  });
  describe('galleryService.createGallery()', () => {
    it('should create a new gallery', () => {
      let galleryData = {
        name: 'example name',
        desc: 'exampl desc'
      };

      let headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer testToken'
      };

      this.$httpBackend.expectPOST('http://localhost:8000/api/gallery', galleryData, headers)
      .respond(200, {
        _id: '1234',
        username: 'testuser',
        name: galleryData.name,
        desc: galleryData.desc,
        pics: []
      });

      this.galleryService.createGallery(galleryData);
      // this.$httpBackend.flush();
      this.$rootScope.$apply();
    });
  });

  describe('galleryService.deleteGallery()', () => {
    it('should delete a gallery', () => {
      let galleryID = 'testId';
      let headers = {
        Accept: 'application/json, text/plain, */*',
        Authorization: 'Bearer testToken'
      };

      this.$httpBackend.expectDELETE('http://localhost:8000/api/gallery/testId', headers)
      .respond(204);

      this.galleryService.deleteGallery(galleryID);
      // this.$httpBackend.flush();
      this.$rootScope.$apply();
    });
  });

  describe('galleryService.fetchGalleries()', () => {
    it('should return a gallery', () => {
      let galleryID = 'testId';
      let headers = {
        Accept: 'application/json',
        Authorization: 'Bearer testToken'
      };

      this.$httpBackend.expectGET('http://localhost:8000/api/gallery', headers)
      .respond(200);

      this.galleryService.fetchGalleries(galleryID);
      // this.$httpBackend.flush();
      this.$rootScope.$apply();
    })
  });

  describe('galleryService.updateGallery()', () => {
    it('should update the gallery', () => {
      let galleryID = 'testID';
      let galleryData = {
        name: 'example name',
        desc: 'exampl desc'
      };

      let newData = {
        name: 'new name',
        desc: 'new desc'
      };

      let headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer testToken'
      };

      this.$httpBackend.expectPUT('http://localhost:8000/api/gallery/galleryID', newData, headers)
      .respond(200);

      this.galleryService.updateGallery(galleryID);
      // this.$httpBackend.flush();
      this.$rootScope.$apply();

    });
  });



});
