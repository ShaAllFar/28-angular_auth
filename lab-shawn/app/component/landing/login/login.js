'use strict';

require('./_login.scss');

module.exports = {
  template: require('./login.html'),
  controller: ['$log', '$location', 'authService', LoginController],
  controllerAs: 'loginCtrl'
}

function LoginController($log, $location, authService){
  $log.debug('LoginController');

  authService.getToken()
  .then(() => {
    $location.url('/home');
  });

  this.login = function(user){
    $log.log('LoginController.login()');

    authService.login(this.user)
    .then(() => {
      $location.url('/home');
    })
  }
}
