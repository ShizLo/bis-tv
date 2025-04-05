<script setup>
// import BlockHeader from "../../components/BlockHeader.vue";
</script>
<template>
  <section>
    <div class="_container">
      <!-- <BlockHeader title="Базовое обслуживание септика" /> -->
      <div class="card">
        <div class="card__img"></div>
        <div class="card__price"></div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use "../../assets/styles/main.scss" as *;
.card {
  height: 300px;
  width: 100%;

  display: flex;
  gap: 10px;
  &__img {
    height: 100%;
    width: 50%;
    background-color: $background;
    border-radius: 8px;
    box-shadow: 0px 1px 3px 0px rgba(34, 60, 80, 0.18);
  }
  &__price {
    height: 100%;
    width: 50%;
    background-color: $background;
    border-radius: 8px;
    box-shadow: 0px 1px 3px 0px rgba(34, 60, 80, 0.18);
  }
}
</style>
