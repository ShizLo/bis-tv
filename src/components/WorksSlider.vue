<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
//import "swiper/css";

//import "swiper/css/pagination";
//import "swiper/css/navigation";

//import "../../src/style.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

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
  <div class="container pb-4 pt-8">
    <h2 class="content-bar__h2">Наши работы по благоустройству</h2>
  </div>
  <section class="container py-2 flex">
    <swiper
      :slidesPerView="5"
      :spaceBetween="30"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
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
  </section>
</template>
<style scoped>
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
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
}
.content_title {
  font-weight: 600;
  font-size: 1.6rem;
  line-height: normal;
  color: #fff;
  text-shadow: 3px -3px 8px black;
  text-align: left;
  padding: 15px;
}
</style>
