<script setup>
import { onMounted, onUnmounted, reactive } from "vue";

const props = defineProps({
  serviceTitle: {
    typeof: String,
  },
  servicePrice: {
    typeof: Array,
  },
});

onMounted(() => {});
onUnmounted(() => {});
</script>

<template>
  <section class="services">
    <div class="services__container _container">
      <h2 class="services__title title-service">Наши услуги по заборам</h2>
      <ul class="services__items">
        <li v-for="item in servicePrice" class="services__item item">
          <!-- <span class="item__wrapper">
            <img :src="item.urlImg" alt="" />
          </span> -->
          <a :style="{ 'background-image': item.urlImg }" class="services__link">
            <div class="item__title">{{ item.name }}</div>
            <div class="item__foot">
              <span>{{ item.price }}</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;
.services {
  margin: 0px 0px 25px 0px;
  &__title {
    margin-bottom: 10px;
    font-size: 26px;
    font-weight: 600;
    background: #fff;
    display: inline-block;
    border-radius: 32px;
    padding: 3px 10px;
    color: #102938;
  }
  &__items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 30px;
    @media (max-width: $md2) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
    }
    @media (max-width: $md3) {
      gap: 15px;
    }
    @media (max-width: $md4) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      gap: 8px;
    }
  }
  &__item {
    width: 100%;
    overflow: hidden;
    border-radius: 0.5rem;
    background-color: $color-background;
    @media (min-width: $md1) {
      &:hover {
        // background-color: v-bind(hoverColor);
        background-color: rgb(255, 229, 204);
      }
    }
  }
  &__link {
    padding: 20px 20px;
    // display: block;
    // Изменения
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    height: 100%;
    //background
    background-position: 95% 100%;
    background-repeat: no-repeat;
    background-size: 100% auto;
    @media (max-width: $md4) {
      padding: 13px 13px;
      background-size: 120% auto;
    }
  }
}
.item {
  position: relative;
  height: 190px;
  @media (max-width: $md3) {
    height: 170px;
  }
  @media (max-width: $md4) {
    height: 145px;
  }
  &__wrapper {
    // background: #405460;
    top: 0;
    height: 100%;
    position: absolute;
    width: 100%;
    left: 0;
    img {
      object-fit: cover;
      // object-fit: contain;
      top: 0;
      height: 100%;
      position: absolute;
      width: 100%;
      left: 0;
      @media (max-width: $md4) {
      }
    }
  }
  // background: ;
  &__title {
    font-weight: 600;
    line-height: 120%;
    font-size: 1.4rem;
    color: #102938;
    margin: 0px 0px 10px 0px;
    @media (max-width: $md3) {
      font-size: 15px;
      margin: 0px 0px 7px 0px;
    }
  }
  &__foot {
    background: #fff;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
    color: #102938;
    text-align: center;
    border-radius: 4px;
    font-size: 15px;
    width: 33%;
    font-weight: 500;
    border-radius: 8px;
    @media (max-width: $md2) {
      font-size: 14px;
      margin: 0px 0px 0px -5px;
      // padding: 7px 10px;
      padding: 7px 7px;
      width: 45%;
    }
    @media (max-width: $md3) {
      font-size: 12px;
      margin: 0px 0px 0px -5px;
      // padding: 7px 10px;
      padding: 7px 7px;
      width: 50%;
    }
    @media (max-width: $md4) {
      font-size: 10px;
      margin: 0px 0px 0px -5px;
      // padding: 7px 10px;
      padding: 7px 7px;
      width: 60%;
    }
  }
}
</style>
