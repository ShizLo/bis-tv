<script setup>
const props = defineProps({
  title: {
    typeof: String,
  },
});
</script>
<template>
  <h2 class="title">{{ title }}</h2>
</template>
<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;
.title {
  font-size: 26px;
  font-weight: 600;
  display: inline-block;
  padding-left: 10px;
  color: #102938;
  letter-spacing: 0.2px;
  margin-bottom: 12px;
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
  }
}
</style>
