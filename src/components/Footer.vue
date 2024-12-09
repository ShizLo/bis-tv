<template>
  <section class="footer">
    <footer>
      <div class="footer__content _container ">
        <a class="social__item footer__logo logo">
          <img class="logo__img" loading="lazy" src="../assets/icons/logo-bis2.svg" alt="BIS" />
        </a>
        <div class="social__item phone" href="tel:+7 999 999-99-99">
          +7 999 999-99-99
        </div>
        <a class="social__item address" target="_blank" href="" itemprop="address" itemscope itemtype="">
          <div class="flex">
            <img class="map__img" loading="lazy" width="" height="" src="../assets/icons/map-marker-radius-outline.svg"
              alt="" />
            <address class="address__text">г. Санкт-Петербург</address>
          </div>
        </a>
        <div class="social__item work-clock">Ежедневно с 9 до 18 часов</div>

      </div>
      <hr class="divider" />
      <div class="footer__copy">Copyright ©2025 All rights reserved</div>
    </footer>121519222630 0205
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/app.scss" as c;

.footer {
  padding: 30px 0px 20px 0px;
  background-color: #f5f5f5;
  margin-top: 45px;
}

.footer__content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap-reverse;
  gap: 10px;

  @media (max-width: c.$md3) {
    gap: 20px;
  }

  @media (max-width: c.$md4) {
    flex-wrap: wrap;
  }
}

@media (max-width: 1279px) {
  .footer {
    padding: 30px 0px 30px 0px;
  }
}

.map__img {
  margin: 0px 8px 0px 0px;
}

.phone {
  font-weight: 500;
}

.divider {
  opacity: 0.3;
}

.footer__content {
  margin-bottom: 30px;
}

.social__item {
  font-size: 1.3em;
  font-style: normal;
}

.address__text {
  font-style: normal;
}

.footer__copy {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
</style>
