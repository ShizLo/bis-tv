<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  
  setup() {
    
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>
<template>
  <section class="works-slider">
    <div class="_container _container-settings">
      <h2 class="content-bar__h2">Наши работы по благоустройству</h2>
    </div>
    <div class="_container">
      <swiper
        :slidesPerView="2"
        navigation
        :pagination='{"dynamicBullets": true}'
        :spaceBetween="10"
        :modules="modules"
        :breakpoints="{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
            
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }"
        class="mySwiper">
        <swiper-slide>
          <img
            src="../assets/images/landshaft.jpg"
            alt="Автополив, озеленение, освещение"
            class="swiper__img lazyloaded"
          />
          <div class="content__slide">
            <p class="content_title">Озеленение, освещение</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img
            src="../assets/images/work-swiper-3.jpg"
            alt="Свайное поле"
            class="swiper__img lazyloaded"
          />
          <div class="content__slide">
            <p class="content_title">Заезд на участок и свайное поле</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img
            src="../assets/images/work-swiper-2.jpg"
            alt="Дорожки, посадка и выравнивание"
            class="swiper__img lazyloaded"
          />
          <div class="content__slide">
            <p class="content_title">Дорожки, посадка и выравнивание</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img
            src="../assets/images/work-swiper-4.jpg"
            alt="Электричество"
            class="swiper__img lazyloaded"
          />
          <div class="content__slide">
            <p class="content_title">Электричество</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img
            src="../assets/images/work-swiper-5.jpeg"
            alt="Забор из штакетника"
            class="swiper__img lazyloaded"
          />
          <div class="content__slide">
            <p class="content_title">Забор из штакетника</p>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"></div>
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
    font-size: 1.3rem;
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
}
.content_title {
  font-weight: 400;
  font-size: 100%;
  line-height: normal;
  color: #fff;
  text-shadow: 3px -3px 8px black;
  text-align: left;
  padding: 15px;
  @media (max-width: c.$md3) {
    font-size: 1rem;
  }
  // @media (max-width: c.$md2) {
  // font-size: 1rem;
  // }
}
</style>
