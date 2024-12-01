import Swiper from "swiper/bundle";
import { Navigation, Pagination } from "swiper/modules";

const swiper = new Swiper(".swiper", {
  on: {
    init: function () {
      console.log("swiper initialized");
    },
    slideChange: () => {
      // Здесь мы переключаем старый слайд на новый и нужно обновить прогресс-бар. Без таймаута стиль не обновляется.
      // document
      //   .querySelector(".swiper-pagination-bullet-active::after")
      //   .classList.remove("active");
      // setTimeout(() => {
      //   document
      //     .querySelector(".swiper-pagination-bullet-active::after")
      //     .classList.add("active");
      // }, 50);
    },
  },
  direction: "horizontal",
  slidesPerView: 1, // колво слайдов на показ
  // spaceBetween: 30, // отступ между слайдами
  loop: true, // бесконечный слайдер
  speed: 1200,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  // lazy: {
  //   loadOnTransitionStart: false,
  //   loadPrevNext: false,
  // },
  // autoHeight: true, // авто высота изображения
  autoplay: {
    delay: 4000,
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
});

export default swiper;
