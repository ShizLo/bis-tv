<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    return {
      modules: [Keyboard, Scrollbar, Navigation, Pagination],
    };
  },
};
</script>
<template>
  <section class="works-slider">
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
        <swiper-slide>
          <img src="../assets/images/landshaft.jpg" alt="Озеленение, освещение" class="swiper__img lazyloaded" />
          <div class="content__slide">
            <p class="content_title">Озеленение, освещение</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/work-swiper-3.jpg" alt="Заезд на участок и свайное поле" class="swiper__img lazyloaded" />
          <div class="content__slide">
            <p class="content_title">Заезд на участок и свайное поле</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/work-swiper-2.jpg" alt="Дорожки, посадка и выравнивание" class="swiper__img lazyloaded" />
          <div class="content__slide">
            <p class="content_title">Дорожки, посадка и выравнивание</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/work-swiper-8.jpg" alt="Уличное освещение" class="swiper__img lazyloaded" />
          <div class="content__slide">
            <p class="content_title">Уличное освещение</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/work-swiper-5.jpg" alt="Забор из штакетника" class="swiper__img lazyloaded" />
          <div class="content__slide">
            <p class="content_title">Забор из штакетника</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/work-swiper-6+.jpg" alt="Забор из гиттера" class="swiper__img lazyloaded" />
          <div class="content__slide">
            <p class="content_title">Забор из гиттера</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/work-swiper-9+.jpg" alt="Откатные ворота" class="swiper__img lazyloaded" />
          <div class="content__slide">
            <p class="content_title">Откатные ворота</p>
          </div>
        </swiper-slide>
        <swiper-slide>
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
@use "../assets/styles/app.scss" as c;

._container-settings {
  padding-bottom: 16px;
  padding-top: 32px;
}
.content-bar__h2 {
  font-size: c.$fs-xxl;
  font-weight: 600;
  background: #fff;
  display: inline-block;
  border-radius: 32px;
  padding-left: 10px;
  color: #102938;
  line-height: 1.2;
  @media (max-width: c.$md4) {
    font-size: c.$fs-xxl;
  }
}
.swiper {
  width: 100%;
  height: 100%;
  &__img {
    border-radius: 4px;
  }
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

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
  @media (max-width: c.$md4) {
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
    background: linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
    position: absolute;
    width: 100%;
    left: 0;
    color: #fff;
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
  @media (max-width: c.$md1) {
    font-size: 20px;
  }
  @media (max-width: c.$md2) {
    font-size: 20px;
  }
  @media (max-width: c.$md3) {
    font-size: 20px;
  }
  @media (max-width: c.$md4) {
    font-size: 20px;
  }
}
</style>
