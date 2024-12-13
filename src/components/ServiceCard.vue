<script>
export default {
  props: {
    title: String,
    price: String,
    path: String,
  },
  computed: {
    style() {
      return "background: url(" + this.path + ".webp)"; // какой же сука Великий костыль))
    },
  },
};
</script>
<template>
  <div class="services__item">
    <a class="services__item-link item" href="#" :style="style">
      <div class="item__description content__description">
        <div class="item__title content__title">
          <span>{{ title }}</span>
        </div>
        <div class="item__price content__price">
          <span>От {{ price }} руб.</span>
        </div>
      </div>
      <!-- <div class="flex flex-col justify-end items-start">
        <div class="flex">
          <svg
            class="mr-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M13 10V3L5 14H11V21L19 10H13Z"
              stroke="#102938"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <span class="">Быстрый монтаж</span>
        </div>

        <div class="flex mt-2">
          <svg
            class="mr-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M7 20V9.00001M16.472 20H4.1C3.94087 20 3.78826 19.9368 3.67574 19.8243C3.56321 19.7118 3.5 19.5591 3.5 19.4V9.60001C3.5 9.44088 3.56321 9.28826 3.67574 9.17574C3.78826 9.06322 3.94087 9.00001 4.1 9.00001H6.868C7.21337 9.00001 7.55286 8.91058 7.8534 8.74041C8.15395 8.57025 8.40531 8.32516 8.583 8.02901L11.293 3.51201C11.4974 3.17086 11.8194 2.91614 12.1984 2.79576C12.5774 2.67538 12.9874 2.69763 13.3512 2.85832C13.7149 3.01902 14.0075 3.30708 14.1737 3.66835C14.34 4.02961 14.3685 4.43917 14.254 4.82001L13.232 8.22801C13.2052 8.31752 13.1997 8.41204 13.2159 8.50406C13.2321 8.59607 13.2696 8.68303 13.3253 8.75801C13.3811 8.83298 13.4536 8.89391 13.537 8.93592C13.6205 8.97793 13.7126 8.99988 13.806 9.00001H18.381C18.6885 8.99994 18.992 9.07081 19.2677 9.20708C19.5434 9.34336 19.7839 9.54139 19.9706 9.78576C20.1573 10.0301 20.2852 10.3143 20.3442 10.6161C20.4033 10.9179 20.3919 11.2293 20.311 11.526L18.401 18.526C18.2857 18.9491 18.0345 19.3225 17.6861 19.5889C17.3378 19.8552 16.9105 19.9997 16.472 20Z"
              stroke="#102938"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <span class="">Год гарантии</span>
        </div>

        <div class="flex mt-2">
          <svg
            class="mr-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M10 12C10 13.0609 9.57857 14.0783 8.82843 14.8284C8.07828 15.5786 7.06087 16 6 16C4.93913 16 3.92172 15.5786 3.17157 14.8284C2.42143 14.0783 2 13.0609 2 12C2 10.9391 2.42143 9.92172 3.17157 9.17157C3.92172 8.42143 4.93913 8 6 8C7.06087 8 8.07828 8.42143 8.82843 9.17157C9.57857 9.92172 10 10.9391 10 12ZM10 12H22V15M18 12V15"
              stroke="#102938"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <span class="">Работа под ключ</span>
        </div>
      </div> -->
    </a>
  </div>
</template>
<style lang="scss" scoped>
@use "../assets/styles/app.scss" as c;

.services__item {
  display: flex;
  height: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: c.$color-background;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-delay: 150ms;
  @media (min-width: c.$md1) {
    &:hover {
      background-color: rgb(93, 201, 255);
    }
  }
  &-link {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    // padding: 1rem;
    background-size: contain !important;
    background-position-x: right !important;
    background-position-y: bottom !important;
    background-repeat: no-repeat !important;
    // background-size: 80% auto;
    cursor: pointer;
  }
}

.item {
  &__title {
    font-weight: 600;
    line-height: 120%;
    font-size: 1.55rem;
    padding: 25px 0px 0px 25px;

    color: #102938;
    @media (max-width: c.$md2) {
      font-size: 1.3rem;
    }
    @media (max-width: c.$md3) {
      font-size: 1.3rem;
    }
    @media (max-width: c.$md4) {
      font-size: 1rem;
    }
    @media (max-width: c.$md4) {
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
    &::after {
      content: "";
      width: 14px;
      height: 14px;
      background: url(../../public/content-bar-arrow-price.svg) center / contain
        no-repeat;
    }
    @media (max-width: c.$md4) {
      font-size: 14px;
      margin: 8px 0px 0px 8px;
      padding: 7px 10px;
    }
  }
}

a {
}
</style>
