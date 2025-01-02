<script>
export default {
  components: {},
  setup() {
    return {};
  },

  data: () => ({}),
  methods: {},
  mounted() {},
  created: function () {},
};
</script>
<template>
  <section class="footer">
    <div class="footer__header _container">
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
            <!-- <img class="map__img" loading="lazy" width="" height="" src="../assets/icons/map-marker-radius-outline.svg" alt="" /> -->
            <address class="address__text">г. Санкт-Петербург</address>
          </div>
        </a>
      </div>
      <div class="footer__column flex">
        <div class="social__item work-clock">Ежедневно с 9 до 19 часов</div>
      </div>
    </div>

    <div class="footer__content _container">
      <div class="footer-row">
        <div class="footer__column">
          <div class="footer__title footer__title-text">
            БИС: Благоустройство и <br />
            инженерные сети
          </div>
          <div class="footer__legal">
            <div class="legal__item">
              <router-link class="item-policy" :to="{ name: 'PolicyView' }"> Политика конфиденциальности</router-link>
            </div>
          </div>
        </div>
        <div class="footer__column">
          <div class="footer__menu menu">
            <div class="menu__header">Услуги</div>
            <div class="menu__items">
              <div class="menu__item">Проект участка</div>
              <div class="menu__item">Топографическая съемка</div>
              <div class="menu__item">Септик под ключ</div>
              <div class="menu__item">Водоснабжение</div>
              <div class="menu__item">Система очистки воды</div>
              <div class="menu__item">Свайный фундамент</div>
              <div class="menu__item">Установка заборов</div>
              <div class="menu__item">Ливневая канализация</div>
              <div class="menu__item">Дренаж</div>
              <div class="menu__item">Благоустройство</div>
              <div class="menu__item">Электромонтажные работы</div>
              <div class="menu__item">Освещение участка</div>
            </div>
          </div>
        </div>
        <div class="footer__column">
          <div class="footer__menu menu">
            <div class="menu__header">Сервис</div>
            <div class="menu__items">
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
                  <img loading="lazy" width="25" height="25" src="../assets/icons/footer-telegram.svg" alt="Иконка Telegram" />
                </div>
                <div class="item-link__text">Telegram</div>
              </a>
              <div class="contacts__item">
                <a class="item-whatsup" href="/" target="_blank">
                  <img
                    class="item-icon"
                    loading="lazy"
                    width="25"
                    height="25"
                    src="../assets/icons/footer-whatsapp.svg"
                    alt="Иконка WhatsApp"
                  />
                  <span class="item-text">WhatsApp</span>
                </a>
              </div>
              <div class="contacts__item">
                <a class="item-whatsup" href="/" target="_blank">
                  <img
                    class="item-icon"
                    loading="lazy"
                    width="25"
                    height="25"
                    src="../assets/icons/footer-mail.svg"
                    alt="Иконка WhatsApp"
                  />
                  <span class="item-text">info@bis-spb.ru</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/footer.scss";
</style>
