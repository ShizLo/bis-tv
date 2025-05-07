<script setup>
import { ref, computed } from "vue";
import { useDisplay } from "vuetify";
import { ROUTES_PATHS } from "../constants";
import { CHATS_ID, TOPICS_ID } from "../services/botService";
import { sendTextMessage } from "../services/botService";
import { useRoute } from "vue-router";

const route = useRoute();
const routeMetaTitle = computed(() => route.meta?.title || "Стандартный заголовок");
const { mobile } = useDisplay();

const name = ref("");
const email = ref("");
const question = ref("");
const form = ref(null);
const showSuccessSnackbar = ref(false);
const snackbarTimeout = ref(3000);

const nameRules = computed(() => [(v) => !!v || "Имя обязательно для заполнения"]);

const contactRules = computed(() => [(v) => !!v || "Контактные данные обязательны"]);
const message = computed(() => {
  const myText = `👨🏻 Новая заявка\nИмя: ${name.value}\nКонтакт: ${email.value}\nВопрос: ${question.value}\nСтраница: ${routeMetaTitle.value}`;
  return {
    chat_id: CHATS_ID.BASE,
    topic_id: TOPICS_ID.SERVICES,
    text: myText,
  };
});

async function submit() {
  const { valid } = await form.value.validate();

  if (!valid) return;

  try {
    sendTextMessage(message.value);
    showSuccessSnackbar.value = true;
    form.value.reset();
  } catch (error) {
    console.error("Ошибка отправки:", error);
  }
}
</script>

<template>
  <v-container>
    <v-card class="feedback-card mx-auto mb-4" max-width="1000" elevation="3">
      <v-card-title class="feedback-title">
        Оставьте заявку
        <div class="title-underline"></div>
      </v-card-title>

      <v-card-text>
        <v-form ref="form" @submit.prevent="submit">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="name"
                :rules="nameRules"
                label="Ваше имя*"
                variant="underlined"
                color="primary"
                required
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
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-textarea
                v-model="question"
                label="Задайте ваш вопрос"
                variant="underlined"
                color="primary"
                rows="3"
                auto-grow
              ></v-textarea>
            </v-col>

            <v-col cols="12" class="d-flex flex-wrap align-center" :class="mobile ? 'justify-center' : 'justify-space-between'">
              <v-btn
                type="submit"
                color="primary"
                :size="mobile ? 'large' : 'x-large'"
                class="submit-btn"
                :append-icon="mobile ? '' : 'mdi-arrow-right'"
                :class="mobile ? 'mb-3' : 'mb-0'"
                @click="submit"
              >
                Отправить
              </v-btn>

              <v-btn href="tel:+79112775607" variant="text" color="grey-darken-3" :size="mobile ? 'large' : 'large'" class="phone-link">
                <v-icon icon="mdi-phone" class="mr-2"></v-icon>
                +7 911 277-56-07
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
    </v-card>

    <v-snackbar v-model="showSuccessSnackbar" :timeout="snackbarTimeout" color="success" location="top right" elevation="24">
      Ваша заявка успешно отправлена!
    </v-snackbar>
  </v-container>
</template>

<style scoped>
.feedback-card {
  padding: 40px;
  border-radius: 16px;
}

.feedback-title {
  font-size: 2rem;
  font-weight: 700;
  position: relative;
  margin-bottom: 1rem;
}

.title-underline {
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #ea5b0c, #ff8c42);
  border-radius: 3px;
}

.submit-btn {
  background: linear-gradient(90deg, #ea5b0c, #ff8c42);
  color: white;
  transition: transform 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
}

.phone-link {
  transition: color 0.3s ease;
}

.phone-link:hover {
  color: #ea5b0c !important;
}

@media (max-width: 600px) {
  .feedback-card {
    padding: 10px;
  }

  .feedback-title {
    font-size: 1.625rem;
  }
}
</style>
