<script setup>
import NavigationCatalog from "./components/NavigationCatalog.vue";
import Footer from "./components/Footer.vue";
import Form from "./components/Form/Form.vue";
import { useRouter, useRoute } from "vue-router";
import { ref, watch } from "vue";
import { reactive, computed } from "vue";
import { ROUTES_PATHS } from "./constants";

const route = useRoute();
const router = useRouter();
const path = ref(computed(() => route.path)); // Отслеживает путь
let formIsVisible = ref(0);

const catalog = reactive({
  active: false,
});

watch(path, (newX) => {
  console.log(router.options.history.state.back);
  console.log(newX);
  console.log(catalog.active);

  if (router.options.history.state.back != newX && catalog.active == true) {
    console.log("Скрфть");
    clickMenu();
  }
});

function clickMenu() {
  if (catalog.active == true) {
    catalog.active = false;
  } else {
    catalog.active = true;
  }
  const burger1 = document.querySelector(".burger");
  if (burger1) {
    burger1.classList.toggle("_active");
  }
  const burger = document.querySelector(".burger-md");
  if (burger) {
    const munuBody = document.querySelector(".menu-mobile");
    const burgerItem = document.querySelector(".burger__item");
    burger.classList.toggle("_active");
    munuBody.classList.toggle("_active");
    burgerItem.classList.toggle("_right");
  }
  console.log(catalog.active);
}
function toggleBodyScroll(lock) {
  document.body.style.overflow = lock ? "hidden" : "";
  document.getElementById("nav__button").style.zIndex = lock ? "-1" : "";
  document.getElementById("nav__button").style.overflow = lock ? "hidden" : "";
}
function formVisible() {
  const burger1 = document.querySelector(".burger");
  if (formIsVisible.value === 1) {
    formIsVisible.value = 0;
    toggleBodyScroll(false);
  } else {
    formIsVisible.value = 1;
    toggleBodyScroll(true);
    if (catalog.active == true) {
      if (burger1) {
        burger1.classList.toggle("_active");
        // catalog.active = true;
      }
    } else {
      burger1.classList.toggle("_active");
      // catalog.active = false;
    }
  }
}

document.addEventListener("click", (e) => {
  const elem = document.getElementById("catalog");
  const elem1 = document.getElementById("nav__button");

  if (!elem.contains(e.target) && !elem1.contains(e.target)) {
    if (catalog.active == true) {
      // catalog.active = false;

      const burger = document.querySelector(".burger");
      if (burger) {
        burger.classList.toggle("_active");
      }
    }
  }
});
</script>

<template>
  <section class="header">
    <Form :class="formIsVisible === 1 ? 'form-feedback__show' : ''" @someEvent="formVisible" />
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
        <div @click="clickMenu" class="burger__item">
          <div class="burger-md">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <nav class="menu-mobile">
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
                  <a class="menu-mobile__item_body-link">Проект участка</a>
                  <a class="menu-mobile__item_body-link">Вынос границ и топографическая съемка</a>
                  <a class="menu-mobile__item_body-link">Септик под ключ</a>
                  <a class="menu-mobile__item_body-link">Водоснабжение</a>
                  <a class="menu-mobile__item_body-link">Система очистки воды</a>
                  <a class="menu-mobile__item_body-link">Свайный фундамент</a>
                  <router-link class="menu-mobile__item_body-link" :to="{ name: ROUTES_PATHS.FENCE }">Установка заборов</router-link>
                  <a class="menu-mobile__item_body-link">Ливневка и дренаж</a>
                  <a class="menu-mobile__item_body-link">Благоустройство</a>
                  <a class="menu-mobile__item_body-link">Электромонтажные работы</a>
                  <a class="menu-mobile__item_body-link">Освещение участка</a>
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
                <div class="nav__burger burger">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                Каталог
              </button>
              <div id="catalog" class="catalog" :class="catalog.active == true ? 'nav__window' : ''">
                <NavigationCatalog @visible="formVisible" />
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
  &::after {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    background-color: #ea5b0c;
  }
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
    left: 5%;
    &._right {
      left: 90%;
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
  font-weight: 600;
  font-size: 1.45rem;
  text-align: center;
  cursor: pointer;
}
.nav__link-contacts {
  display: none;
}
.catalog {
  display: none;
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
  padding: 11px 20px 11px 50px;
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
      right: 5%;
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

.burger,
.burger-md {
  display: block;
  position: absolute;
  left: 10px;
  top: calc(33%);
  width: 30px;
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
    @media (max-width: $md4) {
      width: 20px;
    }
  }
}
.burger-md {
  display: none;
  left: 40%;
  top: calc(40%);
  // z-index: 11;
  @media (max-width: $md2) {
    display: block;
  }
}
.burger-md-active {
  top: calc(20%);
  left: 89%;
}
</style>
