<!-- <script setup>
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
  font-size: 18px;
  line-height: normal;
  color: #fff;
  text-align: left;
  padding: 15px 15px 10px 15px;
  z-index: 10;
  text-align: center;
  letter-spacing: 0.4px;
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
</style> -->
<!-- <BlockHeader :title="title" class="portfolio-title" /> -->
<!-- <script setup>
import { onMounted, onUnmounted, reactive, ref } from "vue";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { Navigation, EffectCoverflow } from "swiper/modules";
import BlockHeader from "../components/BlockHeader.vue";
import PopupSlider from "../components/PopupSlider.vue";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});

const popup = reactive({
  index: 0,
  visibility: false,
});

const swiperInstance = ref(null);

function clickSlide(ind) {
  toggleBodyScroll(true);
  setIndexSlide(ind);
  toggleVisibilityPopup();
}

function setIndexSlide(ind) {
  popup.index = ind;
}

function toggleVisibilityPopup() {
  popup.visibility = !popup.visibility;
}

function closePopup() {
  toggleVisibilityPopup();
  toggleBodyScroll(false);
}

function toggleBodyScroll(lock) {
  document.body.style.overflow = lock ? "hidden" : "";
}

onMounted(() => {
  swiperInstance.value = new Swiper(".portfolio-swiper", {
    modules: [Navigation, EffectCoverflow],
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    initialSlide: Math.floor(props.data.length / 2),
    coverflowEffect: {
      rotate: 0,
      stretch: -60,
      depth: 120,
      modifier: 1.5,
      slideShadows: false,
    },
    navigation: {
      nextEl: ".portfolio-nav-next",
      prevEl: ".portfolio-nav-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
        coverflowEffect: {
          stretch: 0,
          depth: 50,
          modifier: 1,
        },
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 24,
        coverflowEffect: {
          stretch: -60,
          depth: 120,
          modifier: 1.5,
        },
      },
    },
  });
});

onUnmounted(() => {
  if (swiperInstance.value) swiperInstance.value.destroy();
});
</script>

<template>
  <PopupSlider @close="closePopup" v-if="popup.visibility" :data="data[popup.index].work" />

  <section class="portfolio-section">
    <div class="container">
      <div class="section-header">
        <h2 class="portfolio-title">
          <span class="title-text">Наши работы</span>
          <span class="title-decoration"></span>
        </h2>
        <p class="section-subtitle">Примеры реализованных проектов</p>
      </div>

      <div class="portfolio-swiper-container">
        <div class="portfolio-swiper swiper">
          <div class="swiper-wrapper">
            <div v-for="(item, index) in data" :key="index" class="swiper-slide portfolio-slide" @click="clickSlide(index)">
              <div class="portfolio-card">
                <div class="card-image">
                  <img :src="item.url" :alt="item.title" class="portfolio-image" loading="lazy" />
                  <div class="image-overlay"></div>
                  <div class="portfolio-name-wrapper">
                    <h3 class="portfolio-name">{{ item.title }}</h3>
                  </div>
                  <div class="view-button">
                    <span>Смотреть работы</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="portfolio-navigation">
          <button class="portfolio-nav-prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button class="portfolio-nav-next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.portfolio-section {
  padding: 100px 0;
  background-color: #f8fafc;
  position: relative;
  overflow: hidden;

  .container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 60px;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.portfolio-title {
  font-size: 48px;
  font-weight: 800;
  margin: 0 0 15px 0;
  position: relative;
  display: inline-block;
  font-family: "Montserrat", sans-serif;

  .title-text {
    background: linear-gradient(90deg, #2b5876 0%, #4e4376 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    position: relative;
    z-index: 2;
    letter-spacing: 0.5px;
  }

  .title-decoration {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    z-index: 1;
    border-radius: 2px;
  }
}

.section-subtitle {
  font-size: 18px;
  color: #4a5568;
  margin: 0;
  font-family: "Open Sans", sans-serif;
  letter-spacing: 0.3px;
}

.portfolio-swiper-container {
  position: relative;
  padding: 40px 0;
}

.portfolio-swiper {
  overflow: visible;
  padding: 20px 0;
}

.portfolio-slide {
  width: 420px;
  height: auto;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  cursor: pointer;

  &.swiper-slide-active {
    transform: scale(1.05);
    z-index: 2;
  }
}

.portfolio-card {
  background: white;
  border-radius: 16px;
  height: 100%;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  border: 1px solid rgba(0, 0, 0, 0.03);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);

    .image-overlay {
      opacity: 0.7;
    }

    .view-button {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.card-image {
  position: relative;
  padding-top: 70%;
  overflow: hidden;

  .portfolio-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
    opacity: 0.5;
    transition: opacity 0.4s ease;
  }
}

/* Название в правом нижнем углу */
.portfolio-name-wrapper {
  position: absolute;
  bottom: 20px;
  right: 20px;
  max-width: 80%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  border-radius: 8px;
  padding: 12px 20px;
  z-index: 2;
}

.portfolio-name {
  font-size: 20px;
  font-weight: 600;
  color: white;
  margin: 0;
  line-height: 1.3;
  letter-spacing: 0.3px;
  text-align: right;
}

/* Кнопка в правом верхнем углу */
.view-button {
  position: absolute;
  top: 20px;
  right: 20px;
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50px;
  color: #2b5876;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  transform: translateY(-10px);
  opacity: 0;
  letter-spacing: 0.3px;
  z-index: 3;

  svg {
    margin-left: 8px;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: white;

    svg {
      transform: translateX(4px);
    }
  }

  .portfolio-card:hover & {
    transform: translateY(0);
    opacity: 1;
  }
}

.portfolio-navigation {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  z-index: 10;

  button {
    width: 56px;
    height: 56px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    pointer-events: auto;
    transition: all 0.3s ease;
    border: none;
    color: #4a5568;

    &:hover {
      background: #667eea;
      color: white;
      transform: scale(1.1);
    }
  }
}

@media (max-width: 1200px) {
  .portfolio-section .container {
    padding: 0 40px;
  }

  .portfolio-slide {
    width: 380px;
  }
}

@media (max-width: 992px) {
  .portfolio-section {
    padding: 80px 0;
  }

  .portfolio-title {
    font-size: 42px;
  }

  .portfolio-slide {
    width: 340px;
  }
}

@media (max-width: 768px) {
  .portfolio-section {
    padding: 60px 0;

    .container {
      padding: 0 30px;
    }
  }

  .portfolio-title {
    font-size: 36px;

    .title-decoration {
      height: 3px;
      bottom: 6px;
    }
  }

  .section-subtitle {
    font-size: 16px;
  }

  .portfolio-swiper-container {
    padding: 30px 0;
  }

  .portfolio-navigation {
    display: none;
  }

  .portfolio-slide {
    width: 300px;

    &.swiper-slide-active {
      transform: none;
    }
  }

  .portfolio-name-wrapper {
    padding: 10px 16px;
    bottom: 15px;
    right: 15px;
  }

  .portfolio-name {
    font-size: 18px;
  }

  .view-button {
    top: 15px;
    right: 15px;
    padding: 8px 16px;
    font-size: 14px;
  }
}

@media (max-width: 576px) {
  .portfolio-section {
    padding: 50px 0;

    .container {
      padding: 0 20px;
    }
  }

  .portfolio-title {
    font-size: 32px;
  }

  .portfolio-slide {
    width: 280px;
  }

  .portfolio-name-wrapper {
    padding: 8px 14px;
  }

  .view-button {
    padding: 6px 12px;
  }
}
</style> -->
<!-- <script setup>
import { onMounted, onUnmounted, reactive, ref } from "vue";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { Navigation, EffectCoverflow } from "swiper/modules";
import BlockHeader from "../components/BlockHeader.vue";
import PopupSlider from "../components/PopupSlider.vue";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});

const popup = reactive({
  index: 0,
  visibility: false,
});

const swiperInstance = ref(null);

function clickSlide(ind) {
  toggleBodyScroll(true);
  setIndexSlide(ind);
  toggleVisibilityPopup();
}

function setIndexSlide(ind) {
  popup.index = ind;
}

function toggleVisibilityPopup() {
  popup.visibility = !popup.visibility;
}

function closePopup() {
  toggleVisibilityPopup();
  toggleBodyScroll(false);
}

function toggleBodyScroll(lock) {
  document.body.style.overflow = lock ? "hidden" : "";
}

onMounted(() => {
  swiperInstance.value = new Swiper(".portfolio-swiper", {
    modules: [Navigation, EffectCoverflow],
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    initialSlide: Math.floor(props.data.length / 2),
    coverflowEffect: {
      rotate: 0,
      stretch: -60,
      depth: 120,
      modifier: 1.5,
      slideShadows: false,
    },
    navigation: {
      nextEl: ".portfolio-nav-next",
      prevEl: ".portfolio-nav-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
        coverflowEffect: {
          stretch: 0,
          depth: 50,
          modifier: 1,
        },
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 24,
        coverflowEffect: {
          stretch: -60,
          depth: 120,
          modifier: 1.5,
        },
      },
    },
  });
});

onUnmounted(() => {
  if (swiperInstance.value) swiperInstance.value.destroy();
});
</script>

<template>
  <PopupSlider @close="closePopup" v-if="popup.visibility" :data="data[popup.index].work" />

  <section class="portfolio-section">
    <div class="container">
      <div class="section-header">
        <h2 class="portfolio-title">
          <span class="title-text">Про БИС</span>
          <span class="title-decoration"></span>
        </h2>
        <p class="section-subtitle">Наш подход к реализации проектов</p>

        <div class="section-description">
          <p>
            Компания БИС специализируется на комплексном благоустройстве территорий и создании комфортной среды. Мы сочетаем современные
            технологии с индивидуальным подходом к каждому проекту.
          </p>
          <p>
            Наши работы - это результат слаженной работы профессиональной команды, где уделяется внимание каждой детали для достижения
            безупречного результата.
          </p>
        </div>
      </div>

      <div class="portfolio-swiper-container">
        <div class="portfolio-swiper swiper">
          <div class="swiper-wrapper">
            <div v-for="(item, index) in data" :key="index" class="swiper-slide portfolio-slide" @click="clickSlide(index)">
              <div class="portfolio-card">
                <div class="card-image">
                  <img :src="item.url" :alt="item.title" class="portfolio-image" loading="lazy" />
                  <div class="image-overlay"></div>

                  <div class="portfolio-name-wrapper">
                    <h3 class="portfolio-name">{{ item.title }}</h3>
                  </div>

                  <div class="view-button">
                    <span>Смотреть проект</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="portfolio-navigation">
          <button class="portfolio-nav-prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button class="portfolio-nav-next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.portfolio-section {
  padding: 100px 0;
  background-color: #f8fafc;
  position: relative;
  overflow: hidden;

  .container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 60px;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.portfolio-title {
  font-size: 48px;
  font-weight: 800;
  margin: 0 0 15px 0;
  position: relative;
  display: inline-block;
  font-family: "Montserrat", sans-serif;

  .title-text {
    background: linear-gradient(90deg, #2b5876 0%, #4e4376 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    position: relative;
    z-index: 2;
    letter-spacing: 0.5px;
  }

  .title-decoration {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    z-index: 1;
    border-radius: 2px;
  }
}

.section-subtitle {
  font-size: 20px;
  color: #4a5568;
  margin: 0 0 25px 0;
  font-family: "Open Sans", sans-serif;
  letter-spacing: 0.3px;
  font-weight: 500;
}

.section-description {
  text-align: center;
  color: #4a5568;
  line-height: 1.7;
  font-size: 17px;
  margin: 0 auto;

  p {
    margin: 0 0 15px 0;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.portfolio-swiper-container {
  position: relative;
  padding: 40px 0;
}

.portfolio-swiper {
  overflow: visible;
  padding: 20px 0;
}

.portfolio-slide {
  width: 420px;
  height: auto;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  cursor: pointer;

  &.swiper-slide-active {
    transform: scale(1.05);
    z-index: 2;
  }
}

.portfolio-card {
  background: white;
  border-radius: 16px;
  height: 100%;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  border: 1px solid rgba(0, 0, 0, 0.03);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);

    .image-overlay {
      opacity: 0.7;
    }

    .view-button {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.card-image {
  position: relative;
  padding-top: 70%;
  overflow: hidden;

  .portfolio-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
    opacity: 0.5;
    transition: opacity 0.4s ease;
  }
}

.portfolio-name-wrapper {
  position: absolute;
  bottom: 20px;
  right: 20px;
  max-width: 80%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  border-radius: 8px;
  padding: 12px 20px;
  z-index: 2;
}

.portfolio-name {
  font-size: 20px;
  font-weight: 600;
  color: white;
  margin: 0;
  line-height: 1.3;
  letter-spacing: 0.3px;
  text-align: right;
}

.view-button {
  position: absolute;
  top: 20px;
  right: 20px;
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50px;
  color: #2b5876;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  transform: translateY(-10px);
  opacity: 0;
  letter-spacing: 0.3px;
  z-index: 3;

  svg {
    margin-left: 8px;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: white;

    svg {
      transform: translateX(4px);
    }
  }

  .portfolio-card:hover & {
    transform: translateY(0);
    opacity: 1;
  }
}

.portfolio-navigation {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  z-index: 10;

  button {
    width: 56px;
    height: 56px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    pointer-events: auto;
    transition: all 0.3s ease;
    border: none;
    color: #4a5568;

    &:hover {
      background: #667eea;
      color: white;
      transform: scale(1.1);
    }
  }
}

@media (max-width: 1200px) {
  .portfolio-section .container {
    padding: 0 40px;
  }

  .portfolio-slide {
    width: 380px;
  }
}

@media (max-width: 992px) {
  .portfolio-section {
    padding: 80px 0;
  }

  .portfolio-title {
    font-size: 42px;
  }

  .portfolio-slide {
    width: 340px;
  }

  .section-description {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .portfolio-section {
    padding: 60px 0;

    .container {
      padding: 0 30px;
    }
  }

  .portfolio-title {
    font-size: 36px;

    .title-decoration {
      height: 3px;
      bottom: 6px;
    }
  }

  .section-subtitle {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .portfolio-swiper-container {
    padding: 30px 0;
  }

  .portfolio-navigation {
    display: none;
  }

  .portfolio-slide {
    width: 300px;

    &.swiper-slide-active {
      transform: none;
    }
  }

  .portfolio-name-wrapper {
    padding: 10px 16px;
    bottom: 15px;
    right: 15px;
  }

  .portfolio-name {
    font-size: 18px;
  }

  .view-button {
    top: 15px;
    right: 15px;
    padding: 8px 16px;
    font-size: 14px;
  }
}

@media (max-width: 576px) {
  .portfolio-section {
    padding: 50px 0;

    .container {
      padding: 0 20px;
    }
  }

  .portfolio-title {
    font-size: 32px;
  }

  .section-subtitle {
    font-size: 16px;
  }

  .portfolio-slide {
    width: 280px;
  }

  .portfolio-name-wrapper {
    padding: 8px 14px;
  }

  .view-button {
    padding: 6px 12px;
  }
}
</style> -->

<!-- <script setup>
import { onMounted, onUnmounted, reactive, ref } from "vue";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { Navigation, EffectCoverflow } from "swiper/modules";
import PopupSlider from "../components/PopupSlider.vue";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});

const popup = reactive({
  index: 0,
  visibility: false,
});

const swiperInstance = ref(null);

function clickSlide(ind) {
  toggleBodyScroll(true);
  setIndexSlide(ind);
  toggleVisibilityPopup();
}

function setIndexSlide(ind) {
  popup.index = ind;
}

function toggleVisibilityPopup() {
  popup.visibility = !popup.visibility;
}

function closePopup() {
  toggleVisibilityPopup();
  toggleBodyScroll(false);
}

function toggleBodyScroll(lock) {
  document.body.style.overflow = lock ? "hidden" : "";
}

onMounted(() => {
  swiperInstance.value = new Swiper(".portfolio-swiper", {
    modules: [Navigation, EffectCoverflow],
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    initialSlide: Math.floor(props.data.length / 2),
    coverflowEffect: {
      rotate: 0,
      stretch: -40,
      depth: 120,
      modifier: 1.5,
      slideShadows: false,
    },
    navigation: {
      nextEl: ".portfolio-nav-next",
      prevEl: ".portfolio-nav-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
        coverflowEffect: {
          stretch: 0,
          depth: 50,
          modifier: 1,
        },
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 24,
        coverflowEffect: {
          stretch: -40,
          depth: 120,
          modifier: 1.5,
        },
      },
    },
  });
});

onUnmounted(() => {
  if (swiperInstance.value) swiperInstance.value.destroy();
});
</script>

<template>
  <PopupSlider @close="closePopup" v-if="popup.visibility" :data="data[popup.index].work" />

  <section class="portfolio-section">
    <div class="container">
      <div class="section-header">
        <h2 class="portfolio-title">
          <span class="title-text">Наши работы</span>
          <span class="title-decoration"></span>
        </h2>

        <div class="section-description">
          <p>
            Наши работы - это результат слаженной работы профессиональной команды, где уделяется внимание каждой детали для достижения
            безупречного результата.
          </p>
        </div>
      </div>

      <div class="portfolio-swiper-container">
        <div class="portfolio-swiper swiper">
          <div class="swiper-wrapper">
            <div v-for="(item, index) in data" :key="index" class="swiper-slide portfolio-slide" @click="clickSlide(index)">
              <div class="portfolio-card">
                <div class="card-image">
                  <img :src="item.url" :alt="item.title" class="portfolio-image" loading="lazy" />
                  <div class="image-overlay"></div>

                  <div class="portfolio-name-wrapper">
                    <h3 class="portfolio-name">{{ item.title }}</h3>
                  </div>

                  <div class="view-button">
                    <span>Смотреть работы</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="portfolio-navigation">
          <button class="portfolio-nav-prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button class="portfolio-nav-next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.portfolio-section {
  padding-top: 20px;
  background-color: #f8fafc;
  position: relative;
  overflow: hidden;

  .container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 60px;
  }
}

.section-header {
  text-align: center;
  // margin-bottom: 60px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.portfolio-title {
  font-size: 48px;
  font-weight: 800;
  margin: 0 0 15px 0;
  position: relative;
  display: inline-block;
  font-family: "Montserrat", sans-serif;

  .title-text {
    background: linear-gradient(90deg, #2c3e50, #1a1a1a);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    position: relative;
    z-index: 2;
    letter-spacing: 0.5px;
  }

  .title-decoration {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    z-index: 1;
    border-radius: 2px;
  }
}

.section-subtitle {
  font-size: 20px;
  color: #4a5568;
  margin: 0 0 25px 0;
  font-family: "Open Sans", sans-serif;
  letter-spacing: 0.3px;
  font-weight: 500;
}

.section-description {
  text-align: center;
  color: #4a5568;
  line-height: 1.7;
  font-size: 17px;
  margin: 0 auto;

  p {
    margin: 0 0 15px 0;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.portfolio-swiper-container {
  position: relative;
  padding: 40px 0;
}

.portfolio-swiper {
  overflow: visible;
  padding: 20px 0;
}

.portfolio-slide {
  width: 420px;
  height: auto;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  cursor: pointer;

  &.swiper-slide-active {
    transform: scale(1.05);
    z-index: 2;
  }
}

.portfolio-card {
  background: white;
  border-radius: 16px;
  height: 100%;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  border: 1px solid rgba(0, 0, 0, 0.03);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);

    .image-overlay {
      opacity: 0.7;
    }

    .view-button {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.card-image {
  position: relative;
  padding-top: 70%;
  overflow: hidden;

  .portfolio-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
    opacity: 0.5;
    transition: opacity 0.4s ease;
  }
}

.portfolio-name-wrapper {
  position: absolute;
  bottom: 20px;
  right: 20px;
  max-width: 80%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  border-radius: 8px;
  padding: 12px 20px;
  z-index: 2;
}

.portfolio-name {
  font-size: 20px;
  font-weight: 600;
  color: white;
  margin: 0;
  line-height: 1.3;
  letter-spacing: 0.3px;
  text-align: right;
}

.view-button {
  position: absolute;
  top: 20px;
  right: 20px;
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50px;
  color: #2b5876;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  transform: translateY(-10px);
  opacity: 0;
  letter-spacing: 0.3px;
  z-index: 3;

  svg {
    margin-left: 8px;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: white;

    svg {
      transform: translateX(4px);
    }
  }

  .portfolio-card:hover & {
    transform: translateY(0);
    opacity: 1;
  }
}

.portfolio-navigation {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  z-index: 10;

  button {
    width: 56px;
    height: 56px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    pointer-events: auto;
    transition: all 0.3s ease;
    border: none;
    color: #4a5568;

    &:hover {
      background: #667eea;
      color: white;
      transform: scale(1.1);
    }
  }
}

@media (max-width: 1200px) {
  .portfolio-section .container {
    padding: 0 40px;
  }

  .portfolio-slide {
    width: 380px;
  }
}

@media (max-width: 992px) {
  .portfolio-section {
    padding: 80px 0;
  }

  .portfolio-title {
    font-size: 42px;
  }

  .portfolio-slide {
    width: 340px;
  }

  .section-description {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .portfolio-section {
    padding: 20px 0;

    .container {
      padding: 0 30px;
    }
  }

  .portfolio-title {
    font-size: 36px;

    .title-decoration {
      height: 3px;
      bottom: 6px;
    }
  }

  .section-subtitle {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .portfolio-swiper-container {
    padding: 0px 0;
  }

  .portfolio-navigation {
    display: none;
  }

  .portfolio-slide {
    width: 300px;

    &.swiper-slide-active {
      transform: none;
    }
  }

  .portfolio-name-wrapper {
    padding: 10px 16px;
    bottom: 15px;
    right: 15px;
  }

  .portfolio-name {
    font-size: 18px;
  }

  .view-button {
    top: 15px;
    right: 15px;
    padding: 8px 16px;
    font-size: 14px;
  }
}

@media (max-width: 576px) {
  .portfolio-section {
    padding: 20px 0;

    .container {
      padding: 0 20px;
    }
  }

  .portfolio-title {
    font-size: 32px;
  }

  .section-subtitle {
    font-size: 16px;
  }

  .portfolio-slide {
    width: 280px;
  }

  .portfolio-name-wrapper {
    padding: 8px 14px;
  }

  .view-button {
    padding: 6px 12px;
  }
}
</style> -->

<script setup>
import { onMounted, onUnmounted, reactive, ref } from "vue";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { Navigation, EffectCoverflow } from "swiper/modules";
import PopupSlider from "../components/PopupSlider.vue";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});

const popup = reactive({
  index: 0,
  visibility: false,
});

const swiperInstance = ref(null);

function clickSlide(ind) {
  toggleBodyScroll(true);
  setIndexSlide(ind);
  toggleVisibilityPopup();
}

function setIndexSlide(ind) {
  popup.index = ind;
}

function toggleVisibilityPopup() {
  popup.visibility = !popup.visibility;
}

function closePopup() {
  toggleVisibilityPopup(false);
  toggleBodyScroll(false);
}

function toggleBodyScroll(lock) {
  document.body.style.overflow = lock ? "hidden" : "";
}

onMounted(() => {
  swiperInstance.value = new Swiper(".portfolio-swiper", {
    modules: [Navigation, EffectCoverflow],
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    initialSlide: Math.floor(props.data.length / 2),
    coverflowEffect: {
      rotate: 0,
      stretch: -40,
      depth: 120,
      modifier: 1.5,
      slideShadows: false,
    },
    navigation: {
      nextEl: ".portfolio-nav-next",
      prevEl: ".portfolio-nav-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
        coverflowEffect: {
          stretch: 0,
          depth: 50,
          modifier: 1,
        },
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 24,
        coverflowEffect: {
          stretch: -40,
          depth: 120,
          modifier: 1.5,
        },
      },
    },
  });
});

onUnmounted(() => {
  if (swiperInstance.value) swiperInstance.value.destroy();
});
</script>

<template>
  <PopupSlider @someEvent="closePopup" v-if="popup.visibility" :data="data[popup.index].work"></PopupSlider>

  <section class="portfolio-section">
    <div class="_container">
      <div class="section-header">
        <h2 class="portfolio-title">
          <span class="title-text">НАШИ РАБОТЫ</span>
          <span class="title-decoration"></span>
        </h2>
        <p class="section-subtitle">Реализованные работы с безупречным качеством исполнения</p>
      </div>

      <div class="portfolio-swiper-container">
        <div class="portfolio-swiper swiper">
          <div class="swiper-wrapper">
            <div v-for="(item, index) in data" :key="index" class="swiper-slide portfolio-slide" @click="clickSlide(index)">
              <div class="portfolio-card">
                <div class="card-image">
                  <img :src="item.url" :alt="item.title" class="portfolio-image" loading="lazy" />
                  <div class="image-overlay"></div>

                  <div class="portfolio-name-wrapper">
                    <h3 class="portfolio-name">{{ item.title }}</h3>
                  </div>

                  <div class="view-button">
                    <span>Смотреть работы</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="portfolio-navigation">
          <button class="portfolio-nav-prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button class="portfolio-nav-next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;
@use "sass:color";

.portfolio-section {
  padding: 20px 0;
  position: relative;
  overflow: hidden;

  ._container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 20px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.portfolio-title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 15px 0;
  position: relative;
  display: inline-block;
  font-family: "Montserrat", sans-serif;

  .title-text {
    background: linear-gradient(90deg, #2c3e50, #1a1a1a);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    position: relative;
    z-index: 2;
    letter-spacing: -0.03em;
    text-transform: uppercase;
  }

  .title-decoration {
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 5px;
    // background: linear-gradient(90deg, black, darken(black, 15%));
    background: linear-gradient(90deg, black, color.adjust(black, $lightness: -15%));
    border-radius: 3px;
    transition: width 0.3s ease;
  }

  &:hover .title-decoration {
    width: 120px;
  }
}

.section-subtitle {
  font-size: 20px;
  color: #4a5568;
  margin: 0 0 25px 0;
  font-family: "Open Sans", sans-serif;
  letter-spacing: 0.3px;
  font-weight: 500;
}

.section-description {
  text-align: center;
  color: #4a5568;
  line-height: 1.7;
  font-size: 17px;
  margin: 0 auto;

  p {
    margin: 0 0 15px 0;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.portfolio-swiper-container {
  position: relative;
  padding: 40px 0;
}

.portfolio-swiper {
  overflow: visible;
  padding: 20px 0;
}

.portfolio-slide {
  width: 420px;
  height: auto;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  cursor: pointer;

  &.swiper-slide-active {
    transform: scale(1.05);
    z-index: 2;
  }
}

.portfolio-card {
  background: white;
  border-radius: 16px;
  height: 100%;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  border: 1px solid rgba(0, 0, 0, 0.03);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);

    .image-overlay {
      opacity: 0.7;
    }

    .view-button {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.card-image {
  position: relative;
  padding-top: 70%;
  overflow: hidden;

  .portfolio-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
    opacity: 0.5;
    transition: opacity 0.4s ease;
  }
}

.portfolio-name-wrapper {
  position: absolute;
  bottom: 20px;
  right: 20px;
  max-width: 80%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  border-radius: 8px;
  padding: 12px 20px;
  z-index: 2;
}

.portfolio-name {
  font-size: 20px;
  font-weight: 600;
  color: white;
  margin: 0;
  line-height: 1.3;
  letter-spacing: 0.3px;
  text-align: right;
  font-family: "Montserrat", sans-serif;
}

.view-button {
  position: absolute;
  top: 20px;
  right: 20px;
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50px;
  color: #2b5876;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  transform: translateY(-10px);
  opacity: 0;
  letter-spacing: 0.3px;
  z-index: 3;
  font-family: "Montserrat", sans-serif;

  svg {
    margin-left: 8px;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: white;

    svg {
      transform: translateX(4px);
    }
  }

  .portfolio-card:hover & {
    transform: translateY(0);
    opacity: 1;
  }
}

.portfolio-navigation {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  z-index: 10;

  button {
    width: 56px;
    height: 56px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    pointer-events: auto;
    transition: all 0.3s ease;
    border: none;
    color: #4a5568;

    &:hover {
      background: #667eea;
      color: white;
      transform: scale(1.1);
    }
  }
}

@media (max-width: $md3) {
  .portfolio-section {
    padding: 80px 0;
  }

  .portfolio-title {
    font-size: 42px;

    .title-decoration {
      height: 4px;
      bottom: -10px;
    }
  }

  .portfolio-slide {
    width: 340px;
  }

  .section-subtitle {
    font-size: 18px;
  }

  .portfolio-navigation {
    display: none;
  }
}

@media (max-width: $md4) {
  .portfolio-section {
    padding: 20px 0;
  }
  .section-header {
    margin-bottom: 0px;
  }
  .section-subtitle {
    margin-bottom: 0px;
  }
  .portfolio-swiper-container {
    padding: 0px 0px;
  }

  .portfolio-title {
    font-size: 2rem;

    .title-decoration {
      width: 60px;
      height: 3px;
      bottom: -8px;
    }

    &:hover .title-decoration {
      width: 80px;
    }
  }

  .portfolio-slide {
    width: 280px;
  }

  .portfolio-name-wrapper {
    padding: 8px 14px;
  }

  .view-button {
    padding: 6px 12px;
    font-size: 14px;
  }
}
</style>
