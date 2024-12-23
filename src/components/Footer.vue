<template>
  <section class="footer">
    <div class="footer__header _container">
      <div class="footer-col flex">
        <a class="social__item footer__logo logo" href="/">
          <img class="logo__img" loading="lazy" src="../assets/icons/footer-logo.svg" alt="BIS" />
        </a>
      </div>
      <div class="footer-col flex">
        <div class="social__item phone" href="tel:+7 911 277-56-07">+7 911 277-56-07</div>
      </div>
      <div class="footer-col flex">
        <a class="social__item" target="_blank" href="" itemprop="address" itemscope itemtype="">
          <div class="item__address address">
            <!-- <img class="map__img" loading="lazy" width="" height="" src="../assets/icons/map-marker-radius-outline.svg" alt="" /> -->
            <address class="address__text">г. Санкт-Петербург</address>
          </div>
        </a>
      </div>
      <div class="footer-col flex">
        <div class="social__item work-clock">Ежедневно с 9 до 19 часов</div>
      </div>
    </div>
    <div class="footer__content _container">
      <div class="footer-row flex">
        <div class="footer-col">
          <div class="social-icons">
            <div class="social-icons__item">
              <a class="link__telegram" href="/" target="_blank">
                <img
                  class="link__icon"
                  loading="lazy"
                  width="25"
                  height="25"
                  src="../assets/icons/header-telegram.svg"
                  alt="Иконка Telegram"
                />
              </a>
            </div>
            <div class="social-icons__item">
              <a class="link__whatsup" href="/" target="_blank">
                <img
                  class="link__icon"
                  loading="lazy"
                  width="25"
                  height="25"
                  src="../assets/icons/header-whatsapp.svg"
                  alt="Иконка WhatsApp"
                />
              </a>
            </div>
          </div>
          <div class="footer__title footer__title-text">БИС: Инженерные системы и благоустройство участка</div>
          <div class="footer__legal">
            <div class="legal__item">
              <router-link class="item-policy" :to="{ name: 'PolicyView' }"> Политика конфиденциальности</router-link>
            </div>
            <!-- <div class="legal__item">Договор оферта</div> -->
            <!-- <div class="legal__item">Карта сайта</div> -->
          </div>
        </div>
        <div class="footer-col services">
          <div class="services__header">Услуги</div>
          <div class="services__item">Проект участка</div>
          <div class="services__item">Топографическая съемка</div>
          <div class="services__item">Септик под ключ</div>
          <div class="services__item">Водоснабжение</div>
          <div class="services__item">Система очистки воды</div>
          <div class="services__item">Свайный фундамент</div>
          <div class="services__item">Установка заборов</div>
          <div class="services__item">Ливневая канализация</div>
          <div class="services__item">Дренаж</div>
          <div class="services__item">Благоустройство</div>
          <div class="services__item">Электромонтажные работы</div>
          <div class="services__item">Освещение участка</div>
        </div>
        <div class="footer-col service">
          <div class="service__header">Сервис</div>
          <div class="service__item">Обслуживание ЛОС</div>
          <div class="service__item">Обсуживание бойлеров</div>
          <div class="service__item">Система водоочистки</div>
          <div class="service__item">Система водоподготовки</div>
          <div class="service__item">Система водоснабжения</div>
          <div class="service__item">Уборка участка</div>
          <div class="service__item">ТО и сервис генераторов</div>
          <div class="service__item">Уход за газоном</div>
          <div class="service__item">Разморозка водопровода</div>
        </div>
        <!-- <div class="footer-col"></div> -->
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/app.scss" as c;
._container {
}
.footer {
  position: relative;
  margin-top: 50px;
  margin-bottom: 40px;

  padding: 0px 0px;
  @media (max-width: c.$md1) {
    padding: 30px 0px 30px 0px;
  }
  @media (max-width: c.$md4) {
    margin: 10px 0px 0px 0px;
    padding: 20px 0px 20px 0px;
  }
  &__header {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding-top: 353px; // 353px
    padding-bottom: 20px;
    color: #fff;
    @media (max-width: c.$md1) {
      padding-top: 21.5rem;
    }
    @media (max-width: c.$md2) {
      padding-top: 15rem;
    }
    @media (max-width: c.$md3) {
      padding-top: 13rem;
    }
    @media (max-width: c.$md4) {
      padding-top: 10rem;
      padding-bottom: 0px;
    }
    // margin-bottom: 30px;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-image: url("../assets/icons/fotter-wrap+3.svg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center top;
      z-index: -2;
    }
    // @media (max-width: c.$md4) {
    //   &::before {
    //     content: "";
    //     width: 100%;
    //     height: 0;
    //     padding-top: 50%;
    //     background: url(../assets/icons/logo-foot-6+.svg) center / contain no-repeat;
    //   }
    // }
  }
  &__content {
    display: flex;
    background-color: rgb(255, 102, 0);
    padding-bottom: 40px;
    padding-top: 25px;
    // border-radius: 8px;
  }
  &__title {
    padding-left: 20px;
    margin: 0px 0px 25px 0px;
    &-text {
      color: #fff;
      font-size: 18px;
      font-weight: 500;
    }
  }
  &__legal {
    padding-left: 20px;
  }
  &-col {
    width: 25%;
    // display: flex;
    //align-self: center;

    // @media (max-width: c.$md4) {
    //   display: none;
    // }
  }
  &-row {
    width: 100%;
  }
  &__logo {
    padding-left: 20px;
    @media (max-width: c.$md4) {
      display: none;
    }
  }
}
.item-policy {
  color: #fff;
}
.social-icons {
  display: flex;
  gap: 20px;
  width: 100%;
  padding-left: 20px;
  margin-bottom: 15px;
  &__item {
    position: relative;
  }
}
.link__telegram {
  // &::before {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   content: "";
  // }
}
.link__whatsup {
  // &::before {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   content: "";
  //   padding: 12.5px;
  //   background-color: #fff;
  // }
}
.services {
  &__header {
    font-size: 20px;
    font-weight: 500;
    color: #fff;
  }
  &__item {
    color: #fff;
    font-size: 17px;
    padding: 2px 0px;
  }
}
.service {
  &__header {
    font-size: 20px;
    font-weight: 500;
    color: #fff;
  }
  &__item {
    color: #fff;
    font-size: 17px;
    padding: 2px 0px;
  }
}
.map__img {
  margin: 0px 8px 0px 0px;
  @media (max-width: c.$md4) {
    height: 20px;
  }
}

.phone {
  font-weight: 500;
}

.divider {
  opacity: 0.3;
}
.social__item {
  font-size: 1.3em;
  font-style: normal;
  display: flex;
  align-self: center;
  &.item__address {
    display: flex;
  }
  .address {
    @media (max-width: c.$md2) {
      display: none;
    }
  }
  &.phone {
    @media (max-width: c.$md2) {
      display: none;
    }
  }
  &.work-clock {
    @media (max-width: c.$md2) {
      display: none;
    }
  }
}

.phone {
  @media (max-width: c.$md4) {
    display: none;
  }
}
.work-clock {
  @media (max-width: c.$md4) {
    display: none;
  }
}
.address__text {
  font-style: normal;
  @media (max-width: c.$md4) {
    font-size: c.$fs-s;
  }
}
.logo {
  &__img {
    height: 100px;
  }
  @media (max-width: c.$md2) {
    &__img {
      // height: 100px;
      display: none;
    }
  }
}
</style>
