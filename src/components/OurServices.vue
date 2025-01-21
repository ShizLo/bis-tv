<script setup>
import ServiceCard from "./ServiceCard.vue";
import { ROUTES_PATHS } from "../constants";
import { reactive } from "vue";

const catalog = reactive({
  data: [
    [
      [
        {
          class: "services__row-item-big",
          title: "Септик под ключ",
          price: "От 180 000",
          pathImg: "url(/images/ourServices/services-1.webp)",
          hoverColors: "rgb(170, 214, 199)",
        },
      ],
      [
        {
          class: "services__row-item-sm",
          title: "Водоснабжение",
          price: "От 60 000",
          pathImg: "url(/images/ourServices/services-2++.webp",
          hoverColors: "rgb(204, 209, 255)",
        },
        {
          class: "services__row-item-sm",
          title: "Ливневка",
          price: "От 50 000",
          pathImg: "url(/images/ourServices/services-7.webp",
          hoverColors: "rgb(204, 209, 255)",
        },
      ],
    ],
    [
      [
        {
          class: "services__row-item-sm",
          title: "Фундамент",
          price: "От 100 000",
          pathImg: "url(/images/ourServices/services-5+.webp",
          hoverColors: "rgb(255, 229, 204)",
        },
        {
          class: "services__row-item-sm",
          title: "Электромонтаж",
          price: "От 20 000",
          pathImg: "url(/images/ourServices/services-8++.webp",
          hoverColors: "rgb(243, 253, 180)",
        },
      ],
      [
        {
          class: "services__row-item-big",
          title: "Установка заборов",
          price: "От 90 000",
          pathImg: "url(/images/ourServices/services-6.webp",
          hoverColors: "rgb(255, 229, 204)",
          routePath: ROUTES_PATHS.FENCE,
        },
      ],
    ],
    [
      [
        {
          class: "services__row-item-big",
          title: "Септик под ключ",
          price: "От 180 000",
          pathImg: "url(/images/ourServices/services-1.webp)",
          hoverColors: "rgb(170, 214, 199)",
        },
      ],
      [
        {
          class: "services__row-item-sm",
          title: "Водоснабжение",
          price: "От 60 000",
          pathImg: "url(/images/ourServices/services-2++.webp",
          hoverColors: "rgb(204, 209, 255)",
        },
        {
          class: "services__row-item-sm",
          title: "Ливневка",
          price: "От 50 000",
          pathImg: "url(/images/ourServices/services-7.webp",
          hoverColors: "rgb(204, 209, 255)",
        },
      ],
    ],
  ],
});
const servicesData = [
  [
    [
      {
        class: "services__row-item-big",
        title: "Септик под ключ",
        price: "От 180 000",
        pathImg: "url(/images/ourServices/services-1.webp)",
        hoverColors: "rgb(170, 214, 199)",
      },
    ],
    [
      {
        class: "services__row-item-sm",
        title: "Водоснабжение",
        price: "От 60 000",
        pathImg: "url(/images/ourServices/services-2++.webp",
        hoverColors: "rgb(204, 209, 255)",
      },
      {
        class: "services__row-item-sm",
        title: "Ливневка",
        price: "От 50 000",
        pathImg: "url(/images/ourServices/services-7.webp",
        hoverColors: "rgb(204, 209, 255)",
      },
    ],
  ],
  [
    [
      {
        class: "services__row-item-sm",
        title: "Фундамент",
        price: "От 100 000",
        pathImg: "url(/images/ourServices/services-5+.webp",
        hoverColors: "rgb(255, 229, 204)",
      },
      {
        class: "services__row-item-sm",
        title: "Электромонтаж",
        price: "От 20 000",
        pathImg: "url(/images/ourServices/services-8++.webp",
        hoverColors: "rgb(243, 253, 180)",
      },
    ],
    [
      {
        class: "services__row-item-big",
        title: "Установка заборов",
        price: "От 90 000",
        pathImg: "url(/images/ourServices/services-6.webp",
        hoverColors: "rgb(255, 229, 204)",
        routePath: ROUTES_PATHS.FENCE,
      },
    ],
  ],
];
</script>
<!-- <template>
  <section class="services">
    <div class="services__container _container">
      <h2 class="services__title title-service">Наши услуги</h2>
      <div class="services__items">
        <div v-for="items in catalog.data" class="services__item">
          <div v-for="columns in items" class="services__column">
            <div v-for="item in columns" class="services__row">
              <ServiceCard
                :class="item.class"
                :title="item.title"
                :price="item.price"
                :pathImg="item.pathImg"
                :hoverColors="item.hoverColors"
                :routePath="item.routePath"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> -->
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
              pathImg="url(/images/ourServices/services-1.webp)"
              hoverColors="rgb(170, 214, 199)"
            />
          </div>
          <div class="services__row">
            <ServiceCard
              class="services__row-item-sm"
              title="Водоснабжение"
              price="От 60 000"
              pathImg="url(/images/ourServices/services-2++.webp"
              hoverColors="rgb(204, 209, 255)"
            />
            <ServiceCard
              class="services__row-item-sm"
              title="Ливневка"
              price="От 50 000"
              pathImg="url(/images/ourServices/services-7.webp"
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
              pathImg="url(/images/ourServices/services-5+.webp"
              hoverColors="rgb(255, 229, 204)"
            />
            <ServiceCard
              class="services__row-item-sm"
              title="Электромонтаж"
              price="От 20 000"
              pathImg="url(/images/ourServices/services-8++.webp"
              hoverColors="rgb(243, 253, 180)"
            />
          </div>
          <div class="services__row">
            <ServiceCard
              class="services__row-item-big"
              title="Установка заборов"
              price="От 90 000"
              pathImg="url(/images/ourServices/services-6.webp"
              hoverColors="rgb(255, 229, 204)"
              :routePath="ROUTES_PATHS.FENCE"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;

.services {
  margin-top: 15px;
  margin-bottom: 25px;
  &__title {
    font-size: $fs-xxl;
    font-weight: 600;
    background: #fff;
    display: inline-block;
    border-radius: 32px;
    padding: 3px 10px;
    color: #102938;
    @media (max-width: $md2) {
      font-size: $fs-xxl;
    }
    @media (max-width: $md3) {
      font-size: $fs-xxl;
    }
    @media (max-width: $md4) {
      margin-bottom: 10px;
      font-size: $fs-xxl;
    }
    @media (min-width: $md4) {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
  &__items {
    display: flex;
    gap: 10px;
    @media (max-width: $md3) {
      flex-wrap: wrap;
    }
  }
  &__item {
  }

  &__column {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 50%;
    gap: 10px;
    @media (max-width: $md3) {
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
      @media (max-width: $md1) {
        height: 320px;
      }
      @media (max-width: $md2) {
        height: 270px;
      }
      @media (max-width: $md3) {
        height: 180px;
      }
    }
    &-item-sm {
      width: 50%;
      height: 230px;
      @media (max-width: $md1) {
        height: 200px;
      }
      @media (max-width: $md2) {
        height: 150px;
      }
      @media (max-width: $md3) {
        height: 145px;
      }
    }
  }
}
</style>
