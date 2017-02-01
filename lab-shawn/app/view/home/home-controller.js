'use strict';

require('./_home.scss');

module.exports = ['$log', '$rootScope','galleryService', HomeController];

function HomeController($log,$rootScope, galleryService){
  $log.debug('HomeController');

  this.galleries = [];

  this.fetchGalleries = function(){
    $log.debug('HomeController.fetchGalleries()');

    galleryService.fetchGalleries()
    .then(galleries => {
      this.galleries = galleries.reverse();
      this.currentGallery = galleries[0];
    })
    .catch(err => {
      $log.error(err.message);
    })
  };

  this.galleryDeleteDone = function(gallery){
    $log.debug('HomeController.galleryDeleteDone()');
    if(this.currentGallery._id === gallery._id){
      this.currentGallery = null;
    }
  };

  this.fetchGalleries();

  $rootScope.$on('$locationChangeSuccess', () => {
    this.fetchGalleries();
  })
}
