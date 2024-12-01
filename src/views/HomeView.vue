<template>
  <div class="banner-wrapper">
    <div class="container">
      <div class="columns-2 py-8 flex">
        <div class="banner__block-text text-left">
          <h1 class="banner__text">
            Инженерные коммуникации и благоустройство участка
          </h1>
          <button class="banner__button">
            Обсудить задачу
            <svg
              class="banner__button-icon"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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
        </div>
        <div class="swiper-container">
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img
                  class="swiper__img"
                  src="../assets/images/rulon-kartochka-3-max-700.webp"
                  alt="Озеленение участка"
                />
                <div class="swiper__content">
                  <div class="content__price">
                    <span>от 900 руб./м²</span>
                  </div>
                  <div class="content__title">Озеленение участка</div>
                </div>
              </div>
              <div class="swiper-slide">
                <img
                  class="swiper__img"
                  src="../assets/images/parkovka-iz-schebnya-max-700.webp"
                  alt="Парковка из щебня"
                />
                <!-- <div class="swiper-lazy-preloader"></div> -->
                <div class="swiper__content">
                  <div class="content__price">
                    <span>от 1 900 руб./м²</span>
                  </div>
                  <div class="content__title">Парковка из щебня</div>
                </div>
              </div>
              <div class="swiper-slide">
                <img
                  class="swiper__img"
                  src="../assets/images/septik-kartochka-1-max-700.webp"
                  alt="Септик под ключ"
                />
                <div class="swiper__content">
                  <div class="content__price">
                    <span>~ 100 000 руб.</span>
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
      </div>
    </div>
  </div>
</template>

<style scoped>
.test {
  background-color: red !important;
  opacity: 1;
  width: 40px;
}
/* .swiper-pagination > .swiper-pagination-bullet-active {
  background-color: red !important;
} */
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

.swiper-container {
  display: flex;
  justify-content: end;
}
.swiper {
  width: 540px;
  height: 360px;
  margin: 0;
  border-radius: 8px;
}
.swiper-slide {
  position: relative;
}
.swiper__img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.swiper__content {
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
}
.content__price {
  font-size: 1rem;
  font-weight: 600;
  background: #fff;
  display: inline-block;
  border-radius: 32px;
  padding: 3px 10px;
  color: #102938;
}
.content__title {
  z-index: 10;
  font-weight: 600;
  font-size: 1.6rem;
  color: #fff;
  width: calc(100% - 68px);
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
.banner-wrapper {
  background-color: #f5f5f5;
}
.banner__block-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 60px;
}
.banner__text {
  font-weight: 600;
  line-height: 120%;
  font-size: 40px;
  color: #102938;
}
.banner__button {
  font-weight: 500;
  display: flex;
  height: 48px;
  padding: 11px 14px;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  border: 1px solid #102938;
  background: rgba(245, 245, 245, 0);
  color: #102938;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}
</style>
<script>
import swiper from "../assets/js/swiper";
import "../assets/styles/swiper-home.css";

export default {
  components: {},
  name: "App",
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
