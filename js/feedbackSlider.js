window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  //feedbackSlider
  function feedbackSlider() {
    let slideIndex = 1,
      items = document.querySelectorAll(".feedback__item"),
      prev = document.querySelector(".feedback__btn-prev"),
      next = document.querySelector(".feedback__btn-next");

    function showSlides(n) {
      if (n > items.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = items.length;
      }
      items.forEach((item) => {
        item.classList.add("animated");
        item.style.display = "none";
      });
      items[slideIndex - 1].style.display = "block";
    }

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    showSlides(slideIndex);

    prev.addEventListener("click", function () {
      plusSlides(-1);
      items[slideIndex - 1].classList.remove("slideInLeft");
      items[slideIndex - 1].classList.add("slideInRight");
    });
    next.addEventListener("click", function () {
      plusSlides(1);
      items[slideIndex - 1].classList.remove("slideInRight");
      items[slideIndex - 1].classList.add("slideInLeft");
    });
    // setInterval(function () {
    //   plusSlides(1);
    //   items[slideIndex - 1].classList.remove("slideInRight");
    //   items[slideIndex - 1].classList.add("slideInLeft");
    // }, 5000);
  }

  feedbackSlider();
});