<script>
export default {
  props: {},
  computed: {},
};
</script>
<template>
  <section class="about-us">
    <div class="_container">
      <div class="about-us-text about-us-text_settings">
        <div class="about-us-text__left">
          <h2 class="about-us-text__header">Про БИС</h2>
          <div class="about-us-text__title">
            <p class="about-us-text__title_settings">
              Относимся с любовью к каждому квадратному метру
            </p>
          </div>
        </div>
        <div class="about-us-text__right about-us-text__right_area-text">
          <p
            class="about-us-text__right_area-text about-us-text__right_area-text_none"
          >
            &nbsp;
          </p>
          <p class="about-us-text__right_area-text">
            Мы – профессиональная команда нулевого цикла, предоставляющая
            комплексные решения в области инженерных коммуникаций и
            благоустройства участков.<br />Мы занимаемся проектированием,
            монтажом и обслуживанием систем водоснабжения, канализации,
            электроснабжения, отопления, а также выполняем работы по
            благоустройству территорий. Наш опыт и квалификация позволяют нам
            реализовывать проекты любой сложности, обеспечивая высокий уровень
            качества и надежности.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use "../assets/styles/app.scss" as c;

.about-us-text_settings {
  display: flex;
  gap: 40px;
  @media (max-width: c.$md3) {
    flex-wrap: wrap;
    gap: 15px;
  }
  @media (max-width: c.$md4) {
    gap: 0;
  }
}
@media (max-width: c.$md3) {
  .about-us-text__right_area-text_none {
    display: none;
  }
}
.about-us-text__left {
  flex-basis: 33.3%;
  @media (max-width: c.$md3) {
    flex-basis: auto;
  }
}
.about-us-text__right {
  flex-basis: 66.6%;
}

.about-us {
  margin-top: 2rem;
}

.about-us-text__right {
  flex: 1 1 0;
}
.about-us-text__right_area-text p {
  padding-bottom: 24px;
  color: #102938;
  font-size: 20px;
  @media (max-width: c.$md3) {
    padding: 15px 10px;
  }
  @media (max-width: c.$md4) {
    font-size: c.$fs-base;
  }
}
.about-us-text__right_area-text p:last-child {
  padding-bottom: 0;
}
.about-us-text__header {
  font-size: c.$fs-xxl;
  font-weight: 600;
  background: #fff;
  display: inline-block;
  border-radius: 32px;
  padding: 3px 10px;
  color: #102938;
}

.about-us-text__title_settings {
  background-color: #f5f5f5;
  font-weight: 600;
  font-size: c.$fs-l;
  line-height: 130%;
  letter-spacing: 0.01em;
  color: #102938;
  border-radius: 6px;
  padding: 15px 10px !important;
  width: fit-content;
  margin-top: 1rem;
  @media (max-width: c.$md4) {
    font-size: c.$fs-m;
  }
}
</style>
