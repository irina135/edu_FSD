(function () {
  'use strict';

  if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i))) {
    document
      .querySelector('html')
      .classList
      .add('is-ios');
  }

})();