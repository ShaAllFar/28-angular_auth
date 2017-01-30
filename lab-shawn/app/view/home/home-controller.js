'use strict';

require('./_home.scss');

module.exports = ['$log', '$rootScope', HomeController];

function HomeController($log,$rootScope){
  $log.debug('HomeController');

  this.galleries = [];
  this.fetchGalleries = function(){
    galleryService.fetchGalleries()
    .then(galleries => {
      this.galleries = galleries;
    })
  };

  this.fetchGalleries();

  $rootScope.$on('$locationChangeSuccess', () => {
    this.fetchGalleries();
  })
}
