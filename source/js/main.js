'use strict';
$(document).ready(function () {
//   $('.gallery__list').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     centerMode: true,
//     arrows: false
//     // variableWidth: true
//   });

  $('.price__list').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 999999,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          adaptiveHeight: true,
          variableWidth: true,
          dots: false,
        }
      },
      {
        breakpoint: 999999,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          adaptiveHeight: true,
          dots: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          centerMode: true,
          dots: true,
        }
      }
    ]
  });

  $('.reviews__list').slick({
    infinite: false,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 999999,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          adaptiveHeight: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.progress__list').slick({
    infinite: false,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 999999,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.reviews-users__list').slick({
    infinite: false,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 999999,
        settings: "unslick"
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $(".program__accordion-toggle").click(function () {
    $(this).closest('.program__item').toggleClass("open");
  });

  $(".main-nav__toggle").click(function () {
    $(this).closest('.main-nav').toggleClass("main-nav--open");
  });

  $("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 30;
    $('html,body').stop().animate({scrollTop: $(this.hash).offset().top - fixed_offset}, 1000);
    e.preventDefault();
  });


});


