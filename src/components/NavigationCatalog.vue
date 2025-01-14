<script>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { ref, watch } from "vue";

export default {
  components: {},
  setup() {
    return {};
  },
  methods: {},
  props: {},
  computed: {},
};
</script>
<template>
  <div class="catalog__wrap">
    <ul class="catalog__list">
      <li class="catalog__list-item">
        <span class="catalog__list-item_header">
          <img class="catalog__list-item_header-icon" alt="Услуги" src="../assets/icons/design_services.svg" />
          Услуги
        </span>
        <ul class="catalog__list-item_body">
          <li class="catalog__list-item_body-item">
            <div class="catalog__item" data-test="0">
              <a class="catalog__link" @click="$emit('visible')">Проект участка</a>
            </div>
            <div class="catalog__item" data-test="1">
              <a class="catalog__link" @click="$emit('visible')">Топографическая съемка</a>
            </div>

            <div class="catalog__item" data-test="2">
              <a class="catalog__link" @click="$emit('visible')">Септик под ключ </a>
            </div>
          </li>
          <li class="catalog__list-item_body-item">
            <div class="catalog__item" data-test="0">
              <a class="catalog__link" @click="$emit('visible')">Водоснабжение</a>
            </div>
            <div class="catalog__item" data-test="1">
              <a class="catalog__link" @click="$emit('visible')">Система очистки воды</a>
            </div>

            <div class="catalog__item" data-test="2">
              <a class="catalog__link" @click="$emit('visible')">Свайный фундамент</a>
            </div>
          </li>
          <li class="catalog__list-item_body-item">
            <div class="catalog__item" data-test="0">
              <!-- <a class="catalog__link" @click="$emit('visible')">Установка заборов</a> -->
              <router-link class="catalog__link" :to="{ name: 'FencePage' }">Установка заборов</router-link>
            </div>
            <div class="catalog__item" data-test="1">
              <a class="catalog__link" @click="$emit('visible')">Ливневая канализация</a>
            </div>
            <div class="catalog__item" data-test="2">
              <a class="catalog__link" @click="$emit('visible')">Дренаж </a>
            </div>
          </li>
          <li class="catalog__list-item_body-item">
            <div class="catalog__item" data-test="0">
              <a class="catalog__link" @click="$emit('visible')">Благоустройство</a>
            </div>
            <div class="catalog__item" data-test="1">
              <a class="catalog__link" @click="$emit('visible')">Электромонтажные работы</a>
            </div>
            <div class="catalog__item" data-test="2">
              <a class="catalog__link" @click="$emit('visible')">Освещение участка</a>
            </div>
          </li>
        </ul>
      </li>
      <li class="catalog__list-item">
        <a href="/service" class="catalog__list-item_header">
          <img
            class="catalog__list-item_header-icon"
            width="20"
            height="20"
            alt="Sewera Сервис"
            src="../assets/icons/cleaning_services.svg"
          />
          Сервис
        </a>
        <ul class="catalog__list-item_body">
          <li class="catalog__list-item_body-item">
            <div class="catalog__item" data-test="0">
              <a class="catalog__link" @click="$emit('visible')">Обслуживание ЛОС</a>
            </div>
            <div class="catalog__item" data-test="1">
              <a class="catalog__link" @click="$emit('visible')">Обслуживание бойлеров</a>
            </div>
            <div class="catalog__item" data-test="2">
              <a class="catalog__link" @click="$emit('visible')">Система водоочистки</a>
            </div>
          </li>
          <li class="catalog__list-item_body-item">
            <div class="catalog__item" data-test="0">
              <a class="catalog__link" @click="$emit('visible')">Система водоподготовки</a>
            </div>

            <div class="catalog__item" data-test="1">
              <a class="catalog__link" @click="$emit('visible')">Система водоснабжения</a>
            </div>

            <div class="catalog__item" data-test="2">
              <a class="catalog__link" @click="$emit('visible')">Уборка участка</a>
            </div>
          </li>
          <li class="catalog__list-item_body-item">
            <div class="catalog__item" data-test="0">
              <a class="catalog__link" @click="$emit('visible')">ТО и сервис генераторов</a>
            </div>
            <div class="catalog__item" data-test="1">
              <a class="catalog__link" @click="$emit('visible')">Уход за газоном</a>
            </div>

            <div class="catalog__item" data-test="2">
              <a class="catalog__link" @click="$emit('visible')">Разморозка водопровода</a>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;
.form-feedback__show {
  display: block;
  opacity: 1;
}

.catalog {
  &__wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    border-radius: 8px;
    padding: 30px;
    margin-top: 21px;
    background: #fff;
    box-shadow: 0 4px 28px 0 rgba(0, 60, 92, 0.08);
  }
  &__list {
    width: 100%;
    &-item {
      padding-bottom: 20px;
      padding-top: 20px;
      border-bottom: 1px solid #e8eaec;
      width: 100%;
      &_header {
        text-align: left;
        padding: 8px 10px;
        display: flex;
        align-items: center;
        color: #102938;
        font-size: 1.2rem;
        &-icon {
          width: 24px;
          min-width: 20px;
          height: 24px;
          margin-right: 10px;
          object-fit: contain;
        }
      }
      &_body {
        width: 100%;
        // display: grid;
        display: flex;
        flex-wrap: wrap;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-flow: row;
        gap: 2px 33px;
      }
    }
    &-item:first-child {
      padding-top: 0;
    }
  }
  &__item {
    transition: border-radius 0.3s, background 0.3s;
    &:hover {
      border-radius: 6px;
      background: #f5f5f5;
    }
  }
  &__link {
    padding: 8px 10px;
    font-weight: 500;
    display: flex;
    justify-content: stretch;
    align-items: center;
    gap: 7px;
    font-size: $fs-m;
    display: flex;
    width: 100%;
    color: #102938;
  }
}
</style>
