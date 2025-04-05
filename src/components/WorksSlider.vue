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
