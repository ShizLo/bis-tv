<script>
import { ref } from "vue";
import ServiceCard from "./ServiceCard.vue";
import ServiceSmallCard from "./ServiceSmallCard.vue";
import service1 from "../assets/images/services-1.webp";
import service2 from "../assets/images/services-2++.webp";
import service3 from "../assets/images/services-3.webp";
import service4 from "../assets/images/services-4.webp";
import service5 from "../assets/images/services-5+.webp";
import service6 from "../assets/images/services-6.webp";
import service7 from "../assets/images/services-7.webp";
import service8 from "../assets/images/services-8++.webp";

export default {
  components: {
    ServiceCard,
    ServiceSmallCard,
  },
  setup() {
    let imgService1 = ref(service1);
    let imgService2 = ref(service2);
    let imgService3 = ref(service3);
    let imgService4 = ref(service4);
    let imgService5 = ref(service5);
    let imgService6 = ref(service6);
    let imgService7 = ref(service7);
    let imgService8 = ref(service8);

    return {
      imgService1,
      imgService2,
      imgService3,
      imgService4,
      imgService5,
      imgService6,
      imgService7,
      imgService8,
    };
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
              price="От 180 000"
              v-bind:path="imgService1"
              hoverColors="rgb(170, 214, 199)"
            />
          </div>
          <div class="services__row">
            <ServiceCard
              class="services__row-item-sm"
              title="Водоснабжение"
              price="От 60 000"
              v-bind:path="imgService2"
              hoverColors="rgb(204, 209, 255)"
            />
            <ServiceCard
              class="services__row-item-sm"
              title="Ливневка"
              price="От 50 000"
              v-bind:path="imgService7"
              hoverColors="rgb(204, 209, 255)"
            />
          </div>
        </div>
        <div class="services__column">
          <div class="services__row">
            <ServiceCard
              class="services__row-item-sm"
              title="Фундамент"
              price="От 100 000"
              v-bind:path="imgService5"
              hoverColors="rgb(255, 229, 204)"
            />
            <ServiceCard
              class="services__row-item-sm"
              title="Электромонтаж"
              price="От 20 000"
              v-bind:path="imgService8"
              hoverColors="rgb(243, 253, 180)"
            />
          </div>
          <div class="services__row">
            <ServiceCard
              class="services__row-item-big"
              title="Установка заборов"
              price="От 90 000"
              v-bind:path="imgService6"
              hoverColors="rgb(255, 229, 204)"
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
      font-size: c.$fs-xxl;
    }
    @media (max-width: c.$md3) {
      font-size: c.$fs-xxl;
    }
    @media (max-width: c.$md4) {
      margin-bottom: 10px;
      font-size: c.$fs-xxl;
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
</style>
