<script>
import { computed } from "vue";
import Form from "../components/Form/Form.vue";
import { useRouter, useRoute } from "vue-router";
import { ref, watch } from "vue";

export default {
  components: {
    Form,
  },
  setup() {
    return {};
  },

  data: () => ({
    formIsVisible: 0,
  }),
  methods: {
    formVisible() {
      if (this.formIsVisible === 1) {
        this.formIsVisible = 0;
      } else {
        this.formIsVisible = 1;
      }
    },
  },
  props: {},
  computed: {},
};
</script>
<template>
  <Form :class="formIsVisible === 1 ? 'form-feedback__show' : ''" @someEvent="formVisible" />
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
              <a class="catalog__link" @click="formVisible()">Септик под ключ</a>
            </div>
            <div class="catalog__item" data-test="1">
              <a class="catalog__link" @click="formVisible()">Установка погреба</a>
            </div>

            <div class="catalog__item" data-test="2">
              <a class="catalog__link" @click="formVisible()">Водоснабжение </a>
            </div>
          </li>
          <li class="catalog__list-item_body-item">
            <div class="catalog__item" data-test="0">
              <a class="catalog__link" @click="formVisible()">Скважина на воду </a>
            </div>
            <div class="catalog__item" data-test="1">
              <a class="catalog__link" @click="formVisible()">Обустройство скважины</a>
            </div>

            <div class="catalog__item" data-test="2">
              <a class="catalog__link" @click="formVisible()">Колодец </a>
            </div>
          </li>
          <li class="catalog__list-item_body-item">
            <div class="catalog__item" data-test="0">
              <a class="catalog__link" @click="formVisible()">Система очистки воды </a>
            </div>
            <div class="catalog__item" data-test="1">
              <a class="catalog__link" @click="formVisible()">Свайный фундамент</a>
            </div>
            <div class="catalog__item" data-test="2">
              <a class="catalog__link" @click="formVisible()">Благоустройство </a>
            </div>
          </li>
          <li class="catalog__list-item_body-item">
            <div class="catalog__item" data-test="0">
              <a class="catalog__link" @click="formVisible()">Дренаж </a>
            </div>
            <div class="catalog__item" data-test="1">
              <a class="catalog__link" @click="formVisible()">Ливневая канализация </a>
            </div>
            <div class="catalog__item" data-test="2">
              <a class="catalog__link" @click="formVisible()">Отмостка вокруг дома</a>
            </div>
          </li>
          <li class="catalog__list-item_body-item">
            <div class="catalog__item" data-test="0">
              <a class="catalog__link" @click="formVisible()">Установка купели</a>
            </div>
            <div class="catalog__item" data-test="1">
              <a class="catalog__link" @click="formVisible()">Видеонаблюдение </a>
            </div>
            <div class="catalog__item" data-test="2">
              <a class="catalog__link" @click="formVisible()">Каток на участке </a>
            </div>
          </li>
          <li class="catalog__list-item_body-item">
            <div class="catalog__item" data-test="0">
              <a class="catalog__link" @click="formVisible()">Световое оформление дома и участка</a>
            </div>
            <div class="catalog__item" data-test="1">
              <a class="catalog__link" @click="formVisible()">Строительство террас </a>
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
              <a class="catalog__link" href="/service/">Обслуживание дома</a>
            </div>
            <div class="catalog__item" data-test="1">
              <a class="catalog__link" href="/service/obluzhivanie-septikov/">Септики и ЛОСы</a>
            </div>
            <div class="catalog__item" data-test="2">
              <a class="catalog__link" href="/service/obsluzhivanie-sistem-vodopodgotovki/">Система очистки воды</a>
            </div>
          </li>
          <li class="catalog__list-item_body-item">
            <div class="catalog__item" data-test="0">
              <a class="catalog__link" href="/service/obsluzhivanie-skvazhini/">Скважина на воду</a>
            </div>

            <div class="catalog__item" data-test="1">
              <a class="catalog__link" href="/service/obsluzhivanie-sistem-vodosnabzhenija/">Система водоснабжения</a>
            </div>

            <div class="catalog__item" data-test="2">
              <a class="catalog__link" href="/service/obsluzhivanie-sistem-otoplenija/">Система отопления</a>
            </div>
          </li>
          <li class="catalog__list-item_body-item">
            <div class="catalog__item" data-test="0">
              <a class="catalog__link" href="/service/obsluzhivanie-sistemi-avtopoliva/">Система автополива</a>
            </div>
            <div class="catalog__item" data-test="1">
              <a class="catalog__link" href="/service/yxod-za-gazonom/">Уход за газоном</a>
            </div>

            <div class="catalog__item" data-test="2">
              <a class="catalog__link" href="/service/yborka-zagorodnogo-doma/">Уборка участка</a>
            </div>
          </li>
          <li class="catalog__list-item_body-item">
            <div class="catalog__item" data-test="0">
              <a class="catalog__link" href="/service/cleaning-zagorodnogo-doma/">Уборка частного дома</a>
            </div>
            <div class="catalog__item" data-test="1">
              <a class="catalog__link" href="/service/rabota-s-elektrikoy/">Электромонтажные работы</a>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
@use "../assets/styles/app.scss" as c;
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
    font-size: c.$fs-m;
    display: flex;
    width: 100%;
    color: #102938;
  }
}
</style>
