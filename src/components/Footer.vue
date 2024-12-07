<template>
  <footer class="footer mt-12">
    <div class="footer__content container columns-4">
      <div class="footer__social">
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
          class="social__item address"
          target="_blank"
          href=""
          itemprop="address"
          itemscope
          itemtype=""
        >
          <div class="flex">
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
    </div>
    <hr class="divider" />
    <div class="footer__copy">Copyright ©2025 All rights reserved</div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 30px 0px 20px 0px;
  background-color: #f5f5f5;
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
