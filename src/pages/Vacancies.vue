<!-- <template>
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
        <div class="my-6">
          <h2 class="text-h5 font-weight-bold mb-3 gradient-text" :class="mobile ? 'ml-4' : ''">О вакансии</h2>
          <v-card variant="flat" color="#FFF8F5" class="about-company pa-5 mb-6">
            <div class="d-flex align-start">
              <div>
                <div class="d-flex">
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

      <v-card-actions class="px-4 pb-4 justify-center">
        <v-btn color="primary" variant="flat" size="large" @click="showDialog = true" class="apply-btn mb-4">
          Откликнуться на вакансию
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="showDialog" :width="mobile ? '100%' : '800'" persistent :fullscreen="mobile">
      <v-card class="feedback-card mx-auto" elevation="3" :class="{ 'mobile-card': mobile }">
        <template v-if="!isSubmitted && showDialog">
          <v-card-title class="feedback-title">
            <span class="text-uppercase">Отклик на вакансию</span> <br />
            "Младший инженер-бригадир"
            <div class="title-underline"></div>
          </v-card-title>

          <v-card-text>
            <v-form ref="form" @submit.prevent="submitVacancyApplication">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Ваше имя*"
                    variant="underlined"
                    color="primary"
                    required
                    :density="mobile ? 'compact' : 'default'"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="email"
                    :rules="contactRules"
                    label="Ваша почта или телефон*"
                    variant="underlined"
                    color="primary"
                    required
                    :density="mobile ? 'compact' : 'default'"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    v-model="question"
                    label="Расскажите о своем опыте"
                    variant="underlined"
                    color="primary"
                    rows="3"
                    auto-grow
                    :density="mobile ? 'compact' : 'default'"
                    hint="Почему вы подходите на эту позицию?"
                  ></v-textarea>
                </v-col>

                <v-col cols="12" class="d-flex" :class="mobile ? 'flex-column-reverse gap-2' : 'justify-space-between'">
                  <v-btn
                    type="submit"
                    :size="mobile ? 'large' : 'large'"
                    class="submit-btn"
                    :append-icon="!mobile ? 'mdi-send' : null"
                    :loading="isLoading"
                    :disabled="isLoading"
                    :block="mobile"
                    :height="mobile ? '44' : '48'"
                  >
                    <template v-slot:loader>
                      <v-progress-circular indeterminate color="white" :size="mobile ? 20 : 24" width="3"></v-progress-circular>
                    </template>
                    {{ mobile ? "Отправить" : "Отправить отклик" }}
                  </v-btn>

                  <v-btn
                    variant="text"
                    :size="mobile ? 'large' : 'large'"
                    @click="showDialog = false"
                    :disabled="isLoading"
                    :block="mobile"
                  >
                    Отмена
                  </v-btn>
                </v-col>

                <v-col cols="12">
                  <p class="text-caption text-medium-emphasis">
                    Нажимая кнопку «отправить», вы соглашаетесь с
                    <router-link :to="{ name: ROUTES_PATHS.POLICY }" class="text-primary text-decoration-none">
                      Политикой конфиденциальности
                    </router-link>
                  </p>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </template>

        <template v-else-if="isSubmitted">
          <div class="success-message pa-4">
            <v-icon color="success" size="64">mdi-check-circle</v-icon>
            <h2 class="feedback-title">Отклик успешно отправлен!</h2>
            <p class="mb-4 text-center">Мы свяжемся с вами в ближайшее время</p>
          </div>
        </template>
        <template v-else-if="isError">
          <div class="error-message pa-4">
            <v-icon color="error" size="64">mdi-close-circle</v-icon>
            <h2 class="feedback-title">Ошибка отправки</h2>
            <p class="mb-4 text-center">Не удалось отправить отклик. Пожалуйста, попробуйте еще раз.</p>
            <v-btn color="primary" size="large" @click="retrySubmission" :block="mobile"> Попробовать снова </v-btn>
          </div>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useDisplay } from "vuetify";
import { ROUTES_PATHS } from "../constants";
import { CHATS_ID, TOPICS_ID } from "../services/botService";
import { sendTextMessage } from "../services/botService";
import { useRoute } from "vue-router";

const route = useRoute();
const routeMetaTitle = computed(() => route.meta?.title || "Стандартный заголовок");
const { mobile } = useDisplay();

// Данные формы
const showDialog = ref(false);
const name = ref("");
const email = ref("");
const question = ref("");
const form = ref(null);
const isSubmitted = ref(false);
const isLoading = ref(false);

// Правила валидации
const nameRules = computed(() => [(v) => !!v || "Имя обязательно для заполнения"]);
const contactRules = computed(() => [(v) => !!v || "Контактные данные обязательны"]);

watch(isSubmitted, (newVal) => {
  if (newVal) {
    setTimeout(() => {
      showDialog.value = false;
      resetForm();
      isSubmitted.value = false;
    }, 2000);
  }
});

// Сообщение для Telegram
const vacancyMessage = computed(() => {
  return {
    chat_id: CHATS_ID.BASE,
    topic_id: TOPICS_ID.VACANCIES,
    text: `📌 Новый отклик на вакансию\nПозиция: Младший инженер-бригадир\nИмя: ${name.value}\nКонтакт: ${email.value}\nОпыт: ${question.value}`,
  };
});

// Сброс формы
function resetForm() {
  // isSubmitted.value = false;
  name.value = "";
  email.value = "";
  question.value = "";
}
const isError = ref(false);

// Отправка формы
async function submitVacancyApplication() {
  const { valid } = await form.value.validate();

  if (!valid) return;

  isLoading.value = true;
  isError.value = false;

  try {
    await sendTextMessage(vacancyMessage.value);
    isSubmitted.value = true;
  } catch (error) {
    console.error("Ошибка отправки:", error);
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
}

function retrySubmission() {
  isError.value = false;
  submitVacancyApplication();
}
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
    description: "Разъездной характер работы. Необходимо наличие автомобиля и желание много ездить",
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
</script>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;
.error-message {
  text-align: center;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;

  h2 {
    margin: 20px 0;
    color: #d32f2f;
    font-size: 1.8rem;
    font-weight: 700;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 30px;
    max-width: 80%;
    color: #333;
  }

  .v-icon {
    margin-bottom: 20px;
  }
}
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

//<Стили для диалога>================================================================================
.feedback-card {
  padding: 40px;
  border-radius: 16px;

  @media (max-width: 600px) {
    padding: 20px;
  }
}

.feedback-title {
  font-size: 1.7rem;
  font-weight: 600;
  position: relative;
  margin-bottom: 1rem;
  text-align: center;
  white-space: normal;
  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
}

.title-underline {
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #ea5b0c, #ff8c42);
  border-radius: 3px;
}

.submit-btn {
  background: linear-gradient(90deg, #ea5b0c, #ff8c42);
  color: white;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
}
//</Стили для диалога>===============================================================================
.feedback-card {
  padding: 40px;
  border-radius: 16px;

  @media (max-width: 600px) {
    padding: 20px;
  }
}

.title-underline {
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #ea5b0c, #ff8c42);
  border-radius: 3px;
}

.submit-btn {
  background: linear-gradient(90deg, #ea5b0c, #ff8c42);
  color: white;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
}

.success-message {
  text-align: center;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;

  h2 {
    margin: 20px 0;
    color: #ea5b0c;
    font-size: 1.8rem;
    font-weight: 700;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 30px;
    max-width: 80%;
    color: #333;
  }

  .v-icon {
    margin-bottom: 20px;
  }
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
@media (max-width: 568px) {
  .feedback-card {
    margin: 0 !important;
    border-radius: 0 !important;
  }

  .v-card-text {
    padding: 12px !important;
  }

  .feedback-title {
    font-size: 1.3rem !important;
    padding: 12px 12px 8px !important;
  }

  .v-text-field,
  .v-textarea {
    font-size: 0.9rem !important;
  }

  .v-btn {
    font-size: 0.9rem !important;
    height: 44px !important;
  }

  .v-icon {
    // font-size: 1.2rem !important;
  }
}

/* Для всех мобильных */
.mobile-card {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.mobile-card .v-card-text {
  flex: 1;
  overflow-y: auto;
}
</style> -->

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
        <div class="my-6">
          <h2 class="text-h5 font-weight-bold mb-3 gradient-text" :class="mobile ? 'ml-4' : ''">О вакансии</h2>
          <v-card variant="flat" color="#FFF8F5" class="about-company pa-5 mb-6">
            <div class="d-flex align-start">
              <div>
                <div class="d-flex">
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

      <v-card-actions class="px-4 pb-4 justify-center">
        <v-btn color="primary" variant="flat" size="large" @click="showDialog = true" class="apply-btn mb-4">
          Откликнуться на вакансию
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="showDialog" :width="mobile ? '100%' : '800'" persistent :fullscreen="mobile">
      <v-card class="feedback-card mx-auto" elevation="3" :class="{ 'mobile-card': mobile }">
        <template v-if="!isSubmitted && showDialog">
          <v-card-title class="feedback-title">
            <span class="text-uppercase">Отклик на вакансию</span> <br />
            "Младший инженер-бригадир"
            <div class="title-underline"></div>
          </v-card-title>

          <v-card-text>
            <v-form ref="form" @submit.prevent="submitVacancyApplication">
              <v-row>
                <v-col cols="12">
                  <v-card class="test-card mb-6" elevation="0" color="#FFF8F5">
                    <v-card-text class="d-flex flex-column align-center text-center">
                      <v-icon color="primary" size="48" class="mb-3">mdi-clipboard-text-outline</v-icon>
                      <h3 class="text-h6 font-weight-bold mb-2">Требуется пройти тест перед откликом</h3>
                      <p class="mb-4">Пожалуйста, пройдите наш тест и прикрепите скриншоты результатов</p>
                      <v-btn
                        href="https://weigroup.ru/test2"
                        target="_blank"
                        color="primary"
                        variant="flat"
                        class="mb-2"
                        prepend-icon="mdi-link"
                      >
                        Перейти к тесту
                      </v-btn>
                      <p class="text-caption text-medium-emphasis mb-0">После завершения теста сохраните скриншоты и загрузите их ниже</p>
                    </v-card-text>
                  </v-card>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Ваше имя*"
                    variant="outlined"
                    color="primary"
                    required
                    :density="mobile ? 'comfortable' : 'default'"
                    prepend-inner-icon="mdi-account-outline"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="email"
                    :rules="contactRules"
                    label="Ваша почта или телефон*"
                    variant="outlined"
                    color="primary"
                    required
                    :density="mobile ? 'comfortable' : 'default'"
                    prepend-inner-icon="mdi-email-outline"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-card variant="outlined" class="pa-4 upload-card">
                    <v-card-title class="text-subtitle-1 font-weight-bold d-flex align-center">
                      <v-icon color="primary" class="mr-2">mdi-cloud-upload-outline</v-icon>
                      Скриншоты результатов теста*
                    </v-card-title>
                    <v-card-text>
                      <v-file-input
                        v-model="screenshots"
                        :rules="screenshotsRules"
                        label="Добавьте скриншоты"
                        accept="image/*"
                        variant="outlined"
                        color="primary"
                        multiple
                        chips
                        counter
                        show-size
                        prepend-icon=""
                        :density="mobile ? 'compact' : 'default'"
                        @change="handleFilesUpload"
                      >
                        <template v-slot:selection="{ fileNames }">
                          <v-chip
                            v-for="fileName in fileNames"
                            :key="fileName"
                            color="primary"
                            variant="outlined"
                            size="small"
                            class="mr-2 my-1"
                            close
                            @click:close="removeFile(fileName)"
                          >
                            {{ fileName }}
                          </v-chip>
                        </template>
                      </v-file-input>
                      <div class="text-caption text-medium-emphasis">
                        Можно загрузить до 5 файлов (JPG, PNG). Максимальный размер каждого файла - 5MB
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>

                <!-- <v-col cols="12">
                  <v-textarea
                    v-model="question"
                    label="Расскажите о своем опыте"
                    variant="outlined"
                    color="primary"
                    rows="3"
                    auto-grow
                    :density="mobile ? 'compact' : 'default'"
                    prepend-inner-icon="mdi-pencil-outline"
                    hint="Почему вы подходите на эту позицию?"
                  ></v-textarea>
                </v-col> -->

                <v-col cols="12" class="d-flex" :class="mobile ? 'flex-column-reverse gap-2' : 'justify-space-between'">
                  <v-btn
                    type="submit"
                    :size="mobile ? 'large' : 'large'"
                    class="submit-btn"
                    :append-icon="!mobile ? 'mdi-send' : null"
                    :loading="isLoading"
                    :disabled="isLoading || !screenshots || screenshots.length === 0"
                    :block="mobile"
                    :height="mobile ? '44' : '48'"
                  >
                    <template v-slot:loader>
                      <v-progress-circular indeterminate color="white" :size="mobile ? 20 : 24" width="3"></v-progress-circular>
                    </template>
                    {{ mobile ? "Отправить" : "Отправить отклик" }}
                  </v-btn>

                  <v-btn
                    variant="text"
                    :size="mobile ? 'large' : 'large'"
                    @click="showDialog = false"
                    :disabled="isLoading"
                    :block="mobile"
                  >
                    Отмена
                  </v-btn>
                </v-col>

                <v-col cols="12">
                  <p class="text-caption text-medium-emphasis">
                    Нажимая кнопку «отправить», вы соглашаетесь с
                    <router-link :to="{ name: ROUTES_PATHS.POLICY }" class="text-primary text-decoration-none">
                      Политикой конфиденциальности
                    </router-link>
                  </p>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </template>

        <template v-else-if="isSubmitted">
          <div class="success-message pa-4">
            <v-icon color="success" size="64">mdi-check-circle</v-icon>
            <h2 class="feedback-title">Отклик успешно отправлен!</h2>
            <p class="mb-4 text-center">Мы свяжемся с вами в ближайшее время</p>
          </div>
        </template>
        <template v-else-if="isError">
          <div class="error-message pa-4">
            <v-icon color="error" size="64">mdi-close-circle</v-icon>
            <h2 class="feedback-title">Ошибка отправки</h2>
            <p class="mb-4 text-center">Не удалось отправить отклик. Пожалуйста, попробуйте еще раз.</p>
            <v-btn color="primary" size="large" @click="retrySubmission" :block="mobile"> Попробовать снова </v-btn>
          </div>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useDisplay } from "vuetify";
import { ROUTES_PATHS } from "../constants";
import { CHATS_ID, TOPICS_ID } from "../services/botService";
import { sendTextMessage } from "../services/botService";
import { useRoute } from "vue-router";

const route = useRoute();
const routeMetaTitle = computed(() => route.meta?.title || "Стандартный заголовок");
const { mobile } = useDisplay();

// Данные формы
const showDialog = ref(false);
const name = ref("");
const email = ref("");
// const question = ref("");
const screenshots = ref([]);
const form = ref(null);
const isSubmitted = ref(false);
const isLoading = ref(false);

// Правила валидации
const nameRules = computed(() => [(v) => !!v || "Имя обязательно для заполнения"]);
const contactRules = computed(() => [(v) => !!v || "Контактные данные обязательны"]);
const screenshotsRules = computed(() => [
  (v) => (!!v && v.length > 0) || "Необходимо загрузить хотя бы один скриншот",
  (v) => !v || v.every((file) => file.size < 5000000) || "Каждый файл должен быть меньше 5 MB",
  (v) => !v || v.length <= 5 || "Можно загрузить не более 5 файлов",
]);

const handleFilesUpload = (files) => {
  if (files && files.length > 0) {
    console.log("Загружено файлов:", files.length);
  }
};

const removeFile = (fileName) => {
  screenshots.value = screenshots.value.filter((file) => file.name !== fileName);
};

watch(isSubmitted, (newVal) => {
  if (newVal) {
    setTimeout(() => {
      showDialog.value = false;
      resetForm();
      isSubmitted.value = false;
    }, 2000);
  }
});

// Сообщение для Telegram
const vacancyMessage = computed(() => {
  return {
    chat_id: CHATS_ID.BASE,
    topic_id: TOPICS_ID.VACANCIES,
    text: `📌 Новый отклик на вакансию\nПозиция: Младший инженер-бригадир\nИмя: ${name.value}\nКонтакт: ${email.value}\nСкриншотов: ${
      screenshots.value?.length || 0
    }`,
  };
});

const photo = computed(() => {
  return {
    screenshots: screenshots,
    name: name,
    email: email,
  };
});

// Сброс формы (обновлено)
function resetForm() {
  name.value = "";
  email.value = "";
  // question.value = "";
  screenshots.value = [];
}
const isError = ref(false);

const token = "7564255529:AAELnqPYEHTvtJzwSaf3tnn7JQb4whqx688";
import axios from "axios";
const sendFilesToTelegram = async () => {
  try {
    // Сначала создаем массив media для sendMediaGroup
    const media = screenshots.value.map((file, index) => ({
      type: "photo",
      media: `attach://photo${index}`,
      caption: index === 0 ? `📌 Отклик на вакансию\nИмя: ${name.value}\nКонтакт: ${email.value}` : undefined,
    }));

    // Создаем FormData и добавляем файлы
    const formData = new FormData();
    formData.append("chat_id", CHATS_ID.BASE);
    formData.append("message_thread_id", TOPICS_ID.VACANCIES); // для тем форума

    // Добавляем каждый файл с уникальным именем
    screenshots.value.forEach((file, index) => {
      formData.append(`photo${index}`, file);
    });

    // Добавляем media как JSON строку
    formData.append("media", JSON.stringify(media));

    const response = await axios.post(`https://api.telegram.org/bot${token}/sendMediaGroup`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Ошибка отправки файлов:", error.response?.data || error.message);
    throw error;
  }
};

// Отправка формы
async function submitVacancyApplication() {
  const { valid } = await form.value.validate();

  if (!valid) return;

  isLoading.value = true;
  isError.value = false;

  try {
    await sendTextMessage(vacancyMessage.value);
    // Здесь нужно добавить отправку файлов screenshots.value
    if (screenshots.value.length > 0) {
      await sendFilesToTelegram();
    }
    isSubmitted.value = true;
  } catch (error) {
    console.error("Ошибка отправки:", error);
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
}

function retrySubmission() {
  isError.value = false;
  submitVacancyApplication();
}
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
    description: "Разъездной характер работы. Необходимо наличие автомобиля и желание много ездить",
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
</script>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;
.error-message {
  text-align: center;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;

  h2 {
    margin: 20px 0;
    color: #d32f2f;
    font-size: 1.8rem;
    font-weight: 700;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 30px;
    max-width: 80%;
    color: #333;
  }

  .v-icon {
    margin-bottom: 20px;
  }
}
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

//<Стили для диалога>================================================================================
.feedback-card {
  padding: 40px;
  border-radius: 16px;

  @media (max-width: 600px) {
    padding: 20px;
  }
}

.feedback-title {
  font-size: 1.7rem;
  font-weight: 600;
  position: relative;
  margin-bottom: 1rem;
  text-align: center;
  white-space: normal;
  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
}

.title-underline {
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #ea5b0c, #ff8c42);
  border-radius: 3px;
}

.submit-btn {
  background: linear-gradient(90deg, #ea5b0c, #ff8c42);
  color: white;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
}
//</Стили для диалога>===============================================================================
.feedback-card {
  padding: 40px;
  border-radius: 16px;

  @media (max-width: 600px) {
    padding: 20px;
  }
}

.title-underline {
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #ea5b0c, #ff8c42);
  border-radius: 3px;
}

.submit-btn {
  background: linear-gradient(90deg, #ea5b0c, #ff8c42);
  color: white;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
}

.success-message {
  text-align: center;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;

  h2 {
    margin: 20px 0;
    color: #ea5b0c;
    font-size: 1.8rem;
    font-weight: 700;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 30px;
    max-width: 80%;
    color: #333;
  }

  .v-icon {
    margin-bottom: 20px;
  }
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
@media (max-width: 568px) {
  .feedback-card {
    margin: 0 !important;
    border-radius: 0 !important;
  }

  .v-card-text {
    padding: 12px !important;
  }

  .feedback-title {
    font-size: 1.3rem !important;
    padding: 12px 12px 8px !important;
  }

  .v-text-field,
  .v-textarea {
    font-size: 0.9rem !important;
  }

  .v-btn {
    font-size: 0.9rem !important;
    height: 44px !important;
  }

  .v-icon {
    // font-size: 1.2rem !important;
  }
}

/* Для всех мобильных */
.mobile-card {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.mobile-card .v-card-text {
  flex: 1;
  overflow-y: auto;
}
.test-card {
  border-left: 4px solid #ff8c42;
  border-radius: 12px !important;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(234, 91, 12, 0.1);
  }
}

.upload-card {
  border-radius: 12px !important;
  border: 1px dashed rgba(234, 91, 12, 0.3) !important;
  transition: all 0.3s ease;

  &:hover {
    border-color: #ff8c42 !important;
    background-color: rgba(255, 140, 66, 0.03);
  }
}

.v-field--outlined {
  border-radius: 8px !important;
}

.submit-btn {
  background: linear-gradient(90deg, #ea5b0c, #ff8c42) !important;
  color: white !important;
  font-weight: bold;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(234, 91, 12, 0.3);
  }

  &:disabled {
    background: #e0e0e0 !important;
    color: #9e9e9e !important;
    transform: none !important;
    box-shadow: none !important;
  }
}

/* Анимации */
.v-icon {
  transition: all 0.2s ease;
}

.v-chip--outlined:hover {
  transform: scale(1.02);
}

/* Мобильные стили */
@media (max-width: 600px) {
  .feedback-card {
    padding: 16px;
    border-radius: 0 !important;
  }

  .feedback-title {
    font-size: 1.25rem;
    padding: 8px 0 16px !important;
  }

  .test-card {
    padding: 16px !important;

    .v-icon {
      font-size: 36px !important;
    }
  }

  .upload-card {
    padding: 12px !important;
  }

  .v-field--outlined {
    font-size: 0.9rem;
  }

  .v-btn {
    font-size: 0.9rem;
    height: 44px;
  }
}
</style>
