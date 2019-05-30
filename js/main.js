window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  new WOW().init();
  let isMobile = true;
     // -----Control Toggle Menu----
  let body = document.querySelector('body'),
    menu = document.querySelector('.navbar__items'),
    btnToggle = document.querySelector('.navbar__toggle');

  function openMenu() {
    menu.style.transform = "translate(0, 0)";
  }

  function closeMenu() {
    menu.style.transform = "translate(-100%, 0)";
  }

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

  btnToggle.addEventListener('click', function () {
    if (new WebKitCSSMatrix(getComputedStyle(menu).webkitTransform).m41 < 0) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  body.addEventListener("click", function (e) {
    if ((window.innerWidth <= 660) && isMobile) {
      if (new WebKitCSSMatrix(getComputedStyle(menu).webkitTransform).m41 >= 0) {
        if (!parentsOfElements(e.target, "navbar__items") &&
          !e.target.classList.contains("navbar__toggle")) {
          closeMenu();
        }
      }
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 660) {
      //Remove transform property from menu
      menu.style.transform = "";
    } 
  });


  //Remove XS-Style
  let btnFullVersion = document.querySelector('.fullversion__btn');
  btnFullVersion.addEventListener('click', function(){
    console.log(document.styleSheets);
    document.styleSheets[5].disabled = true;
    isMobile = false;
    document.body.style.width = "760px";
    document.body.style.overflowX = "visible";
    menu.style.transform = "";
    isMobile = false;
  });

  //select period on Server
  let selects = document.querySelectorAll('.server__select');
  selects.forEach(elem => {
    elem.addEventListener('click', function(e){
      let optionWrap = e.currentTarget.querySelector('.server__select-wrap'),
      arrow = e.currentTarget.querySelector('.server__select-arrow');
      if (getComputedStyle(optionWrap).display == "none"){
        optionWrap.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
      } else {
        optionWrap.style.display = "none";
        arrow.style.transform = "";
      }
    });
  });
  
  let optionWraps = document.querySelectorAll('.server__select-wrap');

  optionWraps.forEach(wrap => {
    wrap.addEventListener('click', function(e){
      let select = this.parentElement;
      let currOpt = this.previousElementSibling;
      let target = e.target;

      if(target && target.tagName == "LABEL"){
        wrap.insertBefore(currOpt, target);
        select.insertBefore(target, wrap);
      };
    })
  });

});