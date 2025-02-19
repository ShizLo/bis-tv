import { Navigation, Pagination } from "swiper/modules";

//<Кейсы>================================================================================

//</Кейсы>===============================================================================

export const swiper_order_setting = {
  direction: "horizontal",
  slidesPerView: 4, // колво слайдов на показ
  spaceBetween: 30, // отступ между слайдами

  // pagination: {
  //   el: ".swiper-pagination",
  //   type: "bullets",
  //   clickable: true,
  // },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.05,
      spaceBetween: 7,
    },
    // when window width is >= 480px

    // when window width is >= 640px
    767: {
      slidesPerView: 2.11,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 4.005,
      spaceBetween: 15,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  modules: [Navigation],
};

export const swiper_global_setting = {
  direction: "horizontal",
  slidesPerView: 3, // колво слайдов на показ
  spaceBetween: 30, // отступ между слайдами
  loop: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   type: "bullets",
  //   clickable: true,
  // },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2.1,
      spaceBetween: 7,
    },
    // when window width is >= 480px

    // when window width is >= 640px
    767: {
      slidesPerView: 2.11,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 4.1,
      spaceBetween: 15,
    },
  },
  navigation: {
    // nextEl: ".s-button-next",
    // prevEl: ".s-button-prev",
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  modules: [Navigation],
};
export const swiper_bis_setting = {
  direction: "horizontal",
  slidesPerView: 3, // колво слайдов на показ
  spaceBetween: 30, // отступ между слайдами
  loop: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   type: "bullets",
  //   clickable: true,
  // },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2.1,
      spaceBetween: 7,
    },
    // when window width is >= 480px

    // when window width is >= 640px
    767: {
      slidesPerView: 2.11,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 4.1,
      spaceBetween: 15,
    },
  },
  navigation: {
    // nextEl: ".s-button-next",
    // prevEl: ".s-button-prev",
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  modules: [Navigation],
};

export const swiper_banner_setting = {
  direction: "horizontal",
  slidesPerView: 1, // колво слайдов на показ
  // spaceBetween: 30, // отступ между слайдам
  loop: true, // бесконечный слайдер
  speed: 2500,
  parallax: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  // autoHeight: true, // авто высота изображения
  autoplay: {
    delay: 3000,
    // Отключить после ручного переключения
    disableOnInteraction: true,
    // Остановится на последнем слайде
    stopOnLastSlide: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  modules: [Navigation, Pagination],
};

export const swiper_bis_work = {
  direction: "horizontal",
  slidesPerView: 4, // колво слайдов на показ
  spaceBetween: 30, // отступ между слайдами
  // loop: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   type: "bullets",
  //   clickable: true,
  // },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.05,
      spaceBetween: 5,
    },
    // when window width is >= 480px

    // when window width is >= 640px
    767: {
      slidesPerView: 2.11,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 4.1,
      spaceBetween: 15,
    },
  },
  navigation: {
    // nextEl: ".s-button-next",
    // prevEl: ".s-button-prev",
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  modules: [Navigation],
};
export const swiper_popup_work = {
  // centeredSlides: true,
  // lazyPreloadPrevNext: 1,
  // longSwipes: false,
  loop: true,
  slideToClickedSlide: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  modules: [Navigation],
};
