'use strict';

module.exports = ['$q','$log', '$http', 'Upload', 'authService', picService];

function picService($q,$log,$http,Upload,authService){
  $log.debug('picService');

  let service = {};

  service.uploadGalleryPic = function(galleryData, picData){
    $log.debug('picService.uploadGalleryPic()');

    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/gallery/${galleryData._id}/pic`;
      let headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      };

      return Upload.upload({
        url,
        headers,
        method: 'POST',
        data: {
          name: picData.name,
          desc: picData.desc,
          file: picData.file
        }
      });
    })
    .then(res => {
      galleryData.pics.unshift(res.data);
      return res.data;
    })
    .catch(err => {
      $log.error(err.message);
    });
  };

  service.deletePic = function(galleryID, picID){
    $log.debug('picService.deletePic()');

    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/gallery/${galleryID}/pic/${picID}`;
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      $http.delete(url, config);
    })
    .then(()=> {
      $log.log('image deleted');
    })
    .catch(err => {
      $log.error(err.message);
    });
  };
  return service;
}
