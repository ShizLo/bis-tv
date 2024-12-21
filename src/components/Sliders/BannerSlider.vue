<script>
import swiper from "../../assets/js/swiper";
import "../../assets/styles/swiper-home.scss";

export default {
  props: {},
  computed: {},
  setup() {
    return {};
  },
  data: () => ({
    //
  }),
  mounted() {
    this.$nextTick(function () {
      swiper.init();
    });
  },
};
</script>
<template>
  <div class="swiper-container text-left">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img class="swiper__img" src="../../assets/images/swiper-slide-1.webp" alt="Установка забора" />
          <div class="swiper__content">
            <div class="content__price">
              <!-- <span>от 900 руб./м²</span> -->
              <span>от 90 000 руб</span>
            </div>
            <div class="content__title">Установка забора</div>
          </div>
          <div class="swiper-lazy-preloader"></div>
        </div>
        <div class="swiper-slide">
          <img class="swiper__img" src="../../assets/images/swiper-slide-2.webp" alt="Свайное поле" />
          <div class="swiper__content">
            <div class="content__price">
              <span>от 100 000 руб.</span>
            </div>
            <div class="content__title">Свайное поле</div>
          </div>
        </div>
        <div class="swiper-slide">
          <img class="swiper__img" src="../../assets/images/swiper-slide-3.webp" alt="Откатные ворота и калитка" />

          <div class="swiper__content">
            <div class="content__price">
              <span>от 65 000 руб</span>
            </div>
            <div class="content__title">Откатные ворота</div>
          </div>
        </div>
        <div class="swiper-slide">
          <img class="swiper__img" src="../../assets/images/swiper-slide-4.webp" alt="Парковка" />
          <!-- <div class="swiper-lazy-preloader"></div> -->
          <div class="swiper__content">
            <div class="content__price">
              <span>от 1 900 руб./м²</span>
            </div>
            <div class="content__title">Парковка</div>
          </div>
        </div>
        <div class="swiper-slide">
          <img class="swiper__img" src="../../assets/images/swiper-slide-5.webp" alt="Водоподготовка" />
          <!-- <div class="swiper-lazy-preloader"></div> -->
          <div class="swiper__content">
            <div class="content__price">
              <span>от 60 000 руб.</span>
            </div>
            <div class="content__title">Водоподготовка</div>
          </div>
        </div>
        <div class="swiper-slide">
          <img class="swiper__img" src="../../assets/images/swiper-slide-6.webp" alt="Септик под ключ" />
          <div class="swiper__content">
            <div class="content__price">
              <span>от 180 000 руб.</span>
            </div>
            <div class="content__title">Септик под ключ</div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../../assets/styles/app.scss" as c;

@media (max-width: c.$md3) {
  ._container {
    padding: 0;
  }
}

.swiper-container {
  width: 100%;
  height: 360px;
  border-radius: 8px;
  overflow: hidden;
  @media (max-width: c.$md3) {
    border-radius: 0;
  }
  @media (max-width: c.$md4) {
    height: 300px;
  }
}
.swiper {
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
    @media (max-width: c.$md3) {
      padding: 25px 10px 22px;
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
.swiper__content::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
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
}
.content__title {
  z-index: 10;
  font-weight: 600;
  font-size: 1.6rem;
  color: #fff;
  width: calc(100% - 68px);
}
/* Кнопки */
.swiper-button-prev {
  color: #fff;
}
.swiper-button-next {
  color: #fff;
}

/* Буллеты */
.swiper .swiper-pagination {
  bottom: 0;
}
.swiper .swiper-pagination-bullet {
  width: 30px;
  border-radius: 8px;
  height: 4px;
  background-color: #ea5b0c;
}
.swiper .swiper-pagination-bullet-active {
  position: relative;
  width: 60px;
  border-radius: 8px;
  height: 4px;
  /* opacity: 0.2; */
  z-index: 11;
  // background-color: #ea5b0c;
}
.swiper .swiper-pagination-bullet-active::after {
  content: "";
  position: absolute;
  z-index: 12;
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

.swiper .swiper-pagination-bullet-active::after {
  /* Включает анимацию булитов */
  width: 60px;
  background-color: red;
  transition: background-color 4s linear;
  transition-property: width, background-color;
}
</style>
