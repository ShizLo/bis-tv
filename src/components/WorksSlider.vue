<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import { ref } from "vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MiniWorksSlider from "./MiniWorksSlider.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    MiniWorksSlider,
  },

  setup() {
    let formIsVisible = ref(0);
    let workImage = ref([]);
    function isShow(visible, workName) {
      if (visible) {
        toggleBodyScroll(true);
        formIsVisible.value = 1;
      } else {
        toggleBodyScroll(false);
        formIsVisible.value = 0;
      }
      workImage.value = workName;
    }
    function toggleBodyScroll(lock) {
      document.body.style.overflow = lock ? "hidden" : "";
    }
    return {
      isShow,
      toggleBodyScroll,
      formIsVisible,
      workImage,
      modules: [Keyboard, Scrollbar, Navigation, Pagination],
    };
  },
  data: () => ({
    workImages: {
      landscaping: [
          {
            url: "/images/swiperBanner/swiper-slide-1.webp",
            alt: "Озеленение",
          },
          {
            url: "/images/swiperBanner/banner-3.jpg",
            alt: "Озеленение",
          },
          {
            url: "/images/swiperBanner/swiper-slide-1.webp",
            alt: "Озеленение",
          },
          {
            url: "/images/swiperBanner/swiper-slide-1.webp",
            alt: "Озеленение",
          },
          {
            url: "/images/swiperBanner/swiper-slide-1.webp",
            alt: "Озеленение",
          },
          {
            url: "/images/swiperBanner/swiper-slide-1.webp",
            alt: "Озеленение",
          },
        {
          url: "/images/workPhoto/greenPark/1.jpg",
          alt: "Свайное поле",
        },
        {
          url: "/images/workPhoto/greenPark/2.jpg",
          alt: "Озеленение",
        },
        {
          url: "/images/workPhoto/greenPark/3.jpg",
          alt: "Озеленение",
        },
      ],
      checkIn: [
        {
          url: "/images/workPhoto/foundation/1.JPG",
          alt: "Свайное поле",
        },
        {
          url: "/images/workPhoto/foundation/2.JPG",
          alt: "Свайное поле",
        },
        {
          url: "/images/workPhoto/foundation/3.JPG",
          alt: "Свайное поле",
        },
        {
          url: "/images/workPhoto/foundation/4.JPG",
          alt: "Свайное поле",
        },
        {
          url: "/images/workPhoto/foundation/5.JPG",
          alt: "Свайное поле",
        },
        {
          url: "/images/workPhoto/foundation/6.JPG",
          alt: "Свайное поле",
        },
      ],
      traks: [
        {
          url: "/images/fence/services-2.png",
          alt: "Дорожки",
        },
        {
          url: "/images/fence/services-1.png",
          alt: "Дорожки",
        },
        {
          url: "/images/fence/dop-1.png",
          alt: "Дорожки",
        },
        {
          url: "/images/swiperBanner/swiper-slide-1.webp",
          alt: "Дорожки",
        },
        {
          url: "/images/swiperBanner/swiper-slide-1.webp",
          alt: "Дорожки",
        },
        {
          url: "/images/swiperBanner/swiper-slide-1.webp",
          alt: "Дорожки",
        },
      ],
      lighting: [
        {
          url: "/images/swiperBanner/swiper-slide-1.webp",
          alt: "Освещение",
        },
        {
          url: "/images/swiperBanner/swiper-slide-1.webp",
          alt: "Освещение",
        },
        {
          url: "/images/swiperBanner/swiper-slide-1.webp",
          alt: "Освещение",
        },
        {
          url: "/images/swiperBanner/swiper-slide-1.webp",
          alt: "Освещение",
        },
      ],
    },
  }),
};
</script>
<template>
  <section class="works-slider">
    <MiniWorksSlider
      :class="formIsVisible === 1 ? 'form-feedback__show' : ''"
      class="mini-slider"
      @someEvent="isShow(false)"
      :workImages="workImage"
    >
    </MiniWorksSlider>
    <div class="_container _container-settings">
      <h2 class="content-bar__h2">Наши работы</h2>
    </div>

    <div class="_container">
      <swiper
        :spaceBetween="5"
        :modules="modules"
        :breakpoints="{
          320: {
            slidesPerView: 1.08,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          },
          479.98: {
            slidesPerView: 3.08,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          },
          // when window width is >= 480px
          991.98: {
            slidesPerView: 4,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          },
          // when window width is >= 640px
          1024: {
            slidesPerView: 5,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          },
        }"
        class="mySwiper"
      >
        <swiper-slide @click="isShow(true, workImages.landscaping)">
          <img src="../assets/images/landshaft.jpg" alt="Озеленение, освещение" class="swiper__img lazyloaded" />
          <div class="content__slide">
            <p class="content_title">Озеленение, освещение</p>
          </div>
        </swiper-slide>
        <swiper-slide @click="isShow(true, workImages.checkIn)">
          <img src="../assets/images/work-swiper-3.jpg" alt="Заезд на участок и свайное поле" class="swiper__img lazyloaded" />
          <div class="content__slide">
            <p class="content_title">Заезд на участок и свайное поле</p>
          </div>
        </swiper-slide>
        <swiper-slide @click="isShow(true, workImages.traks)">
          <img src="../assets/images/work-swiper-2.jpg" alt="Дорожки, посадка и выравнивание" class="swiper__img lazyloaded" />
          <div class="content__slide">
            <p class="content_title">Дорожки, посадка и выравнивание</p>
          </div>
        </swiper-slide>
        <swiper-slide @click="isShow(true, workImages.lighting)">
          <img src="../assets/images/work-swiper-8.jpg" alt="Уличное освещение" class="swiper__img lazyloaded" />
          <div class="content__slide">
            <p class="content_title">Уличное освещение</p>
          </div>
        </swiper-slide>
        <swiper-slide @click="isShow(true)">
          <img src="../assets/images/work-swiper-5.jpg" alt="Забор из штакетника" class="swiper__img lazyloaded" />
          <div class="content__slide">
            <p class="content_title">Забор из штакетника</p>
          </div>
        </swiper-slide>
        <swiper-slide @click="isShow(true)">
          <img src="../assets/images/work-swiper-6+.jpg" alt="Забор из гиттера" class="swiper__img lazyloaded" />
          <div class="content__slide">
            <p class="content_title">Забор из гиттера</p>
          </div>
        </swiper-slide>
        <swiper-slide @click="isShow(true)">
          <img src="../assets/images/work-swiper-9+.jpg" alt="Откатные ворота" class="swiper__img lazyloaded" />
          <div class="content__slide">
            <p class="content_title">Откатные ворота</p>
          </div>
        </swiper-slide>
        <swiper-slide @click="isShow(true)">
          <img src="../assets/images/work-swiper-7.jpg" alt="Расчистка участка" class="swiper__img lazyloaded" />
          <div class="content__slide">
            <p class="content_title">Расчистка участка</p>
          </div>
        </swiper-slide>
        <!-- <swiper-slide>
          <img src="../assets/images/work-swiper-4.jpg" alt="Электричество" class="swiper__img lazyloaded" />
          <div class="content__slide">
            <p class="content_title">Электричество</p>
          </div>
        </swiper-slide> -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </swiper>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;

.mini-slider {
  display: none;
}
.form-feedback__show {
  display: flex;
  opacity: 1;
  z-index: 10;
}

.mySwiper .swiper-button-prev {
  color: #fff;
  @media (max-width: $md2) {
    display: none;
  }
}
.mySwiper .swiper-button-next {
  color: #fff;
  @media (max-width: $md2) {
    display: none;
  }
}
._container-settings {
  padding-bottom: 16px;
  // padding-top: 32px;
}
.content-bar__h2 {
  font-size: $fs-xxl;
  font-weight: 600;
  background: #fff;
  display: inline-block;
  border-radius: 32px;
  padding-left: 10px;
  color: #102938;
  line-height: 1.2;
  @media (max-width: $md4) {
    font-size: $fs-xxl;
  }
}
.swiper {
  width: 100%;
  height: 100%;
  &__img {
    border-radius: 7px;
  }
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  border-radius: 7px;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  // height: 100%;
  height: 425px;
  object-fit: cover;
  @media (max-width: $md4) {
    height: 300px;
  }
}

.content__slide {
  display: flex;
  position: absolute;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  &::before {
    content: " ";
    bottom: 0;
    height: 90px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
    position: absolute;
    width: 100%;
    left: 0;
    color: #fff;
    border-radius: 7px;
  }
}
.content_title {
  font-weight: 400;
  font-size: 20px;
  line-height: normal;
  color: #fff;
  // text-shadow: 3px -3px 8px black;
  text-align: left;
  padding: 15px;
  z-index: 10;
  @media (max-width: $md1) {
    font-size: 20px;
  }
  @media (max-width: $md2) {
    font-size: 20px;
  }
  @media (max-width: $md3) {
    font-size: 20px;
  }
  @media (max-width: $md4) {
    font-size: 18px;
    letter-spacing: 0.5px;
    text-align: center;
    padding: 15px 15px 10px 15px;
  }
}
</style>
