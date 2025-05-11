<template>
  <section class="septic-services">
    <div class="container">
      <!-- Основная услуга с улучшенным дизайном -->
      <div class="service-card main-service" @mouseover="hoverEffect" @mouseleave="leaveHover">
        <div class="service-content">
          <div class="service-badge">Премиум решение</div>
          <h1 class="service-title">Профессиональный монтаж<br />септика (ЛОС) под ключ</h1>
          <ul class="service-features">
            <li>
              <svg class="feature-icon" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              Гарантия 5 лет
            </li>
            <li>
              <svg class="feature-icon" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              Бесплатный выезд инженера
            </li>
            <li>
              <svg class="feature-icon" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              Официальный договор
            </li>
          </ul>
          <div class="price-container">
            <p class="service-price">Стоимость проекта</p>
            <p class="price-value">от 180 000 ₽</p>
            <p class="price-note">*окончательная цена после осмотра объекта</p>
          </div>
          <button class="btn primary-btn" @click="goToDiscussion">
            Бесплатная консультация
            <svg class="icon-arrow" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div class="service-image-wrapper">
          <img src="../assets/images/455.jpg" alt="Профессиональный монтаж септика" class="service-image" loading="lazy" />
          <div class="image-overlay">
            <div class="overlay-content">
              <svg class="zoom-icon" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Нажмите для увеличения</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Описание ЛОС с табами -->
      <section class="description-section">
        <h2 class="section-title">
          <svg class="title-icon" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clip-rule="evenodd"
            />
          </svg>
          Локальные очистные станции
        </h2>

        <div class="tabs">
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            @click="activeTab = index"
            :class="['tab-button', { active: activeTab === index }]"
          >
            {{ tab.title }}
          </button>
        </div>

        <div class="tab-content">
          <div v-if="activeTab === 0" class="tab-pane">
            <p class="description-text">
              Мы специализируемся на монтаже локальных очистных станций (ЛОС) ведущих брендов <strong>ЮНИЛОС АСТРА</strong> и
              <strong>ЕВРОБИОН</strong>. Эти системы - золотой стандарт в области автономной канализации.
            </p>
            <div class="specs-grid">
              <div class="spec-item">
                <svg class="spec-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div>
                  <h3>Сертификация</h3>
                  <p>Все станции имеют необходимые сертификаты и соответствуют нормам очистки СанПиН</p>
                </div>
              </div>
              <div class="spec-item">
                <svg class="spec-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div>
                  <h3>Автономность</h3>
                  <p>Полностью автоматизированные системы с интеллектуальным управлением</p>
                </div>
              </div>
              <div class="spec-item">
                <svg class="spec-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fill-rule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div>
                  <h3>Мониторинг</h3>
                  <p>Возможность подключения системы удаленного мониторинга состояния</p>
                </div>
              </div>
              <div class="spec-item">
                <svg class="spec-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div>
                  <h3>Производительность</h3>
                  <p>Модельный ряд от 1 до 15 человек (200 л/чел в сутки)</p>
                </div>
              </div>
            </div>
          </div>

          <div v-if="activeTab === 1" class="tab-pane">
            <h3 class="comparison-title">Сравнение моделей</h3>
            <div class="comparison-table">
              <table>
                <thead>
                  <tr>
                    <th>Модель</th>
                    <th>Производительность</th>
                    <th>Габариты</th>
                    <th>Ценовой диапазон</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(model, index) in models" :key="index">
                    <td>{{ model.name }}</td>
                    <td>{{ model.capacity }}</td>
                    <td>{{ model.dimensions }}</td>
                    <td>{{ model.price }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="gallery">
          <div class="gallery-item" v-for="(image, index) in galleryImages" :key="index">
            <img :src="image.src" :alt="image.alt" loading="lazy" />
            <div class="gallery-caption">{{ image.caption }}</div>
          </div>
        </div>

        <div class="cta-block">
          <h3>Готовы к установке септика?</h3>
          <p>Оставьте заявку и получите бесплатный расчет стоимости</p>
          <button class="btn secondary-btn" @click="submitApplication">
            Получить расчет
            <svg class="icon-send" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </section>

      <!-- Этапы работы с иконками -->
      <section class="work-steps">
        <h2 class="section-title">
          <svg class="title-icon" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
          Как мы работаем
        </h2>

        <div class="steps-container">
          <div v-for="(step, index) in steps" :key="index" class="step-card">
            <div class="step-header">
              <div class="step-number">{{ index + 1 }}</div>
              <h3 class="step-title">{{ step.title }}</h3>
            </div>
            <p class="step-description">{{ step.description }}</p>
            <div class="step-icon">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path :d="step.icon" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <!-- Блок с отзывами -->
      <section class="testimonials">
        <h2 class="section-title">
          <svg class="title-icon" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clip-rule="evenodd"
            />
          </svg>
          Отзывы наших клиентов
        </h2>

        <div class="testimonials-slider">
          <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="testimonial-header">
              <img :src="testimonial.avatar" :alt="testimonial.name" class="testimonial-avatar" />
              <div>
                <h4 class="testimonial-name">{{ testimonial.name }}</h4>
                <div class="testimonial-rating">
                  <svg
                    v-for="i in 5"
                    :key="i"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    :class="{ 'text-yellow-400': i <= testimonial.rating }"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <p class="testimonial-text">{{ testimonial.text }}</p>
            <div class="testimonial-date">{{ testimonial.date }}</div>
          </div>
        </div>

        <button class="btn outline-btn">
          Все отзывы
          <svg class="icon-arrow" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: "SepticServices",
  data() {
    return {
      activeTab: 0,
      tabs: [{ title: "Описание" }, { title: "Технические характеристики" }],
      models: [
        { name: "ЮНИЛОС АСТРА 3", capacity: "600 л/сут", dimensions: "1.12×1.12×2.36 м", price: "180 000 - 210 000 ₽" },
        { name: "ЮНИЛОС АСТРА 5", capacity: "1000 л/сут", dimensions: "1.12×1.12×2.36 м", price: "210 000 - 250 000 ₽" },
        { name: "ЕВРОБИОН 5", capacity: "1000 л/сут", dimensions: "1.5×1.1×2.4 м", price: "230 000 - 270 000 ₽" },
        { name: "ЕВРОБИОН 8", capacity: "1600 л/сут", dimensions: "2.0×1.1×2.4 м", price: "290 000 - 330 000 ₽" },
      ],
      steps: [
        {
          title: "Консультация",
          description: "Наш специалист ответит на все вопросы и подберет оптимальное решение",
          icon: "M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z",
        },
        {
          title: "Выезд инженера",
          description: "Бесплатный выезд специалиста для оценки объекта и составления сметы",
          icon: "M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z",
        },
        {
          title: "Заключение договора",
          description: "Подписываем официальный договор с фиксированной стоимостью работ",
          icon: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9zM5 4a1 1 0 011-1h7a1 1 0 110 2H6a1 1 0 01-1-1zM4 8a1 1 0 011-1h9a1 1 0 110 2H5a1 1 0 01-1-1zM2 12a1 1 0 011-1h11a1 1 0 110 2H3a1 1 0 01-1-1z",
        },
        {
          title: "Монтаж и сдача",
          description: "Выполняем монтаж в согласованные сроки и сдаем работу под ключ",
          icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        },
      ],
      testimonials: [
        {
          name: "Иван Петров",
          avatar: "../assets/images/avatar1.jpg",
          rating: 5,
          text: "Очень доволен работой компании. Установили септик за два дня, все объяснили, показали как пользоваться. Через полгода эксплуатации - никаких нареканий. Рекомендую!",
          date: "15 мая 2023",
        },
        {
          name: "Елена Смирнова",
          avatar: "../assets/images/avatar2.jpg",
          rating: 4,
          text: "Качественный монтаж, приятные в общении специалисты. Единственное - немного задержали доставку оборудования из-за загруженности, но это мелочи. Работает отлично!",
          date: "2 июля 2023",
        },
        {
          name: "Алексей Козлов",
          avatar: "../assets/images/avatar3.jpg",
          rating: 5,
          text: "Лучшее соотношение цена/качество. Сравнивал с другими компаниями - здесь предложили оптимальный вариант под мой бюджет. Спасибо за честный подход!",
          date: "28 сентября 2023",
        },
      ],
      galleryImages: [
        { src: "../assets/images/install1.jpg", alt: "Монтаж септика", caption: "Профессиональный монтаж" },
        { src: "../assets/images/install2.jpg", alt: "Готовая станция", caption: "Готовая к эксплуатации" },
        { src: "../assets/images/install3.jpg", alt: "Сервисное обслуживание", caption: "Техническое обслуживание" },
      ],
    };
  },
  methods: {
    hoverEffect(event) {
      event.currentTarget.style.transform = "translateY(-5px)";
      event.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.15)";
    },
    leaveHover(event) {
      event.currentTarget.style.transform = "translateY(0)";
      event.currentTarget.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
    },
    goToDiscussion() {
      console.log("Переход к обсуждению");
    },
    submitApplication() {
      console.log("Оставить заявку");
    },
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap");

.septic-services {
  background: linear-gradient(180deg, #f9f9f9 0%, #f0f4f8 100%);
  padding: 80px 20px;
  font-family: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  color: #2d3748;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
}

.service-card {
  display: flex;
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  margin-bottom: 80px;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .service-badge {
    position: absolute;
    top: 20px;
    left: 20px;
    background: linear-gradient(90deg, #ff7b00, #ff9a00);
    color: white;
    padding: 6px 16px;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-shadow: 0 4px 12px rgba(255, 123, 0, 0.3);
    z-index: 2;
  }

  .service-content {
    flex: 1;
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      padding: 40px 30px;
      text-align: center;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 248, 240, 0.9) 100%);
      z-index: -1;
    }

    .service-title {
      font-size: 2.8rem;
      font-weight: 800;
      margin-bottom: 24px;
      color: #1a202c;
      line-height: 1.2;
      background: linear-gradient(90deg, #ff7b00, #b35e00);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      position: relative;
      display: inline-block;

      @media (max-width: 768px) {
        font-size: 2.2rem;
      }

      &::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 60px;
        height: 4px;
        background: linear-gradient(90deg, #ff7b00, #ff9a00);
        border-radius: 2px;

        @media (max-width: 768px) {
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }

    .service-features {
      list-style: none;
      padding: 0;
      margin: 0 0 32px 0;
      display: flex;
      flex-direction: column;
      gap: 12px;

      li {
        font-size: 1.1rem;
        color: #4a5568;
        display: flex;
        align-items: center;
        gap: 10px;

        .feature-icon {
          width: 20px;
          height: 20px;
          color: #ff7b00;
          flex-shrink: 0;
        }
      }
    }

    .price-container {
      margin-bottom: 40px;

      .service-price {
        font-size: 1.1rem;
        color: #718096;
        margin-bottom: 8px;
      }

      .price-value {
        font-size: 2.5rem;
        font-weight: 800;
        color: #1a202c;
        margin-bottom: 4px;
        background: linear-gradient(90deg, #ff7b00, #b35e00);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .price-note {
        font-size: 0.9rem;
        color: #a0aec0;
        font-style: italic;
      }
    }
  }

  .service-image-wrapper {
    flex: 1;
    min-width: 400px;
    overflow: hidden;
    position: relative;

    @media (max-width: 768px) {
      min-width: 100%;
      height: 300px;
    }

    .service-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;

      .overlay-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;

        .zoom-icon {
          width: 32px;
          height: 32px;
          margin-bottom: 8px;
        }

        span {
          font-size: 0.9rem;
          font-weight: 500;
        }
      }
    }

    &:hover {
      .image-overlay {
        opacity: 1;
      }

      .service-image {
        transform: scale(1.05);
      }
    }
  }
}

/* Кнопки */
.btn {
  padding: 16px 32px;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  user-select: none;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: fit-content;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.4);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
}

.primary-btn {
  background: linear-gradient(90deg, #ff7b00, #ff9a00);
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.4));
    transition: all 0.4s ease;
  }

  &:hover {
    box-shadow: 0 8px 25px rgba(255, 123, 0, 0.4);

    &::before {
      left: 100%;
    }
  }
}

.secondary-btn {
  background: linear-gradient(90deg, #2d3748, #4a5568);
  color: white;

  &:hover {
    background: linear-gradient(90deg, #4a5568, #2d3748);
    box-shadow: 0 8px 25px rgba(45, 55, 72, 0.3);
  }
}

.outline-btn {
  background: transparent;
  color: #2d3748;
  border: 2px solid #e2e8f0;

  &:hover {
    background: #f8fafc;
    border-color: #cbd5e0;
  }
}

/* SVG иконки */
.icon-arrow,
.icon-send,
.feature-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.btn:hover .icon-arrow,
.btn:hover .icon-send {
  transform: translateX(4px);
}

/* Секции */
.section-title {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 50px;
  color: #1a202c;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  .title-icon {
    width: 32px;
    height: 32px;
    color: #ff7b00;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #ff7b00, #ff9a00);
    border-radius: 2px;
  }
}

.description-section {
  background: white;
  padding: 60px;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-bottom: 80px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 40px 30px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 8px;
    height: 100%;
    background: linear-gradient(to bottom, #ff7b00, #ff9a00);
  }
}

/* Табы */
.tabs {
  display: flex;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 40px;
  gap: 10px;
}

.tab-button {
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  color: #718096;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  &.active {
    color: #ff7b00;

    &::after {
      content: "";
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, #ff7b00, #ff9a00);
      border-radius: 3px 3px 0 0;
    }
  }

  &:hover:not(.active) {
    color: #4a5568;
  }
}

.tab-content {
  margin-bottom: 50px;
}

.tab-pane {
  animation: fadeIn 0.5s ease;

  .description-text {
    font-size: 1.15rem;
    line-height: 1.8;
    color: #4a5568;
    margin-bottom: 30px;

    strong {
      color: #ff7b00;
      font-weight: 700;
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Спецификации */
.specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.spec-item {
  background: #f8fafc;
  border-radius: 12px;
  padding: 25px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  transition: all 0.3s ease;
  border: 1px solid #edf2f7;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    border-color: #e2e8f0;
  }

  .spec-icon {
    width: 28px;
    height: 28px;
    color: #ff7b00;
    flex-shrink: 0;
    margin-top: 4px;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    color: #1a202c;
    margin-bottom: 8px;
  }

  p {
    font-size: 1rem;
    color: #718096;
    line-height: 1.6;
  }
}

/* Таблица сравнения */
.comparison-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 30px;
  text-align: center;
}

.comparison-table {
  overflow-x: auto;
  margin-bottom: 40px;

  table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

    th,
    td {
      padding: 16px 20px;
      text-align: left;
      border-bottom: 1px solid #edf2f7;
    }

    th {
      background: #f8fafc;
      font-weight: 700;
      color: #4a5568;
      text-transform: uppercase;
      font-size: 0.85rem;
      letter-spacing: 0.5px;
    }

    td {
      color: #4a5568;
    }

    tr:hover {
      background: #f8fafc;
    }

    tr:last-child td {
      border-bottom: none;
    }
  }
}

/* Галерея */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin: 50px 0;

  .gallery-item {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    position: relative;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      display: block;
    }

    .gallery-caption {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 12px;
      font-size: 0.95rem;
      text-align: center;
    }
  }
}

/* CTA блок */
.cta-block {
  background: linear-gradient(135deg, #ff7b00, #ff9a00);
  padding: 50px;
  border-radius: 16px;
  text-align: center;
  color: white;
  margin-top: 60px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -80px;
    left: -80px;
    width: 250px;
    height: 250px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 800;
    margin-bottom: 15px;
    position: relative;
    z-index: 1;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 30px;
    position: relative;
    z-index: 1;
    opacity: 0.9;
  }

  .secondary-btn {
    position: relative;
    z-index: 1;
    background: white;
    color: #ff7b00;

    &:hover {
      background: rgba(255, 255, 255, 0.9);
    }
  }
}

/* Этапы работы */
.work-steps {
  background: white;
  padding: 60px;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-bottom: 80px;

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
}

.steps-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.step-card {
  background: #f8fafc;
  border-radius: 16px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #edf2f7;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
    border-color: #e2e8f0;
  }

  .step-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
  }

  .step-number {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #ff7b00, #ff9a00);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  .step-title {
    font-size: 1.3rem;
    font-weight: 700;
    color: #1a202c;
    margin: 0;
  }

  .step-description {
    font-size: 1rem;
    color: #718096;
    line-height: 1.7;
    margin-bottom: 30px;
  }

  .step-icon {
    width: 60px;
    height: 60px;
    background: rgba(255, 123, 0, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    color: #ff7b00;

    svg {
      width: 28px;
      height: 28px;
    }
  }
}

/* Отзывы */
.testimonials {
  background: white;
  padding: 60px;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
}

.testimonials-slider {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.testimonial-card {
  background: #f8fafc;
  border-radius: 16px;
  padding: 30px;
  transition: all 0.3s ease;
  border: 1px solid #edf2f7;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
  }

  .testimonial-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
  }

  .testimonial-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #ff7b00;
  }

  .testimonial-name {
    font-size: 1.1rem;
    font-weight: 700;
    color: #1a202c;
    margin: 0 0 5px 0;
  }

  .testimonial-rating {
    display: flex;
    gap: 3px;

    svg {
      width: 16px;
      height: 16px;
      color: #e2e8f0;
    }
  }

  .testimonial-text {
    font-size: 1rem;
    color: #4a5568;
    line-height: 1.7;
    margin-bottom: 20px;
    font-style: italic;
  }

  .testimonial-date {
    font-size: 0.85rem;
    color: #a0aec0;
    text-align: right;
  }
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .service-card {
    flex-direction: column;

    .service-content {
      padding: 40px 30px;
      text-align: center;

      .service-features {
        align-items: center;
      }

      .btn {
        margin: 0 auto;
      }
    }

    .service-image-wrapper {
      height: 280px;
    }
  }

  .tabs {
    justify-content: center;
  }

  .steps-container,
  .testimonials-slider {
    grid-template-columns: 1fr;
  }

  .step-card {
    text-align: center;

    .step-header {
      flex-direction: column;
      text-align: center;
    }

    .step-icon {
      margin: 20px auto 0;
    }
  }

  .cta-block {
    padding: 40px 20px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
    flex-direction: column;
    gap: 10px;
  }

  .service-card {
    .service-content {
      .service-title {
        font-size: 1.8rem;
      }

      .price-value {
        font-size: 2rem;
      }
    }
  }

  .description-section,
  .work-steps,
  .testimonials {
    padding: 30px 20px;
  }

  .specs-grid {
    grid-template-columns: 1fr;
  }
}
</style>
