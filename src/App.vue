<script setup>
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
</script>
<template>
  <div class="container py-2">
    <div class="header">
      <div class="header__block">
        <a class="header__logo logo" href="">
          <img
            class="logo__img"
            loading="lazy"
            width=""
            height=""
            src="./assets/icons/logo-bis2.svg"
            alt=""
          />
        </a>
        <nav class="header__nav nav">
          <ul role="list" class="nav__list">
            <li class="nav__item">
              <button class="nav__button button">
                <span id="list_burger" class="nav__burger burger">
                  <span class="burger__line burger__line-first"></span>
                  <span class="burger__line burger__line-second"></span>
                  <span class="burger__line burger__line-third"></span>
                </span>
                Каталог
              </button>
            </li>
            <li class="nav__item nav__arrow">
              <span class="nav__link">О комании</span>
              <ChevronDownIcon class="size-5 mt-1" aria-hidden="true" />
            </li>
            <!-- Дополнить класс выше -->
            <li class="nav__item">
              <a class="nav__link" href="">Контакты</a>
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
          <!-- <li class="list__item"></li> -->
          <li class="list__item">
            <a class="list__item link__phone" href="tel:+7 981 937-13-76">
              +7 981 999-99-96
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- <div>
    <h1 class="text-3xl font-bold underline">Hello world</h1>
  </div> -->
  <router-view />
</template>

<style scoped>
.swiper {
  width: 600px;
  height: 300px;
}
.header {
  position: relative;
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  /* border-bottom: 1px solid #e8eaec; */
}
.header__block {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
}
.header__logo {
  display: flex;
  align-items: center;
}
.logo {
  width: 186px;
  height: 39px;
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
}
.nav__arrow {
  position: relative;
}
.nav__link {
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 10px; */
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
  min-width: 126px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 11px 20px 11px 15px;
}
.burger {
  width: 20px;
  height: 14px;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  position: relative;
}
.burger__line {
  position: absolute;
  width: 20px;
  height: 2px;
  border: none;
  background: #102938;
  border-radius: 2px;
  transition: transform 0.2s, transform-origin 0.2s;
}
.burger__line-first {
  top: 0;
  left: 0;
}
.burger__line-second {
  top: 6px;
  left: 0;
}
.burger__line-third {
  bottom: 0;
  left: 0;
}
.header__list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
.list__item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.link__phone {
  /* font-family: "Roboto Flex"; */
  font-weight: 600;
  font-size: 1.45rem;
  letter-spacing: 0.7px;
  white-space: nowrap;
}
.footer {
  margin-top: 45px;
  background: #f0f4f9;
}
</style>

<script>
// import Swiper from "swiper/bundle";
// import { Navigation, Pagination } from "swiper/modules";

export default {
  components: {},
  name: "App",
  setup() {
    return {};
  },
  data: () => ({
    //
  }),
  mounted() {
    this.$nextTick(function () {});
  },
};
</script>
