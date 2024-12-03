<script>
import ServiceCard from './ServiceCard.vue';
import ServiceSmallCard from './ServiceSmallCard.vue';
export default {
    components: {
        ServiceCard,
        ServiceSmallCard,
    },
    
}
</script>
<template>
    <div class="container pb-4 pt-8">
        <h2 class="content-bar__h2">Наши услуги</h2>
    </div>
    <section class="container py-2 flex">
        <div class="parent w-full"> <!-- пока так хуй его знает как лучше придумать, чтобы компоненты не повторялись -->
            <ServiceCard    class="serviceCard"
                            title="Септик под ключ"
                            price="87 500"
                            path="src/assets/images/content-bar-img-1"/>
            <ServiceSmallCard   class="smallCard1"
                                title="Водоподготовка"
                                price="30 000"
                                path="src/assets/images/content-bar-img-2"/>
            <ServiceSmallCard   class="smallCard2"
                                title="Колодец"
                                price="11 000"
                                path="src/assets/images/content-bar-img-3"/>
            <ServiceSmallCard   class="smallCard3" 
                                title="Водоснабжение"
                                price="90 000"
                                path="src/assets/images/content-bar-img-5"/>
            <ServiceSmallCard   class="smallCard4" 
                                title="Скважины"
                                price="3650"
                                path="src/assets/images/content-bar-img-6"/>
            <ServiceCard        class="serviceCard1" 
                                title="Благоустройство"
                                price="210"
                                path="src/assets/images/content-bar-img-4"/>
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

.parent {  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1.4fr 0.2fr 1.4fr;
  gap: 10px 10px;
  grid-auto-flow: row;
  grid-template-areas:
    "serviceCard serviceCard smallCard1 smallCard2"
    "serviceCard serviceCard serviceCard1 serviceCard1"
    "smallCard3 smallCard4 serviceCard1 serviceCard1";
}

.serviceCard { grid-area: serviceCard; }

.serviceCard1 { grid-area: serviceCard1; }

.smallCard1 { grid-area: smallCard1; }

.smallCard2 { grid-area: smallCard2; }

.smallCard3 { grid-area: smallCard3; }

.smallCard4 { grid-area: smallCard4; }
   
        
</style>