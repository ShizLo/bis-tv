<!-- <script setup>
import Footer from "./components/Footer.vue";
import Form from "./components/Form/Form.vue";
import { useRouter, useRoute } from "vue-router";
import { ref, watch } from "vue";
import { reactive, computed } from "vue";
import { ROUTES_PATHS } from "./constants";
import projectIcon from "../src/assets/icons/Icons_BIS/SVG/project.svg";
import montagIcon from "../src/assets/icons/Icons_BIS/SVG/montag.svg";
import septikIcon from "../src/assets/icons/Icons_BIS/SVG/septik.svg";
import waterIcon from "../src/assets/icons/Icons_BIS/SVG/water.svg";
import foundationIcon from "../src/assets/icons/Icons_BIS/SVG/foundation.svg";
import fenceIcon from "../src/assets/icons/Icons_BIS/SVG/fence.svg";
import drainageIcon from "../src/assets/icons/Icons_BIS/SVG/drainage.svg";
import electricityIcon from "../src/assets/icons/Icons_BIS/SVG/electricity.svg";
import improvementIcon from "../src/assets/icons/Icons_BIS/SVG/improvement.svg";
import serviceIcon from "../src/assets/icons/Icons_BIS/SVG/montag+.svg";

const route = useRoute();
const router = useRouter();
const path = ref(computed(() => route.path)); // Отслеживает путь

let formIsVisible = ref(0);

const catalog = reactive({
  active: false, // Открыт ли NavigationCatalog следовательно бургер тоже активен
});

const burger = reactive({
  active: false, // Открыт ли NavigationCatalog следовательно бургер тоже активен
});

// const feedbackForm = reactive({
//   // Не используется
//   //TODO: Открывать форму при нажатии кнопки "Обсудить задачу"
//   active: false, // Открыта ли форма обратной связи
// });

watch(path, (newX) => {
  if (router.options.history.state.back != newX && catalog.active == true) {
    catalog.active = false; // При смене маршура скрываем NavigationCatalog
  }
  if (router.options.history.state.back != newX && burger.active == true) {
    burger.active = false; // При смене маршура скрываем NavigationCatalog
  }
});

function clickMenu() {
  catalog.active == true ? (catalog.active = false) : (catalog.active = true); // Если NavigationCatalog открыт закрываем и наооборот
}

function clickMenuMobile() {
  burger.active == true ? (burger.active = false) : (burger.active = true);
}

function clickForm() {}

// function toggleBodyScroll(lock) {
//   // TODO: Использовать после того как будет реализована форма обратной связи
//   document.body.style.overflow = lock ? "hidden" : "";
//   document.getElementById("nav__button").style.zIndex = lock ? "-1" : "";
//   document.getElementById("nav__button").style.overflow = lock ? "hidden" : "";
// }

document.addEventListener("click", (e) => {
  const elemCatalog = document.querySelector(".catalog");
  const elemButton = document.querySelector(".nav__button");
  if (!elemCatalog.contains(e.srcElement) && !elemButton.contains(e.srcElement) && catalog.active) {
    catalog.active = false;
  }
});
</script>

<template>
  <section class="header">
    <div class="header__container _container">
      <div class="header__block">
        <a class="header__logo logo" href="/">
          <img
            class="logo__img"
            loading="lazy"
            width=""
            height=""
            src="../src/assets/icons/logo-foot.svg"
            alt="Благоустройство и инженерные сети"
          />
        </a>
        <div @click="clickMenuMobile" class="burger__item" :class="burger.active == true ? '_right' : ''">
          <div class="burger-md" :class="burger.active == true ? '_active' : ''">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <nav :class="burger.active == true ? '_active' : ''" class="menu-mobile">
          <div class="menu__content">
            <div class="menu__header">
              <a class="menu__logo logo" href="">
                <img class="logo__img" loading="lazy" width="" height="" src="../src/assets/icons/logo-foot.svg" alt="" />
              </a>
            </div>
            <div class="menu-mobile__body">
              <div class="menu-mobile__item">
                <div class="menu-mobile__item_header">
                  <img class="menu-mobile__item-icon" alt="Услуги" src="./assets/icons/design_services.svg" />
                  <span class="menu-mobile__item-title">Наши услуги</span>
                </div>
                <div class="menu-mobile__item_body">
                  <router-link class="menu-mobile__item_body-link" :to="{ name: ROUTES_PATHS.TOPOGRAPHY }"
                    >Проект участка и топографическая съемка</router-link
                  >
                  <router-link class="menu-mobile__item_body-link" :to="{ name: ROUTES_PATHS.FAUNDATION }">Свайный фундамент</router-link>
                  <router-link class="menu-mobile__item_body-link" :to="{ name: ROUTES_PATHS.HOME }">Септик под ключ</router-link>
                  <router-link class="menu-mobile__item_body-link" :to="{ name: ROUTES_PATHS.WATER }"
                    >Водоподготовка и система очистки воды</router-link
                  >
                  <router-link class="menu-mobile__item_body-link" :to="{ name: ROUTES_PATHS.DRAINAGE }">Ливневка и дренаж</router-link>
                  <router-link class="menu-mobile__item_body-link" :to="{ name: ROUTES_PATHS.ELECTRICITY }"
                    >Электромонтажные работы</router-link
                  >
                  <router-link class="menu-mobile__item_body-link" :to="{ name: ROUTES_PATHS.FENCE }">Установка заборов</router-link>
                </div>
              </div>
              <div class="menu-mobile__item">
                <div class="menu-mobile__item_header">
                  <img class="menu-mobile__item-icon" alt="Услуги" src="./assets/icons/cleaning_services.svg" />
                  <span class="menu-mobile__item-title">Наш сервис</span>
                </div>
                <div class="menu-mobile__item_body">
                  <a class="menu-mobile__item_body-link">Обслуживание ЛОС</a>
                  <a class="menu-mobile__item_body-link">Обслуживание бойлеров</a>
                  <a class="menu-mobile__item_body-link">Обслуживание системы водоочистки</a>
                  <a class="menu-mobile__item_body-link">Обслуживание системы водоподготовки</a>
                  <a class="menu-mobile__item_body-link">Обслуживание электросетей</a>
                  <a class="menu-mobile__item_body-link">ТО и сервис генераторов</a>
                  <a class="menu-mobile__item_body-link">Разморозка водопровода</a>
                </div>
              </div>
              <div class="callback-mobile">
                <div class="menu-mobile__item-title">Запишитесь на консультацию</div>
                <div class="callback-mobile__form">
                  <input class="callback-mobile-input" type="text" name="Ваше имя" value="" placeholder="Телефон" />
                  <button @click="sendMessage()" class="form__button callback-mobile-button" type="submit">
                    <img src="./assets/icons/arrow-right2.svg" alt="" />
                  </button>
                </div>
                <div class="feedback-mobile">
                  <p class="feedback-mobile__text">
                    Нажимая кнопку «отправить», вы соглашаетесь с
                    <router-link :to="{ name: ROUTES_PATHS.POLICY }"> Политикой конфиденциальности.</router-link>
                  </p>
                </div>
              </div>
              <div class="contacts-mobile">
                <div class="contacts-mobile__item cotacts-telegram">
                  <a class="contacts-mobile__link link__telegram" href="/" target="_blank">
                    <img
                      class="link__icon"
                      loading="lazy"
                      width="25"
                      height="25"
                      src="./assets/icons/header-telegram.svg"
                      alt="Иконка Telegram"
                    />
                    <span>Telegram</span>
                  </a>
                </div>
                <div class="contacts-mobile__item contacts-whatsapp">
                  <a class="contacts-mobile__link link__whatsup" href="/" target="_blank">
                    <img
                      class="link__icon"
                      loading="lazy"
                      width="25"
                      height="25"
                      src="./assets/icons/header-whatsapp.svg"
                      alt="Иконка WhatsApp"
                    />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
              <div class="address-mobile">
                <div class="address-mobile__text">
                  г. Санкт-Петербург<br />
                  Ежедневно с 9 до 18 часов
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav class="header__nav nav">
          <ul role="list" class="nav__list">
            <li class="nav__item">
              <button id="nav__button" class="nav__button button" @click="clickMenu">
                <div :class="catalog.active == true ? '_active' : ''" class="nav__burger">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                Каталог
              </button>
              <div class="catalog" v-show="catalog.active">
                <div class="catalog__wrap">
                  <ul class="catalog__list">
                    <li class="catalog__list-item">
                      <span class="catalog__list-item_header">
                        <v-icon class="mr-2">
                          <v-img :src="serviceIcon"></v-img>
                        </v-icon>
                        Наши услуги
                      </span>
                      <ul class="catalog__list-item_body">
                        <li class="catalog__list-item_body-item">
                          <div class="catalog__item">
                            <v-icon class="ml-2">
                              <v-img :src="projectIcon"></v-img>
                            </v-icon>
                            <router-link class="catalog__link" :to="{ name: ROUTES_PATHS.TOPOGRAPHY }"
                              >Проект участка и топографическая съемка</router-link
                            >
                          </div>
                          <div class="catalog__item">
                            <v-icon class="ml-2">
                              <v-img :src="foundationIcon"></v-img>
                            </v-icon>
                            <router-link class="catalog__link" :to="{ name: ROUTES_PATHS.FAUNDATION }">Свайный фундамент</router-link>
                          </div>
                          <div class="catalog__item">
                            <v-icon class="ml-2">
                              <v-img :src="septikIcon"></v-img>
                            </v-icon>
                            <router-link class="catalog__link" :to="{ name: ROUTES_PATHS.HOME }">Септик под ключ</router-link>
                          </div>
                          <div class="catalog__item">
                            <v-icon class="ml-2">
                              <v-img :src="waterIcon"></v-img>
                            </v-icon>
                            <router-link class="catalog__link" :to="{ name: ROUTES_PATHS.WATER }"
                              >Водоподготовка и система очистки воды</router-link
                            >
                          </div>
                          <div class="catalog__item" data-test="0">
                            <v-icon class="ml-2">
                              <v-img :src="drainageIcon"></v-img>
                            </v-icon>
                            <router-link class="catalog__link" :to="{ name: ROUTES_PATHS.DRAINAGE }"
                              >Дренаж и ливневая канализация</router-link
                            >
                          </div>
                          <div class="catalog__item">
                            <v-icon class="ml-2">
                              <v-img :src="electricityIcon"></v-img>
                            </v-icon>
                            <router-link class="catalog__link" :to="{ name: ROUTES_PATHS.ELECTRICITY }"
                              >Электромонтаж и освещение участка</router-link
                            >
                          </div>
                          <div class="catalog__item">
                            <v-icon class="ml-2">
                              <v-img :src="improvementIcon"></v-img>
                            </v-icon>
                            <router-link class="catalog__link" :to="{ name: ROUTES_PATHS.HOME }">Благоустройство</router-link>
                          </div>
                          <div class="catalog__item" data-test="0">
                            <v-icon class="ml-2">
                              <v-img :src="fenceIcon"></v-img>
                            </v-icon>
                            <router-link class="catalog__link" :to="{ name: ROUTES_PATHS.FENCE }">Установка заборов</router-link>
                          </div>

                          <div class="catalog__item">
                            <v-icon class="ml-2">
                              <v-img :src="montagIcon"></v-img>
                            </v-icon>
                            <router-link class="catalog__link" :to="{ name: ROUTES_PATHS.SERVICE }">БИС Сервис</router-link>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="nav__item">
              <a class="nav__link-contacts" href="">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="header__block-links">
        <ul role="list" class="header__list">
          <li class="list__item">
            <a class="link__telegram" href="" target="_blank">
              <img
                class="link__icon"
                loading="lazy"
                width="25"
                height="25"
                src="./assets/icons/header-telegram.svg"
                alt="Иконка Telegram"
              />
            </a>
          </li>
          <li class="list__item">
            <a class="link__whatsup" href="" target="_blank">
              <img
                class="link__icon"
                loading="lazy"
                width="25"
                height="25"
                src="./assets/icons/header-whatsapp.svg"
                alt="Иконка WhatsApp"
              />
            </a>
          </li>
          <li class="list__item item-phone">
            <a class="list__item link__phone" href="tel:+7 911 277-56-07"> +7 911 277-56-07</a>
            <a class="list__item link__phone-mobile" href="tel:+7 911 277-56-07"> </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <router-view />
  <Footer />
</template>
<style lang="scss" scoped>
@use "../src/assets/styles/main.scss" as *;

.my-notification {
  font-size: 200px;
  font-size: 200px;
  .notification-content {
    font-size: 200px;
  }
  &.success {
    font-size: 200px;
    background-color: green;
  }
  &.info {
    font-size: 200px;
  }
  &.error {
    font-size: 200px;
  }
}
.notification-title {
  font-size: 200px !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-out;
}

.fade-enter-from {
  transform: translateY(100vh);
  opacity: 0;
}

.fade-leave-to {
  transform: translateY(0vh);
  opacity: 0;
  transition: all 0.3s ease-out;
}

.form-feedback__show {
  display: block;
  opacity: 1;
}
.header {
  margin-bottom: 2px;
  // &::after {
  //   content: "";
  //   width: 100%;
  //   height: 2px;
  //   position: absolute;
  //   background-color: #ea5b0c;
  // }
  &__container {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    position: relative;
    width: 100%;
    min-height: 116px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    @media (max-width: $md4) {
      min-height: 110px;
    }
  }

  &__logo {
    display: flex;
    margin: 0 auto;
    align-items: center;
    @media (max-width: $md2) {
      position: absolute;
      left: 0;
      width: 100%;
      justify-content: center;
    }
    @media (max-width: $md4) {
      position: absolute;
      left: 0;
      width: 100%;
      justify-content: center;
    }
  }
  &__block {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    @media (max-width: $md2) {
      gap: 0;
    }
  }
  &__nav {
    @media (max-width: $md2) {
      display: none;
    }
  }
  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    @media (max-width: $md2) {
      gap: 14px;
    }
  }
}
.menu__logo {
  display: flex;
  width: 100%;
  justify-content: center;
}
.logo {
  &__img {
    height: 100px;
    // background-color: linear-gradient(90deg, #ea5b0c, #ff8c42);
    @media (max-width: $md4) {
      height: 95px;
      margin-left: 0px;
    }
  }
}
.menu {
  &-mobile {
    z-index: 10;
    transform: translate(0px, -100%);
    transition: transform 0.8s ease 0s;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: auto;
    padding: 15px 10px 30px 10px;
    background-color: rgba(255, 255, 255, 1);
    @media (max-width: $md2) {
      &._active {
        transform: translate(0px, 0%);
      }
    }

    &__body {
      padding-top: 20px;
    }
    &__item {
      margin: 0px 0px 20px 0px;
      &_header {
        display: flex;
        align-items: center;
        gap: 5px;
        background-color: #f0f4f9;
        padding: 8px 5px 7px 8px;
        border-radius: 6px;
        margin-bottom: 10px;
      }
      &-icon {
        width: 24px;
        height: 24px;
      }
      &-title {
        font-size: 19px;
        font-weight: 500;
        margin: 0px 0px 0px 0px;
      }
      &_body {
        display: flex;
        flex-wrap: wrap;

        &-link {
          width: 100%;
          padding-left: 15px;
          margin: 0px 0px 3px 0px;
        }
      }
    }
  }
  &__header {
    position: relative;
    display: flex;
    justify-content: left;
  }
}
.burger__item {
  @media (max-width: $md2) {
    position: absolute;
    top: 40%;
    left: 3%;
    &._right {
      left: 90%;
      @media (max-width: $md4) {
        left: 85%;
      }
    }
  }
}

.feedback-mobile {
  margin-top: 8px;
  &__text {
    font-size: 10px;
  }
}
.contacts-mobile {
  gap: 15px;
  display: flex;
  &__item {
    width: 50%;
    padding: 10px 2px 10px 2px;
    background: #f0f4f9;
    border-radius: 6px;
  }
  &__link {
    display: flex;
  }
  &__link > .link__icon {
    margin: 0px 10px;
  }
}
.address-mobile {
  background: #f0f4f9;
  border-radius: 6px;
  margin-top: 14px;
  &__text {
    padding: 10px 10px 10px 15px;
  }
}
.mobible-phone__item {
  margin-top: 14px;
  display: flex;
  justify-content: center;
  &-link {
    // font-size: 20px;
    padding: 5px 10px 5px 10px;
    background: #f0f4f9;
    border-radius: 6px;
  }
}
.callback-mobile {
  margin-top: 15px;
  margin-bottom: 10px;
  background: #f0f4f9;
  padding: 10px 10px 10px 15px;
  border-radius: 6px;
  &__form {
    display: flex;
  }
  &-input {
    font-size: 18px;
  }
  &-button {
    border-color: #ea5b0c;
    margin-left: 15px;
  }
}
.nav__list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}
.button,
.nav__item {
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  font-weight: 500;
  font-size: 1.4rem;
  text-align: center;
  cursor: pointer;
}
.nav__link-contacts {
  display: none;
}
.catalog {
  // display: none;
  left: 0;
  bottom: 30px;
  max-width: 1264px;
  width: 100%;
  position: absolute;
  z-index: 100;
  transform: translateY(100%);
}
.nav__arrow {
  position: relative;
}
.nav__link {
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav__arrow .nav__link::after {
  content: "";
  width: 11px;
  height: 10px;
  transition: transform 0.2s;
  background: url(../src/components/icons/link-arrow.svg);
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #102938;
  border-radius: 4px;
  background: #f5f5f5;
  padding: 10px;
}
.nav__button {
  position: relative;
  min-width: 126px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 9px 18px 9px 18px;
  box-shadow: 1px 1px 3px 0px rgba(34, 60, 80, 0.18);
}

.list__item {
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: $md4) {
    display: none;
  }
  &.item-phone {
    @media (max-width: $md4) {
      display: block;
      position: absolute;
      right: 4%;
      top: 36%;
    }
  }
}
.link__phone {
  /* font-family: "Roboto Flex"; */
  font-weight: 600;
  font-size: 1.45rem;
  letter-spacing: 0.7px;
  white-space: nowrap;
  @media (max-width: $md2) {
    display: none;
  }
  &-mobile {
    display: none;
    @media (max-width: $md2) {
      display: flex;
    }
    @media (max-width: $md4) {
      position: absolute;
      right: -4px;
      padding: 11.5px;
      background-color: #f5f5f5;
      top: -10px;
      box-shadow: 0.5px 0.5px 1px 0px rgba(34, 60, 80, 0.2);
      border-radius: 6px;
      // margin-right: 10px;
    }
    &:before {
      width: 25px;
      height: 25px;
      content: "";
      background-image: url(../src/assets/icons/header-phone.svg);
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
}
.sub-menu {
  display: none;
  position: absolute;
  left: -15px;
  bottom: 0;
  width: fit-content;
  transform: translateY(100%);
  z-index: 15;
}
.nav__window {
  display: block;
}
.sub-menu__wrap {
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  gap: 30px;
  border-radius: 9px;
  padding: 30px;
  background-color: white;
  box-shadow: 0 4px 28px 0 rgba(0, 60, 92, 0.08);
  margin-top: 18px;
}
.sub-menu__list {
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  text-align: left;
}
.sub-menu__item {
  min-width: 150px;
  width: 100%;
}
.sub-menu__link {
  font-size: 1.2rem;
  display: flex;
  width: 100%;
  color: #102938;
}
.sub-menu__blog {
  position: relative;
  min-width: 150px;
  max-height: 100%;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
}
.sub-menu__blog::before {
  position: absolute;
  content: "";
  top: 0;
  left: -30px;
  width: 1px;
  height: 100%;
  background: #e8eaec;
}
.blog {
  width: 100%;
}
.blog__wrap {
  align-items: flex-start;
  justify-content: stretch;
  gap: 10px;
  flex-direction: column;
  display: flex;
}
.blog__title {
  font-weight: 700;
  font-size: 1.2rem;
  color: #102938;
}
.blog__description {
  font-size: 1rem;
  font-weight: 400;

  text-align: left;
  color: #102938;
  white-space: normal;
}
.blog__links {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15px;
  margin-top: 5px;
  width: 100%;
}
.blog__link {
  width: 34px;
  height: 34px;
}
.youtube-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  align-items: center;
  column-gap: 8px;
  background-color: #102938;
  color: #fff;
  border-radius: 4px;
  padding: 8px 0;
  cursor: pointer;
}

.nav__burger {
  display: block;
  position: relative;
  width: 26px;
  height: 20px;
  cursor: pointer;
  z-index: 11;
  span {
    transition: all 0.3s ease 0s;
    top: calc(50% - 1px);
    left: 0px;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #ea5b0c;
    &:first-child {
      top: 0px;
    }
    &:last-child {
      top: auto;
      bottom: 0px;
    }
  }
  &._active {
    span {
      z-index: 1;
      transform: scale(0);
      &:first-child {
        transform: rotate(-45deg);
        top: calc(50% - 1px);
      }
      &:last-child {
        transform: rotate(45deg);
        bottom: calc(50% - 1px);
      }
    }

    @media (max-width: $md4) {
      width: 20px;
      &::after {
        position: relative;
        display: block;
        content: "";
        top: -50%;
        left: -50%;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background-color: #f5f5f5;
      }
    }
  }
}

.burger,
.burger-md {
  display: block;
  position: absolute;
  left: 10px;
  top: calc(33%);
  width: 30px;
  height: 20px; //48 - 20 = 30 / 2 = 15 54 - 100 17 - x
  cursor: pointer;
  z-index: 11;
  @media (max-width: $md4) {
    width: 27px;
  }
  span {
    transition: all 0.3s ease 0s;
    top: calc(50% - 1px);
    left: 0px;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #ea5b0c;
    &:first-child {
      top: 0px;
    }
    &:last-child {
      top: auto;
      bottom: 0px;
    }
  }
  &._active {
    span {
      z-index: 1;
      transform: scale(0);
      &:first-child {
        transform: rotate(-45deg);
        top: calc(50% - 1px);
      }
      &:last-child {
        transform: rotate(45deg);
        bottom: calc(50% - 1px);
      }
    }

    @media (max-width: $md4) {
      width: 20px;
      &::after {
        position: relative;
        display: block;
        content: "";
        top: -50%;
        left: -50%;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background-color: #f5f5f5;
      }
    }
  }
}

.burger-md::after {
  @media (max-width: $md4) {
    content: "";
    width: 48px; //22.5
    height: 48px;
    position: absolute;
    top: -14px;
    left: -10.5px;
    background-color: #f5f5f5;
    z-index: -1;
    border-radius: 6px;
    box-shadow: 0.5px 0.5px 1px 0px rgba(34, 60, 80, 0.2);
  }
}

/// navigationcatalog
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
      // padding-bottom: 20px;
      padding-top: 20px;

      width: 100%;
      &_header {
        text-align: left;
        padding: 8px 10px;
        display: flex;
        align-items: center;
        color: #102938;
        font-size: 24px;
        font-weight: 500;
        border-bottom: 1px solid #e8eaec;
        margin-bottom: 12px;
        &-icon {
          width: 30px;
          min-width: 20px;
          height: 30px;
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
    display: flex;
    align-items: center;
    transition: border-radius 0.3s, background 0.3s;
    &:hover {
      border-radius: 6px;
      background: #f5f5f5;
    }
  }
  &__link {
    padding: 6px 10px;
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
</style> -->

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { defineAsyncComponent, onMounted, onBeforeUnmount } from "vue";
import { ROUTES_PATHS } from "./constants";
import { reactive } from "vue";
import { useDisplay } from "vuetify";
import { sendTextMessage } from "./services/botService";
import { toggleBodyScroll } from "./assets/js/utils/toggleBodyScroll.js";
import Footer from "./components/Footer.vue";
import logo from "../src/assets/icons/logo-foot.svg";

const { mobile } = useDisplay();
const route = useRoute();
const router = useRouter();
const catalogMenu = ref(false);
const mobileMenu = ref(false);
const isScrolled = ref(false);
const mobMenu = reactive({
  value: false,
});
const catMenu = reactive({
  value: false,
});

watch(mobMenu, (newX) => {
  if (newX.value) {
    toggleBodyScroll(true);
  } else {
    toggleBodyScroll(false);
  }
});

const phone = ref("");
const showSuccessSnackbar = ref(false);
const showErrorSnackbar = ref(false);
const form = ref(null);

const phoneRules = [
  (v) => !!v || "Телефон обязателен",
  (v) => /^[\d\+][\d\(\)\ -]{4,14}\d$/.test(v) || "Введите корректный номер телефона",
];

const message = computed(() => {
  const myText = `👨🏻 Заказ звонка\nТелефон: ${phone.value}\nСтраница: ${routeMetaTitle.value}`;
  return {
    chat_id: CHATS_ID.BASE_DEV,
    topic_id: TOPICS_ID.DEV,
    text: myText,
  };
});

async function submit() {
  const { valid } = await form.value.validate();

  if (!valid) {
    showErrorSnackbar.value = true;
    return;
  }

  try {
    await sendTextMessage(message.value);
    showSuccessSnackbar.value = true;
    phone.value = "";
    form.value.reset();
  } catch (error) {
    console.error("Ошибка отправки:", error);
    showErrorSnackbar.value = true;
  }
}

const services = [
  {
    title: "Главная",
    route: ROUTES_PATHS.HOME,
    icon: "mdi-home",
  },
  {
    title: "Проект участка и топографическая съемка",
    route: ROUTES_PATHS.TOPOGRAPHY,
    icon: "mdi-map-marker-path",
  },
  {
    title: "Свайный фундамент",
    route: ROUTES_PATHS.FAUNDATION,
    icon: "mdi-home-group",
  },
  {
    title: "Септик под ключ",
    route: ROUTES_PATHS.DEVELOP,
    icon: "mdi-pipe",
  },
  {
    title: "Водоподготовка и система очистки воды",
    route: ROUTES_PATHS.WATER,
    icon: "mdi-water",
  },
  {
    title: "Дренаж и ливневая канализация",
    route: ROUTES_PATHS.DRAINAGE,
    icon: "mdi-hydro-power",
  },
  {
    title: "Электромонтаж и освещение участка",
    route: ROUTES_PATHS.ELECTRICITY,
    icon: "mdi-flash",
  },
  {
    title: "Благоустройство",
    route: ROUTES_PATHS.DEVELOP,
    icon: "mdi-tree",
  },
  {
    title: "Установка заборов",
    route: ROUTES_PATHS.FENCE,
    icon: "mdi-fence",
  },
  {
    title: "БИС Сервис",
    route: ROUTES_PATHS.SERVICE,
    icon: "mdi-cog",
  },
];

const serviceItems = [
  "Обслуживание ЛОС",
  "Обслуживание бойлеров",
  "Обслуживание системы водоочистки",
  "Обслуживание системы водоподготовки",
  "Обслуживание электросетей",
  "ТО и сервис генераторов",
  "Разморозка водопровода",
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
  if (catMenu.value) {
    catMenu.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <v-app>
    <v-app-bar
      color="white"
      elevation="2"
      height="100"
      :class="{ 'app-bar--hidden': isScrolled }"
      class="border-b-2 border-orange-darken-2 fixed-header"
      hide-on-scroll
      scroll-threshold="100"
    >
      <v-container class="d-flex align-center">
        <v-app-bar-nav-icon class="hidden-md-and-up" @click="mobMenu.value = !mobMenu.value" size="x-large" />

        <v-img
          :src="logo"
          @click="router.push('/')"
          alt="Благоустройство и инженерные сети"
          max-width="200"
          class="mx-auto mx-md-0"
          contain
        />

        <v-menu v-model="catMenu.value" :close-on-content-click="false" transition="slide-y-transition" offset-y>
          <template #activator="{ props }">
            <v-btn v-bind="props" variant="flat" color="orange-darken-2" class="ml-12 hidden-sm-and-down catalog-btn" size="x-large">
              <template #prepend>
                <v-icon icon="mdi-menu" size="x-large" />
              </template>
              Каталог
              <v-icon icon="mdi-chevron-down" class="ml-2" />
            </v-btn>
          </template>

          <v-card width="600" class="pa-4 mt-3">
            <v-list lines="two">
              <v-list-subheader class="text-h6 font-weight-bold text-orange-darken-2"> Все услуги </v-list-subheader>

              <v-list-item
                v-for="(service, index) in services"
                :key="index"
                :value="service"
                :to="service.route"
                active-class="bg-grey-lighten-4"
                @click="catMenu.value = false"
              >
                <template #prepend>
                  <v-icon :icon="service.icon" size="32" class="mr-4 text-orange-darken-2" />
                </template>

                <v-list-item-title class="font-weight-medium">
                  {{ service.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
        <div class="ml-auto d-flex align-center gap-3">
          <v-btn
            icon="mdi-whatsapp"
            color="orange-darken-2"
            variant="text"
            size="x-large"
            class="hidden-sm-and-down mr-4"
            href="https://wa.me/79112775607"
            target="_blank"
          />
          <v-btn v-if="!mobile" variant="flat" color="orange-darken-2" prepend-icon="mdi-phone" href="tel:+79112775607">
            +7 911 277-56-07
          </v-btn>
        </div>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer v-model="mobMenu.value" temporary location="left" width="320" class="mobile-menu">
      <v-list density="compact">
        <v-list-item class="px-2 pt-3">
          <template #append>
            <v-btn icon="mdi-close" variant="text" @click="mobMenu.value = false" class="ml-auto" size="x-large" />
          </template>
        </v-list-item>

        <v-list-group value="mobile-services">
          <template #activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi-tools" title="Каталог" class="font-weight-bold text-subtitle-1" />
          </template>

          <v-list-item v-for="(service, index) in services" :key="index" :to="service.route" @click="mobMenu.value = false" class="pl-8">
            <template #prepend>
              <v-icon :icon="service.icon" size="24" class="mr-0 text-orange-darken-2" />
            </template>
            <span class="text-body-2">{{ service.title }}</span>
          </v-list-item>
        </v-list-group>
        <v-divider class="my-4" />

        <v-card variant="outlined" class="ma-2 pa-4">
          <v-form ref="form" @submit.prevent="submit">
            <v-text-field
              v-model="phone"
              label="Ваш телефон"
              variant="outlined"
              density="comfortable"
              prepend-inner-icon="mdi-phone"
              :rules="phoneRules"
              required
            />

            <v-btn
              block
              style="background: linear-gradient(90deg, #ea5b0c, #ff8c42)"
              color="orange-darken-2"
              size="large"
              prepend-icon="mdi-arrow-right"
              type="submit"
            >
              Заказать звонок
            </v-btn>

            <div class="text-caption text-grey mt-2">
              Нажимая кнопку, вы соглашаетесь с
              <router-link :to="{ name: ROUTES_PATHS.POLICY }" class="text-orange-darken-2"> политикой конфиденциальности </router-link>
            </div>
          </v-form>
        </v-card>
        <v-card variant="outlined" class="ma-2 pa-4">
          <div class="text-body-1 font-weight-bold mb-2">Контакты</div>

          <div class="d-flex align-center justify-space-between gap-2">
            <div class="text-caption text-grey">
              г. Санкт-Петербург<br />
              Ежедневно с 9 до 18 часов
            </div>
            <v-btn icon="mdi-whatsapp" color="green" href="https://wa.me/79112775607" target="_blank" />
          </div>
        </v-card>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <div :key="route.name">
            <component :is="Component"></component>
          </div>
        </transition>
      </router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<style lang="scss" scoped>
.v-list-group__items .v-list-item {
  padding-inline-start: 24px !important;
}
.app-bar--hidden {
  transform: translateY(-100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.v-app-bar {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease, box-shadow 0.3s ease;

  &.v-toolbar--prominent {
    height: 100px !important;
  }
}

.catalog-btn {
  background: linear-gradient(90deg, #ea5b0c, #ff8c42);
  letter-spacing: 0.5px;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(234, 91, 12, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(234, 91, 12, 0.2);
  }

  .v-icon {
    transition: transform 0.3s ease;
  }

  &[aria-expanded="true"] .v-icon {
    transform: rotate(180deg);
  }
}

.mobile-menu {
  .v-list-item__prepend {
    margin-inline-end: 12px;
  }

  .v-list-group__items .v-list-item {
    min-height: 48px;
  }

  .v-list-item--active {
    background: rgba(234, 91, 12, 0.05);
    border-left: 3px solid #ea5b0c;
  }
}

@media (max-width: 960px) {
  .v-app-bar {
    height: 100px !important;

    .v-toolbar__content {
      padding: 0 16px !important;
    }

    .v-img {
      max-width: 190px !important;
    }

    .v-btn--icon {
      width: 44px;
      height: 44px;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.app-bar--hidden {
  transform: translateY(-100%) !important;
}

.mobile-menu {
  .v-list-item__prepend {
    margin-inline-end: 12px;
  }
}

@media (max-width: 960px) {
  .v-app-bar {
    .v-toolbar__content {
      align-items: center !important;
    }

    .v-img {
      margin: 0 auto !important;
    }
  }

  .mobile-menu {
    top: 80px !important;
    height: calc(100% - 80px) !important;
  }
}
</style>
