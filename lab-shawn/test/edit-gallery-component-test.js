'use strict';

describe('Edit Gallery Component', function(){
  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope,$componentController,$httpBackend, authService) => {
        this.$rootScope = $rootScope;
        this.$componentController = $componentController;
        this.$httpBackend = $httpBackend;
        this.authService = authService;
    });
  });

  it('should contain the proper component bindings', () => {
    let mockBindings = {
      gallery: {
        name: 'example name',
        desc: 'example desc'
      }
    };

    let editGalleryCtrl = this.$componentController('editGallery', null, mockBindings);
    expect(editGalleryCtrl.gallery.name).toEqual(mockBindings.gallery.name);
    expect(editGalleryCtrl.gallery.desc).toEqual(mockBindings.gallery.desc);

    this.$rootScope.$apply();
  });
  describe('editGalleryCtrl.updateGallery()',() => {
    it('should make a valid PUT request', () => {
      let url = 'http://localhost:8000/api/gallery/12345';
      let headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer testToken'
      };

      this.$httpBackend.expectPUT(url, {
        _id: '12345',
        name: 'updated name',
        desc: 'updated desc',
      }, headers).respond(200);

      let mockBindings = {
        gallery: {
          _id: '12345',
          name: 'example name',
          desc: 'example desc'
        }
      };

      let editGalleryCtrl = this.$componentController('editGallery', null, mockBindings);
      editGalleryCtrl.gallery.name = 'updated name';
      editGalleryCtrl.gallery.name = 'updated desc';
      editGalleryCtrl.updateGallery();

      // this.$httpBackend.flush();
      this.$rootScope.$apply();
    })
  });
});
