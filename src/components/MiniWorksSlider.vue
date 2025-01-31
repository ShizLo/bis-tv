<script>
import Swiper from "swiper/bundle";
import { onUpdated, onBeforeUpdate } from "vue";

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
      loop: true,
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
        renderFraction: function (currentClass, totalClass) {
      return '<span class="">фото </span>'+'<span class="' + currentClass + '"></span>' +
              ' из ' +
              '<span class="' + totalClass + '"></span>';
  }
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
      <svg xmlns="http://www.w3.org/2000/svg" stroke="#f5f5f5" viewBox="0 0 50 50" width="40px" height="40px">
        <path fill="#f5f5f5" d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"/></svg>
    </button>
    <div class="mini-slider__container">
      <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"class="swiper-container mySwipers2">
        <div class=" swiper-wrapper">
          <div class="swiper-slide" v-for="item in workImages" :key="item">
            <div class="test"></div>
            <p class="swiper-slide__text">{{ item.alt }}</p>
            <img class="resize" :src=item.url :alt="item.alt" />
            <div class="swiper-lazy-preloader"></div>
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
.test {
  width: 100%;
    position: absolute;
    height: 20%;
    top: 0%;
    background: linear-gradient(to bottom, rgb(0 0 0 / 83%), rgb(0 0 0 / 18%));
}
.form-feedback__close-btn {
  position: absolute;
  right: 50px;
  top: 10px;
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  cursor: pointer;
  z-index: 10;
}

.swiper-slide__text {
  position: absolute;
  top: 10%;
  color: #f5f5f5;
  font-size: 1.5rem;
}

.mini-slider__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
  overflow: hidden;
  width: 700px;
  height: 95vh;
  margin: 0 auto;

  @media (max-width: $md2) {
    width: 60%;
    height: 90%;
  };

  @media (max-width: $md3) {
    width: 60%;
    height: 90%;
    .mySwipers {
      display: none;
    }    ;

    .mySwipers2 {
      height: 95%;
      width: 100%;
    }

    ;

    .swiper-button-prev1,
    .swiper-button-next1 {
      display: none;
    }

    ;

    .mySwipers2 {
      position: absolute;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
    }
  }

  ;

  @media (max-width: $md4) {
    width: 60%;
    height: 90%;
  }

  ;
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
  position: absolute;
  color: #f5f5f5;
  font-size: 1.5rem;
  height: 25px;
  font-size: 1.5rem;
  color: #f5f5f5;
  top: 7%;
  left: 50%;
  transform: translate(-50%, -50%);
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
