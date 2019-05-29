window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  setTimeout(function(){
    var preloader = document.getElementById('preloader');
    var container = document.querySelector('.container');
    container.classList.remove('none');
    if (!preloader.classList.contains('done')){
      preloader.classList.add('done');
    }
  }, 1000);
});