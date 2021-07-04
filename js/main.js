new Swiper(".pricing__body", {
  //   loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  clickable: true,
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,
  slideToClickedSlide: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  //  mousewheel: {
  //    sensitivity: 3.65,
  //  },
  breakpoints: {
    1368: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1023: {
      slidesPerView: 3.2,
      slidesPerGroup: 3.2,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    533: {
      slidesPerView: 1.75,
      slidesPerGroup: 2,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
  slidesPerView: 4,
  slidesPerGroup: 8,
});

new Swiper(".blog__body", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  slidesPerView: 2,
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
