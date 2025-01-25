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
      slidesPerView: 2,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,

      breakpoints: {
        320: {
          slidesPerView: 2,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
        479.98: {
          slidesPerView: 4,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
        991.98: {
          slidesPerView: 5,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
      },
    });
    var swiper2 = new Swiper(".mySwipers2", {
      // spaceBetween: 10,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
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
    <div class="mini-slider__container">
      <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
        class=" swiper-container mySwipers2">
        <div class=" swiper-wrapper">
          <div class="swiper-slide" v-for="item in workImages" :key="item">
            <img class="resize" :src=item.url :alt="item.alt" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <!-- <div class="swiper-button-prev"></div> -->
        <!-- <div class="swiper-button-next"></div> -->
      </div>
      <div thumbsSlider="" class=" swiper-container mySwipers">
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

.mini-slider__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
  overflow: hidden;
  width: 1000px;
  height: 95vh;
  margin: 0 auto;

  @media (max-width: $md2) {
    width: 90%;
    height: 80%;
  };

  @media (max-width: $md3) {
    width: 90%;
    height: 80%;
  };

  @media (max-width: $md4) {
    width: 90%;
    height: 80%;
  };
}

// .resize {
//   max-width: 100%; /* Максимальная ширина – 100% */
//   max-height: 500px; /* Максимальная высота – 500px */
//   height: auto;
//   object-fit: contain; /* Высота автоматическая */
// }
// .swiper-wrapper {
//   justify-content: space-around;
// }


.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: rgba(22, 22, 22, 0);

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


////////////////////////////////

.mini-slider__backgroud {
  width: 100%;
  height: 100%;
  z-index: 20;
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
