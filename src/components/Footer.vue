<script setup>
import { ROUTES_PATHS } from "../constants";
var containers;
function initDrawers() {
  containers = document.querySelectorAll(".footer__menu");
  setHeights();
  wireUpTriggers();
  // window.addEventListener("resize", setHeights); -- Пока не удалять
}

window.addEventListener("load", initDrawers);

function setHeights() {
  containers.forEach((container) => {
    let content = container.querySelector(".menu__items");
    content.removeAttribute("aria-hidden");
    let heightOfContent = content.getBoundingClientRect().height;
    container.style.setProperty("--containerHeight", `${heightOfContent}px`);
    setTimeout((e) => {
      container.classList.add("height-is-set");
      content.setAttribute("aria-hidden", "true");
    }, 0);
  });
}

function wireUpTriggers() {
  containers.forEach((container) => {
    let btn = container.querySelector(".menu__header");
    let content = container.querySelector(".menu__items");
    btn.addEventListener("click", () => {
      container.setAttribute("data-drawer-showing", container.getAttribute("data-drawer-showing") === "true" ? "false" : "true");
      content.setAttribute("aria-hidden", content.getAttribute("aria-hidden") === "true" ? "false" : "true");
    });
  });
}
</script>
<template>
  <section class="footer">
    <div class="footer__body _container">
      <div class="footer__header">
        <div class="footer__column flex">
          <a class="social__item footer__logo logo" href="/">
            <img class="logo__img" loading="lazy" src="../assets/icons/footer-logo.svg" alt="BIS" />
          </a>
        </div>
        <div class="footer__column flex">
          <div class="social__item phone" href="tel:+7 911 277-56-07">+7 911 277-56-07</div>
        </div>
        <div class="footer__column flex">
          <a class="social__item" target="_blank" href="" itemprop="address" itemscope itemtype="">
            <div class="item__address address">
              <address class="address__text">г. Санкт-Петербург</address>
            </div>
          </a>
        </div>
        <div class="footer__column flex">
          <div class="social__item work-clock">Ежедневно с 9 до 19 часов</div>
        </div>
      </div>

      <div class="footer__content">
        <div class="footer-row">
          <div class="footer__column">
            <div class="footer__title footer__title-text">БИС: Благоустройство и инженерные сети</div>
            <div class="footer__legal">
              <div class="legal__item">
                <router-link class="item-policy" :to="{ name: ROUTES_PATHS.POLICY }"> Политика конфиденциальности</router-link>
              </div>
            </div>
          </div>
          <div class="footer__column">
            <div class="footer__menu menu">
              <div class="footer-services">
                <div class="menu__header">Услуги</div>
                <div class="menu__items">
                  <div class="menu__item item-link">
                    <router-link :to="{ name: ROUTES_PATHS.TOPOGRAPHY }">Проект и топографическая съемка</router-link>
                  </div>
                  <div class="menu__item item-link">
                    <router-link :to="{ name: ROUTES_PATHS.FAUNDATION }">Свайный фундамент</router-link>
                  </div>
                  <div class="menu__item item-link">Септик под ключ</div>
                  <div class="menu__item item-link">
                    <router-link :to="{ name: ROUTES_PATHS.WATER }">Водоподготовка и система очистки воды</router-link>
                  </div>
                  <div class="menu__item item-link">
                    <router-link :to="{ name: ROUTES_PATHS.DRAINAGE }">Дренаж и ливневая канализация</router-link>
                  </div>
                  <div class="menu__item item-link">
                    <router-link :to="{ name: ROUTES_PATHS.ELECTRICITY }">Электромонтажные работы</router-link>
                  </div>
                  <div class="menu__item item-link">
                    <router-link :to="{ name: ROUTES_PATHS.ELECTRICITY }">Благоустройство</router-link>
                  </div>
                  <div class="menu__item item-link">
                    <router-link :to="{ name: ROUTES_PATHS.FENCE }">Установка заборов</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer__column">
            <div class="footer__menu menu">
              <div class="menu__header">Сервис</div>
              <div class="menu__items service">
                <div class="menu__item item-link">Обслуживание ЛОС</div>
                <div class="menu__item item-link">Обсуживание бойлеров</div>
                <div class="menu__item item-link">Система водоочистки</div>
                <div class="menu__item item-link">Система водоподготовки</div>
                <div class="menu__item item-link">Система водоснабжения</div>
                <div class="menu__item item-link">Уборка участка</div>
                <div class="menu__item item-link">ТО и сервис генераторов</div>
                <div class="menu__item item-link">Уход за газоном</div>
                <div class="menu__item item-link">Разморозка водопровода</div>
              </div>
            </div>
          </div>
          <div class="footer__column">
            <div class="footer__menu menu">
              <div class="menu__header">Контакты</div>
              <div class="menu__items">
                <a href="/" class="menu__item item-link" target="_blank">
                  <div class="item-link__icon">
                    <img loading="lazy" width="24" height="24" src="../assets/icons/footer-telegram.svg" alt="Иконка Telegram" />
                  </div>
                  <div class="item-link__text">Telegram</div>
                </a>
                <a href="/" class="menu__item item-link" target="_blank">
                  <div class="item-link__icon">
                    <img loading="lazy" width="24" height="24" src="../assets/icons/footer-whatsapp.svg" alt="Иконка Telegram" />
                  </div>
                  <div class="item-link__text">WhatsApp</div>
                </a>
                <a href="/" class="menu__item item-link" target="_blank">
                  <div class="item-link__icon">
                    <img loading="lazy" width="24" height="24" src="../assets/icons/footer-email.svg" alt="Иконка Telegram" />
                  </div>
                  <div class="item-link__text">info@bis-spb.ru</div>
                </a>
              </div>
            </div>
          </div>
          <div class="mobile-footer__coulumn">
            <div class="mobile-legal">
              <div class="mobile-legal__address mobile-address">
                <div class="mobile-address__image">
                  <img class="map__img" loading="lazy" width="" height="" src="../assets/icons/map-marker-radius-outline.svg" alt="" />
                </div>
                <div class="mobile-address__text">г. Санкт-Петербург</div>
              </div>
              <div class="mobile-legal__policy">
                <router-link class="item-policy" :to="{ name: ROUTES_PATHS.POLICY }"> Политика конфиденциальности</router-link>
              </div>
              <div class="mobile-legal__contract">Договор-оферта</div>
              <div class="mobile-legal__contract">Карта сайта</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/footer/footer.scss";
</style>
