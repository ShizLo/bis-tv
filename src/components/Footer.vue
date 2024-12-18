<template>
  <section class="footer">
    <div class="footer__content _container">
      <div class="footer-row">
        <a class="social__item footer__logo logo" href="/">
          <img class="logo__img" loading="lazy" src="../assets/icons/logo-svg.svg" alt="BIS" />
        </a>
      </div>
      <div class="footer-row">
        <div class="social__item phone" href="tel:+7 911 277-56-07">+7 911 277-56-07</div>
      </div>
      <div class="footer-row">
        <a class="social__item" target="_blank" href="" itemprop="address" itemscope itemtype="">
          <div class="item__address address">
            <img class="map__img" loading="lazy" width="" height="" src="../assets/icons/map-marker-radius-outline.svg" alt="" />
            <address class="address__text">г. Санкт-Петербург</address>
          </div>
        </a>
      </div>
      <div class="footer-row">
        <div class="social__item work-clock">Ежедневно с 9 до 18 часов</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/app.scss" as c;
._container {
}
.footer {
  // padding: 30px 0px 20px 0px;
  // background-color: c.$color-background;
  margin-top: 50px;
  margin-bottom: 40px;
  @media (max-width: c.$md1) {
    padding: 30px 0px 30px 0px;
  }
  @media (max-width: c.$md4) {
    margin: 10px 0px 0px 0px;
    padding: 20px 0px 20px 0px;
  }
  &__content {
    display: flex;
    justify-content: space-between;

    @media (max-width: c.$md4) {
      &::before {
        content: "";
        width: 100%;
        height: 0;
        padding-top: 50%;
        background: url(../assets/icons/logo-foot-6+.svg) center / contain no-repeat;
      }
    }

    // display: flex;
    // flex-direction: row;
    // justify-content: space-around;
    // align-items: center;
    // flex-wrap: wrap-reverse;
    // gap: 10px;
    // margin-bottom: 30px;
  }
  &-row {
    width: 25%;
    display: flex;
    align-self: center;

    @media (max-width: c.$md4) {
      display: none;
    }
  }
  // &__logo {
  //   @media (max-width: c.$md4) {
  //     width: 100%;
  //     margin: 0px 0px 0px 0px;
  //     justify-content: center;
  //   }
  // }
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
    height: 100px;
  }
}
</style>
