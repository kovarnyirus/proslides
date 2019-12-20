'use strict';
$( document ).ready(function() {
  $('.gallery__list').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    arrows: false
    // variableWidth: true
  });
  $('.price__list').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    // centerMode: true,
    arrows: false,
    // variableWidth: true
  });

  $(".program__accordion-toggle").click(function () {
    $(this).closest('.program__item').toggleClass("open");
  })
});


