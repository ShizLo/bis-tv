<script setup>
import { onMounted, onUnmounted, reactive } from "vue";
import Swiper from "swiper/bundle";
import { swiper_order_setting } from "../assets/js/swiper";
const props = defineProps({
  data: {
    typeof: Array,
  },
  title: {
    typeof: String,
  },
});
const swiper_order = new Swiper(".swiper-order", swiper_order_setting);

onMounted(() => {
  swiper_order.init();
});
onUnmounted(() => {
  swiper_order.destroy();
});
</script>

<template>
  <section class="order">
    <div class="order__container _container">
      <h2 class="order__title">{{ title }}</h2>
      <div class="swiper-container">
        <div class="swiper-order">
          <div class="swiper-wrapper">
            <div v-for="item in data" class="swiper-slide swiper-slide__order">
              <div class="swiper-order__content">
                <div class="order__item item">
                  <div class="item__header">
                    <div class="item__icon">
                      <img width="30" height="30" :src="item.urlImg" alt="" />
                    </div>
                    <div class="item__title">{{ item.title }}</div>
                  </div>
                  <div class="item__body">
                    <div class="item__text">
                      {{ item.text }}
                    </div>
                  </div>
                </div>
              </div>
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

.swiper-order > .swiper-button-prev {
  left: -35px;
}
.swiper-order > .swiper-button-next {
  right: -35px;
}

.swiper-order > .swiper-button-prev::after {
  padding: 18px;
  font-size: 30px;
  color: #ea5b0c;
}
.swiper-order > .swiper-button-next::after {
  padding: 18px;
  font-size: 30px;
  color: #ea5b0c;
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
  // align-items: stretch;
  // overflow: visible;
  // :first-child {
  //   margin: 0px 1px 0px 0px;
  // }
}
// .swiper-wrapper > .swiper-slide__order:last-child {
//   margin-right: 0px;
// }

.swiper-order {
  overflow: hidden;
  padding-bottom: 3px;
  @media (max-width: $md4) {
    overflow: visible;
    // overflow-x: visible;
    // overflow-y: hidden;
    // overflow: visible;
  }
}

// .swiper-slide {
//   box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.7);
//   -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.7);
//   -moz-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.7);
// }
// @for $i from 1 to 10 {
//   .swiper-slide:nth-child(#{$i}):hover {
//     z-index: $i;
//   }
// }

.swiper-slide__order {
  background-color: $color-background;
  border-radius: 8px;
  height: auto;
  // padding: 20px 15px;
  padding: 15px 15px 10px 15px;

  // margin: 2px 0px; // -webkit-box-shadow: 1px 1px 3px 0px rgba(34, 60, 80, 0.18);
  // -moz-box-shadow: 1px 1px 3px 0px rgba(34, 60, 80, 0.18);
  box-shadow: 1px 1px 3px 0px rgba(34, 60, 80, 0.2);
  @media (max-width: $md4) {
    padding: 12px 12px;
  }
}

.order {
  overflow: hidden;
  // overflow: visible;
  margin: 0px 0px 25px 0px;
  &__title {
    margin-bottom: 10px;
    font-size: 26px;
    font-weight: 600;
    background: #fff;
    display: inline-block;
    border-radius: 32px;
    padding: 3px 10px;
    color: $color-title;
  }
  &__container {
    // overflow: hidden;
  }
}
.item {
  &__header {
    display: flex;
    align-items: center;
    margin: 0px 0px 10px 0px;
    @media (max-width: $md4) {
      margin: 0px 0px 7px 0px;
    }
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
      height: 25px;
      width: 25px;
      @media (max-width: $md4) {
        height: 22px;
        width: 22px;
      }
    }
  }
  &__title {
    font-size: 22px;
    font-weight: 500;
    line-height: normal;
    @media (max-width: $md4) {
      font-size: 20px;
    }
  }
  &__text {
    color: $color-text;
    line-height: 1.25;
    font-weight: 400;
    font-size: 15px;
  }
}
</style>
