<script setup>
import BlockHeader from "../components/BlockHeader.vue";
</script>
<template>
  <section class="about-us">
    <div class="_container">
      <div class="about-us-text about-us-text_settings">
        <div class="about-us-text__left">
          <BlockHeader title="Про БИС"></BlockHeader>
          <!-- <h2 class="about-us-text__header">Про БИС</h2> -->
          <div class="about-us-text__title">
            <p class="about-us-text__title_settings">Относимся с любовью к каждому квадратному метру</p>
          </div>
        </div>
        <div class="about-us-text__right about-us-text__right_area-text">
          <p class="about-us-text__right_area-text about-us-text__right_area-text_none">&nbsp;</p>
          <p class="about-us-text__right_area-text">
            Мы – профессиональная команда нулевого цикла, предоставляющая комплексные решения в области инженерных коммуникаций и
            благоустройства участков.<br />Мы занимаемся проектированием, монтажом и обслуживанием систем водоснабжения, канализации,
            электроснабжения, отопления, а также выполняем работы по благоустройству территорий. Наш опыт и квалификация позволяют нам
            реализовывать проекты любой сложности, обеспечивая высокий уровень качества и надежности.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;

.about-us-text_settings {
  display: flex;
  gap: 40px;
  @media (max-width: $md3) {
    flex-wrap: wrap;
    gap: 15px;
  }
  @media (max-width: $md4) {
    gap: 0;
  }
}
@media (max-width: $md3) {
  .about-us-text__right_area-text_none {
    display: none;
  }
}
.about-us-text__left {
  flex-basis: 33.3%;
  @media (max-width: $md3) {
    flex-basis: auto;
  }
}
.about-us-text__right {
  flex-basis: 66.6%;
}

.about-us {
  margin: 25px 0 25px 0;
}

.about-us-text__right {
  flex: 1 1 0;
}
.about-us-text__right_area-text p {
  padding-bottom: 24px;
  color: $color-text;
  font-size: 20px;
  @media (max-width: $md3) {
    padding: 0px 10px;
  }
  @media (max-width: $md4) {
    padding: 15px 4px;
    font-size: 13px;
  }
}
.about-us-text__right_area-text p:last-child {
  padding-bottom: 0;
}
.about-us-text__header {
  font-size: $fs-xxl;
  font-weight: 600;
  display: inline-block;
  border-radius: 32px;
  padding: 3px 10px;
  color: $color-title;
}

.about-us-text__title_settings {
  background-color: $color-background;
  font-weight: 600;
  font-size: $fs-l;
  line-height: 130%;
  letter-spacing: 0.01em;
  color: #102938;
  border-radius: 6px;
  padding: 15px 10px !important;
  width: fit-content;
  margin-top: 1rem;
  @media (max-width: $md4) {
    font-size: $fs-m;
  }
}
</style>
