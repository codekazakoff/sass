$(document).ready(function () {
  $(".pricing__slider").slick({
    slidesToShow: 4.5,
    dots: true,
    speed: 1000,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 800,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 498,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".blog__slider").slick({
    slidesToShow: 2,
    dots: true,
    speed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1125,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 995,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 476,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
$(function () {
  $(".header__bars").click(() => {
    $(".header__content").addClass("active");
    $(".header__bars").css("display", "none");
    $(".header__times").css("display", "block");
  });
  $(".header__times").click(() => {
    $(".header__content").removeClass("active");
    $(".header__times").css("display", "none");
    $(".header__bars").css("display", "block");
  });
});
