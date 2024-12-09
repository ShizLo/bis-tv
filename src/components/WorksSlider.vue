<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import 'swiper/css/navigation';
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
      :spaceBetween="30"
      :pagination="{
        clickable: true,
        
      }"
      :modules="modules"
      :breakpoints="{
        640: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 5,
      spaceBetween: 40
    }
      }"
      class="mySwiper"
    >
      <swiper-slide>
        <img
          src="../assets/images/avtopoliv_viravnivanie-max-500.webp"
          alt="Автополив, озеленение, освещение"
          class="insta-gallery__preview lazyloaded"
        />
        <div class="content__slide">
          <p class="content_title">Автополив, озеленение, освещение</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img
          src="../assets/images/zaezd-max-500.webp"
          alt="Заезд на участок и выравнивание"
          class="insta-gallery__preview lazyloaded"
        />
        <div class="content__slide">
          <p class="content_title">Заезд на участок и выравнивание</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img
          src="../assets/images/Dorojki_posadka_viravnivanie-max-500.webp"
          alt="Дорожки, посадка и выравнивание"
          class="insta-gallery__preview lazyloaded"
        />
        <div class="content__slide">
          <p class="content_title">Дорожки, посадка и выравнивание</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img
          src="../assets/images/parkovka_zaezd-max-500.webp"
          alt="Парковка, заезд"
          class="insta-gallery__preview lazyloaded"
        />
        <div class="content__slide">
          <p class="content_title">Парковка, заезд</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img
          src="../assets/images/avtopoliv_viravnivanie-max-500.webp"
          alt="Автополив, озеленение, освещение"
          class="insta-gallery__preview lazyloaded"
        />
        <div class="content__slide">
          <p class="content_title">Автополив, озеленение, освещение</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img
          src="../assets/images/zaezd-max-500.webp"
          alt="Заезд на участок и выравнивание"
          class="insta-gallery__preview lazyloaded"
        />
        <div class="content__slide">
          <p class="content_title">Заезд на участок и выравнивание</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img
          src="../assets/images/Dorojki_posadka_viravnivanie-max-500.webp"
          alt="Дорожки, посадка и выравнивание"
          class="insta-gallery__preview lazyloaded"
        />
        <div class="content__slide">
          <p class="content_title">Дорожки, посадка и выравнивание</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img
          src="../assets/images/parkovka_zaezd-max-500.webp"
          alt="Парковка, заезд"
          class="insta-gallery__preview lazyloaded"
        />
        <div class="content__slide">
          <p class="content_title">Парковка, заезд</p>
        </div>
      </swiper-slide>
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
  font-size: 28px;
  font-weight: 600;
  background: #fff;
  display: inline-block;
  border-radius: 32px;
  padding: 3px 10px;
  color: #102938;
}
.swiper {
  width: 100%;
  height: 100%;
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
  height: 100%;
  object-fit: cover;
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
  font-weight: 600;
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
