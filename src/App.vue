<script setup>
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import NavigationCatalog from "./components/NavigationCatalog.vue";
</script>
<template>
  <div class="py-2 _container">
    <div class="header">
      <div class="header__block">
        <a class="header__logo logo" href="">
          <img class="logo__img" loading="lazy" width="" height="" src="./assets/icons/logo-bis2.svg" alt="" />
        </a>
        <div @click="burgerMenu()" class="burger-md">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav class="menu-mobile">
          <div class="menu__content">
            <div class="menu__header">
              <div @click="burgerMenu()" class="burger-md burger-md-active _active">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <a class="menu__logo logo" href="">
                <img class="logo__img" loading="lazy" width="" height="" src="./assets/icons/logo-bis2.svg" alt="" />
              </a>
            </div>
            <div class="menu-mobile__body">
              <div class="menu-mobile__item">
                <div class="menu-mobile__item_header">
                  <img class="menu-mobile__item-icon" alt="Услуги" src="./assets/icons/design_services.svg" />
                  <span class="menu-mobile__item-title">Наши услуги</span>
                </div>
                <div class="menu-mobile__item_body">
                  <a class="menu-mobile__item_body-link">Септик под ключ</a>
                  <a class="menu-mobile__item_body-link">Установка заборов</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav class="header__nav nav">
          <ul role="list" class="nav__list">
            <li class="nav__item">
              <button class="nav__button button" @click="catalogVisible()">
                <div class="nav__burger burger">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                Каталог
              </button>
              <div class="catalog" :class="catalogIsVisible === 1 ? 'nav__window' : ''">
                <NavigationCatalog />
              </div>
            </li>
            <li class="nav__item nav__arrow">
              <!-- <div @click="submenuVisible()" class="flex items-center">
                <span class="nav__link">О комании</span>
                <ChevronDownIcon class="size-5" aria-hidden="true" />
              </div> -->

              <div :class="activeMenu === 1 ? 'nav__window' : ''" class="sub-menu">
                <div class="sub-menu__wrap">
                  <ul class="sub-menu__list">
                    <li class="sub-menu__item">
                      <a class="sub-menu__link" href="">О нас</a>
                    </li>
                    <li class="sub-menu__item">
                      <a class="sub-menu__link" href="">Отзывы</a>
                    </li>
                    <li class="sub-menu__item">
                      <a class="sub-menu__link" href="">Наши видео</a>
                    </li>
                    <li class="sub-menu__item">
                      <a class="sub-menu__link" href="">Доставка</a>
                    </li>
                    <li class="sub-menu__item">
                      <a class="sub-menu__link" href="">Оплата</a>
                    </li>
                    <li class="sub-menu__item">
                      <a class="sub-menu__link" href="">Гарантии</a>
                    </li>
                    <li class="sub-menu__item">
                      <a class="sub-menu__link" href="">Полезное</a>
                    </li>
                    <li class="sub-menu__item">
                      <a class="sub-menu__link" href="">Вакансии</a>
                    </li>
                  </ul>
                  <div class="sub-menu__blog blog">
                    <div class="blog__wrap blog__wrap_positioned">
                      <span class="blog__title">БИС: про жизнь за городом</span>
                      <p class="blog__description">Наш блог c полезным контентом для тех, кто живет за городом</p>
                      <div class="blog__links">
                        <a class="blog__link" href="" target="_blank">
                          <img
                            loading="lazy"
                            width="34"
                            height="34"
                            src="../src/assets/icons/blog-telegram.svg"
                            alt="Иконка Telegram"
                            class="blog__icon"
                          />
                        </a>
                        <a class="blog__link" href="" target="_blank">
                          <img
                            loading="lazy"
                            width="34"
                            height="34"
                            src="../src/assets/icons/blog-vk.svg"
                            alt="Иконка Вконтакте"
                            class="blog__icon"
                          />
                        </a>
                        <a class="blog__link" href="" target="_blank">
                          <img
                            loading="lazy"
                            width="34"
                            height="34"
                            src="../src/assets/icons/blog-dzen.svg"
                            alt="Иконка Дзен"
                            class="blog__icon"
                          />
                        </a>
                      </div>
                    </div>
                    <div class="blog__wrap blog__wrap_positioned">
                      <span class="blog__title">Мы на YouTube</span>
                      <p class="blog__description">Канал БИС про жизнь за городом</p>
                      <a target="_blank" href="" class="youtube-btn">
                        <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M23.5002 2.82667C23.2236 1.81191 22.4116 1.01446 21.3783 0.742827C19.5054 0.25 12 0.25 12 0.25C12 0.25 4.49457 0.25 2.62364 0.742827C1.59039 1.01446 0.7784 1.81191 0.501811 2.82667C0 4.6641 0 8.5 0 8.5C0 8.5 0 12.3359 0.501811 14.1733C0.7784 15.1881 1.59039 15.9855 2.62364 16.2572C4.49457 16.75 12 16.75 12 16.75C12 16.75 19.5054 16.75 21.3764 16.2572C22.4096 15.9855 23.2216 15.1881 23.4982 14.1733C24 12.3359 24 8.5 24 8.5C24 8.5 24 4.6641 23.4982 2.82667H23.5002Z"
                            fill="#FF0000"
                          ></path>
                          <path d="M9.60059 12.0352V4.96484L15.8377 8.5L9.60059 12.0352Z" fill="white"></path>
                        </svg>
                        <span>Подписаться</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <!-- Дополнить класс выше -->
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
          <!-- <li class="list__item"></li> -->
          <li class="list__item">
            <a class="list__item link__phone" href="tel:+7 981 937-13-76"> +7 981 999-99-96 </a>
            <a class="list__item link__phone-mobile" href="tel:+7 981 937-13-76"> </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <router-view />
</template>
<style lang="scss" scoped>
@use "../src/assets/styles/app.scss" as c;

// .swiper {
//   width: 600px;
//   height: 300px;
// }
.header {
  position: relative;
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  &__logo {
    display: flex;
    align-items: center;
    @media (max-width: c.$md2) {
      position: absolute;
      left: 38%;
    }
    @media (max-width: c.$md4) {
      position: absolute;
      left: 29%;
    }
  }
  &__block {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    align-items: center;
  }
  &__block-links {
    @media (max-width: c.$md4) {
      margin-right: 4px;
    }
  }
  &__nav {
    @media (max-width: c.$md2) {
      display: none;
    }
  }
  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    @media (max-width: c.$md2) {
      gap: 14px;
    }
  }
}
.logo {
  // width: 186px;
  // height: 39px;
  &__img {
    height: 40px;
    @media (max-width: c.$md4) {
      height: 30px;
    }
  }
}
.menu {
  &-mobile {
    display: none;
    @media (max-width: c.$md2) {
      z-index: 10;
      transform: translate(0px, -100%);
      transition: transform 0.8s ease 0s;
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      overflow: auto;
      padding: 33px 10px 30px 10px;
      background-color: rgba(255, 255, 255, 1);
      &._active {
        transform: translate(0px, 0%);
        display: block;
      }
    }
    &__body {
      padding-top: 20px;
    }
    &__item {
      margin: 0px 0px 300px 0px;
      &_header {
        display: flex;
        align-items: center;
        gap: 5px;
      }
      &-icon {
        width: 24px;
        height: 24px;
      }
      &-title {
        font-size: c.$fs-l;
        font-weight: 500;
      }
      &_body {
        display: flex;
        flex-wrap: wrap;
        &-link {
          width: 100%;
        }
      }
    }
  }
  &__content {
  }
  &__header {
    position: relative;
    display: flex;
    justify-content: center;
  }

  // &__link {
  //   font-size: 20px;
  //   font-weight: 500;
  //   transition: color 0.3s ease 0s;
  //   text-decoration: none;
  //   color: #000;
  // }
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
}
.link__phone {
  /* font-family: "Roboto Flex"; */
  font-weight: 600;
  font-size: 1.45rem;
  letter-spacing: 0.7px;
  white-space: nowrap;
  @media (max-width: c.$md2) {
    display: none;
  }
  &-mobile {
    display: none;
    @media (max-width: c.$md2) {
      display: flex;
    }
    &:before {
      width: 20px;
      height: 20px;
      content: "";
      background-image: url(../src/assets/icons/header-new-phone.svg);
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
}
.footer {
  margin-top: 45px;
  background: #f0f4f9;
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
  // top: 18px;
  // right: 10px;
  left: 10px;
  top: calc(36%);
  width: 30px;
  height: 18px;
  cursor: pointer;
  z-index: 5;
  span {
    transition: all 0.3s ease 0s;
    top: calc(50% - 1px);
    left: 0px;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #000;
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
  }
}
.burger-md {
  display: none;
  left: 10px;
  top: calc(42%);
  // z-index: 11;
  @media (max-width: c.$md2) {
    display: block;
  }
}
.burger-md-active {
  top: calc(20%);
  left: 89%;
}
</style>

<script>
import NavigationCatalog from "./components/NavigationCatalog.vue";

export default {
  components: {
    NavigationCatalog,
  },
  name: "App",
  setup() {
    return {};
  },
  data: () => ({
    activeMenu: 0, // Активация меню "О компании"
    catalogIsVisible: 0,
  }),
  methods: {
    // Активация меню "О компании"
    submenuVisible() {
      if (this.activeMenu === 1) {
        this.activeMenu = 0;
      } else {
        this.activeMenu = 1;
      }
    },
    catalogVisible() {
      if (this.catalogIsVisible === 1) {
        this.catalogIsVisible = 0;
      } else {
        this.catalogIsVisible = 1;
      }
      const burger = document.querySelector(".burger");
      if (burger) {
        burger.classList.toggle("_active");
      }
    },
    burgerMenu() {
      const burger = document.querySelector(".burger-md");
      if (burger) {
        const munuBody = document.querySelector(".menu-mobile");
        burger.classList.toggle("_active");
        munuBody.classList.toggle("_active");
      }
    },
  },
  mounted() {
    this.$nextTick(function () {});
  },
};
</script>
