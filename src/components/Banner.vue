<script setup>
import Swiper from "swiper/bundle";

import { onMounted, onUnmounted, reactive } from "vue";

import { swiper_banner_setting } from "../assets/js/swiper";
import "../assets/styles/banner/banner.scss";

const props = defineProps({
  bannerText: {
    typeof: String,
  },
  bannerDescription: {
    typeof: String,
  },
  bannerPrice: {
    typeof: Array,
  },
});

const swiper = new Swiper(".swiper-banner", swiper_banner_setting);

onMounted(() => {
  swiper.init();
});
onUnmounted(() => {
  swiper.destroy();
});

function hoverMobile() {
  document.querySelectorAll(".banner__button").forEach((element) => {
    element.addEventListener("touchstart", () => element.classList.add("on-hover"));
    element.addEventListener("touchend", () => element.classList.remove("on-hover"));
  });
}
</script>

<template>
  <section class="banner">
    <div class="banner__container _container">
      <div class="banner__block-text text-left">
        <h1 class="banner__text">{{ bannerText }}</h1>
        <p class="banner__description">{{ bannerDescription }}</p>
        <a
          href="#GlobalForm"
          v-scroll-to="{
            el: '#GlobalForm',
            easing: [0.6, 0.8, 0.3, 1.9],
            duration: 2000,
          }"
        >
          <button class="banner__button" @click="hoverMobile()">
            Обсудить задачу
            <svg class="banner__button-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Frame 1864">
                <path
                  id="Vector"
                  d="M1.75 7.29163H12.25M12.25 7.29163L7 12.5416M12.25 7.29163L7 2.04163"
                  stroke="#102938"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </button>
        </a>
      </div>
      <div class="swiper-container text-left">
        <div class="swiper-banner">
          <div class="swiper-wrapper">
            <div v-for="item in bannerPrice" class="swiper-slide">
              <img class="swiper__img" :src="item.url" :alt="item.name" />
              <div class="swiper-banner__content">
                <div v-if="item.price.length > 0" class="content__price">
                  <span>{{ item.price }}</span>
                </div>
                <div class="content__title">{{ item.name }}</div>
              </div>
              <div class="swiper-lazy-preloader"></div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;

@media (max-width: $md3) {
  ._container {
    padding: 0;
  }
}

.swiper-container {
  width: 100%;
  height: 360px;
  border-radius: 8px;
  overflow: hidden;
  @media (max-width: $md2) {
    border-radius: 0;
    &::after {
      content: "";
      width: 100%;
      height: 2px;
      position: absolute;
      background-color: #ea5b0c;
    }
  }
  @media (max-width: $md4) {
    height: 300px;
  }
}
.swiper-banner {
  position: relative;
  max-width: 100%;
  height: 100%;
  margin: auto;
  margin: auto;
  &__content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 30px 30px 22px;
    @media (max-width: $md3) {
      padding: 25px 10px 22px;
    }
    @media (max-width: $md4) {
      padding: 25px 14px 18px;
    }
  }
}
.swiper-slide {
  position: relative;
}
.swiper__img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.swiper-banner__content::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  z-index: 2;
}
.content__price {
  font-size: 1rem;
  font-weight: 600;
  background: #fff;
  display: inline-block;
  border-radius: 32px;
  padding: 3px 10px;
  color: #102938;
  border: 0.5px solid #ea5b0c;
  @media (max-width: $md4) {
    font-size: 14px;
  }
}
.swiper-banner .content__title {
  z-index: 3;
  font-weight: 600;
  font-size: 1.6rem;
  color: #fff;
  width: calc(100% - 68px);
  line-height: normal;
  @media (max-width: $md4) {
    font-size: 18px;
  }
}
/* Кнопки */
.swiper-banner .swiper-button-prev {
  color: #fff;
  z-index: 2;
  @media (max-width: $md2) {
    display: none;
  }
}
.swiper-banner .swiper-button-next {
  color: #fff;
  z-index: 2;
  @media (max-width: $md2) {
    display: none;
  }
}
/* Буллеты */
.swiper-banner .swiper-pagination {
  bottom: 0;
  z-index: 2;
}
.swiper-banner .swiper-pagination-bullet {
  width: 30px;
  border-radius: 8px;
  height: 4px;
  background-color: #ea5b0c;
}
.swiper-banner .swiper-pagination-bullet-active {
  position: relative;
  width: 60px;
  border-radius: 8px;
  height: 4px;
  /* opacity: 0.2; */
  // z-index: 11;
  // background-color: #ea5b0c;
}
.swiper-banner .swiper-pagination-bullet-active::after {
  content: "";
  position: absolute;
  // z-index: 12;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  height: 100%;
  // width: 0;
  opacity: 1;

  // #ea5b0c

  transition: background-color 0.4s linear;

  animation: progress-css 1s ease-in forwards;
}

.swiper-banner .swiper-pagination-bullet-active::after {
  /* Включает анимацию булитов */
  width: 60px;
  background-color: red;
  transition: background-color 4s linear;
  transition-property: width, background-color;
}

//@use "../assets/styles/app.scss" as c;

@media (min-width: $md1) {
  .banner__button:hover {
    background: #102938;
    color: #f5f5f5;
    border-color: #102938;
  }
}
.on-hover:hover {
  background: #102938;
  transition: 10ms;
  color: #f5f5f5;
  border-color: #102938;
}

@media (max-width: $md3) {
  ._container {
    padding: 0;
  }
}
.banner-gallery__elems {
  position: absolute;
  z-index: 3;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  padding: 0 30px 30px;
}

.banner {
  background-color: $color-background;
  margin: 0px 0px 25px 0px;
  @media (max-width: $md4) {
    background-color: #fff;
  }
}
.banner {
  @media (min-width: $md2) {
    &::after {
      content: "";
      width: 100%;
      height: 2px;
      position: absolute;
      background-color: #ea5b0c;
    }
  }

  &__container {
    display: flex;
    // padding: 20px 0px 20px 0px;
    padding-top: 20px;
    padding-bottom: 20px;
    @media (max-width: $md2) {
      flex-wrap: wrap-reverse;
      padding: 0px 0px 0px 0px;
    }
  }

  &__block-text {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;

    @media (max-width: $md2) {
      padding: 20px 10px;
      gap: 15px;
    }
    @media (max-width: $md4) {
      padding-bottom: 10px;
      gap: 12px;
    }
  }
  &__text {
    font-weight: 600;
    line-height: 120%;
    font-size: 2rem; //40
    color: #102938;
    @media (max-width: $md2) {
      font-size: 1.5rem;
    }
    @media (max-width: $md4) {
      font-size: 26px;
      text-align: center;
    }
  }
  &__description {
    padding-right: 15px;
    @media (max-width: $md4) {
      font-size: 14px;
    }
  }
  &__button {
    font-weight: 500;
    display: flex;
    height: 48px;
    padding: 11px 14px;
    align-items: center;
    gap: 8px;
    border-radius: 4px;
    border: 1px solid #ea5b0c;
    box-shadow: 1px 1px 1px 0px rgba(34, 60, 80, 0.18);
    background: rgba(245, 245, 245, 0);
    color: #102938;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    @media (max-width: $md3) {
      align-self: flex-end;
    }
  }
}
</style>
