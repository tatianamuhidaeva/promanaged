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


  window.addEventListener('resize', function () {
    if (window.innerWidth > 660) {
      //Remove transform property from menu
      menu.style.transform = "";
    }
  });


  //Remove XS-Style
  let btnFullVersion = document.querySelector('.fullversion__btn');
  btnFullVersion.addEventListener('click', function () {
    let wowClass = document.querySelectorAll('.wow');
    wowClass.forEach(elem => {
      elem.style.visibility = "visible";
      elem.style.animation = "none";
      elem.classList.remove('wow');
    });
    console.log(document.styleSheets);
    document.styleSheets[4].disabled = true; //media-xs.css
    // document.styleSheets[2].disabled = true; //animated.css
    
    isMobile = false;
    document.body.style.width = "760px";
    document.body.style.overflowX = "visible";
    menu.style.transform = "";
    isMobile = false;
  });

  //select period on Server
  let selects = document.querySelectorAll('.server__select');
  selects.forEach(elem => {
    elem.addEventListener('click', function (e) {
      let optionWrap = e.currentTarget.querySelector('.server__select-wrap'),
        arrow = e.currentTarget.querySelector('.server__select-arrow');
      if (getComputedStyle(optionWrap).display == "none") {
        optionWrap.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
      } else {
        optionWrap.style.display = "none";
        arrow.style.transform = "";
      }
    });
  });



  let optionWraps = document.querySelectorAll('.server__select-wrap');
  let currOpt = document.querySelectorAll('.server__select-current');
  let priceObj = {
    1: 0,
    3: 0.33,
    6: 0.4,
    12: 0.5
  }

  for (let i = 0; i < optionWraps.length; i++) {
    currOpt[i].textContent = optionWraps[i].querySelector('.server__select-radio[checked=""]+.server__select-option').textContent;
    optionWraps[i].addEventListener('click', function (e) {
      let currCol = parentsOfElements(this, 'col');
      let currSelect = currCol.querySelector('.server__select-current');
      let currStartPrice = currCol.querySelector('input[name="start-price"]');
      let currPrice = currCol.querySelector('.server__price');
      let currWrap = e.currentTarget;
      let target = e.target;
      if (target && target.tagName == "LABEL") {
        currSelect.textContent = target.textContent;
        currPrice.textContent = (+currStartPrice.value * (1 - priceObj[target.previousElementSibling.value])*target.previousElementSibling.value).toFixed(2);
        currWrap.style.display = "none";
        currWrap.parentElement.querySelector('.server__select-arrow').style.transform = "";
      };
    });
  };

  
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
});