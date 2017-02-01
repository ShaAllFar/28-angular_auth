'use strict';

require('./_thumbnail.scss');

module.exports = {
  template: require('./thumbnail.html'),
  controller: ['$log', 'picService', ThumbnailController],
  controllerAs: 'thumbnailCtrl',
  bindings: {
    pic: '<',
    gallery: '<',
    onDelete: '&'
  }
};

function ThumbnailController($log, picService){
  $log.debug('ThumbnailController');

  this.deletePic = function(){
    $log.debug('ThumbnailController.deletePic()');

    picService.deletePic(this.gallery._id, this.pic._id);

  };

  this.picDeleteDone = function(pic){
    $log.debug('ThumbnailController.picDeleteDone()');
    $log.log('made it');


  }
};
