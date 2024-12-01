<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';

  import '../../src/style.css';

  // import required modules
  import { Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination],
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
    <swiper-slide><img src="https://sewera.ru/image/cache/catalog/stories/ozelenenie-max-500.webp" data-src="https://sewera.ru/image/cache/catalog/stories/ozelenenie-max-500.webp" alt="Автополив, озеленение, освещение" class="insta-gallery__preview lazyloaded"></swiper-slide>
    <swiper-slide><img src="https://sewera.ru/image/cache/catalog/stories/zaezd-max-500.webp" data-src="https://sewera.ru/image/cache/catalog/stories/zaezd-max-500.webp" alt="Заезд на участок и выравнивание" class="insta-gallery__preview lazyloaded"></swiper-slide>
    <swiper-slide><img src="https://sewera.ru/image/cache/catalog/stories/Dorojki_posadka_viravnivanie-max-500.webp" data-src="https://sewera.ru/image/cache/catalog/stories/Dorojki_posadka_viravnivanie-max-500.webp" alt="Дорожки, посадка и выравнивание" class="insta-gallery__preview lazyloaded"></swiper-slide>
    <swiper-slide><img src="https://sewera.ru/image/cache/catalog/stories/ozelenenie-max-500.webp" data-src="https://sewera.ru/image/cache/catalog/stories/ozelenenie-max-500.webp" alt="Автополив, озеленение, освещение" class="insta-gallery__preview lazyloaded"></swiper-slide>
    <swiper-slide><img src="https://sewera.ru/image/cache/catalog/stories/zaezd-max-500.webp" data-src="https://sewera.ru/image/cache/catalog/stories/zaezd-max-500.webp" alt="Заезд на участок и выравнивание" class="insta-gallery__preview lazyloaded"></swiper-slide>
    <swiper-slide><img src="https://sewera.ru/image/cache/catalog/stories/Dorojki_posadka_viravnivanie-max-500.webp" data-src="https://sewera.ru/image/cache/catalog/stories/Dorojki_posadka_viravnivanie-max-500.webp" alt="Дорожки, посадка и выравнивание" class="insta-gallery__preview lazyloaded"></swiper-slide>
    <swiper-slide><img src="https://sewera.ru/image/cache/catalog/stories/ozelenenie-max-500.webp" data-src="https://sewera.ru/image/cache/catalog/stories/ozelenenie-max-500.webp" alt="Автополив, озеленение, освещение" class="insta-gallery__preview lazyloaded"></swiper-slide>
    <swiper-slide><img src="https://sewera.ru/image/cache/catalog/stories/zaezd-max-500.webp" data-src="https://sewera.ru/image/cache/catalog/stories/zaezd-max-500.webp" alt="Заезд на участок и выравнивание" class="insta-gallery__preview lazyloaded"></swiper-slide>
    <swiper-slide><img src="https://sewera.ru/image/cache/catalog/stories/Dorojki_posadka_viravnivanie-max-500.webp" data-src="https://sewera.ru/image/cache/catalog/stories/Dorojki_posadka_viravnivanie-max-500.webp" alt="Дорожки, посадка и выравнивание" class="insta-gallery__preview lazyloaded"></swiper-slide>
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
</style>