<script>
export default {
  props: {},
  computed: {},
};
</script>
<template>
  <section class="about-us">
    <div class="_container">
      <div class="flex gap-8">
        <div class="basis-2/6">
          <div class="w-5/5">
            <h2 class="about-us__header">Про БИС</h2>
            <div class="flex about-us-title">
              <p class="txt-flex__sub-title mt-8">
                Относимся с любовью к каждому квадратному метру
              </p>
            </div>
          </div>
        </div>
        <div class="basis-4/6 txt-flex__right area-text">
          <p class="area-text">&nbsp;</p>
          <p class="area-text">
            Мы – профессиональная команда нулевого цикла, предоставляющая
            комплексные решения в области инженерных коммуникаций и
            благоустройства участков. Мы занимаемся проектированием, монтажом и
            обслуживанием систем водоснабжения, канализации, электроснабжения,
            отопления, а также выполняем работы по благоустройству территорий.
            Наш опыт и квалификация позволяют нам реализовывать проекты любой
            сложности, обеспечивая высокий уровень качества и надежности.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use "../assets/styles/app.scss" as c;

.about-us {
  margin-top: 2rem;
}

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
.about-us-title {
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
