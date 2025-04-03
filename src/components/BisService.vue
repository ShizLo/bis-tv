<!-- <script setup>
import { onMounted, onUnmounted, reactive } from "vue";
import Swiper from "swiper/bundle";
import { swiper_bis_setting } from "../assets/js/swiper";
import { ROUTES_PATHS } from "../constants";

const props = defineProps({
  title: {
    typeof: String,
  },
  data: {
    typeof: Array,
  },
});
const swiper_bis = new Swiper(".swiper-bis-services", swiper_bis_setting);

onMounted(() => {
  swiper_bis.init();
});
onUnmounted(() => {
  swiper_bis.destroy();
});
</script>

<template>
  <section class="bis-services">
    <div class="bis-services__container _container">
      <h2 class="bis-services__title">{{ title }}</h2>
      <div class="swiper-container">
        <div class="swiper-bis-services">
          <div class="swiper-wrapper">
            <div v-for="item in data" class="swiper-slide swiper-slide__bis-services">
              <router-link :style="{ 'background-image': item.urlImg }" class="services__link" :to="{ name: item.routePath }">
                <div class="item__title">{{ item.title }}</div>
                <div v-for="price in item.price" class="item__bot">
                  <span class="item__next">{{ price.text }}</span>
                </div>
              </router-link>
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

.swiper-bis-services > .swiper-button-prev {
  left: -50px;
}
.swiper-bis-services > .swiper-button-next {
  right: -50px;
}

.swiper-bis-services > .swiper-button-prev::after {
  padding: 18px;
  font-size: 32px;
  color: #9d9ea0;
}
.swiper-bis-services > .swiper-button-next::after {
  padding: 18px;
  font-size: 32px;
  color: #9d9ea0;
}

.s-button-prev {
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: -18px;
  width: 24px;
  height: 24px;
  padding: 18px;
  border-radius: 50%;
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.0823529412);
  img {
    max-width: max-content;
    height: 15px;
    width: 15px;
  }
  @media (max-width: $md1) {
    display: none;
  }
}

.s-button-next {
  background-color: #fff;
  position: absolute;
  top: 50%;
  right: -18px;
  width: 24px;
  height: 24px;
  padding: 18px;
  border-radius: 50%;
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.0823529412);
  img {
    max-width: max-content;
    height: 15px;
    width: 15px;
  }
  @media (max-width: $md1) {
    display: none;
  }
}

.swiper-container {
  position: relative;
  width: 100%;
}
.swiper-wrapper {
  align-items: stretch;
}

.swiper-bis-services {
  overflow: hidden;
  padding-bottom: 3px;
  @media (max-width: $md4) {
    overflow: visible;
  }
}

.swiper-slide__bis-services {
  background-color: $color-background;
  border-radius: 8px;
  height: auto;
  padding: 15px 0px 0px 15px;
  box-shadow: 1px 1px 3px 0px rgba(34, 60, 80, 0.2);
  @media (max-width: $md4) {
    padding: 10px 0px 0px 12px;
  }
}

.services {
  &__link {
    display: block;
    height: 140px;
    background-position: 95% 100%;
    background-repeat: no-repeat;
    background-size: 100% auto;
    line-height: 1;
    @media (max-width: $md4) {
      height: 95px;
      background-size: contain;
    }
  }
}

.bis-services {
  overflow: hidden;
  margin: 0px 0px 25px 0px;
  &__title {
    // margin-top: 10px;
    margin-bottom: 10px;
    font-size: 26px;
    font-weight: 600;
    background: #fff;
    display: inline-block;
    border-radius: 32px;
    padding: 3px 10px;
    color: $color-title;
  }
}
.item {
  &__header {
    display: flex;
    align-items: center;
    margin: 0px 0px 10px 0px;
  }
  &__icon {
    padding: 10px 10px;
    margin: 0px 10px 0px 0px;
    background-color: #fff;
    border-radius: 4px;
    -webkit-box-shadow: 0px 1px 3px 0px rgba(34, 60, 80, 0.18);
    -moz-box-shadow: 0px 1px 3px 0px rgba(34, 60, 80, 0.18);
    box-shadow: 0px 1px 3px 0px rgba(34, 60, 80, 0.18);
    @media (max-width: $md4) {
      margin-left: 5px;
    }
    img {
      @media (max-width: $md4) {
        height: 22px;
        width: 22px;
      }
    }
  }
  &__title {
    font-size: 20px;
    font-weight: 500;
    margin: 0px 0px 8px 0px;
    @media (max-width: $md4) {
      margin: 0px 0px 5px 0px;
      font-size: 15px;
    }
  }
  &__bot {
    display: flex;
    flex-wrap: wrap;
    @media (max-width: $md4) {
      align-items: center;
    }
    img {
      height: 14px;
      width: 14px;
      margin-top: 0.5px;
      @media (max-width: $md4) {
        height: 9px;
        width: 8px;
        margin-top: -0.2px;
      }
    }
  }
  &__next {
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    // font-family: "Montserrat", Arial, sans-serif;
    // color: #7a7a7a;
    margin: 0px 0px 2px 0px;
    @media (max-width: $md4) {
      font-size: 10px;
      margin-right: 1px;
    }
  }
  &__icon {
  }
  &__text {
    color: $color-text;
    line-height: 1.3;
    font-weight: 400;
    font-size: 15px;
  }
  &__foot {
    background: #fff;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    color: #102938;
    text-align: center;
    border-radius: 4px;
    font-weight: 500;
    box-shadow: 0px 1px 2px 0px rgba(34, 60, 80, 0.18);
    margin: 0px 0px 0px -3px;
    @media (max-width: $md2) {
      font-size: 14px;
      // margin: 0px 0px 0px -5px;
      // padding: 7px 10px;
      padding: 7px 7px;
      // width: 45%;
    }
    @media (max-width: $md3) {
      font-size: 12px;
      // margin: 0px 0px 0px -5px;
      // padding: 7px 10px;
      padding: 7px 7px;
      // width: 50%;
    }
    @media (max-width: $md4) {
      font-size: 12px;
      margin: 0px 0px 0px -2px;
      // padding: 7px 10px;
      padding: 3px 6px;
      // width: 60%;
    }
  }
}
</style> -->

<!-- <script setup>
import { onMounted, onUnmounted, reactive } from "vue";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";

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

const swiper = reactive({
  instance: null,
  settings: {
    modules: [Navigation],
    slidesPerView: "auto",
    spaceBetween: 24,
    centeredSlides: false,
    loop: false,
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
    },
  },
});

onMounted(() => {
  swiper.instance = new Swiper(".services-swiper", swiper.settings);
});

onUnmounted(() => {
  if (swiper.instance) {
    swiper.instance.destroy();
  }
});
</script>

<template>
  <section class="services-section">
    <div class="_container">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-text">{{ title }}</span>
          <span class="title-decoration"></span>
        </h2>
      </div>

      <div class="services-swiper-container">
        <div class="services-swiper swiper">
          <div class="swiper-wrapper">
            <div v-for="(item, index) in data" :key="index" class="swiper-slide" :style="{ 'background-image': item.urlImg }">
              <router-link :to="{ name: item.routePath }" class="service-card">
                <div class="card-overlay"></div>
                <div class="card-content">
                  <h3 class="service-title">{{ item.title }}</h3>
                  <div>от 2000 руб.</div>
                  <div class="service-prices">
                    <div>Подробнее</div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>

        <div class="services-navigation">
          <button class="services-nav-prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button class="services-nav-next">
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

.services-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f0f4f8 100%);
  position: relative;
  overflow: hidden;

  ._container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
}

.section-header {
  margin-bottom: 60px;
  text-align: center;
}

.section-title {
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
    background: linear-gradient(90deg, black, darken(black, 15%));
    border-radius: 3px;
    transition: width 0.3s ease;
  }

  &:hover .title-decoration {
    width: 120px;
  }
}

.services-swiper-container {
  position: relative;
  padding: 20px 0;
}

.services-swiper {
  overflow: visible;
  padding: 10px 0;
}

.swiper-slide {
  width: 380px;
  height: 280px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  background-size: cover;
  background-position: center;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  }
}

.service-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: white;
  position: relative;
  padding: 30px;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3));
  z-index: 1;
}

.card-content {
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.service-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  font-family: "Montserrat", sans-serif;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.service-prices {
  margin-top: auto;
}

.price-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.9);
  padding: 8px 12px;
  border-radius: 6px;
  max-width: max-content;

  &:last-child {
    margin-bottom: 0;
  }
}

.price-text {
  font-size: 16px;
  color: #1a202c;
  line-height: 1.5;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
}

.services-navigation {
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
  .services-section {
    padding: 80px 0;
  }

  .section-title {
    font-size: 42px;

    .title-decoration {
      height: 4px;
      bottom: -10px;
    }
  }

  .swiper-slide {
    width: 300px;
    height: 240px;
  }

  .services-navigation {
    display: none;
  }

  .service-card {
    padding: 20px;
  }

  .service-title {
    font-size: 20px;
    margin-bottom: 15px;
  }

  .price-text {
    font-size: 15px;
  }
}

@media (max-width: $md4) {
  .services-section {
    padding: 60px 0;
  }

  .section-title {
    font-size: 32px;

    .title-decoration {
      width: 60px;
      height: 3px;
      bottom: -8px;
    }

    &:hover .title-decoration {
      width: 80px;
    }
  }

  .swiper-slide {
    width: 280px;
    height: 220px;
  }

  .service-title {
    font-size: 18px;
  }

  .price-text {
    font-size: 14px;
  }
}
</style> -->

<!-- <script setup>
import { onMounted, onUnmounted, reactive } from "vue";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";

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

const swiper = reactive({
  instance: null,
  settings: {
    modules: [Navigation],
    slidesPerView: "auto",
    spaceBetween: 24,
    centeredSlides: false,
    loop: false,
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
    },
  },
});

onMounted(() => {
  swiper.instance = new Swiper(".services-swiper", swiper.settings);
});

onUnmounted(() => {
  if (swiper.instance) {
    swiper.instance.destroy();
  }
});
</script>

<template>
  <section class="services-section">
    <div class="_container">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-text">{{ title }}</span>
          <span class="title-decoration"></span>
        </h2>
      </div>

      <div class="services-swiper-container">
        <div class="services-swiper swiper">
          <div class="swiper-wrapper">
            <div v-for="(item, index) in data" :key="index" class="swiper-slide" :style="{ 'background-image': item.urlImg }">
              <router-link :to="{ name: item.routePath }" class="service-card">
                <div class="card-overlay"></div>
                <div class="card-content">
                  <h3 class="service-title">{{ item.title }}</h3>
                  <div>от 2000 руб.</div>
                  <div class="service-details">
                    <div class="details-button">Подробнее</div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>

        <div class="services-navigation">
          <button class="services-nav-prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button class="services-nav-next">
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

.services-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f0f4f8 100%);
  position: relative;
  overflow: hidden;

  ._container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
}

.section-header {
  margin-bottom: 60px;
  text-align: center;
}

.section-title {
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
    background: linear-gradient(90deg, black, darken(black, 15%));
    border-radius: 3px;
    transition: width 0.3s ease;
  }

  &:hover .title-decoration {
    width: 120px;
  }
}

.services-swiper-container {
  position: relative;
  padding: 20px 0;
}

.services-swiper {
  overflow: visible;
  padding: 10px 0;
}

.swiper-slide {
  width: 380px;
  height: 280px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  background-size: cover;
  background-position: center;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);

    .service-details {
      transform: translateY(0);
      opacity: 1;
    }
  }
}

.service-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: white;
  position: relative;
  padding: 30px;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3));
  z-index: 1;
}

.card-content {
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.service-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  font-family: "Montserrat", sans-serif;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.service-details {
  margin-top: auto;
  transform: translateY(30px);
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.details-button {
  display: inline-block;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.9);
  color: #1a202c;
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
}

.services-navigation {
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
  .services-section {
    padding: 80px 0;
  }

  .section-title {
    font-size: 42px;

    .title-decoration {
      height: 4px;
      bottom: -10px;
    }
  }

  .swiper-slide {
    width: 300px;
    height: 240px;
  }

  .services-navigation {
    display: none;
  }

  .service-card {
    padding: 20px;
  }

  .service-title {
    font-size: 20px;
    margin-bottom: 15px;
  }

  .details-button {
    font-size: 15px;
    padding: 8px 16px;
  }
}

@media (max-width: $md4) {
  .services-section {
    padding: 60px 0;
  }

  .section-title {
    font-size: 32px;

    .title-decoration {
      width: 60px;
      height: 3px;
      bottom: -8px;
    }

    &:hover .title-decoration {
      width: 80px;
    }
  }

  .swiper-slide {
    width: 280px;
    height: 220px;
  }

  .service-title {
    font-size: 18px;
  }

  .details-button {
    font-size: 14px;
    padding: 6px 12px;
  }
}
</style> -->

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
