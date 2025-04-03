<script setup>
import { onMounted, onUnmounted, reactive, ref, computed, watch } from "vue";

const dialog = ref(true);
const emit = defineEmits(["dialogClosed"]); // Добавляем emit для закрытия

// Функция для установки курсора на первую решетку
const moveCursorToFirstHash = () => {
  if (message.phone.length != 18) {
    message.phone = "+7 ";
  }
};

const props = defineProps({
  services: {
    typeof: Array,
  },
});

const message = reactive({
  fio: "",
  phone: "",
  bid: [],
  septik: [],
  address: "",
  communication: [],
});

const onBlur = () => {
  if (message.phone.length != 18) {
    message.phone = "";
  }
};

const dateTime = ref(new Date().toISOString());
const selectedDateTime = ref(null);

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

const updateDateTime = (value) => {
  dateTime.value = value;
  selectedDateTime.value = formattedDateTime.value;
};

const scrollToTextarea = (event) => {
  if (window.innerWidth < 600) {
    const dialog = document.querySelector(".custom-dialog");
    setTimeout(() => {
      dialog.scrollTop = event.target.offsetTop - 100;
    }, 300);
  }
};

// Обработчик закрытия диалога
const handleDialogClose = () => {
  emit("isVisible");
};

// Следим за изменениями dialog и эмитим событие при закрытии
watch(dialog, (newVal) => {
  if (!newVal) {
    handleDialogClose();
  }
});
</script>
<template>
  <div class="dialog-feedback">
    <v-dialog scrim="false" content-class="custom-dialog" v-model="dialog" width="auto" @click:outside="handleDialogClose">
      <v-card :width="$vuetify.display.mdAndUp ? 900 : 'auto'" class="pt-1 pt-md-5 px-0 px-md-4">
        <v-card-title class="d-flex justify-space-between align-center">
          <div class="d-flex align-center">
            <v-icon color="text" class="mr-2">mdi-account-box-outline</v-icon>
            <h2 class="text-h6 font-weight-medium">Оставьте заявку</h2>
          </div>
          <v-btn icon @click="dialog = false" variant="text">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-divider class="mt-0 mb-0 mt-md-2 mb-md-2 border-opacity-100"></v-divider>

        <v-card-text class="py-1 py-md-4">
          <p class="text-body-2 text-medium-emphasis mt-4 mb-4">Мы свяжемся с Вами в удобное для Вас время</p>

          <v-row dense>
            <v-col cols="12" md="4" sm="6">
              <v-text-field
                v-model="message.fio"
                variant="outlined"
                prepend-inner-icon="mdi-account-outline"
                hide-details
                label="Ваше имя"
                placeholder="Иван Иванов"
                density="comfortable"
                color="text"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field
                v-model="message.phone"
                variant="outlined"
                prepend-inner-icon="mdi-phone-outline"
                hide-details
                v-mask="'+7 (###) ###-##-##'"
                placeholder="+7 (___) ___-__-__"
                label="Телефон"
                density="comfortable"
                color="text"
                @focus="moveCursorToFirstHash"
                @blur="onBlur"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-select
                v-model="message.bid"
                :items="services"
                variant="outlined"
                hide-details
                label="Что вас интересует?"
                prepend-inner-icon="mdi-help-circle-outline"
                density="comfortable"
                color="text"
              ></v-select>
            </v-col>

            <v-col cols="12" md="6" sm="6">
              <v-text-field
                v-model="message.address"
                variant="outlined"
                prepend-inner-icon="mdi-map-marker-outline"
                hide-details
                label="Адрес или номер объекта"
                placeholder="ул. Примерная, 123"
                density="comfortable"
                color="text"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6" sm="6">
              <v-select
                v-model="message.communication"
                :items="['Звонок', 'Telegram', 'WhatsApp']"
                variant="outlined"
                hide-details
                label="Предпочтительный способ связи"
                prepend-inner-icon="mdi-message-text-outline"
                density="comfortable"
                color="text"
                multiple
              ></v-select>
            </v-col>

            <v-col cols="12" md="6" sm="6">
              <v-menu :close-on-content-click="false" location="bottom">
                <template v-slot:activator="{ props }">
                  <v-text-field
                    variant="outlined"
                    v-model="selectedDateTime"
                    label="Удобное время для звонка"
                    readonly
                    hide-details
                    prepend-inner-icon="mdi-clock-outline"
                    density="comfortable"
                    color="text"
                    v-bind="props"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="dateTime"
                  mode="datetime"
                  is24hr
                  :valid-hours="{ min: 9, max: 18 }"
                  :time-picker-props="{
                    allowedMinutes: (m) => m % 10 === 0,
                  }"
                  @update:modelValue="updateDateTime"
                  class="elevated-picker"
                ></v-date-picker>
              </v-menu>
            </v-col>

            <v-col cols="12">
              <v-textarea
                v-model="message.notes"
                variant="outlined"
                hide-details
                label="Примечания"
                placeholder="Дополнительная информация"
                rows="2"
                auto-grow
                density="comfortable"
                color="text"
                @focus="scrollToTextarea"
                class="mt-1 mt-md-2"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="px-4 mb-4">
          <v-btn block color="background2" size="large" variant="flat" @click="dialog = false"> Отправить заявку </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<style lang="scss">
@use "../../assets/styles/main.scss" as *;
.v-overlay__content.custom-dialog {
  @media (max-width: $md4) {
    margin: 0px !important;
    max-width: calc(100% - 20px) !important ;
  }
}
.dialog-feedback__title {
  line-height: 1;
}
.elevated-picker {
  position: relative;
  z-index: 2500 !important; /* Стандартный z-index v-dialog - 2400 */
}
.custom-dialog__policy {
  line-height: 1;
  font-size: 12px;
}
</style>
