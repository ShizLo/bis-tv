import Swiper from "swiper/bundle";
import { Navigation, Pagination } from "swiper/modules";

const swiper = new Swiper(".swiper", {
  on: {
    init: function () {
      console.log("swiper initialized");
    },
  },
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
  modules: [Navigation, Pagination],
});

export default swiper;
