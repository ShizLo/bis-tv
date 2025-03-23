<script setup>
import { onMounted, onUnmounted, reactive } from "vue";
import Swiper from "swiper/bundle";
import { swiper_variant_setting } from "../../assets/js/swiper";
import { ROUTES_PATHS } from "../../constants";

const props = defineProps({
  title: {
    typeof: String,
  },
});
const swiper_variant = new Swiper(".swiper-variant-services", swiper_variant_setting);

import work_1 from "../../assets/images/homePage/work-bis-service-1.webp";

const data = [
  {
    urlImg: "",
    title: "Проверка технического состояния",
    price: "~ 5 000 руб.",
    description: "Диагностика работы септика, определение неисправностей с последующим ремонтом",
  },
  {
    urlImg: "",
    title: "Разовое обслуживание",
    price: "~ 6 500 руб.",
    description: "Полное техническое обслуживание септика согласно регламенту от производителя",
  },
  {
    urlImg: "",
    title: "Годовое обслуживание",
    price: "~ от 11 500 руб.",
    description:
      "Договор на годовое техническое обслуживание, в рамках которого наш мастер два раза за год выполняет полное техническое обслуживание Вашего септика",
  },
];

onMounted(() => {
  swiper_variant.init();
});
onUnmounted(() => {
  swiper_variant.destroy();
});
</script>

<template>
  <section class="global-services">
    <div class="global-services__container _container">
      <h2 v-if="title" class="global-services__title">{{ title }}</h2>
      <div class="swiper-container">
        <div class="swiper-variant-services">
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
                <div class="item__subtitle">Описание</div>
                <div class="item__description">
                  <div class="description__top">{{ item.description }}</div>
                  <!-- <div class="description__bot">Запчасти не входят в стоимость</div> -->
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

.swiper-variant-services > .swiper-button-prev {
  left: -50px;
}
.swiper-variant-services > .swiper-button-next {
  right: -50px;
}

.swiper-variant-services > .swiper-button-prev::after {
  padding: 18px;
  font-size: 32px;
  color: #9d9ea0;
}
.swiper-variant-services > .swiper-button-next::after {
  padding: 18px;
  font-size: 32px;
  color: #9d9ea0;
}
.swiper-container {
  position: relative;
  width: 100%;
}
.swiper-wrapper {
  align-items: stretch;
}
.swiper-variant-services {
  overflow: hidden;
  padding-bottom: 3px;
  @media (max-width: $md4) {
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
    padding: 10px 0px 10px 5px;
  }
}

.services {
  &__link {
    display: block;
    justify-content: space-between;
    height: auto;
    background-position: 95% 100%;
    background-repeat: no-repeat;
    background-size: 100% auto;
    line-height: 1;
    @media (max-width: $md4) {
      height: auto;
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
    font-size: 1.4rem;
    font-weight: 500;
    padding: 10px 0px 0px 8px;
    margin: 0px 0px 10px 0px;
    letter-spacing: 0.1px;
    @media (max-width: $md4) {
      font-size: 20px;
      margin: 0px 0px 8px 0px;
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
    margin: 0px 0px 20px 8px;
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
      padding: 7px 8px;
      margin: 0px 0px 8px 8px;
      letter-spacing: normal;
    }
  }
  &__subtitle {
    margin: 0px 0px 10px 15px;
    @media (max-width: $md4) {
      margin: 0px 0px 8px 10px;
    }
  }
}

.description {
  &__top {
    margin: 0px 0px 10px 10px;
    font-size: 15px;
    @media (max-width: $md4) {
      font-size: 12px;
    }
  }
  &__bot {
    font-size: 14px;
  }
}
</style>
