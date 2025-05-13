<script setup>
import { ref, onMounted } from "vue";

const animatedItems = ref([]);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animatedItems.value.push(entry.target.dataset.index);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".team__item").forEach((item, index) => {
    item.dataset.index = index;
    observer.observe(item);
  });
});
</script>

<template>
  <section class="team-section">
    <div class="container">
      <div class="team-header">
        <h2 class="team-title">
          <span class="title-text">Наша команда</span>
          <span class="title-decoration"></span>
        </h2>
        <p class="team-subtitle">Профессионалы с опытом работы более 8 лет в сфере инженерных коммуникаций</p>
      </div>

      <div class="team-grid">
        <div class="team__item" :class="{ 'animate__animated animate__fadeInUp': animatedItems.includes('0') }" data-index="0">
          <div class="team-card">
            <div class="card-image">
              <img src="/images/command/serg.png" alt="Сергей Поляков" class="team-photo" />
              <div class="image-overlay"></div>
            </div>
            <div class="card-content">
              <div class="member-info">
                <h3 class="member-name">Сергей Поляков</h3>
                <p class="member-position">Руководитель нулевого цикла БИС</p>
              </div>
              <div class="member-skills">
                <h4>Специализация:</h4>
                <ul>
                  <li><v-icon small color="primary">mdi-check</v-icon> Планирование работ</li>
                  <li><v-icon small color="primary">mdi-check</v-icon> Управление процессами</li>
                  <li><v-icon small color="primary">mdi-check</v-icon> Первичная консультация</li>
                </ul>
              </div>
              <div class="member-contacts">
                <a href="tel:+7 (911) 780-55-93" class="contact-link">
                  <v-icon>mdi-phone</v-icon>
                </a>
                <a href="https://wa.me/79117805593" class="contact-link">
                  <v-icon>mdi-whatsapp</v-icon>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="team__item" :class="{ 'animate__animated animate__fadeInUp': animatedItems.includes('1') }" data-index="1">
          <div class="team-card">
            <div class="card-image">
              <img src="/images/command/kirillov.jpeg" alt="Андрей Кириллов" class="team-photo" />
              <div class="image-overlay"></div>
            </div>
            <div class="card-content">
              <div class="member-info">
                <h3 class="member-name">Андрей Кириллов</h3>
                <p class="member-position">Инженер и бригадир</p>
              </div>
              <div class="member-skills">
                <h4>Специализация:</h4>
                <ul>
                  <li><v-icon small color="primary">mdi-check</v-icon> Монтаж инженерных сетей</li>
                  <li><v-icon small color="primary">mdi-check</v-icon> Топографическая съемка</li>
                  <li><v-icon small color="primary">mdi-check</v-icon> Первичный выезд</li>
                </ul>
              </div>
              <div class="member-contacts">
                <a href="tel:+7 (911) 905-91-55" class="contact-link">
                  <v-icon>mdi-phone</v-icon>
                </a>
                <a href="https://wa.me/79119059155" class="contact-link">
                  <v-icon>mdi-whatsapp</v-icon>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="team__item" :class="{ 'animate__animated animate__fadeInUp': animatedItems.includes('2') }" data-index="2">
          <div class="team-card">
            <div class="card-image">
              <img src="/images/command/voronin.png" alt="Сергей Воронин" class="team-photo" />
              <div class="image-overlay"></div>
            </div>
            <div class="card-content">
              <div class="member-info">
                <h3 class="member-name">Сергей Воронин</h3>
                <p class="member-position">Инженер и бригадир</p>
              </div>
              <div class="member-skills">
                <h4>Специализация:</h4>
                <ul>
                  <li><v-icon small color="primary">mdi-check</v-icon> Монтаж инженерных сетей</li>
                  <li><v-icon small color="primary">mdi-check</v-icon> Водоподготовка и водоочистка</li>
                  <li><v-icon small color="primary">mdi-check</v-icon> Благоустройство территорий</li>
                  <li><v-icon small color="primary">mdi-check</v-icon> Сервисное обслуживание</li>
                </ul>
              </div>
              <div class="member-contacts">
                <a href="tel:+7 (953) 372-27-75" class="contact-link">
                  <v-icon>mdi-phone</v-icon>
                </a>
                <a href="https://wa.me/79533722775" class="contact-link">
                  <v-icon>mdi-whatsapp</v-icon>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="team__item" :class="{ 'animate__animated animate__fadeInUp': animatedItems.includes('3') }" data-index="3">
          <div class="team-card">
            <div class="card-image">
              <img src="/images/command/4.jpeg" alt="Алексей Качерук" class="team-photo" />
              <div class="image-overlay"></div>
            </div>
            <div class="card-content">
              <div class="member-info">
                <h3 class="member-name">Алексей Качерук</h3>
                <p class="member-position">Инженер и бригадир</p>
              </div>
              <div class="member-skills">
                <h4>Специализация:</h4>
                <ul>
                  <li><v-icon small color="primary">mdi-check</v-icon> Монтаж инженерных сетей</li>
                  <li><v-icon small color="primary">mdi-check</v-icon> Расчет и монтаж ограждений</li>
                </ul>
              </div>
              <div class="member-contacts">
                <a href="tel:+7 (911) 277-56-07" class="contact-link">
                  <v-icon>mdi-phone</v-icon>
                </a>
                <a href="https://wa.me/79112775607" class="contact-link">
                  <v-icon>mdi-whatsapp</v-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="team__item" :class="{ 'animate__animated animate__fadeInUp': animatedItems.includes('4') }" data-index="3">
          <div class="team-card">
            <div class="card-image">
              <img src="/images/command/2+.jpg" alt="Софья Никоненко" class="team-photo" />
              <div class="image-overlay"></div>
            </div>
            <div class="card-content">
              <div class="member-info">
                <h3 class="member-name">Софья Никоненко</h3>
                <p class="member-position">Ландшафтный дизайнер</p>
              </div>
              <div class="member-skills">
                <h4>Специализация:</h4>
                <ul>
                  <li><v-icon small color="primary">mdi-check</v-icon> Проектирование</li>
                  <li><v-icon small color="primary">mdi-check</v-icon> Ландшафтный дизайн</li>
                </ul>
              </div>
              <div class="member-contacts">
                <!-- <a href="tel:+79999999999" class="contact-link">
                  <v-icon>mdi-phone</v-icon>
                </a>
                <a href="mailto:a.kacheruk@bis.ru" class="contact-link">
                  <v-icon>mdi-email</v-icon>
                </a> -->
              </div>
            </div>
          </div>
        </div>
        <div class="team__item" :class="{ 'animate__animated animate__fadeInUp': animatedItems.includes('5') }" data-index="1">
          <div class="team-card">
            <div class="card-image">
              <img src="/images/command/1.jpg" alt="Евгений Кузнецов" class="team-photo" />
              <div class="image-overlay"></div>
            </div>
            <div class="card-content">
              <div class="member-info">
                <h3 class="member-name">Евгений Кузнецов</h3>
                <p class="member-position">Инженер и бригадир</p>
              </div>
              <div class="member-skills">
                <h4>Специализация:</h4>
                <ul>
                  <li><v-icon small color="primary">mdi-check</v-icon> Монтаж инженерных сетей</li>
                  <li><v-icon small color="primary">mdi-check</v-icon> Топографическая съемка</li>
                  <li><v-icon small color="primary">mdi-check</v-icon> Первичный выезд</li>
                </ul>
              </div>
              <div class="member-contacts">
                <!-- <a href="tel:+79999999999" class="contact-link">
                  <v-icon>mdi-phone</v-icon>
                </a>
                <a href="mailto:a.kirillov@bis.ru" class="contact-link">
                  <v-icon>mdi-email</v-icon>
                </a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "sass:color";
@import "animate.css";

.team-section {
  padding: 100px 0;
  position: relative;
  overflow: hidden;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
}

.team-header {
  text-align: center;
  margin-bottom: 60px;
  position: relative;
}

.team-title {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 15px;
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

.team-subtitle {
  font-size: 20px;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-family: "Open Sans", sans-serif;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.team__item {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.5s ease;

  &.animate__animated {
    opacity: 1;
    transform: translateY(0);
  }
}

.team-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.03);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
  }
}

.card-image {
  position: relative;
  padding-top: 100%;
  overflow: hidden;

  .team-photo {
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
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent 70%);
  }

  &:hover {
    .team-photo {
      transform: scale(1.05);
    }
  }
}

.card-content {
  padding: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.member-info {
  margin-bottom: 20px;
}

.member-name {
  font-size: 22px;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 5px;
  font-family: "Montserrat", sans-serif;
}

.member-position {
  font-size: 16px;
  color: #4a5568;
  margin: 0;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
}

.member-skills {
  margin-bottom: 25px;
  flex: 1;

  h4 {
    font-size: 18px;
    font-weight: 600;
    color: #1a202c;
    margin-bottom: 15px;
    font-family: "Montserrat", sans-serif;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 10px;
    color: #4a5568;
    line-height: 1.5;
    font-size: 15px;
    font-family: "Open Sans", sans-serif;

    .v-icon {
      margin-top: 3px;
      flex-shrink: 0;
    }
  }
}

.member-contacts {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid #eee;

  .contact-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(#2c3e50, 0.1);
    color: #2c3e50;
    transition: all 0.3s ease;

    &:hover {
      background: #2c3e50;
      color: white;
      transform: translateY(-3px);
    }

    .v-icon {
      font-size: 20px;
    }
  }
}

@media (max-width: 992px) {
  .team-section {
    padding: 80px 0;
  }

  .team-title {
    font-size: 42px;
  }
}

@media (max-width: 768px) {
  .team-section {
    padding: 60px 0;
  }

  .team-title {
    font-size: 36px;

    .title-decoration {
      height: 4px;
      bottom: -8px;
    }
  }

  .team-subtitle {
    font-size: 18px;
  }

  .team-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 576px) {
  .team-title {
    font-size: 32px;
  }

  .team-subtitle {
    font-size: 16px;
  }

  .member-name {
    font-size: 20px;
  }

  .member-position {
    font-size: 15px;
  }
}
</style>
