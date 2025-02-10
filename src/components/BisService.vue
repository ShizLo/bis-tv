<script setup>
import { onMounted, onUnmounted, reactive } from "vue";
import Swiper from "swiper/bundle";
import { swiper_bis_setting } from "../assets/js/swiper";
import { ROUTES_PATHS } from "../constants";

const props = defineProps({
  title: {
    typeof: String,
  },
});
const swiper_bis = new Swiper(".swiper-bis-services", swiper_bis_setting);

const data = [
  {
    urlImg: "url(/images/globalServices/services-1+.webp)",
    title: "Септик",
    price: [{ text: "Обслуживание" }, { text: "Ремонт" }, { text: "Разморозка труб" }, { text: "Откачка" }, { text: "..." }],
    // routePath: ROUTES_PATHS.HOME,
  },
  {
    urlImg: "url(/images/waterPage/bis-service-2+.webp)",
    title: "Бойлер",
    price: [{ text: "Диагностика" }, { text: "Обслуживание" }],
    // routePath: ROUTES_PATHS.FENCE,
  },
  {
    urlImg: "url(/images/waterPage/bis-service-1+.webp)",
    title: "Вододоочистка",
    price: [{ text: "Замена картриджей" }],
    // routePath: ROUTES_PATHS.FAUNDATION,
  },
  {
    urlImg: "url(/images/waterPage/water-6@0.5x.webp)",
    title: "Водоподготовка",
    price: [{ text: "Анализ воды" }, { text: "Обслуживание" }, { text: "Ремонт" }, { text: "Магистральный фильтр" }, { text: "..." }],
    // routePath: ROUTES_PATHS.WATER,
  },
  {
    urlImg: "url(/images/globalServices/sticker.png)",
    title: "Водоснабжение",
    price: [
      { text: "Замена насоса" },
      { text: "Устранение течей" },
      { text: "Греющий кабель" },
      { text: "Утепление труб" },
      { text: "..." },
    ],
    // routePath: ROUTES_PATHS.WATER,
  },
  {
    urlImg: "",
    title: "Уборка участка",
    price: [{ text: "Вывоз мусора" }, { text: "Уборка крыши" }, { text: "Чистка террасы" }, { text: "..." }],
    // routePath: ROUTES_PATHS.HOME,
  },
  {
    urlImg: "",
    title: "Генераторы",
    price: [{ text: "ТО и сервис" }],
    // routePath: ROUTES_PATHS.ELECTRICITY,
  },
  {
    urlImg: "",
    title: "Газон",
    price: [{ text: "Стрижка" }, { text: "Аэрация" }, { text: "Восстановление" }],
    // routePath: ROUTES_PATHS.HOME,
  },
  {
    urlImg: "",
    title: "Водопровод",
    price: [{ text: "Разморозка" }],
    // routePath: ROUTES_PATHS.HOME,
  },
];

onMounted(() => {
  swiper_bis.init();
});
onUnmounted(() => {
  swiper_bis.destroy();
});
</script>

<template>
  <section class="bis-services">
    <div class="bis-services__container _container">
      <h2 class="bis-services__title">{{ title }}</h2>
      <div class="swiper-container">
        <div class="swiper-bis-services">
          <div class="swiper-wrapper">
            <div v-for="item in data" class="swiper-slide swiper-slide__bis-services">
              <router-link :style="{ 'background-image': item.urlImg }" class="services__link" :to="{ name: item.routePath }">
                <div class="item__title">{{ item.title }}</div>
                <!-- <div class="item__foot">
                  <span>{{ item.price }}</span>
                </div> -->
                <div v-for="price in item.price" class="item__bot">
                  <span class="item__next">{{ price.text }}</span>
                  <!-- <img src="/icons/angle-right.svg" alt="" /> -->
                </div>
              </router-link>
            </div>
          </div>
          <div class="swiper-button-prev">
            <!-- <img width="30" height="30" src="/icons/workOrder/arrow-left2.svg" alt="" /> -->
          </div>
          <div class="swiper-button-next">
            <!-- <img width="30" height="30" src="/icons/workOrder/arrow-right2.svg" alt="" /> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;

.swiper-bis-services > .swiper-button-prev {
  left: -50px;
}
.swiper-bis-services > .swiper-button-next {
  right: -50px;
}

.swiper-bis-services > .swiper-button-prev::after {
  padding: 18px;
  font-size: 32px;
  color: #9d9ea0;
}
.swiper-bis-services > .swiper-button-next::after {
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
}

.swiper-bis-services {
  overflow: hidden;
  padding-bottom: 3px;
  @media (max-width: $md4) {
    overflow: visible;
  }
}

.swiper-slide__bis-services {
  background-color: $color-background;
  border-radius: 8px;
  height: auto;
  padding: 15px 0px 0px 15px;
  box-shadow: 1px 1px 3px 0px rgba(34, 60, 80, 0.2);
  @media (max-width: $md4) {
    padding: 10px 0px 0px 12px;
  }
}

.services {
  &__link {
    display: block;
    height: 140px;
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

.bis-services {
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
    font-size: 20px;
    font-weight: 500;
    margin: 0px 0px 8px 0px;
    @media (max-width: $md4) {
      margin: 0px 0px 5px 0px;
      font-size: 15px;
    }
  }
  &__bot {
    display: flex;
    flex-wrap: wrap;
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
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    // font-family: "Montserrat", Arial, sans-serif;
    // color: #7a7a7a;
    margin: 0px 0px 2px 0px;
    @media (max-width: $md4) {
      font-size: 10px;
      margin-right: 1px;
    }
  }
  &__icon {
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
    align-items: center;
    padding: 5px 10px;
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
      padding: 7px 7px;
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
      margin: 0px 0px 0px -2px;
      // padding: 7px 10px;
      padding: 3px 6px;
      // width: 60%;
    }
  }
}
</style>
