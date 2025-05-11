<script setup>
import { onMounted, onUnmounted } from "vue";
import Swiper from "swiper/bundle";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/bundle";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
});

const swiperOptions = {
  modules: [Navigation, Autoplay],
  slidesPerView: "auto",
  spaceBetween: 24,
  centeredSlides: false,
  loop: true,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  centeredSlides: true,
  initialSlide: Math.floor(props.data.length / 2),
  navigation: {
    nextEl: ".services-nav-next",
    prevEl: ".services-nav-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
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
};

let swiperInstance = null;

onMounted(() => {
  swiperInstance = new Swiper(".services-swiper", swiperOptions);
});

onUnmounted(() => {
  if (swiperInstance) {
    swiperInstance.destroy();
  }
});
</script>

<template>
  <section class="premium-services">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-text">{{ title }}</span>
          <span class="title-decoration"></span>
        </h2>
      </div>

      <div class="swiper-container">
        <div class="services-swiper swiper">
          <div class="swiper-wrapper">
            <div v-for="(item, index) in data" :key="index" class="swiper-slide">
              <router-link :to="{ name: item.routePath }" class="service-card" :style="{ 'background-image': item.urlImg }">
                <div class="card-content">
                  <h3 class="service-title">{{ item.title }}</h3>

                  <div class="service-hover">
                    <span class="details-button">Подробнее</span>
                    <v-icon class="arrow-icon">mdi-arrow-right</v-icon>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>

        <div class="swiper-navigation">
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

.premium-services {
  padding: 80px 0;
  // background: linear-gradient(to bottom, #f9fafc 0%, #f0f4f9 100%);
  position: relative;
  overflow: hidden;

  .container {
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

.swiper-container {
  position: relative;
  padding: 20px 0;
}

.services-swiper {
  overflow: visible;
  padding: 15px 0;
}

.swiper-slide {
  background-color: $color-background;
  width: 320px;
  height: 280px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  background-size: cover;
  background-position: center;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  box-shadow: 1px 1px 3px 0px rgba(34, 60, 80, 0.18);
  // box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);

    .service-hover {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.service-card {
  display: block;
  height: 100%;
  width: 100%;
  position: relative;
  color: $text;
  text-decoration: none;
  transition: all 0.3s ease;
  background-size: contain !important;
  background-position: 95% 100% !important;
  background-repeat: no-repeat !important;
  background-size: 150% auto !important;
}

.card-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
}

.service-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
  line-height: 1.3;
  // text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  font-family: "Montserrat", sans-serif;
}

.price-container {
  margin-top: 10px;
}

.service-price {
  display: inline-block;
  background: rgba(255, 255, 255, 0.9);
  color: #1a202c;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-right: 8px;
  margin-bottom: 8px;
}

.service-hover {
  margin-top: auto;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.details-button {
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.arrow-icon {
  font-size: 24px;
  transition: transform 0.3s ease;
}

.service-card:hover .arrow-icon {
  transform: translateX(5px);
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
  position: relative;
  z-index: 2;

  &:hover {
    background: #667eea;
    color: white;
    transform: scale(1.1);
  }

  i {
    font-size: 28px;
  }
}

@media (max-width: $md3) {
  .premium-services {
    padding: 60px 0;
  }

  .section-title {
    font-size: 36px;
  }

  .swiper-slide {
    width: 280px;
    height: 240px;
  }

  .service-title {
    font-size: 20px;
  }

  .service-price {
    font-size: 14px;
    padding: 6px 12px;
  }
}

@media (max-width: $md4) {
  .section-header {
    margin-bottom: 0px;
  }
  .swiper-container {
    padding-top: 10px;
  }
  .premium-services {
    padding: 10px 0;
  }

  .section-title {
    font-size: 2rem;

    .title-decoration {
      width: 60px;
      height: 3px;
      bottom: -10px;
    }
  }

  .swiper-slide {
    width: 260px;
    height: 220px;
  }

  .service-title {
    font-size: 24px;
  }

  .details-button {
    font-size: 14px;
  }

  .swiper-button {
    width: 48px;
    height: 48px;

    i {
      font-size: 24px;
    }
  }
}
</style>
