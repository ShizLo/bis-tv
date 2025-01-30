<script>
import Swiper from "swiper/bundle";
import { onUpdated } from "vue";

export default {
  components: {},
  props: {
    workImages: Array,
  },
  setup() {
    var swiper1 = new Swiper(".mySwipers", {
      spaceBetween: 10,
      slidesPerView: 2,
      freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      breakpoints: {
        320: {
          slidesPerView: 2,
          navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1',
          },
        },
        479.98: {
          slidesPerView: 4,
          navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1',
          },
        },
        991.98: {
          slidesPerView: 5,
          navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1',
          },
        },
      },
    });
    var swiper2 = new Swiper(".mySwipers2", {
      pagination: {
        el: ".swiper-pagination1",
        clickable: true,
        type: "fraction",
      },
      
      thumbs: {
        swiper: swiper1,
      },
    });
    onUpdated(() => {
      swiper1.init()
      swiper2.init()
    });
    return {
    };
  },
};
</script>
<template>
  <div class="mini-slider__backgroud" @click.self="$emit('someEvent')">
    <button class="form-feedback__close-btn" @click="$emit('someEvent')">
      <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.20868 14.5405L14.2902 1.45898M14.2902 14.5405L1.20875 1.45899" stroke="#f5f5f5" stroke-width="2"
          stroke-linecap="round"></path>
      </svg>
    </button>
    <div class="mini-slider__container">
      <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"class="swiper-container mySwipers2">
        <div class=" swiper-wrapper">
          <div class="swiper-slide" v-for="item in workImages" :key="item">
            <img class="resize" :src=item.url :alt="item.alt" />
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination1"></div>
        <div class="swiper-button-prev swiper-button-prev1"></div>
        <div class="swiper-button-next swiper-button-next1"></div>
      </div>
      <div class=" swiper-container mySwipers">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in workImages" :key="item">
            <img :src="item.url" :alt="item.alt" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;
.form-feedback__close-btn {
  position: absolute;
  right: 25px;
  top: 10px;
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  cursor: pointer;
  z-index: 10;
}

.form-feedback__close-btn svg {
  filter: drop-shadow(1px 0px 9px black);
}

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
    height: 90%;
    
  };
  @media (max-width: $md3) {
    width: 90%;
    height: 90%;
    .mySwipers{
    display:none;
  };
  .mySwipers2 {
  height: 95%;
  width: 100%;
};
.swiper-button-prev1, .swiper-button-next1{
  display: none;
}
  };

  @media (max-width: $md4) {
    width: 90%;
    height: 90%;
  };
}

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

.swiper-pagination1 {
  display: flex;
  font-size: 1rem;
  color: #f5f5f5;
  bottom: 2px;
  width: 30px;
  margin: 0px 50%;
}

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
