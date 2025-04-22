<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", "animate__fadeInUp");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".about-us__animated").forEach((el) => {
    observer.observe(el);
  });
});
</script>

<template>
  <section class="about-us">
    <div class="_container">
      <div class="about-us__content">
        <div class="about-us__grid">
          <!-- Левая колонка -->
          <div class="about-us__left">
            <div class="about-us__header about-us__animated">
              <h1 class="about-us__main-title">Про БИС</h1>
              <div class="about-us__slogan">
                <span class="slogan-text">Относимся с любовью</span>
                <span class="slogan-text">к каждому квадратному метру</span>
              </div>
            </div>

            <div class="about-us__image about-us__animated">
              <img src="/images/fence/1.jpg" alt="Команда БИС за работой" loading="lazy" />
            </div>
          </div>

          <!-- Правая колонка -->
          <div class="about-us__right">
            <div class="about-us__description about-us__animated">
              <div class="decoration-line"></div>

              <p class="about-us__text">
                Мы – профессиональная команда нулевого цикла, предоставляющая комплексные решения в области инженерных коммуникаций и
                благоустройства участков. Наша миссия - создавать надежные системы, которые служат десятилетиями.
              </p>
              <p class="about-us__text">
                Специализируемся на проектировании, монтаже и обслуживании систем водоснабжения, канализации, электроснабжения, отопления, а
                также выполняем работы по благоустройству территорий. Наш опыт и квалификация позволяют реализовывать проекты любой
                сложности, обеспечивая высочайший уровень качества.
              </p>
              <div class="about-us__features">
                <div class="feature-item">
                  <v-icon color="primary">mdi-check-circle-outline</v-icon>
                  <span>8+ лет опыта</span>
                </div>
                <div class="feature-item">
                  <v-icon color="primary">mdi-check-circle-outline</v-icon>
                  <span>300+ реализованных проектов</span>
                </div>
                <div class="feature-item">
                  <v-icon color="primary">mdi-check-circle-outline</v-icon>
                  <span>Гарантия на все работы</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;
@use "sass:color";
@import "animate.css";

.about-us {
  padding: 100px 0px;
  position: relative;
  overflow: hidden;

  &__content {
    max-width: 1200px;
    margin: 0 auto;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
    position: relative;

    @media (max-width: $md3) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  &__left {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__right {
    position: relative;
    height: 100%;
  }

  &__header {
    position: relative;
    z-index: 2;
    padding-top: 20px;
  }

  &__image {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    transform: translateZ(0);

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    &:hover {
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
      img {
        transform: scale(1.03);
      }
    }

    @media (max-width: $md3) {
      order: 1;
      border-radius: 12px;
    }
  }

  .decoration-line {
    position: absolute;
    left: -40px;
    top: 0;
    height: 100%;
    width: 5px;
    background: linear-gradient(90deg, black, color.adjust(black, $lightness: -15%));
    border-radius: 3px;
    box-shadow: 2px 0 10px rgba(black, 0.2);

    @media (max-width: $md3) {
      display: none;
    }
  }

  &__main-title {
    font-size: 52px;
    font-weight: 800;
    line-height: 1.1;
    color: $color-title;
    margin-bottom: 30px;
    position: relative;
    display: inline-block;
    letter-spacing: -0.03em;
    background: linear-gradient(90deg, #2c3e50, #1a1a1a);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;

    &::after {
      content: "";
      position: absolute;
      bottom: -12px;
      left: 0;
      width: 80px;
      height: 5px;
      background: linear-gradient(90deg, black, color.adjust(black, $lightness: -15%));
      border-radius: 3px;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 120px;
    }

    @media (max-width: $md3) {
      font-size: 42px;
      margin-bottom: 25px;

      &::after {
        height: 4px;
        bottom: -10px;
      }
    }

    @media (max-width: $md4) {
      font-size: 32px;
      margin-bottom: 20px;

      &::after {
        width: 60px;
        height: 3px;
        bottom: -8px;
      }

      &:hover::after {
        width: 80px;
      }
    }
  }

  &__slogan {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .slogan-text {
      font-size: 36px;
      font-weight: 700;
      line-height: 1.2;
      color: $color-title;
      background: linear-gradient(90deg, #333, #1a1a1a);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      display: inline-block;
      font-family: "Montserrat", sans-serif;

      @media (max-width: $md3) {
        font-size: 28px;
        line-height: 1.15;
      }
      @media (max-width: $md4) {
        font-size: 22px;
        line-height: 1.1;
      }
    }
  }

  &__description {
    position: relative;
    height: 100%;
    padding-left: 40px;

    @media (max-width: $md3) {
      padding-left: 0;
    }
  }

  &__text {
    font-size: 18px;
    line-height: 1.7;
    color: $color-text;
    margin-bottom: 25px;
    font-family: "Open Sans", sans-serif;

    @media (max-width: $md4) {
      font-size: 16px;
      line-height: 1.6;
    }
  }

  &__features {
    margin-top: 35px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 17px;
    color: $color-title;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;

    .v-icon {
      flex-shrink: 0;
      font-size: 22px;
    }

    @media (max-width: $md4) {
      font-size: 16px;

      .v-icon {
        font-size: 20px;
      }
    }
  }

  &__animated {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);

    &.animate__animated {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: $md3) {
    padding: 80px 0;
  }

  @media (max-width: $md4) {
    padding: 60px 10px;
  }
}
</style>
