'use strict';

describe('Create Gallery Component', function(){
  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $componentController, $httpBackend, authService) => {
      this.$rootScope = $rootScope;
      this.$componentController = $componentController;
      this.$httpBackend = $httpBackend;
      this.authService = authService;

    });
  });
  describe('createGalleryCtrl.createGallery()', () => {
    it('should make a valid POST request', () => {
      let url = 'http://localhost:8000/api/gallery';
      let headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer testToken'
      }

      let galleryData = {
        name: 'example name',
        desc: 'example desc'
      }

      this.$httpBackend.expectPOST(url, galleryData, headers).respond(200);

      let createGalleryCtrl = this.$componentController('createGallery', null);
      createGalleryCtrl.createGallery();


      this.$rootScope.$apply();
    });
  });
});
