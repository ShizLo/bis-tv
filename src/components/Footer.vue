<template>
  <section class="footer">
    <footer>
      <div class="footer__content _container">
        <a class="social__item footer__logo logo">
          <img
            class="logo__img"
            loading="lazy"
            src="../assets/icons/logo-bis2.svg"
            alt="BIS"
          />
        </a>
        <div class="social__item phone" href="tel:+7 999 999-99-99">
          +7 999 999-99-99
        </div>
        <a
          class="social__item"
          target="_blank"
          href=""
          itemprop="address"
          itemscope
          itemtype=""
        >
          <div class="item__address address">
            <img
              class="map__img"
              loading="lazy"
              width=""
              height=""
              src="../assets/icons/map-marker-radius-outline.svg"
              alt=""
            />
            <address class="address__text">г. Санкт-Петербург</address>
          </div>
        </a>
        <div class="social__item work-clock">Ежедневно с 9 до 18 часов</div>
      </div>
      <hr class="divider" />
      <div class="footer__copy">Copyright ©2025 All rights reserved</div>
    </footer>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/app.scss" as c;

.footer {
  padding: 30px 0px 20px 0px;
  background-color: c.$color-background;
  margin-top: 45px;
  @media (max-width: c.$md1) {
    padding: 30px 0px 30px 0px;
  }
  @media (max-width: c.$md4) {
    padding: 20px 0px 20px 0px;
  }
  &__content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap-reverse;
    gap: 10px;
    margin-bottom: 30px;
    @media (max-width: c.$md3) {
      gap: 5px;
    }
    @media (max-width: c.$md4) {
      flex-wrap: wrap;
      gap: 0;
      // justify-content: flex-start;
      margin-bottom: 10px;
    }
  }
  &__copy {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    @media (max-width: c.$md4) {
      margin-top: 20px;
      font-size: c.$fs-s;
    }
  }
  &__logo {
    @media (max-width: c.$md4) {
      width: 100%;
      margin: 0px 0px 0px 0px;
      justify-content: center;
    }
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

  .item__address {
    display: flex;
    @media (max-width: c.$md4) {
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
  @media (max-width: c.$md4) {
  }
  &__img {
    height: 30px;
  }
}
</style>
