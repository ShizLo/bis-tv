<script setup>
import { onMounted, onUnmounted, reactive, ref } from "vue";
import Swiper from "swiper/bundle";
import { swiper_bis_work } from "../assets/js/swiper";
import { toggleBodyScroll } from "../assets/js/utils/toggleBodyScroll";
import BlockHeader from "../components/BlockHeader.vue";
import PopupSlider from "../components/PopupSlider.vue";

const props = defineProps({
  title: {
    typeof: String,
  },
  data: {
    typeof: Array,
  },
});

const popup = reactive({
  index: 0,
  visibility: false,
});

const swiper_work = new Swiper(".swiper-bis-work", swiper_bis_work);

const workImages = {
  traks: [
    {
      url: "/images/miniSlider/traks-1.jpg",
      alt: "Дорожки",
    },
    {
      url: "/images/miniSlider/traks-2.jpg",
      alt: "Дорожки",
    },
    {
      url: "/images/miniSlider/traks-3.jpg",
      alt: "Дорожки",
    },
    {
      url: "/images/miniSlider/traks-4.jpg",
      alt: "Дорожки",
    },
    {
      url: "/images/miniSlider/traks-5.jpg",
      alt: "Дорожки",
    },
  ],
  lighting: [
    {
      url: "/images/miniSlider/lighting-1.jpg",
      alt: "Освещение",
    },
    {
      url: "/images/miniSlider/lighting-2.jpg",
      alt: "Освещение",
    },
    {
      url: "/images/miniSlider/lighting-3.jpg",
      alt: "Освещение",
    },
    {
      url: "/images/miniSlider/lighting-4.jpg",
      alt: "Освещение",
    },
    {
      url: "/images/miniSlider/lighting-5.jpg",
      alt: "Освещение",
    },
  ],
  picket_fence: [
    {
      url: "/images/miniSlider/picket_fence-1.jpg",
      alt: "Забор из штакетника",
    },
    {
      url: "/images/miniSlider/picket_fence-2.jpg",
      alt: "Забор из штакетника",
    },
    {
      url: "/images/miniSlider/picket_fence-3.jpg",
      alt: "Забор из штакетника",
    },
    {
      url: "/images/miniSlider/picket_fence-4.jpg",
      alt: "Забор из штакетника",
    },
    {
      url: "/images/miniSlider/picket_fence-5.jpg",
      alt: "Забор из штакетника",
    },
  ],
  gitter_fence: [
    {
      url: "/images/miniSlider/gitter_fence-1.jpg",
      alt: "Забор из гиттера",
    },
    {
      url: "/images/miniSlider/gitter_fence-2.jpg",
      alt: "Забор из гиттера",
    },
    {
      url: "/images/miniSlider/gitter_fence-3.jpg",
      alt: "Забор из гиттера",
    },
    {
      url: "/images/miniSlider/gitter_fence-4.jpg",
      alt: "Забор из гиттера",
    },
    {
      url: "/images/miniSlider/gitter_fence-5.jpg",
      alt: "Забор из гиттера",
    },
  ],
  rollbacks: [
    {
      url: "/images/miniSlider/rollbacks-1.jpg",
      alt: "Откатные ворота",
    },
    {
      url: "/images/miniSlider/rollbacks-2.jpg",
      alt: "Откатные ворота",
    },
    {
      url: "/images/miniSlider/rollbacks-3.jpg",
      alt: "Откатные ворота",
    },
    {
      url: "/images/miniSlider/rollbacks-4.jpg",
      alt: "Откатные ворота",
    },
    {
      url: "/images/miniSlider/rollbacks-5.jpg",
      alt: "Откатные ворота",
    },
  ],
  settlement: [
    {
      url: "/images/miniSlider/settlement-1.jpg",
      alt: "Расчистка участка",
    },
    {
      url: "/images/miniSlider/settlement-2.jpg",
      alt: "Расчистка участка",
    },
    {
      url: "/images/miniSlider/settlement-3.jpg",
      alt: "Расчистка участка",
    },
    {
      url: "/images/miniSlider/settlement-4.jpg",
      alt: "Расчистка участка",
    },
    {
      url: "/images/miniSlider/settlement-5.jpg",
      alt: "Расчистка участка",
    },
  ],
};

function clickSlide(ind) {
  toggleBodyScroll(true);
  setIndexSlide(ind);
  toggleVisibilityPopup();
}
function setIndexSlide(ind) {
  popup.index = ind;
}
function toggleVisibilityPopup() {
  popup.visibility ? (popup.visibility = false) : (popup.visibility = true);
}
function closePopup() {
  toggleVisibilityPopup(false);
  toggleBodyScroll(false);
}

onMounted(() => {
  swiper_work.init();
});
onUnmounted(() => {
  swiper_work.destroy();
});
</script>
<template>
  <PopupSlider @someEvent="closePopup" v-if="popup.visibility" :data="data[popup.index].work"></PopupSlider>
  <section class="works-slider">
    <div class="_container">
      <BlockHeader :title="title"></BlockHeader>
      <div class="swiper-container">
        <div class="swiper-bis-work">
          <div class="swiper-wrapper">
            <div v-for="(item, k) in data" @click="clickSlide(k)" class="swiper-slide swiper-slide__work">
              <div class="swiper__content">
                <img loading="lazy" :src="item.url" :alt="item.title" class="swiper__img" />
                <div class="content__slide">
                  <p class="content__title">{{ item.title }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;

.test {
  z-index: 1000;
}

.works-slider {
  margin-bottom: 25px;
  position: relative;
  overflow: hidden;
}
.swiper-container {
  position: relative;
  width: 100%;
}

.swiper-bis-work > .swiper-button-prev {
  left: -50px;
}
.swiper-bis-work > .swiper-button-next {
  right: -50px;
}

.swiper-bis-work > .swiper-button-prev::after {
  padding: 18px;
  font-size: 32px;
  color: #9d9ea0;
}
.swiper-bis-work > .swiper-button-next::after {
  padding: 18px;
  font-size: 32px;
  color: #9d9ea0;
}

.swiper {
  width: 100%;
  height: 100%;
  &__content {
    position: relative;
    height: 240px;
  }
  &__img {
    border-radius: 7px;
    object-fit: cover;
    top: 0;
    height: 100%;
    position: absolute;
    width: 100%;
    left: 0;
  }
}
.swiper-bis-work {
  overflow: hidden;
  padding-bottom: 3px;
  @media (max-width: $md4) {
    overflow: visible;
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
.content__title {
  font-weight: 400;
  font-size: 20px;
  line-height: normal;
  color: #fff;
  text-align: left;
  padding: 15px 15px 10px 15px;
  z-index: 10;
  text-align: center;
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
    font-size: 15px;
    letter-spacing: 0.5px;
    text-align: center;
    padding: 15px 15px 10px 15px;
  }
}
</style>
