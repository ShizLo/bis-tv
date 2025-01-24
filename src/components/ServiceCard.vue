<script>
export default {
  props: {
    title: String,
    price: String,
    path: String,
    hoverColors: String,
  },
  data() {
    let imagePath = "url(" + this.path + ")";
    let hoverColor = this.hoverColors;
    return {
      imagePath,
      hoverColor,
    };
  },
};
</script>
<template>
  <div class="services__item">
    <a
      class="services__item-link item"
      v-scroll-to="{
        el: '#GlobalForm',
        easing: [0.6, 0.8, 0.3, 1.9],
        duration: 2000,
      }"
    >
      <div class="item__description content__description">
        <div class="item__title title">
          <span>{{ title }}</span>
        </div>
        <div class="item__price content__price">
          <span>{{ price }} руб.</span>
        </div>
      </div>
    </a>
  </div>
</template>
<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;

.services__item {
  display: flex;
  height: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: $color-background;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-delay: 150ms;
  @media (min-width: $md1) {
    &:hover {
      background-color: v-bind(hoverColor);
    }
  }
  &-link {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    background-size: contain !important;
    background-position: 95% 100% !important;
    background-repeat: no-repeat !important;
    background-size: 100% auto !important;
    cursor: pointer;
    @media (max-width: $md4) {
      background-size: 90% auto !important;
    }
    @media (max-width: $md3) {
      background-size: 65% auto !important;
    }
    @media (max-width: $md4) {
      background-size: 100% auto !important;
    }
  }
}

.item {
  background: v-bind(imagePath);
  &__title {
    font-weight: 600;
    line-height: 120%;
    font-size: 1.55rem;
    padding: 25px 0px 0px 25px;

    color: #102938;
    @media (max-width: $md2) {
      font-size: 1.3rem;
    }
    @media (max-width: $md3) {
      font-size: 1.3rem;
    }
    @media (max-width: $md4) {
      font-size: 1rem;
    }
    @media (max-width: $md4) {
      padding: 15px 0px 0px 15px;
    }
  }
  &__price {
    background: #fff;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 11px 10px;
    margin: 10px 0px 0px 18px;
    color: #102938;
    text-align: center;
    border-radius: 4px;
    // &::after {
    //   content: "";
    //   width: 14px;
    //   height: 14px;
    //   background: url(../../public/content-bar-arrow-price.svg) center / contain no-repeat;
    // }
    @media (max-width: $md4) {
      font-size: 14px;
      margin: 8px 0px 0px 8px;
      padding: 7px 10px;
    }
  }
}
</style>
