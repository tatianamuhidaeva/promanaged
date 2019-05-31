window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  function parentsOfElements(elem, cl) {
    let curr = elem;
    while (curr != null) {
      if (curr.classList.contains(cl)) {
        return curr;
      }
      curr = curr.parentElement;
    }
    return false;
  }
  //POPUP
  let body = document.body;
  let orderBtn = document.querySelectorAll('.server__btn');
  let popup = document.querySelector('.popup'),
    popupCloseBtn = popup.querySelector('.popup__close');

  function popupToggle() {
    if (popup.classList.contains('flex')) {
      popup.classList.remove('flex');
    } else {
      popup.classList.add('flex');
    }
  }
  orderBtn.forEach(btn => {
    btn.addEventListener('click', function () {
      popupToggle();
    });
  });

  popupCloseBtn.addEventListener('click', function () {
    popupToggle();
  });

  body.addEventListener("click", function (e) {
    if (popup.classList.contains('flex')) {
      if (!parentsOfElements(e.target, "popup-wrap") &&
        !e.target.classList.contains("popup__close") &&
        !e.target.classList.contains("server__btn")) {
        popupToggle();
      }
    }
  });
});