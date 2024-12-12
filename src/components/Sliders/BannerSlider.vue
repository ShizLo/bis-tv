<script>
import swiper from "../../assets/js/swiper";
import "../../assets/styles/swiper-home.css"
// import "/assets/styles/swiper-home.css";

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
                <img
                  class="swiper__img"
                  src="../../assets/images/IMG_3848.jpeg"
                  alt="Озеленение участка"
                />
                <div class="swiper__content">
                  <div class="content__price">
                    <!-- <span>от 900 руб./м²</span> -->
                    <span>от 150 000 руб</span>
                  </div>
                  <div class="content__title">Установка забора</div>
                </div>
              </div>
              <div class="swiper-slide">
                <img
                  class="swiper__img"
                  src="../../assets/images/vint.jpg"
                  alt="Септик под ключ"
                />
                <div class="swiper__content">
                  <div class="content__price">
                    <span>от 100 000 руб.</span>
                  </div>
                  <div class="content__title">Свайное поле</div>
                </div>
              </div>
              <div class="swiper-slide">
                <img
                  class="swiper__img"
                  src="../../assets/images/parkovka.jpg"
                  alt="Парковка из щебня"
                />
                <!-- <div class="swiper-lazy-preloader"></div> -->
                <div class="swiper__content">
                  <div class="content__price">
                    <span>от 1 900 руб./м²</span>
                  </div>
                  <div class="content__title">Парковка</div>
                </div>
              </div>
              <div class="swiper-slide">
                <img
                  class="swiper__img"
                  src="../../assets/images/vodopodgotovka.jpg"
                  alt="Парковка из щебня"
                />
                <!-- <div class="swiper-lazy-preloader"></div> -->
                <div class="swiper__content">
                  <div class="content__price">
                    <span>от 60 000 руб.</span>
                  </div>
                  <div class="content__title">Водоподготовка</div>
                </div>
              </div>
              <div class="swiper-slide">
                <img
                  class="swiper__img"
                  src="../../assets/images/E-1.jpg"
                  alt="Септик под ключ"
                />
                <div class="swiper__content">
                  <div class="content__price">
                    <span>~ 120 000 руб.</span>
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
</style>