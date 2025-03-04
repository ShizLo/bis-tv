<script setup>
import { onMounted, onUnmounted, reactive } from "vue";
import Swiper from "swiper/bundle";
import { swiper_septik_setting } from "../../assets/js/swiper";
import { ROUTES_PATHS } from "../../constants";

const props = defineProps({
  title: {
    typeof: String,
  },
});
const swiper_septik = new Swiper(".swiper-septik-services", swiper_septik_setting);

import work_1 from "../../assets/images/homePage/work-bis-service-1.webp";

const data = [
  {
    urlImg: work_1,
    title: "Замена компрессора",
    price: "от 6 500 руб.",
  },
  {
    urlImg: "",
    title: "Электромагнитный клапан",
    price: "от 7 500 руб.",
  },
  {
    urlImg: "",
    title: "Замена поплавка",
    price: "от 7 000 руб.",
  },
  {
    urlImg: "",
    title: "Замена аэролифта",
    price: "от 7 500 руб.",
  },
  {
    urlImg: "",
    title: "Аварийная сигнализация",
    price: "от 9 500 руб.",
  },
  {
    urlImg: "",
    title: "Ремонт крышки септика",
    price: "от 10 000 руб.",
  },
  {
    urlImg: "",
    title: "Замена аэратора",
    price: "от 11 000 руб.",
  },
  {
    urlImg: "",
    title: "Наращивание горловины",
    price: "от 11 000 руб.",
  },
  {
    urlImg: "",
    title: "Замена аварийной лампы",
    price: "от 6 500 руб.",
  },
  {
    urlImg: "",
    title: "Замена блока управления",
    price: "от 6 500 руб.",
  },
  {
    urlImg: "",
    title: "Замена дренажного насоса",
    price: "от 6 500 руб.",
  },
  {
    urlImg: "",
    title: "Замена волосоулавливателя",
    price: "от 6 500 руб.",
  },
];

onMounted(() => {
  swiper_septik.init();
});
onUnmounted(() => {
  swiper_septik.destroy();
});
</script>

<template>
  <section class="global-services">
    <div class="global-services__container _container">
      <h2 v-if="title" class="global-services__title">{{ title }}</h2>
      <div class="swiper-container">
        <div class="swiper-septik-services">
          <div class="swiper-wrapper">
            <div v-for="item in data" class="swiper-slide swiper-slide__global-services">
              <router-link
                :style="{ 'background-image': 'url(' + item.urlImg + ')' }"
                class="services__link"
                :to="{ name: item.routePath }"
              >
                <div class="item__title">{{ item.title }}</div>
                <div class="item__foot">
                  <span>{{ item.price }}</span>
                </div>
                <!-- <div class="item__bot">
                  <span class="item__next">Подробнее</span>
                  <img src="/icons/angle-right.svg" alt="" />
                </div> -->
              </router-link>
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
@use "../../assets/styles/main.scss" as *;

.swiper-septik-services > .swiper-button-prev {
  left: -50px;
}
.swiper-septik-services > .swiper-button-next {
  right: -50px;
}

.swiper-septik-services > .swiper-button-prev::after {
  padding: 18px;
  font-size: 32px;
  color: #9d9ea0;
}
.swiper-septik-services > .swiper-button-next::after {
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
  align-items: stretch;
  // overflow: visible;
  // :first-child {
  //   margin: 0px 1px 0px 0px;
  // }
}
.swiper-septik-services {
  overflow: hidden;
  padding-bottom: 3px;
  @media (max-width: $md4) {
    // overflow-x: visible;
    // overflow-y: visible;
    overflow: visible;
  }
}

.swiper-slide__global-services {
  background-color: $background;
  border-radius: 8px;
  height: auto;
  padding: 15px 15px 10px 17px;
  box-shadow: 1px 1px 3px 0px rgba(34, 60, 80, 0.2);
  @media (max-width: $md4) {
    padding: 10px 10px 0px 12px;
  }
}

.services {
  &__link {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 130px;
    background-position: 95% 100%;
    background-repeat: no-repeat;
    background-size: 100% auto;
    line-height: 1;
    @media (max-width: $md4) {
      height: 95px;
      background-size: contain;
    }
  }
}

.global-services {
  overflow: hidden;
  margin: 0px 0px 25px 0px;
  &__title {
    // margin-top: 10px;
    margin-bottom: 10px;
    font-size: 26px;
    font-weight: 600;
    background: #fff;
    display: inline-block;
    border-radius: 32px;
    padding: 3px 10px;
    color: $color-title;
  }
}
.item {
  &__header {
    display: flex;
    align-items: center;
    margin: 0px 0px 10px 0px;
  }
  &__icon {
    padding: 10px 10px;
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
      @media (max-width: $md4) {
        height: 22px;
        width: 22px;
      }
    }
  }
  &__title {
    font-size: 18px;
    font-weight: 500;
    margin: 0px 0px 8px 0px;
    letter-spacing: 0.1px;
    @media (max-width: $md4) {
      margin: 0px 0px 5px 0px;
      font-size: 14px;
    }
  }
  &__bot {
    display: flex;
    @media (max-width: $md4) {
      align-items: center;
    }
    img {
      height: 14px;
      width: 14px;
      margin-top: 0.5px;
      @media (max-width: $md4) {
        height: 9px;
        width: 8px;
        margin-top: -0.2px;
      }
    }
  }
  &__next {
    font-size: 14px;
    font-weight: 500;
    @media (max-width: $md4) {
      font-size: 10px;
      margin-right: 1px;
    }
  }
  &__icon {
    // height: ;
  }
  &__text {
    color: $color-text;
    line-height: 1.3;
    font-weight: 400;
    font-size: 15px;
  }
  &__foot {
    background: #fff;
    display: inline-flex;
    justify-content: center;
    max-width: 50%;
    align-items: center;
    padding: 7px 10px;
    color: #102938;
    text-align: center;
    border-radius: 4px;
    font-weight: 500;
    box-shadow: 0px 1px 2px 0px rgba(34, 60, 80, 0.18);
    margin: 0px 0px 0px -3px;
    @media (max-width: $md2) {
      font-size: 14px;
      // margin: 0px 0px 0px -5px;
      // padding: 7px 10px;
      padding: 8px 8px;
      // width: 45%;
    }
    @media (max-width: $md3) {
      font-size: 12px;
      // margin: 0px 0px 0px -5px;
      // padding: 7px 10px;
      padding: 7px 7px;
      // width: 50%;
    }
    @media (max-width: $md4) {
      font-size: 12px;
      // margin: 0px 0px 0px -2px;
      // padding: 7px 10px;
      padding: 5px 6px;
      // width: 60%;
      max-width: 65%;
      margin: 0px 0px 5px -3px;
    }
  }
}
</style>
