<script>
import ServiceCard from './ServiceCard.vue';
import ServiceSmallCard from './ServiceSmallCard.vue';
export default {
    components: {
        ServiceCard,
        ServiceSmallCard,
    }
}
</script>
<template>
    <div class="container pb-4 pt-8">
        <h2 class="content-bar__h2">Наши услуги</h2>
    </div>
    <section class="container py-2 flex">
        <div class="grid grid-cols-4 grid-rows-3 gap-4 w-full">
            <ServiceCard class="col-start-1 col-end-3 row-start-1 row-end-3" />
            <ServiceSmallCard class="col-start-3 col-end-4 " />
            <ServiceSmallCard class="col-start-4 col-end-5 " />
            <ServiceSmallCard class="col-start-1 col-end-2" />
            <ServiceSmallCard class="col-start-2 col-end-3" />
            <ServiceCard class="col-start-3 col-end-5 row-start-3 row-end-4 mt-[-170px]" />
        </div>
    </section>
</template>
<style scoped>
.content-bar__h2 {
  font-size: 28px;
  font-weight: 600;
  background: #fff;
  display: inline-block;
  border-radius: 32px;
  padding: 3px 10px;
  color: #102938;
}
</style>