'use strict';

require('./_create-gallery.scss');

module.exports = {
  template: require('./create-gallery.html'),
  controller: ['$log', 'galleryService', CreateGallery],
  controllerAs: 'createGalleryCtrl'
};

function CreateGallery($log, galleryService){
  $log.debug('CreateGallery');

  this.gallery = {};
  this.createGallery = function(){
    galleryService.createGallery(this.gallery)
    .then(() => {
      this.gallery.name = null;
      this.gallery.desc = null;
    })
    .catch(err => {
      $log.error(err.message);
    });
  };
}
