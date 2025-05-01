<template>
  <div class="_container">
    <v-card class="mx-auto mt-6" max-width="800" elevation="4">
      <v-card-title
        class="text-center py-5 vacancy-title"
        :class="mobile ? 'text-h5' : 'text-h4'"
        style="background: linear-gradient(90deg, #ea5b0c, #ff8c42); color: white"
      >
        Младший <br v-if="mobile" />инженер-бригадир
      </v-card-title>
      <v-card-text class="px-4 px-md-8">
        <!-- About Us Section -->
        <div class="my-6">
          <h2 class="text-h5 font-weight-bold mb-3 gradient-text" :class="mobile ? 'ml-4' : ''">О вакансии</h2>
          <!-- <p class="mb-2" :class="mobile ? 'ml-4' : ''">
            Мы являемся подразделением компании Holtsovhouse (<a href="https://holtsovhouse.ru/" target="_blank" class="gradient-link"
              >holtsovhouse.ru</a
            >), лидером в производстве модульных домов в СПб. Компания производит полный комплекс работ по обустройству загородный участков.
          </p> -->
          <v-card variant="flat" color="#FFF8F5" class="about-company pa-5 mb-6">
            <div class="d-flex align-start">
              <div>
                <!-- <h3 class="text-h6 font-weight-bold mb-3 gradient-text">О нашей компании</h3> -->
                <div class="d-flex">
                  <!-- <v-icon icon="mdi-office-building-outline" color="#FF8C42" size="28" class="mr-3 mt-1"></v-icon> -->
                  <p class="company-description mb-0">
                    Мы — <strong>подразделение компании Holtsovhouse</strong> (<a
                      href="https://holtsovhouse.ru/"
                      target="_blank"
                      class="gradient-link"
                      >holtsovhouse.ru</a
                    >), <span class="highlight-text">лидер в производстве модульных домов</span> в Санкт-Петербурге. Наша компания выполняет
                    <span class="highlight-text">полный комплекс работ</span>
                    по профессиональному обустройству загородных участков.
                  </p>
                </div>
                <div v-if="!mobile" class="d-flex justify-center flex-wrap gap-2 mt-6">
                  <v-card
                    v-for="(stat, index) in companyStats"
                    :key="`stat-${index}`"
                    variant="flat"
                    class="stat-card pa-4 text-center"
                    :class="mobile ? 'w-100' : 'flex-grow-1'"
                    max-width="220"
                  >
                    <v-icon :icon="stat.icon" size="40" class="mb-2 stat-icon"></v-icon>
                    <div class="text-h6 font-weight-bold gradient-text">{{ stat.value }}</div>
                    <div class="text-body-2">{{ stat.label }}</div>
                  </v-card>
                </div>
              </div>
            </div>
          </v-card>

          <v-row class="mt-4">
            <v-col cols="12" md="6" v-for="(project, index) in projects" :key="`project-${index}`">
              <v-card variant="outlined" class="project-card h-100">
                <v-card-item class="pb-0">
                  <v-card-title class="gradient-text">{{ project.name }}</v-card-title>

                  <v-card-subtitle class="project-subtitle">{{ project.description }}</v-card-subtitle>
                  <v-card-title class="gradient-text">{{ project.company }}</v-card-title>
                </v-card-item>
                <v-card-actions>
                  <v-btn v-if="project.link" :href="project.link" target="_blank" variant="text" class="gradient-text"> Подробнее </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </div>
        <div class="mb-6 mt-6">
          <h2 class="text-h5 font-weight-bold mb-3 gradient-text" :class="mobile ? 'ml-4' : ''">Мы предлагаем</h2>
          <v-list lines="two" density="compact" class="benefits-list">
            <v-list-item v-for="(benefit, index) in benefits" :key="`benefit-${index}`" :prepend-icon="benefit.icon" class="benefit-item">
              <template v-slot:title>
                <strong class="gradient-text">{{ benefit.title }}</strong>
              </template>
              {{ benefit.description }}
            </v-list-item>
          </v-list>
        </div>
        <!-- <div class="mb-6">
          <h2 class="text-h5 mb-4 font-weight-bold gradient-text">Что мы ждём?</h2>
          <div density="compact" class="requirements-table">
            <div>
              <div class="d-flex align-center mb-1" v-for="(requirement, index) in requirements" :key="`req-${index}`">
                <div class="mr-3">
                  <v-icon icon="mdi-check" class="gradient-icon"></v-icon>
                </div>
                <div>{{ requirement }}</div>
              </div>
            </div>
          </div>
        </div> -->
        <div class="mb-6">
          <h2 :class="mobile ? 'ml-4' : ''" class="text-h5 mb-4 font-weight-bold gradient-text">Что мы ждём от Вас?</h2>
          <v-card variant="flat" class="requirements-card px-4 pt-6">
            <v-row>
              <v-col cols="12" md="6" v-for="(requirement, index) in requirements" :key="`req-${index}`">
                <div class="d-flex align-start requirement-item">
                  <v-icon icon="mdi-check" color="#FF8C42" class="mr-3"></v-icon>
                  <div class="">{{ requirement }}</div>
                </div>
              </v-col>
            </v-row>
            <h2 :class="mobile ? 'ml-4' : ''" class="text-h6 mb-3 mt-6 font-weight-bold gradient-text">Будет преимуществом</h2>
            <v-row>
              <v-col cols="12" class="px-0">
                <v-list lines="two" density="compact" class="conditions-list">
                  <v-list-item
                    v-for="(advantage, index) in advantages"
                    :key="`adv-${index}`"
                    :prepend-icon="advantage.icon"
                    class="condition-item"
                  >
                    <template v-slot:title>
                      <strong class="gradient-text">{{ advantage.title }}</strong>
                    </template>
                    {{ advantage.description }}
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-card>
        </div>
        <!-- <div class="mb-4">
          <h2 :class="mobile ? 'ml-4' : ''" class="text-h5 mb-3 font-weight-bold gradient-text">Будет преимуществом</h2>
          <v-row>
            <v-col cols="12">
              <v-list lines="two" density="compact" class="conditions-list">
                <v-list-item
                  v-for="(advantage, index) in advantages"
                  :key="`adv-${index}`"
                  :prepend-icon="advantage.icon"
                  class="condition-item"
                >
                  <template v-slot:title>
                    <strong class="gradient-text">{{ advantage.title }}</strong>
                  </template>
                  {{ advantage.description }}
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </div> -->
        <div class="mb-4">
          <h2 :class="mobile ? 'ml-4' : ''" class="text-h5 font-weight-bold mb-3 gradient-text">Что нужно будет делать?</h2>
          <v-row>
            <v-col cols="12">
              <v-list lines="two" density="compact" class="works-list">
                <v-list-item v-for="(work, index) in works" :key="`adv-${index}`" :prepend-icon="work.icon" class="works-item">
                  <template v-slot:title>
                    <strong class="works-text">{{ work.title }}</strong>
                  </template>
                  {{ work.description }}
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </div>
        <div class="mb-4">
          <h2 class="text-h5 font-weight-bold mb-3 gradient-text">График и условия работы</h2>
          <v-row>
            <v-col cols="12">
              <v-list lines="two" density="compact" class="conditions-list">
                <v-list-item
                  v-for="(condition, index) in workConditions"
                  :key="`cond-${index}`"
                  :prepend-icon="condition.icon"
                  class="condition-item"
                >
                  <template v-slot:title>
                    <strong class="gradient-text">{{ condition.title }}</strong>
                  </template>
                  {{ condition.description }}
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </div>
      </v-card-text>

      <!-- <v-card-actions class="px-4 pb-4 justify-center">
        <v-btn color="primary" variant="flat" size="large" @click="applyForJob" class="apply-btn mb-4"> Откликнуться на вакансию </v-btn>
      </v-card-actions> -->
    </v-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useDisplay } from "vuetify";
const { mobile } = useDisplay();
// Data
const companyStats = ref([
  {
    icon: "mdi-calendar-star",
    value: "6 лет",
    label: "успешной работы на рынке",
  },
  {
    icon: "mdi-account-group",
    value: "13 человек",
    label: "в команде профессионалов",
  },
  {
    icon: "mdi-home-edit",
    value: "Полный цикл",
    label: "личный опыт всех работ",
  },
]);
const benefits = ref([
  {
    icon: "mdi-briefcase-outline",
    // icon: "mdi-chart-line",
    title: "Интересную работу",
    description: "Сложная, интересная работа с возможностью карьерного роста",
  },
  {
    icon: "mdi-chart-line",
    title: "Развитие",
    description: "Постоянный контакт с руководителем и командой для развития и роста",
  },

  {
    icon: "mdi-cash-multiple",
    title: "Доход",
    description: "Возможность самостоятельно влиять на свой доход",
  },
  {
    icon: "mdi-office-building",
    title: "Стабильность",
    description: "Работа в стабильной компании с постоянным потоком клиентов",
  },
]);

const aboutChips = ref(["6 лет на рынке", "Команда из 13 человек", "Личный опыт полного цикла работ"]);

const projects = ref([
  {
    name: "Проект нулевого цикла",
    description: "Подразделение занимается проетированием, нулевым циклом и благоустройством участков",
    link: "https://zero.holtsovhouse.ru",
    company: "Holtsovhouse",
  },
  {
    name: "Глобальный проект",
    description: "Проект для остального рынка загородного строительства",
    link: "https://spb-bis.ru",
    company: "БИС",
  },
]);

const requirements = ref([
  "Знание технологий работ нулевого цикла (свайные работы, инженерные сети)",
  "Знание технологий базового благоустройства участков",
  "Обучаемость, желание совершенствоваться в каждом направлении и изучать новые",
  "Организованность, умение планировать свой график",
  "Ответственность, внимательность к деталям",
  "Желание хорошо зарабатывать",
]);

const advantages = ref([
  {
    icon: "mdi-briefcase",
    title: "Опыт работы",
    description: "Производитель работ нулевого цикла от 1 года",
  },
  {
    icon: "mdi-water-pump",
    title: "Знания технологий",
    description: "Водоснабжение и водоподготовка(монтаж кессонов, обвязка скважин)",
  },
  {
    icon: "mdi-flash",
    title: "Навыки электромонтажа",
  },

  {
    icon: "mdi-school",
    title: "Базовые навыки владения",
    description: "AutoCAD, Excel",
  },
  {
    icon: "mdi-leaf",
    title: "Знания в области ландшафтного строительства",
  },
]);

const works = ref([
  {
    icon: "mdi-home-plus",
    title: "Монтаж обвязки дома",
    description: "",
  },
  {
    icon: "mdi-pipe",
    title: "Монтаж инженерных сетей",
    description: "",
  },
  {
    icon: "mdi-screw-lag",
    title: "Монтаж свайно-винтовых фундаментов",
    description: "",
  },

  {
    icon: "mdi-leaf-circle",
    title: "Базовое благоустройство",
    description: "",
  },
]);

const workConditions = ref([
  {
    icon: "mdi-calendar",
    title: "График",
    description: "Плавающий график работы",
  },
  {
    icon: "mdi-car",
    title: "Транспорт",
    description: "Разъездной характер работы. Необходимо наличие автомобиля",
  },
  {
    icon: "mdi-currency-rub",
    title: "Оплата",
    description: "Сдельная оплата труда",
  },

  {
    icon: "mdi-account-arrow-up",
    title: "Возможности роста",
    description: "Освоение новых навыков в области нулевого цикла, карьерный рост внутри компании",
  },
  {
    icon: "mdi-map-marker",
    title: "Место работы",
    description: "Московская область",
  },
]);

// Methods
const applyForJob = () => {
  // Здесь может быть логика отправки формы
  console.log("Отклик на вакансию отправлен");
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;

.project-subtitle {
  white-space: wrap;
}
.vacancy-title {
  text-transform: uppercase !important;
  font-weight: 600;
  line-height: 1.3 !important;
  @media (max-width: $md4) {
    font-size: 10px;
  }
}
.gradient-text {
  background: linear-gradient(90deg, #ea5b0c, #ff8c42);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.works-text {
  background: linear-gradient(90deg, #1d1d1c, #372c25);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
}

.gradient-link {
  color: #ff8c42;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    color: #ea5b0c;
    text-decoration: underline;
  }
}

.gradient-chip {
  border-color: #ff8c42 !important;
  color: #f76e18 !important;
  // &:hover {
  //   background: rgba(255, 140, 66, 0.1) !important;
  // }
}

.gradient-icon {
  color: #ff8c42 !important;
}

.gradient-alert {
  border-left: 4px solid #ff8c42 !important;
}

.apply-btn {
  background: linear-gradient(90deg, #ea5b0c, #ff8c42) !important;
  color: white !important;
  font-weight: bold;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(234, 91, 12, 0.3);
  }
}

/* Специфичные стили для секций */
.benefits-list {
  overflow: hidden;
  .benefit-item {
    transition: all 0.3s ease;
    &:hover {
      background: rgba(255, 140, 66, 0.05);
      transform: translateX(5px);
    }
    @media (max-width: $md4) {
      transition: none;
      &:hover {
        transform: none;
        background: inherit;
      }
    }
  }
}

.project-card {
  transition: all 0.3s ease;
  border-color: rgba(234, 91, 12, 0.3) !important;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(234, 91, 12, 0.2);
    border-color: #ff8c42 !important;
  }
  @media (max-width: $md4) {
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
}

.requirements-table {
  tr {
    transition: all 0.2s ease;
    &:hover {
      background: rgba(255, 140, 66, 0.05);
    }
  }
}

.conditions-list {
  .condition-item {
    transition: all 0.3s ease;
    &:hover {
      background: rgba(255, 140, 66, 0.05);
    }
    @media (max-width: $md4) {
      &:hover {
        background: inherit;
      }
    }
  }
}

.works-list {
  .works-item {
    color: black;
    transition: all 0.3s ease;
    &:hover {
      background: rgba(255, 140, 66, 0.05);
    }
    @media (max-width: $md4) {
      &:hover {
        background: inherit;
      }
    }
  }
}

.gap-2 {
  gap: 8px;
}

////<>================================================================================

//</>===============================================================================
.requirements-card {
  border-radius: 12px;
  border-left: 4px solid #ff8c42;
  transition: all 0.3s ease;

  .requirement-item {
    transition: all 0.2s ease;

    &:hover {
      transform: translateX(4px);

      .v-icon {
        transform: scale(1.2);
      }
    }
  }

  .v-icon {
    transition: all 0.2s ease;
    min-width: 24px;
  }
}

//<Карточки статистка компании>================================================================================
.stat-card {
  border-radius: 12px;
  background: rgba(255, 140, 66, 0.05) !important;
  border: 1px solid rgba(255, 140, 66, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(234, 91, 12, 0.1);
    border-color: #ff8c42;
    background: rgba(255, 140, 66, 0.1) !important;

    .stat-icon {
      transform: scale(1.1);
    }
  }

  @media (max-width: $md4) {
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
}

.stat-icon {
  color: #ff8c42;
  transition: all 0.3s ease;
}

.gap-4 {
  gap: 16px;
}
//</Карточки статистка компании>===============================================================================

//<Карточка о компании>================================================================================
.about-company {
  border-radius: 12px;
  border-left: 4px solid #ff8c42;
  box-shadow: 0 2px 8px rgba(234, 91, 12, 0.08);
  transition: all 0.3s ease;

  // &:hover {
  //   box-shadow: 0 4px 16px rgba(234, 91, 12, 0.12);
  //   transform: translateY(-2px);
  // }
}

.company-description {
  font-size: 1.05rem;
  line-height: 1.6;
  color: #333;
}

.highlight-text {
  background: linear-gradient(90deg, rgba(255, 140, 66, 0.15), rgba(255, 140, 66, 0.3));
  padding: 0 4px;
  border-radius: 3px;
  font-weight: 500;
}

.gradient-link {
  font-weight: 500;
  position: relative;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, #ea5b0c, #ff8c42);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #ea5b0c;
    text-decoration: none;
    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
}
//</Карточка о компании>===============================================================================
</style>
