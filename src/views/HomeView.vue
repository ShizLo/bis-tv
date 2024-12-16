<template>
  <div class="banner-wrapper">
    <div class="_container">
      <!-- <div class="columns-2 py-8 flex"> -->
      <div class="banner">
        <div class="banner__block-text text-left">
          <h1 class="banner__text">
            Инженерные коммуникации и благоустройство участка
          </h1>
          <a href="#GlobalForm" v-scroll-to="{ 
            el: '#GlobalForm',
            easing: [.6, .80, .30, 1.9],
            duration: 2000 
            }">
          <button class="banner__button" >
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
        </a>
        </div>
        <BannerSlider />
      </div>
    </div>
  </div>
  <OurServices />
  <WorksSlider />
  <Partners />
  <AboutUs />
  <GlobalForm id="GlobalForm"/>
  <Footer />
</template>

<script>
import OurServices from "../components/OurServices.vue";
import BannerSlider from "../components/Sliders/BannerSlider.vue";
import WorksSlider from "../components/WorksSlider.vue";
import Partners from "../components/Partners.vue";
import AboutUs from "../components/AboutUs.vue";
import Footer from "../components/Footer.vue";
import GlobalForm from "../components/Form/GlobalForm.vue";

export default {
  name: "App",
  components: {
    OurServices,
    WorksSlider,
    BannerSlider,
    Partners,
    AboutUs,
    GlobalForm,
    Footer,
  },
  
  setup() {
    return {};
  },
  data: () => ({
    //
  }),
  methods: {
  },
};
</script>
<style lang="scss" scoped>
@use "../assets/styles/app.scss" as c;


.banner__button:hover {
  background: #102938;
  color: #f5f5f5;
  border-color: #d48a00;
}

// .banner__button > svg:hover {
//   fill: #f5f5f5;
// }
/* .swiper-pagination > .swiper-pagination-bullet-active {
  background-color: red !important;
} */
@media (max-width: c.$md3) {
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

.banner-wrapper {
  background-color: c.$color-background;
  @media (max-width: c.$md4) {
    background-color: #fff;
  }
}
.banner {
  display: flex;
  padding: 20px 0px 20px 0px;

  @media (max-width: c.$md2) {
    flex-wrap: wrap-reverse;
    padding: 0px 0px 0px 0px;
  }
  &__block-text {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 60px;

    @media (max-width: c.$md2) {
      padding: 20px 10px;
      gap: 15px;
    }
    @media (max-width: c.$md4) {
      padding-bottom: 10px;
    }
  }
  &__text {
    font-weight: 600;
    line-height: 120%;
    font-size: 2rem; //40
    color: #102938;
    @media (max-width: c.$md2) {
      font-size: 1.5rem;
    }
    @media (max-width: c.$md4) {
      text-align: center;
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
    border: 1px solid #d48a00;
    background: rgba(245, 245, 245, 0);
    color: #102938;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    @media (max-width: c.$md3) {
      align-self: flex-end;
    }
  }
}
</style>
