<script>
import Swiper from "swiper/bundle";

import { onUpdated } from "vue";

export default {
  components: {
  },
  props: {
    workImages: Array,
  },
  setup() {
    var swiper = new Swiper(".mySwipers", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      breakpoints: {
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        },
    });
    var swiper2 = new Swiper(".mySwipers2", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      
      thumbs: {
        swiper: swiper,
      },
    });
    onUpdated(() => {
      swiper.init()
      swiper2.init()
    });


    return {
    };
  },

};
</script>
<template>
  <div class="mini-slider__backgroud" @click.self="$emit('someEvent')">
    <div class="_container mini-slide__container">
      <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper-container mySwipers2">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in workImages" :key="item">
            <img :src=item.url :alt="item.alt" />
          </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
      <div thumbsSlider="" class="swiper-container mySwipers">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in workImages" :key="item">
            <img :src=item.url :alt="item.alt" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;

.mini-slide__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
  overflow: hidden;

}
.swiper-wrapper {
  justify-content: space-around;
}
.swiper-container {
  width: 50%;
  height: 50%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-container {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwipers2 {
  height: 80%;
  width: 100%;
}

.mySwipers {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwipers .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.6;
}

.mySwipers .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

////////////////////////////////

.mini-slider__backgroud {
  width: 100%;
  height: 100%;
  //position: absolute;
  z-index: 3;
  background-color: rgba(22, 22, 22, 0.925);
  flex-direction: column;
  justify-content: center;
  height: 100%;
  left: 0;
  opacity: 1;
  position: fixed;
  top: 0;
}
</style>
