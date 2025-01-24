<template>
  <section class="partners content">
    <div class="_container">
      <h2 class="partners__header">Наши партнеры</h2>
      <!-- <div class="columns-3 partners__items"> -->
      <div class="partners__items">
        <div class="partners__item">
          <a class="partners__link" target="_blank" href="https://holtsovhouse.ru/">
            <span class="partners__wrapper">
              <img width="381" height="200" loading="lazy" src="../assets/images/holtsovhouse.webp" alt="" />
            </span>
            <div class="partners__cover">
              <div class="partners__name">HoltsovHouse</div>
            </div>
          </a>
        </div>
        <div class="partners__item">
          <a class="partners__link" target="_blank" href="https://scouthouse.ru/">
            <span class="partners__wrapper">
              <img width="381" height="200" loading="lazy" src="../assets/images/ScoutHouse.webp" alt="" />
            </span>
            <div class="partners__cover">
              <div class="partners__name">ScoutHouse</div>
            </div>
          </a>
        </div>
        <div class="partners__item">
          <a class="partners__link" target="_blank" href="https://novodacha.com/">
            <span class="partners__wrapper">
              <img width="381" height="200" loading="lazy" src="../assets/images/IMG_4429-min.webp" alt="" />
            </span>
            <div class="partners__cover">
              <div class="partners__name">NovoDacha</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;

.partners {
  &__header {
    font-size: $fs-xxl;
    font-weight: 600;
    background: #fff;
    border-radius: 32px;
    padding: 3px 10px;
    color: #102938;
    padding-top: 32px;
    padding-bottom: 16px;
    @media (max-width: $md4) {
      font-size: $fs-xxl;
    }
  }
  &__items {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  &__items &__link {
    flex: 1 1 30%; /*grow | shrink | basis */
    height: 200px;
    @media (max-width: $md4) {
      height: 170px;
    }
  }
  &__item {
    display: flex;
    flex: 1 1 30%;
    margin: 0px 1% 0px 0px;

    &:last-child {
      margin: 0px 0px 0px 0px;
    }
    @media (max-width: $md1) {
      flex: 1 1 48%;
      margin: 0px 0px 0px 0px;
      &:first-child {
        margin: 0px 1% 0px 0px;
      }
      &:last-child {
        max-width: 622px;
        margin: 1% 0px 0px 0px;
      }
    }
  }
  &__item:hover {
    transform: scale(1.02);
    transition: transform 0.5s ease-in-out;
  }

  &__link {
    position: relative;
    display: flex;
    // height: 200px;
    border-radius: 5px;
    overflow: hidden;
  }
  &__wrapper {
    background: #405460;
    top: 0;
    height: 100%;
    position: absolute;
    width: 100%;
    left: 0;
  }
  &__wrapper img {
    object-fit: cover;
    top: 0;
    height: 100%;
    position: absolute;
    width: 100%;
    left: 0;
  }
  &__link &__cover {
    position: absolute;
    width: 100%;
    bottom: 0;
    color: #fff;
    padding: 20px;
    transition: opacity 0.2s;
    @media (max-width: $md4) {
      padding: 10px 10px 8px 10px;
    }
  }
  &__link &__cover::before {
    content: " ";
    bottom: 0;
    height: 90px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
    position: absolute;
    width: 100%;
    left: 0;
    color: #fff;
  }
  &__link &__name {
    font-size: 20px;
    line-height: 24px;
    position: relative;
    color: #fff;
    @media (max-width: $md4) {
      font-size: 18px;
    }
  }
  &__name {
    margin: 0;
  }
}
</style>
