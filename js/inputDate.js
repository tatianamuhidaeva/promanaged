window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  var date = new Date().toISOString().substring(0, 10),
  fields = document.querySelectorAll('.reserv__input-date');
  fields.forEach(field => {
    field.value = date;
    console.log(field.value);
  })
});