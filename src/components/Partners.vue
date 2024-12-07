<template>
  <section class="partners content">
    <div class="_container">
      <h2 class="partners__header mb-4 mt-8">Наши партнеры</h2>
      <!-- <div class="columns-3 partners__items"> -->
      <div class="partners__items">
        <div class="partners__item">
          <a class="partners__link" target="_blank">
            <span class="partners__wrapper">
              <img
                width="381"
                height="200"
                loading="lazy"
                src="../assets/images/ScoutHouse.webp"
                alt=""
              />
            </span>
            <div class="partners__cover">
              <div class="partners__name">ScoutHouse</div>
            </div>
          </a>
        </div>
        <div class="partners__item">
          <a class="partners__link" target="_blank">
            <span class="partners__wrapper">
              <img
                width="381"
                height="200"
                loading="lazy"
                src="../assets/images/IMG_4429-min.webp"
                alt=""
              />
            </span>
            <div class="partners__cover">
              <div class="partners__name">NovoDacha</div>
            </div>
          </a>
        </div>
        <div class="partners__item">
          <a class="partners__link" target="_blank">
            <span class="partners__wrapper">
              <img
                width="381"
                height="200"
                loading="lazy"
                src="../assets/images/holtsovhouse.webp"
                alt=""
              />
            </span>
            <div class="partners__cover">
              <div class="partners__name">HoltsovHouse</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/app.scss" as c;

.partners {
  &__header {
    font-size: 28px;
    font-weight: 600;
    background: #fff;
    border-radius: 32px;
    padding: 3px 10px;
    color: #102938;
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
    @media (max-width: c.$md4) {
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
    @media (max-width: c.$md1) {
      flex: 1 1 50%;
      margin: 0px 0px 0px 0px;
      &:first-child {
        padding: 0px 1% 0px 0px;
      }
      &:last-child {
        max-width: 622px;
        padding: 1% 0px 0px 0px;
      }
    }
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
    @media (max-width: c.$md4) {
      padding: 10px 10px 8px 10px;
    }
  }
  &__link &__cover::before {
    content: " ";
    bottom: 0;
    height: 90px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
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
  }
  &__name {
    margin: 0;
  }
}
</style>
