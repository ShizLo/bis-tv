<!-- <BlockHeader title="Наши партнеры"></BlockHeader> -->
<!-- <script setup>
import BlockHeader from "../components/BlockHeader.vue";
</script>
<template>
  <section class="partners content">
    <div class="_container">
      <h2 class="partners__header">Наши партнеры</h2>
      <div class="partners__items">
        <div class="partners__item">
          <a class="partners__link" target="_blank" href="https://holtsovhouse.ru/">
            <span class="partners__wrapper">
              <img width="381" height="200" loading="lazy" src="../assets/images/holtsovhouse.webp" alt="" />
            </span>
            <div class="partners__cover">
              <div class="partners__name">HoltsovHouse</div>
            </div>
          </a>
        </div>
        <div class="partners__item">
          <a class="partners__link" target="_blank" href="https://scouthouse.ru/">
            <span class="partners__wrapper">
              <img width="381" height="200" loading="lazy" src="../assets/images/ScoutHouse.webp" alt="" />
            </span>
            <div class="partners__cover">
              <div class="partners__name">ScoutHouse</div>
            </div>
          </a>
        </div>
        <div class="partners__item">
          <a class="partners__link" target="_blank" href="https://novodacha.com/">
            <span class="partners__wrapper">
              <img width="381" height="200" loading="lazy" src="../assets/images/IMG_4429-min.webp" alt="" />
            </span>
            <div class="partners__cover">
              <div class="partners__name">NovoDacha</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;

.partners {
  &__header {
    font-size: $fs-xxl;
    font-weight: 600;
    background: #fff;
    padding: 3px 10px;
    color: #102938;
    padding-bottom: 16px;
    @media (max-width: $md4) {
      font-size: $fs-xxl;
    }
  }
  &__items {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  &__items &__link {
    flex: 1 1 30%; /*grow | shrink | basis */
    height: 200px;
    @media (max-width: $md4) {
      height: 170px;
    }
  }
  &__item {
    display: flex;
    flex: 1 1 30%;
    margin: 0px 1% 0px 0px;

    &:last-child {
      margin: 0px 0px 0px 0px;
    }
    @media (max-width: $md1) {
      flex: 1 1 48%;
      margin: 0px 0px 0px 0px;
      &:first-child {
        margin: 0px 1% 0px 0px;
      }
      &:last-child {
        max-width: 622px;
        margin: 1% 0px 0px 0px;
      }
    }
  }
  &__item:hover {
    transform: scale(1.02);
    transition: transform 0.5s ease-in-out;
  }

  &__link {
    position: relative;
    display: flex;
    // height: 200px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 1px 1px 1px 0px rgba(34, 60, 80, 0.5);
  }
  &__wrapper {
    background: #405460;
    top: 0;
    height: 100%;
    position: absolute;
    width: 100%;
    left: 0;
  }
  &__wrapper img {
    object-fit: cover;
    top: 0;
    height: 100%;
    position: absolute;
    width: 100%;
    left: 0;
  }
  &__link &__cover {
    position: absolute;
    width: 100%;
    bottom: 0;
    color: #fff;
    padding: 20px;
    transition: opacity 0.2s;
    @media (max-width: $md4) {
      padding: 10px 10px 8px 10px;
    }
  }
  &__link &__cover::before {
    content: " ";
    bottom: 0;
    height: 90px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
    position: absolute;
    width: 100%;
    left: 0;
    color: #fff;
  }
  &__link &__name {
    font-size: 20px;
    line-height: 24px;
    position: relative;
    color: #fff;
    @media (max-width: $md4) {
      font-size: 18px;
    }
  }
  &__name {
    margin: 0;
  }
}
</style> -->
<!-- <template>
  <section class="partners-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-text">Наши партнеры</span>
          <span class="title-decoration"></span>
        </h2>
        <p class="section-subtitle">Компании, которые доверяют нам и сотрудничают с нами</p>
      </div>

      <div class="partners-grid">
        <div class="partner-card">
          <a href="https://holtsovhouse.ru/" target="_blank" rel="noopener noreferrer" class="partner-link">
            <div class="partner-image-container">
              <img src="../assets/images/holtsovhouse.webp" alt="HoltsovHouse" class="partner-image" loading="lazy" />
              <div class="image-overlay"></div>
            </div>
            <div class="partner-info">
              <h3 class="partner-name">HoltsovHouse</h3>
              <div class="partner-cta">
                <span>Посетить сайт</span>
                <v-icon>mdi-arrow-right</v-icon>
              </div>
            </div>
          </a>
        </div>

        <div class="partner-card">
          <a href="https://scouthouse.ru/" target="_blank" rel="noopener noreferrer" class="partner-link">
            <div class="partner-image-container">
              <img src="../assets/images/ScoutHouse.webp" alt="ScoutHouse" class="partner-image" loading="lazy" />
              <div class="image-overlay"></div>
            </div>
            <div class="partner-info">
              <h3 class="partner-name">ScoutHouse</h3>
              <div class="partner-cta">
                <span>Посетить сайт</span>
                <v-icon>mdi-arrow-right</v-icon>
              </div>
            </div>
          </a>
        </div>

        <div class="partner-card">
          <a href="https://novodacha.com/" target="_blank" rel="noopener noreferrer" class="partner-link">
            <div class="partner-image-container">
              <img src="../assets/images/IMG_4429-min.webp" alt="NovoDacha" class="partner-image" loading="lazy" />
              <div class="image-overlay"></div>
            </div>
            <div class="partner-info">
              <h3 class="partner-name">NovoDacha</h3>
              <div class="partner-cta">
                <span>Посетить сайт</span>
                <v-icon>mdi-arrow-right</v-icon>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;

.partners-section {
  padding: 80px 0;
  background-color: #f8fafc;
  position: relative;
  overflow: hidden;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-title {
  font-size: 42px;
  font-weight: 800;
  color: #102938;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
  font-family: "Montserrat", sans-serif;

  .title-text {
    position: relative;
    z-index: 2;
    background: linear-gradient(90deg, #2c3e50, #1a1a1a);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .title-decoration {
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    height: 8px;
    background: linear-gradient(90deg, rgba(#3498db, 0.3), rgba(#3498db, 0.1));
    z-index: 1;
    transform: skewY(-1deg);
  }

  @media (max-width: 768px) {
    font-size: 32px;

    .title-decoration {
      height: 6px;
      bottom: 3px;
    }
  }
}

.section-subtitle {
  font-size: 18px;
  color: #555;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
  font-family: "Open Sans", sans-serif;

  @media (max-width: 768px) {
    font-size: 16px;
  }
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.partner-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);

    .partner-cta {
      transform: translateX(5px);
    }

    .image-overlay {
      opacity: 1;
    }
  }
}

.partner-link {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: inherit;
}

.partner-image-container {
  position: relative;
  padding-top: 60%; /* Соотношение сторон 3:5 */
  overflow: hidden;

  .partner-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent 50%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
}

.partner-info {
  padding: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.partner-name {
  font-size: 22px;
  font-weight: 700;
  color: #102938;
  margin-bottom: 15px;
  font-family: "Montserrat", sans-serif;
}

.partner-cta {
  display: flex;
  align-items: center;
  color: black;
  font-weight: 600;
  margin-top: auto;
  transition: transform 0.3s ease;

  .v-icon {
    margin-left: 8px;
    font-size: 20px;
  }
}

@media (max-width: 768px) {
  .partners-section {
    padding: 60px 0;
  }

  .partners-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .partner-image-container {
    padding-top: 70%;
  }
}
</style> -->
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

  document.querySelectorAll(".partner-card").forEach((el) => {
    observer.observe(el);
  });
});
</script>

<template>
  <section class="partners-section">
    <div class="_container">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-text">Наши партнеры</span>
          <span class="title-decoration"></span>
        </h2>
        <p class="section-subtitle">Компании, которые доверяют нам и сотрудничают с нами</p>
      </div>

      <div class="partners-grid">
        <div class="partner-card">
          <a href="https://holtsovhouse.ru/" target="_blank" rel="noopener noreferrer" class="partner-link">
            <div class="partner-image-container">
              <img src="../assets/images/holtsovhouse.webp" alt="HoltsovHouse" class="partner-image" loading="lazy" />
              <div class="image-overlay"></div>
            </div>
            <div class="partner-info">
              <h3 class="partner-name">HoltsovHouse</h3>
              <div class="partner-cta">
                <span>Перейти на сайт</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
          </a>
        </div>

        <div class="partner-card">
          <a href="https://scouthouse.ru/" target="_blank" rel="noopener noreferrer" class="partner-link">
            <div class="partner-image-container">
              <img src="../assets/images/ScoutHouse.webp" alt="ScoutHouse" class="partner-image" loading="lazy" />
              <div class="image-overlay"></div>
            </div>
            <div class="partner-info">
              <h3 class="partner-name">ScoutHouse</h3>
              <div class="partner-cta">
                <span>Перейти на сайт</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
          </a>
        </div>

        <div class="partner-card">
          <a href="https://novodacha.com/" target="_blank" rel="noopener noreferrer" class="partner-link">
            <div class="partner-image-container">
              <img src="../assets/images/IMG_4429-min.webp" alt="NovoDacha" class="partner-image" loading="lazy" />
              <div class="image-overlay"></div>
            </div>
            <div class="partner-info">
              <h3 class="partner-name">NovoDacha</h3>
              <div class="partner-cta">
                <span>Перейти на сайт</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;
@use "sass:color";
@import "animate.css";

.partners-section {
  padding: 40px 0;

  position: relative;
  overflow: hidden;

  ._container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 15px 0;
  position: relative;
  display: inline-block;
  font-family: "Montserrat", sans-serif;

  .title-text {
    background: linear-gradient(90deg, #2c3e50, #1a1a1a);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    position: relative;
    z-index: 2;
    letter-spacing: -0.03em;
    text-transform: uppercase;
  }

  .title-decoration {
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 5px;
    // background: linear-gradient(90deg, black, darken(black, 15%));
    background: linear-gradient(90deg, black, color.adjust(black, $lightness: -15%));
    border-radius: 3px;
    transition: width 0.3s ease;
  }

  &:hover .title-decoration {
    width: 120px;
  }
}

.section-subtitle {
  font-size: 20px;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-family: "Open Sans", sans-serif;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 30px;

  @media (max-width: $md3) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

.partner-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  height: 100%;
  opacity: 0;
  transform: translateY(30px);
  border: 1px solid rgba(0, 0, 0, 0.03);

  &.animate__animated {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);

    .partner-cta {
      transform: translateX(5px);
    }

    .partner-image {
      transform: scale(1.05);
    }
  }
}

.partner-link {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: inherit;
}

.partner-image-container {
  position: relative;
  padding-top: 60%;
  overflow: hidden;

  .partner-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent 60%);
  }
}

.partner-info {
  padding: 25px;
  display: flex;
  flex-direction: column;
}

.partner-name {
  font-size: 22px;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 15px;
  font-family: "Montserrat", sans-serif;
}

.partner-cta {
  display: flex;
  align-items: center;
  color: #2c3e50;
  font-weight: 600;
  transition: transform 0.3s ease;
  margin-top: 10px;

  svg {
    margin-left: 8px;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #1a365d;

    svg {
      transform: translateX(4px);
    }
  }
}

@media (max-width: $md3) {
  .partners-section {
    padding: 80px 0;
  }

  .section-title {
    font-size: 42px;

    .title-decoration {
      height: 4px;
      bottom: -10px;
    }
  }

  .section-subtitle {
    font-size: 18px;
  }
}

@media (max-width: $md4) {
  .partners-section {
    padding: 30px 0;
  }
  .section-header {
    margin-bottom: 15px;
  }

  .section-title {
    font-size: 2rem;

    .title-decoration {
      width: 60px;
      height: 3px;
      bottom: -8px;
    }

    &:hover .title-decoration {
      width: 80px;
    }
  }

  .section-subtitle {
    font-size: 16px;
  }

  .partner-name {
    font-size: 20px;
  }
}
</style>
