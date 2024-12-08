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
  <div
    class="service__item rounded-lg bg-neutral-500 hover:bg-blue transition delay-150"
  >
    <div class="flex h-full">
      <a
        class="content__link flex flex-col self-start justify-between p-4 h-full w-full"
        href="#"
        :style="style"
      >
        <div class="content__description pt-4">
          <div class="content__title">
            <span>{{ title }}</span>
          </div>
          <div class="content__price mt-8">
            <span>От {{ price }} руб.</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<style scoped>
a {
  background-position-x: right !important;
  background-position-y: bottom !important;
  background-size: 100% !important;
  background-repeat: no-repeat !important;
}
.content__title {
  font-weight: 600;
  line-height: 120%;
  font-size: 24px;
  color: #102938;
}
.content__price {
  background: #fff;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 11px 12px;
  color: #102938;
  text-align: center;
  border-radius: 4px;
}
.content__price::after {
  content: "";
  width: 14px;
  height: 14px;
  background: url(../../public/content-bar-arrow-price.svg) center / contain
    no-repeat;
}
.content__link {
  cursor: pointer;
}
</style>
