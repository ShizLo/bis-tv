<script>
export default {
    props: {

    },
    computed: {
      
    }
}
</script>
<template>
    <section class="about-us container mt-8">
        <div class="flex gap-8">
            <div class="basis-2/6">
                <div class="w-3/5">
                <h2 class="about-us__header">Про BIS</h2>
                <p class="txt-flex__sub-title mt-8">
                    Сотрудничество с нами – это про комфорт, скорость и надежность
                </p>
            </div>
            </div>
            <div class="basis-4/6 txt-flex__right area-text">
                <p class="area-text">&nbsp;</p>
                <p class="area-text">
                    Мы – супермаркет услуг для загородной жизни. Существуем с 2016 года, и уже успели
                    пройти через огонь, воду и медные трубы. К слову о воде: мы можем установить на
                    вашем участке автополив, прорубить скважину, смонтировать дренажную и ливневую
                    системы и многое другое: от септика до озеленения и благоустройства вашей
                    территории.
                </p>
                <p class="area-text">
                    Сотрудничество с нами – это не только стремительное выполнение задач, но и
                    гарантированный комфорт. Мы ценим ваше время, поэтому оперативно отвечаем на все
                    вопросы. Наши услуги основаны на качестве и надежности. А вместе с Sewera вы
                    получаете партнера, который даст почувствовать удовлетворение и счастье от
                    загородной жизни.
                </p>
            </div>
        </div>
    </section>
</template>
<style scoped>
    .txt-flex__right {
        flex: 1 1 0;
    }
    .area-text p {
    padding-bottom: 24px;
    color: #102938;
    font-size: 20px;
}
.area-text p:last-child {
    padding-bottom: 0;
}
.about-us__header {
    font-size: 28px;
    font-weight: 600;
    background: #fff;
    display: inline-block;
    border-radius: 32px;
    padding: 3px 10px;
    color: #102938;
}
.txt-flex__sub-title {
    background-color: #f5f5f5;
    font-weight: 600;
    font-size: 22px;
    line-height: 130%;
    letter-spacing: 0.01em;
    color: #102938;
    /* margin: 0 0 20px; */
    border-radius: 6px;
    padding: 15px 10px !important;
    width: fit-content;
}
</style>