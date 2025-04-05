<script setup>
import { onMounted, onUnmounted, reactive, computed } from "vue";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { Navigation, Autoplay } from "swiper/modules";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const showNavigation = computed(() => props.data.length > 4);

const swiper_order = reactive({
  instance: null,
  settings: {
    modules: [Navigation, Autoplay],
    slidesPerView: "auto",
    spaceBetween: 24,
    centeredSlides: false,
    loop: true, // Отключил loop для точного отображения 4 элементов
    autoplay: false, // Отключил автопрокрутку для 4 элементов
    navigation: showNavigation.value
      ? {
          nextEl: ".services-nav-next",
          prevEl: ".services-nav-prev",
        }
      : false,
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 16,
      },
      576: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    },
  },
});

onMounted(() => {
  swiper_order.instance = new Swiper(".swiper-order", swiper_order.settings);
});

onUnmounted(() => {
  if (swiper_order.instance) {
    swiper_order.instance.destroy();
  }
});
</script>

<template>
  <section class="order-section">
    <div class="_container">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-text">{{ title }}</span>
          <span class="title-decoration"></span>
        </h2>
      </div>

      <div class="swiper-container">
        <div class="swiper-order">
          <div class="swiper-wrapper">
            <div v-for="(item, index) in data" :key="index" class="swiper-slide">
              <div class="order-card">
                <div class="card-header">
                  <div class="card-icon">
                    <img :src="item.urlImg" :alt="item.title" width="30" height="30" loading="lazy" />
                  </div>
                  <h3 class="card-title">{{ item.title }}</h3>
                </div>
                <div class="card-body">
                  <p class="card-text">{{ item.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="showNavigation" class="swiper-navigation">
          <button class="services-nav-prev swiper-button">
            <v-icon>mdi-chevron-left</v-icon>
          </button>
          <button class="services-nav-next swiper-button">
            <v-icon>mdi-chevron-right</v-icon>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;
@use "sass:color";

.order-section {
  padding: 60px 0;

  position: relative;
  overflow: hidden;

  ._container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
  }
}

.section-header {
  margin-bottom: 20px;
  text-align: center;
}

.section-title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 20px 0;
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
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    // background: linear-gradient(90deg, black, darken(black, 15%));
    background: linear-gradient(90deg, black, color.adjust(black, $lightness: -15%));
    border-radius: 3px;
    transition: width 0.3s ease;
  }

  &:hover .title-decoration {
    width: 120px;
  }
}

.swiper-container {
  position: relative;
  padding: 20px 0;
}

.swiper-order {
  // overflow: hidden;
  padding: 15px 0;
  width: 100%;
}

.swiper-wrapper {
  display: flex;
  align-items: stretch;
}

.swiper-slide {
  width: auto;
  height: auto;
  flex-shrink: 0;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.order-card {
  background: white;
  border-radius: 16px;
  padding: 30px;
  height: 100%;
  width: 100%;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  border: 1px solid rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.12);
  }
}

.card-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
}

.card-icon {
  width: 60px;
  height: 60px;
  min-width: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.2);
  transition: transform 0.3s ease;

  img {
    width: 30px;
    height: 30px;
    object-fit: contain;
    filter: brightness(0) invert(1);
    transition: transform 0.3s ease;
  }
}

.card-title {
  font-size: 20px;
  font-weight: 700;
  color: #1a202c;
  margin: 0;
  font-family: "Montserrat", sans-serif;
}

.card-body {
  position: relative;
  z-index: 2;
}

.card-text {
  color: $color-text;
  line-height: 1.6;
  font-size: 16px;
  margin: 0;
  font-family: "Open Sans", sans-serif;
}

.swiper-navigation {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  z-index: 10;
}

.swiper-button {
  width: 48px;
  height: 48px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  pointer-events: auto;
  transition: all 0.3s ease;
  border: none;
  color: #4a5568;
  position: relative;
  z-index: 2;

  &:hover {
    background: #667eea;
    color: white;
    transform: scale(1.1);
  }

  i {
    font-size: 24px;
  }
}

.services-nav-prev {
  left: -24px;
}

.services-nav-next {
  right: -24px;
}

@media (max-width: $md3) {
  .order-section {
    padding: 80px 0;
  }

  .section-title {
    font-size: 36px;

    .title-decoration {
      height: 4px;
      bottom: -10px;
    }
  }

  .swiper-slide {
    width: 280px;
  }

  .swiper-navigation {
    display: none;
  }
}

@media (max-width: $md4) {
  .order-section {
    padding: 40px 0px;
  }
  .section-header {
    margin-bottom: 0;
  }
  .swiper-container {
    padding-top: 0;
  }

  .section-title {
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

  .card-icon {
    width: 50px;
    height: 50px;
    min-width: 50px;

    img {
      width: 25px;
      height: 25px;
    }
  }

  .card-title {
    font-size: 18px;
  }

  .card-text {
    font-size: 15px;
  }
}
</style>
