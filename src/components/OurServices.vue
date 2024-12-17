<script>
import ServiceCard from "./ServiceCard.vue";
import ServiceSmallCard from "./ServiceSmallCard.vue";
export default {
  components: {
    ServiceCard,
    ServiceSmallCard,
  },
  
};
</script>
<template>
  <section class="services">
    <div class="services__container _container">
      <h2 class="services__title title-service">Наши услуги</h2>
      <div class="services__items">
        <div class="services__column">
          <div class="services__row">
            <div class="services__item services__row-item-big">
              <a
                class="services__item-link item item1"
                v-scroll-to="{
                  el: '#GlobalForm',
                  easing: [0.6, 0.8, 0.3, 1.9],
                  duration: 2000,
                }"
              >
                <div class="item__description content__description">
                  <div class="item__title title">
                    <span>Септик под ключ</span>
                  </div>
                  <div class="item__price content__price">
                    <span>От 180 000 руб.</span>
                  </div>
                </div>
              </a>
            </div>
            <!-- <ServiceCard
              title=""
              price=""
              path="services-1.webp"
              hoverColor="rgb(214, 221, 235)"
            /> -->
          </div>
          <div class="services__row ">
            <div class="services__item services__row-item-sm">
              <a
                class="services__item-link item item2"
                v-scroll-to="{
                  el: '#GlobalForm',
                  easing: [0.6, 0.8, 0.3, 1.9],
                  duration: 2000,
                }"
              >
                <div class="item__description content__description">
                  <div class="item__title title">
                    <span>Водоподготовка</span>
                  </div>
                  <div class="item__price content__price">
                    <span>От 30 000 руб.</span>
                  </div>
                </div>
              </a>
            </div>
            <!-- <ServiceCard
              class="services__row-item-sm"
              title="Водоподготовка"
              price="30 000"
              path="services-2++.webp"
              hoverColor="rgb(243, 253, 186)"
            /> -->
            <div class="services__item services__row-item-sm">
              <a
                class="services__item-link item item3"
                v-scroll-to="{
                  el: '#GlobalForm',
                  easing: [0.6, 0.8, 0.3, 1.9],
                  duration: 2000,
                }"
              >
                <div class="item__description content__description">
                  <div class="item__title title">
                    <span>Колодец</span>
                  </div>
                  <div class="item__price content__price">
                    <span>От 11 000 руб.</span>
                  </div>
                </div>
              </a>
            </div>
            <!-- <ServiceCard
              class="services__row-item-sm"
              title="Колодец"
              price="11 000"
              path="services-4.webp"
              hoverColor="rgb(190, 182, 238)"
            /> -->
          </div>
        </div>
        <div class="services__column">
          <div class="services__row">
            <div class="services__item services__row-item-sm">
              <a
                class="services__item-link item item4"
                v-scroll-to="{
                  el: '#GlobalForm',
                  easing: [0.6, 0.8, 0.3, 1.9],
                  duration: 2000,
                }"
              >
                <div class="item__description content__description">
                  <div class="item__title title">
                    <span>Фундамент</span>
                  </div>
                  <div class="item__price content__price">
                    <span>От 100 000 руб.</span>
                  </div>
                </div>
              </a>
            </div>
            <!-- <ServiceCard
              class="services__row-item-sm"
              title="Фундамент"
              price="От 100 000"
              path="services-5+.webp"
              hoverColor="rgb(170, 214, 199)"
            /> -->
            <div class="services__item services__row-item-sm">
              <a
                class="services__item-link item item5"
                v-scroll-to="{
                  el: '#GlobalForm',
                  easing: [0.6, 0.8, 0.3, 1.9],
                  duration: 2000,
                }"
              >
                <div class="item__description content__description">
                  <div class="item__title title">
                    <span>Скважины</span>
                  </div>
                  <div class="item__price content__price">
                    <span>От 3650 руб.</span>
                  </div>
                </div>
              </a>
            </div>
            <!-- <ServiceCard
              class="services__row-item-sm"
              title="Скважины"
              price="3650"
              path="services-3.webp"
              hoverColor="rgb(245, 226, 207)"
            /> -->
          </div>
          <div class="services__row">
            <div class="services__item services__row-item-big">
              <a
                class="services__item-link item item6"
                v-scroll-to="{
                  el: '#GlobalForm',
                  easing: [0.6, 0.8, 0.3, 1.9],
                  duration: 2000,
                }"
              >
                <div class="item__description content__description">
                  <div class="item__title title">
                    <span>Заборы</span>
                  </div>
                  <div class="item__price content__price">
                    <span>От 90 000 руб.</span>
                  </div>
                </div>
              </a>
            </div>
            <!-- <ServiceCard
              class="services__row-item-big"
              title="Заборы"
              price="90 000"
              path="services-6.webp"
              hoverColor="rgb(217, 221, 133)"
            /> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use "../assets/styles/app.scss" as c;

.services {
  margin-top: 15px;
  &__title {
    font-size: c.$fs-xxl;
    font-weight: 600;
    background: #fff;
    display: inline-block;
    border-radius: 32px;
    padding: 3px 10px;
    color: #102938;
    @media (max-width: c.$md2) {
      font-size: c.$fs-xl;
    }
    @media (max-width: c.$md3) {
      font-size: c.$fs-xl;
    }
    @media (max-width: c.$md4) {
      margin-bottom: 10px;
      font-size: c.$fs-l;
    }
    @media (min-width: c.$md4) {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
  &__items {
    display: flex;
    gap: 10px;
    @media (max-width: c.$md3) {
      flex-wrap: wrap;
    }
  }

  &__column {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 50%;
    gap: 10px;
    @media (max-width: c.$md3) {
      flex: 1 1 100%;
      &:last-child {
        flex-direction: column-reverse;
      }
    }
  }
  &__row {
    display: flex;
    width: 100%;
    gap: 10px;
    &-item-big {
      width: 100%;
      height: 350px;
      @media (max-width: c.$md1) {
        height: 320px;
      }
      @media (max-width: c.$md2) {
        height: 270px;
      }
      @media (max-width: c.$md3) {
        height: 180px;
      }
    }
    &-item-sm {
      width: 50%;
      height: 230px;
      @media (max-width: c.$md1) {
        height: 200px;
      }
      @media (max-width: c.$md2) {
        height: 150px;
      }
      @media (max-width: c.$md3) {
        height: 145px;
      }
    }
  }
}
// ServiceCard
.services__item {
  display: flex;
  // height: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: c.$color-background;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-delay: 150ms;
  @media (min-width: c.$md1) {
    &:hover {
      // background-color: var(--hoverColor);
    }
  }
  &-link {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    // padding: 1rem;
    background-size: contain !important;
    // background-position-x: right !important;
    // background-position-y: bottom
    background-position: 95% 100% !important;
    background-repeat: no-repeat !important;
    background-size: 100% auto !important;
    cursor: pointer;
    @media (max-width: c.$md4) {
      background-size: 90% auto !important;
    }
    @media (max-width: c.$md3) {
      background-size: 65% auto !important;
    }
    @media (max-width: c.$md4) {
      background-size: 100% auto !important;
    }
  }
}

.item {
  // background: `url(${require(var(--background))})`;
  // background: var(--background);
  &__title {
    font-weight: 600;
    line-height: 120%;
    font-size: 1.55rem;
    padding: 25px 0px 0px 25px;

    color: #102938;
    @media (max-width: c.$md2) {
      font-size: 1.3rem;
    }
    @media (max-width: c.$md3) {
      font-size: 1.3rem;
    }
    @media (max-width: c.$md4) {
      font-size: 1rem;
    }
    @media (max-width: c.$md4) {
      padding: 15px 0px 0px 15px;
    }
  }
  &__price {
    background: #fff;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 11px 10px;
    margin: 10px 0px 0px 18px;
    color: #102938;
    text-align: center;
    border-radius: 4px;
    &::after {
      content: "";
      width: 14px;
      height: 14px;
      background: url(../../public/content-bar-arrow-price.svg) center / contain no-repeat;
    }
    @media (max-width: c.$md4) {
      font-size: 14px;
      margin: 8px 0px 0px 8px;
      padding: 7px 10px;
    }
  }
}
.item1 {
    background: url(../assets/images/services-1.webp);
    overflow: hidden;
  border-radius: 0.5rem;
  background-color: c.$color-background;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-delay: 150ms;
    @media (min-width: c.$md1) {
    &:hover {
      background-color: rgb(214, 221, 235);
    }
  }}
  .item2 {
    background: url(../assets/images/services-2++.webp);
    overflow: hidden;
  border-radius: 0.5rem;
  background-color: c.$color-background;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-delay: 150ms;
    @media (min-width: c.$md1) {
    &:hover {
      background-color: rgb(243, 253, 186);
    }
  }}
  .item3 {
    background: url(../assets/images/services-4.webp);
    overflow: hidden;
  border-radius: 0.5rem;
  background-color: c.$color-background;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-delay: 150ms;
    @media (min-width: c.$md1) {
    &:hover {
      background-color: rgb(190, 182, 238);
    }
  }}
  .item4 {
    background: url(../assets/images/services-5+.webp);
    overflow: hidden;
  border-radius: 0.5rem;
  background-color: c.$color-background;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-delay: 150ms;
    @media (min-width: c.$md1) {
    &:hover {
      background-color: rgb(170, 214, 199);
    }
  }}
  .item5 {
    background: url(../assets/images/services-3.webp);
    overflow: hidden;
  border-radius: 0.5rem;
  background-color: c.$color-background;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-delay: 150ms;
    @media (min-width: c.$md1) {
    &:hover {
      background-color: rgb(245, 226, 207);
    }
  }}
  .item6 {
    background: url(../assets/images/services-6.webp);
    overflow: hidden;
  border-radius: 0.5rem;
  background-color: c.$color-background;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-delay: 150ms;
    @media (min-width: c.$md1) {
    &:hover {
      background-color: rgb(217, 221, 133);
    }
  }}
// .parent {
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr 1fr;
//   grid-template-rows: 1.4fr 0.2fr 1.4fr;
//   gap: 10px 10px;
//   grid-auto-flow: row;
//   grid-template-areas:
//     "serviceCard serviceCard smallCard1 smallCard2"
//     "serviceCard serviceCard serviceCard1 serviceCard1"
//     "smallCard3 smallCard4 serviceCard1 serviceCard1";
// }

// .serviceCard {
//   grid-area: serviceCard;
// }

// .serviceCard1 {
//   grid-area: serviceCard1;
// }

// .smallCard1 {
//   grid-area: smallCard1;
// }

// .smallCard2 {
//   grid-area: smallCard2;
// }

// .smallCard3 {
//   grid-area: smallCard3;
// }

// .smallCard4 {
//   grid-area: smallCard4;
// }
</style>
