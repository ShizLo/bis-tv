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
            <ServiceCard
              class="services__row-item-big"
              title="Септик под ключ"
              price="87 500"
              path="src/assets/images/content-bar-img-1"
            />
          </div>
          <div class="services__row">
            <ServiceCard
              class="services__row-item-sm"
              title="Водоподготовка"
              price="30 000"
              path="src/assets/images/content-bar-img-2"
            />
            <ServiceCard
              class="services__row-item-sm"
              title="Колодец"
              price="11 000"
              path="src/assets/images/content-bar-img-3"
            />
          </div>
        </div>
        <div class="services__column">
          <div class="services__row">
            <ServiceCard
              class="services__row-item-sm"
              title="Благоустройство"
              price="210"
              path="src/assets/images/content-bar-img-4"
            />
            <ServiceCard
              class="services__row-item-sm"
              title="Скважины"
              price="3650"
              path="src/assets/images/content-bar-img-6"
            />
          </div>
          <div class="services__row">
            <ServiceCard
              class="services__row-item-big"
              title="Водоснабжение"
              price="90 000"
              path="src/assets/images/content-bar-img-5"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use "../assets/styles/app.scss" as c;

.services {
  &__title {
    font-size: 28px;
    font-weight: 600;
    background: #fff;
    display: inline-block;
    border-radius: 32px;
    padding: 3px 10px;
    color: #102938;
    @media (max-width: c.$md4) {
      margin-bottom: 10px;
      font-size: 1.3rem;
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
        height: 145px;
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
