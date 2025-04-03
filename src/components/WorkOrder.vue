<!-- <script setup>
import { onMounted, onUnmounted, reactive } from "vue";
import Swiper from "swiper/bundle";
import { swiper_order_setting } from "../assets/js/swiper";
const props = defineProps({
  data: {
    typeof: Array,
  },
  title: {
    typeof: String,
  },
});
const swiper_order = new Swiper(".swiper-order", swiper_order_setting);

onMounted(() => {
  swiper_order.init();
});
onUnmounted(() => {
  swiper_order.destroy();
});
</script>

<template>
  <section class="order">
    <div class="order__container _container">
      <h2 class="order__title">{{ title }}</h2>
      <div class="swiper-container">
        <div class="swiper-order">
          <div class="swiper-wrapper">
            <div v-for="item in data" class="swiper-slide swiper-slide__order">
              <div class="swiper-order__content">
                <div class="order__item item">
                  <div class="item__header">
                    <div class="item__icon">
                      <img width="30" height="30" :src="item.urlImg" alt="" />
                    </div>
                    <div class="item__title">{{ item.title }}</div>
                  </div>
                  <div class="item__body">
                    <div class="item__text">
                      {{ item.text }}
                    </div>
                  </div>
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

.swiper-order > .swiper-button-prev {
  left: -50px;
}
.swiper-order > .swiper-button-next {
  right: -50px;
}

.swiper-order > .swiper-button-prev::after {
  padding: 18px;
  font-size: 32px;
  color: #9d9ea0;
}
.swiper-order > .swiper-button-next::after {
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
  // align-items: stretch;
  // overflow: visible;
  // :first-child {
  //   margin: 0px 1px 0px 0px;
  // }
}
// .swiper-wrapper > .swiper-slide__order:last-child {
//   margin-right: 0px;
// }

.swiper-order {
  overflow: hidden;
  padding-bottom: 3px;
  @media (max-width: $md4) {
    overflow: visible;
    // overflow-x: visible;
    // overflow-y: hidden;
    // overflow: visible;
  }
}

// .swiper-slide {
//   box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.7);
//   -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.7);
//   -moz-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.7);
// }
// @for $i from 1 to 10 {
//   .swiper-slide:nth-child(#{$i}):hover {
//     z-index: $i;
//   }
// }

.swiper-slide__order {
  background-color: $background;
  border-radius: 8px;
  height: auto;
  // padding: 20px 15px;
  padding: 15px 15px 10px 17px;

  // margin: 2px 0px; // -webkit-box-shadow: 1px 1px 3px 0px rgba(34, 60, 80, 0.18);
  // -moz-box-shadow: 1px 1px 3px 0px rgba(34, 60, 80, 0.18);
  box-shadow: 1px 1px 3px 0px rgba(34, 60, 80, 0.2);
  @media (max-width: $md4) {
    padding: 12px 12px;
  }
}

.order {
  overflow: hidden;
  // overflow: visible;
  margin: 0px 0px 25px 0px;
  &__title {
    margin-bottom: 16px;
    font-size: 26px;
    font-weight: 600;
    background: #fff;
    display: inline-block;
    border-radius: 32px;
    padding: 0px 10px;
    color: $color-title;
  }
  &__container {
    // overflow: hidden;
  }
}
.item {
  &__header {
    display: flex;
    align-items: center;
    margin: 0px 0px 10px 0px;
    @media (max-width: $md4) {
      margin: 0px 0px 7px 0px;
    }
  }
  &__icon {
    padding: 8px 8px;
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
      height: 18px;
      width: 18px;
      @media (max-width: $md4) {
        height: 22px;
        width: 22px;
      }
    }
  }
  &__title {
    font-size: 18px;
    font-weight: 500;
    line-height: normal;
    @media (max-width: $md4) {
      font-size: 20px;
    }
  }
  &__text {
    color: $color-text;
    line-height: 1.18;
    font-weight: 400;
    font-size: 14px;
    @media (max-width: $md4) {
      font-size: 13px;
    }
  }
}
</style> -->

<!-- <script setup>
import { onMounted, onUnmounted, ref } from "vue";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { Autoplay, Navigation } from "swiper/modules";

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

const swiper = ref(null);

onMounted(() => {
  swiper.value = new Swiper(".order-swiper", {
    modules: [Autoplay, Navigation],
    slidesPerView: "auto",
    spaceBetween: 32,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".order-nav-next",
      prevEl: ".order-nav-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 1.2,
        centeredSlides: true,
      },
      1024: {
        slidesPerView: 1.5,
      },
      1200: {
        slidesPerView: 2,
      },
    },
  });
});

onUnmounted(() => {
  if (swiper.value) swiper.value.destroy();
});
</script>

<template>
  <section class="order-showcase">
    <div class="container">
      <div class="showcase-header">
        <h2 class="showcase-title">
          <span class="title-gradient">{{ title }}</span>
          <span class="title-underline"></span>
        </h2>
      </div>

      <div class="order-swiper-container">
        <div class="order-swiper swiper">
          <div class="swiper-wrapper">
            <div v-for="(item, index) in data" :key="index" class="swiper-slide">
              <div class="service-card">
                <div class="card-badge">
                  <span>0{{ index + 1 }}</span>
                </div>
                <div class="card-content">
                  <div class="service-icon">
                    <img :src="item.urlImg" :alt="item.title" width="48" height="48" loading="lazy" />
                  </div>
                  <h3 class="service-title">{{ item.title }}</h3>
                  <p class="service-description">{{ item.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="order-navigation">
          <button class="order-nav-prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button class="order-nav-next">
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
.order-showcase {
  padding: 120px 0;
  background: linear-gradient(135deg, #f9fafc 0%, #f0f4f8 100%);
  position: relative;
  overflow: hidden;

  .container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 40px;
  }
}

.showcase-header {
  text-align: center;
  margin-bottom: 60px;
}

.showcase-title {
  font-size: 52px;
  font-weight: 800;
  margin: 0;
  position: relative;
  display: inline-block;
  font-family: "Montserrat", sans-serif;

  .title-gradient {
    background: linear-gradient(90deg, #2b5876 0%, #4e4376 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    position: relative;
    z-index: 2;
  }

  .title-underline {
    position: absolute;
    bottom: 8px;
    left: 0;
    width: 100%;
    height: 12px;
    background: linear-gradient(90deg, rgba(74, 144, 226, 0.3) 0%, rgba(74, 144, 226, 0.1) 100%);
    z-index: 1;
    border-radius: 6px;
  }
}

.order-swiper-container {
  position: relative;
  padding: 0 60px;
}

.order-swiper {
  overflow: visible;
}

.swiper-slide {
  width: 560px;
  height: auto;
  transition: all 0.4s ease;

  &.swiper-slide-active {
    transform: scale(1.05);
    z-index: 2;
  }
}

.service-card {
  background: white;
  border-radius: 24px;
  padding: 40px;
  height: 100%;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.12);
  }
}

.card-badge {
  position: absolute;
  top: 24px;
  right: 24px;
  font-size: 14px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.05);
  z-index: 1;
}

.card-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.service-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.2);

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }
}

.service-title {
  font-size: 24px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 16px 0;
  font-family: "Montserrat", sans-serif;
}

.service-description {
  color: #4a5568;
  line-height: 1.6;
  font-size: 16px;
  margin: 0 0 32px 0;
  flex-grow: 1;
}

.service-cta {
  .cta-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);

    svg {
      margin-left: 8px;
      transition: transform 0.3s ease;
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);

      svg {
        transform: translateX(4px);
      }
    }
  }
}

.order-navigation {
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
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
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

@media (max-width: 1024px) {
  .order-showcase {
    padding: 60px 0;

    .container {
      padding: 0 32px;
    }
  }

  .showcase-title {
    font-size: 42px;
  }

  .order-swiper-container {
    padding: 0 40px;
  }

  .swiper-slide {
    width: 480px;
  }

  .service-card {
    padding: 32px;
  }
}

@media (max-width: 768px) {
  .order-showcase {
    padding: 48px 0;

    .container {
      padding: 0 24px;
    }
  }

  .showcase-header {
    margin-bottom: 40px;
  }

  .showcase-title {
    font-size: 36px;

    .title-underline {
      height: 8px;
      bottom: 6px;
    }
  }

  .order-swiper-container {
    padding: 0;
  }

  .order-navigation {
    display: none;
  }

  .swiper-slide {
    width: 320px;

    &.swiper-slide-active {
      transform: none;
    }
  }

  .service-card {
    padding: 24px;
  }

  .service-icon {
    width: 64px;
    height: 64px;
    margin-bottom: 24px;

    img {
      width: 32px;
      height: 32px;
    }
  }

  .service-title {
    font-size: 20px;
    margin-bottom: 12px;
  }

  .service-description {
    font-size: 15px;
    margin-bottom: 24px;
  }

  .service-cta .cta-button {
    padding: 10px 20px;
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .showcase-title {
    font-size: 32px;
  }

  .swiper-slide {
    width: 280px;
  }
}
</style> -->

<!-- <script setup>
import { onMounted, onUnmounted, ref } from "vue";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { Autoplay, Navigation } from "swiper/modules";

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

const swiper = ref(null);

onMounted(() => {
  swiper.value = new Swiper(".order-swiper", {
    modules: [Autoplay, Navigation],
    slidesPerView: "auto",
    spaceBetween: 32,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".order-nav-next",
      prevEl: ".order-nav-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 1.2,
        centeredSlides: true,
      },
      1024: {
        slidesPerView: 1.5,
      },
      1200: {
        slidesPerView: 2,
      },
    },
  });
});

onUnmounted(() => {
  if (swiper.value) swiper.value.destroy();
});
</script>

<template>
  <section class="order-showcase">
    <div class="_container">
      <div class="showcase-header">
        <h2 class="showcase-title">
          <span class="title-gradient">{{ title }}</span>
          <span class="title-decoration"></span>
        </h2>
      </div>

      <div class="order-swiper-container">
        <div class="order-swiper swiper">
          <div class="swiper-wrapper">
            <div v-for="(item, index) in data" :key="index" class="swiper-slide">
              <div class="service-card">
                <div class="card-badge">
                  <span>0{{ index + 1 }}</span>
                </div>
                <div class="card-content">
                  <div class="service-icon">
                    <img :src="item.urlImg" :alt="item.title" width="48" height="48" loading="lazy" />
                  </div>
                  <h3 class="service-title">{{ item.title }}</h3>
                  <p class="service-description">{{ item.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="order-navigation">
          <button class="order-nav-prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button class="order-nav-next">
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

.order-showcase {
  padding: 100px 0;
  background-color: #f8fafc;
  position: relative;
  overflow: hidden;

  ._container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
}

.showcase-header {
  text-align: center;
  margin-bottom: 60px;
}

.showcase-title {
  font-size: 48px;
  font-weight: 800;
  margin: 0 0 15px 0;
  position: relative;
  display: inline-block;
  font-family: "Montserrat", sans-serif;

  .title-gradient {
    background: linear-gradient(90deg, #2c3e50, #1a1a1a);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    position: relative;
    z-index: 2;
    letter-spacing: -0.03em;
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

  @media (max-width: $md3) {
    font-size: 42px;

    .title-decoration {
      height: 4px;
      bottom: -10px;
    }
  }

  @media (max-width: $md4) {
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
}

.order-swiper-container {
  position: relative;
  padding: 40px 0;
}

.order-swiper {
  overflow: visible;
  padding: 20px 0;
}

.swiper-slide {
  width: 560px;
  height: auto;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);

  &.swiper-slide-active {
    transform: scale(1.05);
    z-index: 2;
  }

  @media (max-width: $md3) {
    width: 320px;

    &.swiper-slide-active {
      transform: none;
    }
  }
}

.service-card {
  background: white;
  border-radius: 16px;
  padding: 40px;
  height: 100%;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  border: 1px solid rgba(0, 0, 0, 0.03);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: $md3) {
    padding: 24px;
  }
}

.card-badge {
  position: absolute;
  top: 24px;
  right: 24px;
  font-size: 14px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.05);
  z-index: 1;
}

.card-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.service-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.2);

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }

  @media (max-width: $md3) {
    width: 64px;
    height: 64px;
    margin-bottom: 24px;

    img {
      width: 32px;
      height: 32px;
    }
  }
}

.service-title {
  font-size: 24px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 16px 0;
  font-family: "Montserrat", sans-serif;

  @media (max-width: $md3) {
    font-size: 20px;
    margin-bottom: 12px;
  }
}

.service-description {
  color: $color-text;
  line-height: 1.6;
  font-size: 16px;
  margin: 0 0 32px 0;
  flex-grow: 1;
  font-family: "Open Sans", sans-serif;

  @media (max-width: $md3) {
    font-size: 15px;
    margin-bottom: 24px;
  }
}

.order-navigation {
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

  @media (max-width: $md3) {
    display: none;
  }
}

@media (max-width: $md3) {
  .order-showcase {
    padding: 80px 0;
  }
}

@media (max-width: $md4) {
  .order-showcase {
    padding: 60px 0;
  }
}
</style> -->

<!-- <script setup>
import { onMounted, onUnmounted, ref } from "vue";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { Autoplay, Navigation } from "swiper/modules";

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

const swiper = ref(null);

onMounted(() => {
  swiper.value = new Swiper(".order-swiper", {
    modules: [Autoplay, Navigation],
    slidesPerView: "auto",
    spaceBetween: 24,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".order-nav-next",
      prevEl: ".order-nav-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 1.2,
        centeredSlides: true,
      },
      1024: {
        slidesPerView: 1.5,
      },
      1200: {
        slidesPerView: 2,
      },
    },
  });
});

onUnmounted(() => {
  if (swiper.value) swiper.value.destroy();
});
</script>

<template>
  <section class="order-showcase">
    <div class="_container">
      <div class="showcase-header">
        <h2 class="showcase-title">
          <span class="title-gradient">{{ title }}</span>
          <span class="title-decoration"></span>
        </h2>
      </div>

      <div class="order-swiper-container">
        <div class="order-swiper swiper">
          <div class="swiper-wrapper">
            <div v-for="(item, index) in data" :key="index" class="swiper-slide">
              <div class="service-card">
                <div class="card-badge">
                  <span>0{{ index + 1 }}</span>
                </div>
                <div class="card-content">
                  <div class="service-header">
                    <div class="service-icon">
                      <img :src="item.urlImg" :alt="item.title" width="36" height="36" loading="lazy" />
                    </div>
                    <h3 class="service-title">{{ item.title }}</h3>
                  </div>
                  <p class="service-description">{{ item.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="order-navigation">
          <button class="order-nav-prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button class="order-nav-next">
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

.order-showcase {
  padding: 0px 0;
  background-color: #f8fafc;
  position: relative;
  overflow: hidden;

  ._container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
}

.showcase-header {
  text-align: center;
  // margin-bottom: 40px;
}

.showcase-title {
  font-size: 42px;
  font-weight: 800;
  margin: 0 0 15px 0;
  position: relative;
  display: inline-block;
  font-family: "Montserrat", sans-serif;

  .title-gradient {
    background: linear-gradient(90deg, #2c3e50, #1a1a1a);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    position: relative;
    z-index: 2;
    letter-spacing: -0.03em;
  }

  .title-decoration {
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 4px;
    background: linear-gradient(90deg, black, darken(black, 15%));
    border-radius: 3px;
    transition: width 0.3s ease;
  }

  &:hover .title-decoration {
    width: 100px;
  }

  @media (max-width: $md3) {
    font-size: 36px;

    .title-decoration {
      height: 3px;
      bottom: -8px;
    }
  }

  @media (max-width: $md4) {
    font-size: 28px;

    .title-decoration {
      width: 50px;
      height: 2px;
      bottom: -6px;
    }

    &:hover .title-decoration {
      width: 70px;
    }
  }
}

.order-swiper-container {
  position: relative;
  padding: 30px 0;
}

.order-swiper {
  overflow: visible;
  padding: 15px 0;
}

.swiper-slide {
  width: 480px;
  height: auto;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);

  &.swiper-slide-active {
    transform: scale(1.05);
    z-index: 2;
  }

  @media (max-width: $md3) {
    width: 300px;

    &.swiper-slide-active {
      transform: none;
    }
  }
}

.service-card {
  background: white;
  border-radius: 14px;
  padding: 30px;
  height: 100%;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  border: 1px solid rgba(0, 0, 0, 0.03);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: $md3) {
    padding: 20px;
  }
}

.card-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 13px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.05);
  z-index: 1;
}

.card-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.service-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.service-icon {
  width: 60px;
  height: 60px;
  min-width: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.2);

  img {
    width: 30px;
    height: 30px;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }

  @media (max-width: $md3) {
    width: 50px;
    height: 50px;
    min-width: 50px;

    img {
      width: 25px;
      height: 25px;
    }
  }
}

.service-title {
  font-size: 20px;
  font-weight: 700;
  color: #1a202c;
  margin: 0;
  font-family: "Montserrat", sans-serif;

  @media (max-width: $md3) {
    font-size: 18px;
  }
}

.service-description {
  color: $color-text;
  line-height: 1.6;
  font-size: 15px;
  margin: 0;
  font-family: "Open Sans", sans-serif;

  @media (max-width: $md3) {
    font-size: 14px;
  }
}

.order-navigation {
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
    width: 48px;
    height: 48px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
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

    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: $md3) {
    display: none;
  }
}

@media (max-width: $md3) {
  .order-showcase {
    padding: 60px 0;
  }
}

@media (max-width: $md4) {
  .order-showcase {
    padding: 10px 0;
  }
}
</style> -->

<!-- <script setup>
import { onMounted, onUnmounted, reactive } from "vue";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";

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

const swiper_order = reactive({
  instance: null,
  settings: {
    modules: [Navigation],
    slidesPerView: "auto",
    spaceBetween: 24,
    centeredSlides: false,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1.02,
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

          <div class="swiper-button-prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div class="swiper-button-next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;
@import "animate.css";

.order-section {
  padding: 80px 0;
  position: relative;
  overflow: hidden;

  ._container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
}

.section-header {
  margin-bottom: 40px;
}

.section-title {
  font-size: 48px;
  font-weight: 800;
  margin: 0 0 15px 0;
  text-align: center;
  position: relative;
  // display: inline-block;
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

.swiper-container {
  position: relative;
  padding: 20px 0;
}

.swiper-order {
  overflow: visible;
  padding: 10px 0;
}

.swiper-slide {
  width: 360px;
  height: auto;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.order-card {
  background: white;
  border-radius: 16px;
  padding: 30px;
  height: 100%;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  border: 1px solid rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
  }
}

.card-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
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

  img {
    width: 30px;
    height: 30px;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }
}

.card-title {
  font-size: 20px;
  font-weight: 700;
  color: #1a202c;
  margin: 0;
  font-family: "Montserrat", sans-serif;
}

.card-text {
  color: $color-text;
  line-height: 1.6;
  font-size: 16px;
  margin: 0;
  font-family: "Open Sans", sans-serif;
}

.swiper-button-prev,
.swiper-button-next {
  width: 56px;
  height: 56px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  color: #4a5568;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  &:hover {
    background: #667eea;
    color: white;
    transform: translateY(-50%) scale(1.1);
  }

  &::after {
    display: none;
  }
}

.swiper-button-prev {
  left: -28px;
}

.swiper-button-next {
  right: -28px;
}

@media (max-width: $md3) {
  .order-section {
    padding: 60px 0;
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

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
}

@media (max-width: $md4) {
  .order-section {
    padding: 50px 0;
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
</style> -->

<!-- <script setup>
import { onMounted, onUnmounted, reactive } from "vue";
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

const swiper_order = reactive({
  instance: null,
  settings: {
    modules: [Navigation, Autoplay],
    slidesPerView: "auto",
    spaceBetween: 24,
    centeredSlides: false,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
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
                <div class="card-hover">
                  <span class="hover-text">Подробнее</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-button-prev swiper-nav-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div class="swiper-button-next swiper-nav-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;

.order-section {
  padding: 100px 0;
  background: linear-gradient(to bottom, #f8fafc 0%, #f0f4f8 100%);
  position: relative;
  overflow: hidden;

  ._container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
  }
}

.section-header {
  margin-bottom: 60px;
  text-align: center;
}

.section-title {
  font-size: 42px;
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
    background: linear-gradient(90deg, #667eea, #764ba2);
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
  overflow: visible;
  padding: 15px 0;
}

.swiper-slide {
  width: 320px;
  height: auto;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.order-card {
  background: white;
  border-radius: 16px;
  padding: 30px;
  height: 100%;
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

    .card-hover {
      opacity: 1;
      transform: translateY(0);
    }
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

.card-hover {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  z-index: 2;
}

.hover-text {
  font-size: 16px;
  font-weight: 600;
  color: #667eea;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.swiper-nav-button {
  width: 56px;
  height: 56px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  color: #4a5568;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  &:hover {
    background: #667eea;
    color: white;
    transform: translateY(-50%) scale(1.1);
  }

  svg {
    width: 24px;
    height: 24px;
  }
}

.swiper-button-prev {
  left: -28px;
}

.swiper-button-next {
  right: -28px;
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

  .swiper-nav-button {
    display: none;
  }
}

@media (max-width: $md4) {
  .order-section {
    padding: 60px 0;
  }

  .section-title {
    font-size: 28px;

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

  .hover-text {
    font-size: 14px;
  }
}
</style> -->

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
