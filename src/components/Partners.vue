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
