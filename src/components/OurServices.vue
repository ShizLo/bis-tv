<script setup>
function onHover(event, color) {
  event.currentTarget.style.background = color;
}

function leaveHover(event) {
  event.currentTarget.style.background = "#f5f5f5";
}

const props = defineProps({
  dataServices: {
    typeof: Array,
  },
  title: {
    typeof: String,
  },
});
</script>
<template>
  <section class="services">
    <div class="services__container _container">
      <h2 class="services__title title-service">{{ title }}</h2>
      <div class="services__items">
        <div v-for="columns in dataServices" class="services__column">
          <div v-for="rows in columns" class="services__row">
            <div
              v-for="item in rows"
              class="services__item"
              v-on:mouseover="(event) => onHover(event, item.hoverColors)"
              v-on:mouseleave="(event) => leaveHover(event)"
              :class="item.class"
            >
              <router-link :style="{ 'background-image': item.pathImg }" class="services__item-link item" :to="{ name: item.routePath }">
                <div class="item__description content__description">
                  <div class="item__title title">
                    <span>{{ item.title }}</span>
                  </div>
                  <div class="item__price content__price">
                    <span>{{ item.price }}</span>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;

.services {
  margin-top: 15px;
  margin-bottom: 25px;
  &__title {
    font-size: $fs-xxl;
    font-weight: 600;
    background: #fff;
    display: inline-block;
    border-radius: 32px;
    padding: 3px 10px;
    color: #102938;
    @media (max-width: $md2) {
      font-size: $fs-xxl;
    }
    @media (max-width: $md3) {
      font-size: $fs-xxl;
    }
    @media (max-width: $md4) {
      margin-bottom: 10px;
      font-size: $fs-xxl;
    }
    @media (min-width: $md4) {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
  &__items {
    display: flex;
    gap: 10px;
    @media (max-width: $md3) {
      flex-wrap: wrap;
    }
    @media (max-width: $md4) {
      gap: 7px;
    }
  }

  &__column {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 50%;
    gap: 10px;
    @media (max-width: $md3) {
      flex: 1 1 100%;
      &:last-child {
        flex-direction: column-reverse;
      }
    }
    @media (max-width: $md4) {
      gap: 7px;
    }
  }
  &__row {
    display: flex;
    width: 100%;
    gap: 10px;
    @media (max-width: $md4) {
      gap: 7px;
    }
    &-item-big {
      width: 100%;
      height: 350px;
      @media (max-width: $md1) {
        height: 320px;
      }
      @media (max-width: $md2) {
        height: 270px;
      }
      @media (max-width: $md3) {
        height: 180px;
      }

      @media (max-width: $md4) {
        height: 170px;
      }
      .title {
        font-weight: 600;
        line-height: 120%;
        color: #102938;
        padding: 25px 0px 0px 25px;
        font-size: 1.4rem;
        @media (max-width: $md2) {
        }
        @media (max-width: $md3) {
        }
        @media (max-width: $md4) {
          font-size: 20px;
          padding: 15px 10px 0px 10px;
        }
      }
      .item__price {
        font-weight: 500;
        @media (max-width: $md4) {
          font-size: 12px;
          margin-top: 7px;
          padding: 6px 7px;
          border-radius: 6px;
        }
      }
    }
    &-item-sm {
      width: 50%;
      height: 230px;

      @media (max-width: $md1) {
        height: 200px;
      }
      @media (max-width: $md2) {
        height: 150px;
      }
      @media (max-width: $md3) {
        height: 145px;
      }
      @media (max-width: $md4) {
        height: 135px;
      }
      .title {
        font-weight: 600;
        line-height: 120%;
        font-size: 1.4rem;
        padding: 25px 25px 0px 25px;
        color: #102938;
        @media (max-width: $md2) {
          // font-size: 1.3rem;
        }
        @media (max-width: $md3) {
          // font-size: 1.3rem;
        }
        @media (max-width: $md4) {
          // font-size: 1rem;
          font-size: 15px;
          padding: 15px 10px 0px 10px;
        }
      }
      .item__price {
        font-weight: 500;
        @media (max-width: $md4) {
          font-size: 12px;
        }
      }
      .item__price {
        @media (max-width: $md4) {
          font-size: 12px;
          margin-top: 7px;
          padding: 6px 7px;
          border-radius: 6px;
        }
      }
    }
  }
}
.services__item {
  -webkit-box-shadow: 1px 1px 3px 0px rgba(34, 60, 80, 0.18);
  -moz-box-shadow: 1px 1px 3px 0px rgba(34, 60, 80, 0.18);
  box-shadow: 1px 1px 3px 0px rgba(34, 60, 80, 0.18);
  display: flex;
  // height: 100%;
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
      // background-color: v-bind(hoverColors);
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
  // background: v-bind(imagePath);
  // background: v-bind(path);
  &__title {
    // font-size: 1.55rem;
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
    @media (max-width: $md4) {
      font-size: 14px;
      margin: 8px 0px 0px 8px;
      padding: 7px 10px;
    }
  }
}
</style>
