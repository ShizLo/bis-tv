<script setup>
import { ROUTES_PATHS } from "../../constants";
import { onMounted, onUnmounted, reactive, ref, computed } from "vue";
import axios from "axios";
import { VDateInput } from "vuetify/labs/VDateInput";

// Состояния
const dialog = ref(false); // Открытие/закрытие диалога
const dateTime = ref(new Date().toISOString()); // Выбранная дата и время
const selectedDateTime = ref(null); // Значение для v-select

// Форматирование даты и времени
const formattedDateTime = computed(() => {
  const date = new Date(dateTime.value);
  return date.toLocaleString("ru-RU", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // 24-часовой формат
  });
});

// Открыть диалоговое окно
const openDialog = () => {
  dialog.value = true;
};

// Закрыть диалоговое окно
const closeDialog = () => {
  dialog.value = false;
};

// Обновить выбранную дату и время
const updateDateTime = (value) => {
  dateTime.value = value;
  selectedDateTime.value = formattedDateTime.value; // Обновить значение v-select
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

const snackbar = reactive({
  value: false,
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

// Функция для установки курсора на первую решетку
const moveCursorToFirstHash = () => {
  // // Ждем следующего тика DOM, чтобы маска успела примениться
  // requestAnimationFrame(() => {
  //   const input = phoneInput.value;

  //   // Находим первую решетку (#) в маске
  //   const mask = "+7 (###) ###-##-##";
  //   const firstHashIndex = mask.indexOf("#");

  //   // Если решетка найдена, устанавливаем курсор на её позицию
  // if (firstHashIndex !== -1) {
  if (message.email.length != 18) {
    message.email = "+7 ";
  }
  // }
  // });
};

const onBlur = () => {
  if (message.email.length != 18) {
    message.email = "";
  }
};

onMounted(() => {});

async function sendMessage() {
  try {
    const formattedText = `
  👨🏻 *Заявка на сервис*
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
${selectedDateTime.value ? `Удобное время выезда: ${selectedDateTime.value}` : ""}
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
      .trim();
    await axios
      .post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: CHATS_ID.BASE,
        text: formattedText,
        parse_mode: "MarkdownV2",
        // message_thread_id: 4294967414, //DEV
        message_thread_id: 4294967327,
        polling: true,
      })
      .then(() => {
        snackbar.value = true;
      });
  } catch (error) {
    console.error("Ошибка при отправке сообщения:", error);
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
      <div class="form-bl brd">
        <div class="form-submit">
          <div class="form__title">Обслуживание септика или ЛОС</div>
          <p class="mb-4">Оставьте заявку на обслуживание</p>
          <div class="flex-input">
            <div class="col">
              <!-- <input v-model="message.fio" type="text" name="Ваше ФИО" value="" id="input-name" placeholder="Ваше ФИО" /> -->
              <v-text-field
                variant="underlined"
                prepend-inner-icon="mdi-account"
                hide-details
                v-model="message.fio"
                name="Ваше ФИО"
                placeholder="Ваше ФИО"
              >
                <template v-slot:label> <span> Ваше ФИО </span> </template></v-text-field
              >
            </div>
            <div class="col">
              <!-- <input
                v-model="message.email"
                type="text"
                name="Ваша почта"
                v-mask="'+7 (###) ###-##-##'"
                placeholder="+7 (___) ___-__-__"
                id="input-email"
                @focus="moveCursorToFirstHash"
                @blur="onBlur"
              /> -->
              <v-text-field
                v-model="message.email"
                variant="underlined"
                prepend-inner-icon="mdi-phone"
                hide-details
                v-mask="'+7 (###) ###-##-##'"
                placeholder="+7 (___) ___-__-__"
                @focus="moveCursorToFirstHash"
                @blur="onBlur"
              >
                <template v-slot:label> <span class="test"> Номер телефона </span> </template>
              </v-text-field>
            </div>
            <div class="col">
              <!-- <textarea class="mb-3" v-model="message.questiion" name="Какой у Вас септик" placeholder="Какой у Вас септик?"></textarea> -->
              <v-select
                v-model="message.septik"
                :items="['Евробион', 'Астра', 'Нет в списке']"
                label="Укажите Ваш септик"
                variant="underlined"
                hide-details
                multiple
                prepend-inner-icon="mdi-barrel"
              ></v-select>
            </div>
          </div>
          <div class="flex-input mb-1">
            <div class="col">
              <!-- <input v-model="message.fio" type="text" name="Ваше ФИО" value="" id="input-name" placeholder="Ваше ФИО" /> -->
              <v-text-field
                variant="underlined"
                prepend-inner-icon="mdi-map-marker"
                hide-details
                v-model="message.address"
                placeholder="Адрес дома или № объекта"
                ><template v-slot:label> <span> Адрес дома или № объекта </span> </template></v-text-field
              >
            </div>
            <div class="col">
              <!-- <textarea class="mb-3" v-model="message.questiion" name="Какой у Вас септик" placeholder="Какой у Вас септик?"></textarea> -->
              <v-select
                v-model="message.communication"
                :items="['Звонок', 'Telegram', 'WhatsUp']"
                label="Укажите удобный способ связи"
                variant="underlined"
                hide-details
                multiple
                prepend-inner-icon="mdi-forum"
              ></v-select>
            </div>
            <div class="col">
              <v-date-picker
                :valid-hours="{ min: 9, max: 18 }"
                @update:modelValue="updateDateTime"
                v-model="dateTime"
                mode="datetime"
                is24hr
              >
                <template v-slot="{ inputValue, inputEvents }">
                  <v-text-field
                    variant="underlined"
                    v-model="selectedDateTime"
                    label="Выберите время и дату выезда"
                    readonly
                    hide-details
                    :value="inputValue"
                    v-on="inputEvents"
                    prepend-inner-icon="mdi-calendar"
                  ></v-text-field>
                </template>
              </v-date-picker>
            </div>
          </div>

          <!-- <div class="communication">
            <div class="communication__head">Удобный для Вас способ связи</div>
            <div class="communication__btn">
              <v-checkbox v-model="communication.phone" hide-details label="Звонок"></v-checkbox>
              <v-checkbox v-model="communication.telegram" hide-details label="Telegram"></v-checkbox>
              <v-checkbox v-model="communication.whatsup" hide-details label="WhatsUp"></v-checkbox>
            </div>
          </div> -->
          <div class="feedback mb-4">
            <p class="feedback__text">
              Нажимая кнопку «Отправить заявку», вы соглашаетесь с
              <router-link :to="{ name: ROUTES_PATHS.POLICY }"> Политикой конфиденциальности.</router-link>
            </p>
          </div>
          <div class="feedback-form__footer">
            <input @click="sendMessage" class="form__button button_mtp" type="submit" value="Отправить заявку" />
            <v-snackbar class="text-center" rounded="pill" color="blue-grey" v-model="snackbar.value"
              ><span class="text-center text-title">Заявка успешно оформлена</span></v-snackbar
            >
          </div>
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
    // margin-top: 10px;
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
    // justify-content: space-between;
    // align-items: center;
    width: 72%;
    justify-content: right;
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
  //flex-grow: 1;
  flex: 0 0 20%;
  order: 1;
  margin-right: 12px;
  @media (max-width: 558px) {
    margin-right: 0px;
  }
}
.col:nth-child(2) {
  //flex-grow: 1;
  flex: 0 0 25%;
  order: 2;
  margin-right: 12px;
  @media (max-width: $md3) {
    margin-right: 0px;
  }
}
.col:nth-child(3) {
  //flex-grow: 10;
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
    // margin-top: 20px;
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
  font-size: 30px;
  font-weight: 600;
  display: inline-block;
  border-radius: 32px;
  color: $color-title;
  margin: 0px 0px 10px 0px;
  @media (max-width: $md4) {
    font-size: $fs-l;
    margin-bottom: 10px;
  }
}
.form-submit {
}

.form-submit p {
  color: #102938;
  font-size: 1.3rem;
  font-weight: 400;

  @media (max-width: $md4) {
    margin-bottom: 5px;
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
  padding: 80px 25px;
  background-color: $background;
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
</style>
