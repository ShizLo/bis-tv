<template>
  <section class="services">
    <div class="services__container _container">
      <h2 class="services__title title-service">Заборы и ограждения</h2>
      <ul class="services__items">
        <li class="services__item item">
          <a class="services__link">
            <div class="item__title">Забор из профлиста</div>
            <button class="item__btn btn">
              <span class="btn__text">Подробнее</span>
              <svg class="banner__button-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Frame 1864">
                  <path
                    id="Vector"
                    d="M1.75 7.29163H12.25M12.25 7.29163L7 12.5416M12.25 7.29163L7 2.04163"
                    stroke="#102938"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </button>
          </a>
        </li>
        <li class="services__item"></li>
        <li class="services__item"></li>
        <li class="services__item"></li>
        <li class="services__item"></li>
        <li class="services__item"></li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;
.services {
  &__items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 30px;
  }
  &__item {
    width: 100%;
    overflow: hidden;
    border-radius: 0.5rem;
    background-color: $color-background;
    @media (min-width: $md1) {
      &:hover {
        // background-color: v-bind(hoverColor);
        background-color: red;
      }
    }
  }
  &__link {
    padding: 25px 20px;
    display: block;
  }
}
.item {
  &__title {
    font-weight: 600;
    line-height: 120%;
    font-size: 1.55rem;
    color: #102938;
    margin: 0px 0px 56px 0px;
  }
  &__btn {
    padding: 11px 14px;
    border-radius: 4px;
    font-weight: 500;
    background-color: #fff;
    border: 1px solid #ea5b0c;
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>
