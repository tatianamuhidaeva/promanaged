window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  var area = document.querySelector('.elk'),
    elk = document.querySelector('.elk-svg-pattern__img'),
    grow = document.querySelector('.elk-svg-pattern__grow');

  function parallax(area, obj1, obj2) {
    area.addEventListener('mousemove', function (e) {
      var xpos = e.clientX;
      var ypos = e.clientY;
      var xpos = xpos * 2;
      ypos = ypos * 2;
      var str = 'translate(' + ((0 - (xpos / 80)) + "px, ") + ((0 - (ypos / 50)) + "px)");
      console.log(str);
      obj1.style.transform = str;
      obj2.style.transform = str;
    });
  }

  parallax(area, elk, grow);
});