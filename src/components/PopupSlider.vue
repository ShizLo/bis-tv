<script setup>
import { onMounted, onUnmounted, reactive, ref } from "vue";
import Swiper from "swiper/bundle";
import { swiper_popup_work } from "../assets/js/swiper";
import { toggleBodyScroll } from "../assets/js/utils/toggleBodyScroll";

const swiper_popup = new Swiper(".swiper-popup-work", swiper_popup_work);

const props = defineProps({
  data: {
    typeof: Array,
  },
});

onMounted(() => {
  swiper_popup.init();
  toggleBodyScroll(true);
});
onUnmounted(() => {
  swiper_popup.destroy();
});
</script>
<template>
  <div class="popup-slider__wraper">
    <!-- <div class="viewer-header">
      <div class="viewer-author"></div>
      <div class="viewer-title"></div>
      <div class="viewer-action">
        <div class="viewer-close">
          <div class="viewer-close-icon"></div>
        </div>
      </div>
    </div> -->
    <div class="swiper-container">
      <div class="swiper-popup-work">
        <div class="swiper-wrapper">
          <div v-for="(item, k) in data" class="swiper-slide">
            <img loading="lazy" :src="item.url" :alt="item.alt" class="swiper__img" />
          </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popup-slider {
  &__wraper {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 20;
    background-color: rgba(22, 22, 22, 0.925);
    left: 0;
    opacity: 1;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 0;
  }
}

.swiper-container {
  width: 800px;
  height: 600px;
  overflow: hidden;
  border-radius: 8px;
}
.swiper-popup-work {
  max-width: 100%;
  height: 100%;
  margin: auto;
}
.swiper {
  &__img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
.swiper-slide {
  position: relative;
}
.swiper-popup-work > .swiper-button-prev {
  left: 25px;
}
.swiper-popup-work > .swiper-button-next {
  right: 25px;
}
.swiper-popup-work > .swiper-button-prev::after {
  padding: 18px;
  font-size: 32px;
  color: #9d9ea0;
}
.swiper-popup-work > .swiper-button-next::after {
  padding: 18px;
  font-size: 32px;
  color: #9d9ea0;
}
</style>
