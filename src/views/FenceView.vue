<template>
  <BannerSlider bannerText="Заборы и ограждения" :bannerPrice="bannerPrice" />
</template>

<script>
import BannerSlider from "../components/Sliders/BannerSlider.vue";
export default {
  name: "FenceView",
  components: {
    BannerSlider,
  },

  setup() {
    return {};
  },
  data: () => ({
    bannerPrice: [
      {
        url: "/images/swiperBanner/swiper-slide-1.webp",
        price: "от 90 000 руб.",
        name: "Установка забора",
      },
      {
        url: "/images/swiperBanner/swiper-slide-2.webp",
        price: "от 100 000 руб.",
        name: "Свайное поле",
      },
      {
        url: "/images/swiperBanner/swiper-slide-3.webp",
        price: "от 65 000 руб.",
        name: "Откатные ворота",
      },
      {
        url: "/images/swiperBanner/swiper-slide-4.webp",
        price: "от 1 900 руб./м²",
        name: "Парковка",
      },
      {
        url: "/images/swiperBanner/swiper-slide-5.webp",
        price: "от 60 000 руб.",
        name: "Водоподготовка",
      },
      {
        url: "/images/swiperBanner/swiper-slide-5.webp",
        price: "от 180 000 руб.",
        name: "Септик под ключ",
      },
    ],
  }),
};
</script>
<style lang="scss" scoped></style>
