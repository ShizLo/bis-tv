<script setup>
import { ROUTES_PATHS } from "../../constants";
import { onMounted, reactive, ref, computed } from "vue";
import axios from "axios";
import { useDisplay } from "vuetify";
const { mobile } = useDisplay();
import { TOPICS_ID } from "../../services/botService";

// Состояния
const dialog = ref(false);
const dateTime = ref(new Date().toISOString());
const selectedDateTime = ref(null);
const form = ref(null);
const isSubmitted = ref(false);
const isLoading = ref(false); // Состояние загрузки

onMounted(() => {
  if (mobile.value) {
    document.querySelectorAll("input, textarea").forEach((input) => {
      input.addEventListener("focus", () => {
        input.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }
});
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
// Форматирование даты и времени
const formattedDateTime = computed(() => {
  const date = new Date(dateTime.value);
  return date.toLocaleString("ru-RU", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
});

// Обновить выбранную дату и время
const updateDateTime = (value) => {
  dateTime.value = value;
  selectedDateTime.value = formattedDateTime.value;
};

const CHATS_ID = {
  BASE: -1002378962422,
  BASE_DEV: -1002383432249,
};
const token = "7564255529:AAELnqPYEHTvtJzwSaf3tnn7JQb4whqx688";

const message = reactive({
  fio: "",
  email: "",
  septik: [],
  address: "",
  communication: [],
});

const communication = reactive({
  phone: false,
  telegram: false,
  whatsup: false,
});

const props = defineProps({
  title: {
    typeof: String,
  },
});

const moveCursorToFirstHash = () => {
  if (message.email.length != 18) {
    message.email = "+7 ";
  }
};

const onBlur = () => {
  if (message.email.length != 18) {
    message.email = "";
  }
};

async function sendMessage() {
  const { valid } = await form.value.validate();

  if (!valid) {
    return;
  }

  isLoading.value = true; // Включаем загрузку

  try {
    const formattedText = `
  👨🏻 Заявка на сервис
  ${
    message.fio != "" ||
    message.email != "" ||
    message.address != "" ||
    selectedDateTime.value ||
    message.septik.length > 0 ||
    message.communication.length > 0
      ? `[line]`
      : ""
  }
${message.fio != "" ? `ФИО: ${message.fio}` : ""}
${message.email != "" ? `Телефон: ${message.email}` : ""}
${message.address != "" ? `Адрес: ${message.address}` : ""}
${message.septik.length > 0 ? `Септик: ${message.septik.map((task) => `${task}`).join(", ")}` : ""}
${message.communication.length > 0 ? `Связь: ${message.communication.map((task) => `${task}`).join(", ")}` : ""}
${selectedDateTime.value ? `Удобное время: ${selectedDateTime.value}` : ""}
`
      .replace(/\./g, "\\\.")
      .replace(/-/g, "\\-")
      .replace(/\n+/g, "\n")
      .replace(/\s*\[line\]/g, "\n")
      .replace(/=/g, "\\=")
      .replace(/\+/g, "\\+")
      .replace(/>/g, "\\>")
      .replace(/\(/g, "\\(")
      .replace(/\)/g, "\\)")
      .replace(/\]/g, "\\]")
      .replace(/\[/g, "\\[")
      .replace(/_/g, "\\_")
      .replace(/\*/g, "\\*")
      .replace(/~/g, "\\~")
      .replace(/`/g, "\\`")
      .replace(/#/g, "\\#")
      .replace(/\|/g, "\\|")
      .replace(/{/g, "\\{")
      .replace(/}/g, "\\}")
      .replace(/!/g, "\\!")
      .trim();

    await axios
      .post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: CHATS_ID.BASE,
        text: formattedText,
        parse_mode: "MarkdownV2",
        message_thread_id: TOPICS_ID.SERVICES,
        polling: true,
      })
      .then(() => {
        // Задержка перед показом успешного сообщения
        setTimeout(() => {
          if (mobile.value) {
            scrollToTop();
          }
          isSubmitted.value = true;
          isLoading.value = false;
          message.fio = "";
          message.email = "";
          message.address = "";
          message.septik = [];
          message.communication = [];
          selectedDateTime.value = null;
        }, 1000);

        // Очищаем форму
      });
  } catch (error) {
    console.error("Ошибка при отправке сообщения:", error);
    isLoading.value = false;
  }

  document.querySelectorAll(".form__button").forEach((element) => {
    element.addEventListener("touchstart", () => element.classList.add("on-hover"));
    element.addEventListener("touchend", () => element.classList.remove("on-hover"));
  });
}
</script>

<template>
  <section id="section" class="global-form feedback-form">
    <div class="_container global-form_mt">
      <div class="form-bl brd" :style="{ minHeight: '600px' }">
        <!-- Фиксированная высота -->
        <div class="form-submit">
          <template v-if="!isSubmitted">
            <div class="form__title">Обслуживание септика или ЛОС</div>
            <p class="mb-4">Оставьте заявку на обслуживание</p>
            <v-form @submit.prevent="sendMessage" ref="form">
              <div class="flex-input mb-sm-2">
                <div class="col">
                  <v-text-field
                    variant="outlined"
                    :rules="[(v) => !!v || 'Обязательное поле']"
                    required
                    v-model="message.fio"
                    name="Ваше ФИО"
                    placeholder="Ваше ФИО"
                    density="comfortable"
                  >
                    <template v-slot:label> <span> Ваше ФИО </span> </template>
                    <template v-slot:prepend-inner>
                      <v-icon color="orange-darken-4"> mdi-account </v-icon>
                    </template>
                  </v-text-field>
                </div>
                <div class="col">
                  <v-text-field
                    v-model="message.email"
                    variant="outlined"
                    v-mask="'+7 (###) ###-##-##'"
                    placeholder="+7 (___) ___-__-__"
                    :rules="[(v) => !!v || 'Обязательное поле', (v) => (v && v.length === 18) || 'Введите корректный номер']"
                    required
                    density="comfortable"
                    @focus="moveCursorToFirstHash"
                    @blur="onBlur"
                  >
                    <template v-slot:label> <span class="test"> Номер телефона </span> </template>
                    <template v-slot:prepend-inner>
                      <v-icon color="orange-darken-4"> mdi-phone </v-icon>
                    </template>
                  </v-text-field>
                </div>
                <div class="col">
                  <v-select
                    v-model="message.septik"
                    :items="['Евробион', 'Астра', 'Нет в списке']"
                    label="Укажите Ваш септик"
                    variant="outlined"
                    multiple
                    density="comfortable"
                  >
                    <template v-slot:prepend-inner>
                      <v-icon color="orange-darken-4"> mdi-barrel </v-icon>
                    </template>
                  </v-select>
                </div>
              </div>
              <div class="flex-input mb-1">
                <div class="col">
                  <v-text-field variant="outlined" v-model="message.address" placeholder="Адрес дома или № объекта" density="comfortable">
                    <template v-slot:label> <span> Адрес дома или № объекта </span> </template>
                    <template v-slot:prepend-inner>
                      <v-icon color="orange-darken-4"> mdi-map-marker-outline </v-icon>
                    </template>
                  </v-text-field>
                </div>
                <div class="col">
                  <v-select
                    v-model="message.communication"
                    :items="['Звонок', 'Telegram', 'WhatsApp']"
                    label="Укажите удобный способ связи"
                    variant="outlined"
                    density="comfortable"
                    multiple
                  >
                    <template v-slot:prepend-inner>
                      <v-icon color="orange-darken-4"> mdi-forum </v-icon>
                    </template>
                  </v-select>
                </div>
                <div class="col">
                  <v-date-picker
                    :valid-hours="{ min: 9, max: 18 }"
                    @update:modelValue="updateDateTime"
                    v-model="dateTime"
                    :min-date="new Date()"
                    mode="datetime"
                    is24hr
                  >
                    <template v-slot="{ inputValue, inputEvents }">
                      <v-text-field
                        variant="outlined"
                        v-model="selectedDateTime"
                        label="Выберите время и дату выезда"
                        readonly
                        hide-details
                        :value="inputValue"
                        v-on="inputEvents"
                        density="comfortable"
                      >
                        <template v-slot:prepend-inner>
                          <v-icon color="orange-darken-4"> mdi-calendar </v-icon>
                        </template>
                      </v-text-field>
                    </template>
                  </v-date-picker>
                </div>
              </div>

              <div class="feedback mb-4">
                <p class="feedback__text">
                  Нажимая кнопку «Отправить заявку», вы соглашаетесь с
                  <router-link :to="{ name: ROUTES_PATHS.POLICY }"> Политикой конфиденциальности.</router-link>
                </p>
              </div>
              <div class="feedback-form__footer">
                <v-btn
                  type="submit"
                  color="primary"
                  :size="mobile ? 'large' : 'x-large'"
                  class="submit-btn"
                  :append-icon="mobile ? '' : 'mdi-arrow-right'"
                  :class="mobile ? 'mb-3' : 'mb-0'"
                  :loading="isLoading"
                  :disabled="isLoading"
                >
                  <template v-slot:loader>
                    <v-progress-circular indeterminate color="white" size="24" width="3"></v-progress-circular>
                  </template>
                  Отправить
                </v-btn>
              </div>
            </v-form>
          </template>
          <template v-else>
            <div class="success-message">
              <v-icon color="success" size="64">mdi-check-circle</v-icon>
              <h2 class="form__title">Заявка успешно отправлена!</h2>
              <p class="mb-4">Мы свяжемся с вами в ближайшее время</p>
              <v-btn color="primary" :size="mobile ? 'large' : 'x-large'" class="submit-btn" @click="isSubmitted = false">
                Отправить новую заявку
              </v-btn>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/main.scss" as *;
::v-deep(.col) .v-label {
  opacity: 1;
}
.feedback-form {
  margin: 0px 0px 25px 0px;

  &__title {
    margin-bottom: 10px;
    font-size: 26px;
    font-weight: 600;
    background: #fff;
    display: inline-block;
    border-radius: 32px;
    padding: 3px 10px;
    color: $color-title;
  }
  &__footer {
    display: flex;
    width: 72%;
    justify-content: right;
  }
}

.success-message {
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 400px; // Минимальная высота для сохранения пространства

  h2 {
    margin: 20px 0;
    color: $color-title;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    max-width: 80%;
  }
}
.flex-input {
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 558px) {
    flex-direction: column;
  }
}
.phone {
  margin-top: 15px;
  font-size: 20px;
  font-weight: 500;
  @media (max-width: $md4) {
    font-size: $fs-m;
  }
}
.col:first-child {
  flex: 0 0 20%;
  order: 1;
  margin-right: 12px;
  @media (max-width: 558px) {
    margin-right: 0px;
  }
}
.col:nth-child(2) {
  flex: 0 0 25%;
  order: 2;
  margin-right: 12px;
  @media (max-width: $md3) {
    margin-right: 0px;
  }
}
.col:nth-child(3) {
  flex: 0 0 25%;
  order: 3;
  margin-right: 10px;
  @media (max-width: $md3) {
    margin-right: 0px;
  }
}

input::placeholder {
  @media (max-width: $md4) {
    color: #102938;
  }
}
textarea::placeholder {
  @media (max-width: $md4) {
    color: #102938;
  }
}

input[type="email"],
input[type="password"],
input[type="tel"],
input[type="text"],
textarea {
  width: 100%;
  height: auto;
  color: #102938;
  font-size: 20px;
  vertical-align: top;
  padding: 10px 0 4px;
  border: none;
  border-bottom: 1px solid #102938;
  background: 0 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  @media (max-width: $md4) {
    font-size: $fs-base;
  }
}
.global-form {
  margin-top: 2rem;
  @media (max-width: $md4) {
    margin-top: 20px;
  }
}
:focus,
a,
button,
input,
textarea {
  outline: 0;
}
textarea {
  resize: none;
  overflow: hidden;
  height: 45px;
}
.form__title {
  font-size: 36px;
  font-weight: 600;
  display: inline-block;
  border-radius: 32px;
  color: $color-title;
  margin: 0px 0px 10px 0px;
  @media (max-width: $md4) {
    display: block;
    text-align: center;
    line-height: 1.2;
    font-weight: 700;
    margin-bottom: 10px;
  }
}

.form-submit p {
  color: #102938;
  font-size: 1.3rem;
  font-weight: 400;

  @media (max-width: $md4) {
    margin-bottom: 5px;
    text-align: center;
    line-height: 1.3;
    font-size: 15px;
  }
}
.form__button {
  font-weight: 500;
  padding: 10px 14px;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #ea5b0c;
  background: rgba(245, 245, 245, 0);
  color: #102938;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  font-size: 20px;
  @media (max-width: $md4) {
    font-size: $fs-base;
  }
}
.button_mtp {
  margin-bottom: 2px;
}
@media (min-width: $md1) {
  .form__button:hover {
    background: #102938;
    color: #f5f5f5;
    border-color: #102938;
  }
}
.on-hover:hover {
  background: #102938;
  transition: 10ms;
  color: #f5f5f5;
  border-color: #102938;
}
.form-bl.brd {
  box-shadow: 0px 1px 3px 0px rgba(34, 60, 80, 0.18);
  color: #102938;
  text-align: left;
  padding: 80px 20px 80px 50px;
  background-color: $background2;
  background-image: url("../../assets/images/homePage/services-1.webp");
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-size: 85% auto;
  z-index: 10;
  border-radius: 8px;
  box-sizing: border-box;
  @media (max-width: $md4) {
    padding: 50px 12px 45px 12px;
    background-image: linear-gradient(rgba(236, 239, 243, 0.7), rgba(236, 239, 243, 0.7)),
      url("../../assets/images/homePage/services-1.webp");
    background-size: 300% auto;
    background-position: 92% 100%;
  }
}
.feedback {
  & p {
    font-size: 12px;
    @media (max-width: $md4) {
      margin-top: 3px;
      font-size: 11px;
    }
  }
}
.communication {
  margin-bottom: 10px;
  &__head {
    font-size: 1.1rem;
    @media (max-width: $md4) {
      text-align: center;
    }
  }
  &__btn {
    display: flex;
    flex-wrap: wrap;
    @media (max-width: $md4) {
      justify-content: center;
    }
  }
}
.v-input--density-default {
  --v-input-control-height: 40px;
}
.submit-btn {
  background: linear-gradient(90deg, #ea5b0c, #ff8c42);
  color: white;
  transition: transform 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
}
</style>
