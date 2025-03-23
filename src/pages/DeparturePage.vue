<script setup>
import { onMounted, onUnmounted, reactive, ref } from "vue";
import axios from "axios";
import moment from "moment";

const CHATS_ID = {
  BASE: -1002378962422,
  BASE_DEV: -1002383432249,
};
const token = "7564255529:AAELnqPYEHTvtJzwSaf3tnn7JQb4whqx688";

const calendar = reactive({
  show: false,
  selectedDate: "",
  attributes: [{ key: "today", highlight: { color: "blue" } }],
});

const snackbar = reactive({
  value: false,
});

const message = reactive({
  date: "",
  object: "",
  fio: "",
  model: "",
  coordinate: "",
  kadastr: "",
  address: "",
  coordinate2: "",
  card_1: [],
  card_1_note: "",
  card_2: [],
  card_2_note: "",
  card_2_dop: [],
  card_2_dop_note: "",
  card_3: [],
  card_3_phone: "",
  card_3_note: "",
  card_4: [],
  card_4_note: "",
  card_4_width: "",
  card_4_width_in: "",
  card_4_width_vorot: "",
  card_5: [],
  card_5_note: "",
  card_5_tree: "",
  card_5_tree_big: "",
  card_6: [],
  card_6_an_vody: [],
  card_6_debet: "",
  card_6_kolodec: [],
  card_6_kolodec_kolca: "",
  card_6_note: "",
  card_6_plan_istoch: [],
  card_6_skvazhina: [],
  card_6_vodoprovod: [],
  card_7: [],
  card_7_dop: [],
  card_7_kvt: "",
  card_7_note: "",
  card_8: [],
  card_8_dop: [],
  card_8_note: "",
  card_9: [],
  card_9_length: [],
  card_9_note: [],
  card_9_width: [],
  card_10: [],
  card_10_diametr: "",
  card_10_glubina: "",
  card_10_length: "",
  card_10_note: "",
  card_10_width: "",
  card_11: [],
  card_11_length: [],
  card_11_note: [],
  card_11_width: [],
  card_12: [],
  card_12_vinos: "",
  card_12_note: "",
  card_13: [],
  card_13_note: "",
});

async function sendMessage() {
  try {
    const formattedText = `
👨🏻 *Карточка клиента*
${
  message.date != "" ||
  message.object != "" ||
  message.fio != "" ||
  message.model != "" ||
  message.coordinate != "" ||
  message.kadastr != "" ||
  message.address != "" ||
  message.coordinate2 != ""
    ? `[line]`
    : ""
}
${message.date != "" ? `Дата: ${moment(message.date).format("DD.MM.YYYY")}` : ""}
${message.object != "" ? `Объект: ${message.object}` : ""}
${message.fio != "" ? `ФИО: ${message.fio}` : ""}
${message.model != "" ? `Модель дома: ${message.model}` : ""}
${message.coordinate != "" ? `Координаты: ${message.coordinate}` : ""}
${message.kadastr != "" ? `Кадастровый номер: ${message.kadastr}` : ""}
${message.address != "" ? `Адрес объекта: ${message.address}` : ""}
${message.coordinate2 != "" ? `Площадка для разрузки модулей: ${message.coordinate2}` : ""}
${message.card_1.length > 0 || message.card_1_note != "" ? `[line]` : ""}
${message.card_1.length > 0 || message.card_1_note != "" ? `⭐️⭐️⭐️ *Первичные данные по участку*\n` : ""}
${message.card_1 ? `${message.card_1.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_1_note != "" ? `_Примечания:_ ${message.card_1_note}` : ""}
${message.card_2.length > 0 || message.card_2_note != "" ? `[line]` : ""}
${message.card_2.length > 0 || message.card_2_note != "" ? `⭐️⭐️⭐️ *Отчет по пробному бурению*\n` : ""}
${message.card_2 ? `${message.card_2.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_2_note != "" ? `_Примечания:_ ${message.card_2_note}` : ""}
${message.card_2_dop.length > 0 || message.card_2_dop_note != "" ? `_Дополнительные работы:_\n` : ""}
${message.card_2_dop.length > 0 ? `${message.card_2_dop.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_2_dop_note != "" ? `_Примечания:_ ${message.card_2_dop_note}` : ""}
${message.card_3.length > 0 || message.card_3_note != "" || message.card_3_phone != "" ? `[line]` : ""}
${message.card_3.length > 0 || message.card_3_note != "" || message.card_3_phone != "" ? `⭐️⭐️⭐️ *КПП*\n` : ""}
${message.card_3 ? `${message.card_3.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_3_phone != "" ? `Телефон КПП: ${message.card_3_phone}` : ""}
${message.card_3_note != "" ? `_Примечания:_ ${message.card_3_note}` : ""}
${
  message.card_4.length > 0 ||
  message.card_4_note != "" ||
  message.card_4_width != "" ||
  message.card_4_width_in != "" ||
  message.card_4_width_vorot != ""
    ? `[line]`
    : ""
}
${
  message.card_4.length > 0 ||
  message.card_4_note != "" ||
  message.card_4_width != "" ||
  message.card_4_width_in != "" ||
  message.card_4_width_vorot != ""
    ? `⭐️⭐️⭐️ *Заезд на участок*\n`
    : ""
}
${message.card_4.length > 0 ? `${message.card_4.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_4_width != "" ? `Ширина дороги: ${message.card_4_width} м\.` : ""}
${message.card_4_width_in != "" ? `Ширина заезда: ${message.card_4_width_in} м\.` : ""}
${message.card_4_width_vorot != "" ? `Ширина ворот: ${message.card_4_width_vorot} м\.` : ""}
${message.card_4_note != "" ? `_Примечания:_ ${message.card_4_note}` : ""}
${message.card_5.length > 0 || message.card_5_note != "" || message.card_5_tree != "" || message.card_5_tree_big != "" ? `[line]` : ""}
${
  message.card_5.length > 0 || message.card_5_note != "" || message.card_5_tree != "" || message.card_5_tree_big != ""
    ? `⭐️⭐️⭐️ *Расчистка участка, планировка*\n`
    : ""
}
${message.card_5.length > 0 ? `${message.card_5.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_5_tree != "" ? `Большие деревья 10-20: ${message.card_5_tree}` : ""}
${message.card_5_tree_big != "" ? `Большие деревья 25-40: ${message.card_5_tree_big}` : ""}
${message.card_5_note != "" ? `_Примечания:_ ${message.card_5_note}` : ""}
${
  message.card_6.length > 0 ||
  message.card_6_note != "" ||
  message.card_6_plan_istoch.length > 0 ||
  message.card_6_vodoprovod.length > 0 ||
  message.card_6_skvazhina.length > 0 ||
  message.card_6_kolodec.length > 0 ||
  message.card_6_kolodec_kolca != "" ||
  message.card_6_debet != "" ||
  message.card_6_an_vody.length > 0
    ? `[line]`
    : ""
}
${
  message.card_6.length > 0 ||
  message.card_6_note != "" ||
  message.card_6_plan_istoch.length > 0 ||
  message.card_6_vodoprovod.length > 0 ||
  message.card_6_skvazhina.length > 0 ||
  message.card_6_kolodec.length > 0 ||
  message.card_6_kolodec_kolca != "" ||
  message.card_6_debet != "" ||
  message.card_6_an_vody.length > 0
    ? `⭐️⭐️⭐️ *Источник воды*\n`
    : ""
}
${message.card_6.length > 0 ? `${message.card_6.map((task) => `➕ ${task}`).join("\n")}` : ""}
${
  message.card_6_note != "" ||
  message.card_6_plan_istoch.length > 0 ||
  message.card_6_vodoprovod.length > 0 ||
  message.card_6_skvazhina.length > 0 ||
  message.card_6_kolodec.length > 0 ||
  message.card_6_kolodec_kolca != "" ||
  message.card_6_debet != "" ||
  message.card_6_an_vody.length > 0
    ? `_Дополнительные работы_\n`
    : ""
}
${message.card_6_plan_istoch.length > 0 ? `⭐️ Планируемый источник и допы\n` : ""}
${message.card_6_plan_istoch.length > 0 ? `${message.card_6_plan_istoch.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_6_vodoprovod.length > 0 ? `⭐️ Центральный водопровод\n` : ""}
${message.card_6_vodoprovod.length > 0 ? `${message.card_6_vodoprovod.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_6_skvazhina.length > 0 ? `⭐️ Скважина\n` : ""}
${message.card_6_skvazhina.length > 0 ? `${message.card_6_skvazhina.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_6_kolodec.length > 0 ? `⭐️ Колодец\n` : ""}
${message.card_6_kolodec.length > 0 ? `${message.card_6_kolodec.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_6_kolodec_kolca != "" ? `Кол-во колец: ${message.card_6_kolodec_kolca}` : ""}
${message.card_6_debet != "" ? `Дебет: ${message.card_6_debet}` : ""}
${message.card_6_an_vody.length > 0 ? `⭐️ Анализ воды\n` : ""}
${message.card_6_an_vody.length > 0 ? `${message.card_6_an_vody.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_6_note != "" ? `_Примечания:_ ${message.card_6_note}` : ""}
${message.card_7.length > 0 || message.card_7_note != "" || message.card_7_kvt != "" || message.card_7_dop.length > 0 ? `[line]` : ""}
${
  message.card_7.length > 0 || message.card_7_note != "" || message.card_7_kvt != "" || message.card_7_dop.length > 0
    ? `⚡️⚡️⚡️ *Электричество*\n`
    : ""
}
${message.card_7.length > 0 ? `${message.card_7.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_7_kvt != "" ? `Количество КВТ: ${message.card_7_kvt}` : ""}
${message.card_7_dop.length > 0 ? `⭐️ Планируемый источник и допы\n` : ""}
${message.card_7_dop.length > 0 ? `${message.card_7_dop.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_7_note != "" ? `_Иное:_ ${message.card_7_note}` : ""}
${message.card_8.length > 0 || message.card_8_note != "" || message.card_8_dop.length > 0 ? `[line]` : ""}
${message.card_8.length > 0 || message.card_8_note != "" || message.card_8_dop.length > 0 ? `🧻🧻🧻 *Канализация*\n` : ""}
${message.card_8.length > 0 ? `${message.card_8.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_8_dop.length > 0 ? `⭐️ Планируемая канализация и допы\n` : ""}
${message.card_8_dop.length > 0 ? `${message.card_8_dop.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_8_note != "" ? `_Иное:_ ${message.card_8_note}` : ""}
${message.card_9.length > 0 || message.card_9_note != "" || message.card_9_length != "" || message.card_9_width != "" ? `[line]` : ""}
${
  message.card_9.length > 0 || message.card_9_note != "" || message.card_9_length != "" || message.card_9_width != ""
    ? `🅿️🅿️🅿️ *Черновая парковка*\n`
    : ""
}
${message.card_9_width != "" ? `Ширина: ${message.card_9_width} м.` : ""}
${message.card_9_length != "" ? `Длина: ${message.card_9_length} м.` : ""}
${message.card_9.length > 0 ? `${message.card_9.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_9_note != "" ? `_Примечание:_ ${message.card_9_note}` : ""}
${
  message.card_10.length > 0 ||
  message.card_10_note != "" ||
  message.card_10_length != "" ||
  message.card_10_width != "" ||
  message.card_10_glubina != "" ||
  message.card_10_diametr != ""
    ? `[line]`
    : ""
}
${
  message.card_10.length > 0 ||
  message.card_10_note != "" ||
  message.card_10_length != "" ||
  message.card_10_width != "" ||
  message.card_10_glubina != "" ||
  message.card_10_diametr != ""
    ? `⭐️⭐️⭐️ *Заезд на участок*\n`
    : ""
}
${message.card_10_width != "" ? `Ширина: ${message.card_10_width} м.` : ""}
${message.card_10_length != "" ? `Длина: ${message.card_10_length} м.` : ""}
${message.card_10_glubina != "" ? `Глубина кювета: ${message.card_10_glubina}` : ""}
${message.card_10_diametr != "" ? `Диаметр трубы по регламенту: ${message.card_10_diametr}` : ""}
${message.card_10.length > 0 ? `${message.card_10.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_10_note != "" ? `_Примечание:_ ${message.card_10_note}` : ""}
${message.card_11.length > 0 || message.card_11_note != "" || message.card_11_length != "" || message.card_11_width != "" ? `[line]` : ""}
${
  message.card_11.length > 0 || message.card_11_note != "" || message.card_11_length != "" || message.card_11_width != ""
    ? `⭐️⭐️⭐️ *Дорожки*\n`
    : ""
}
${message.card_11_width != "" ? `Ширина: ${message.card_11_width} м.` : ""}
${message.card_11_length != "" ? `Длина: ${message.card_11_length} м.` : ""}
${message.card_11.length > 0 ? `${message.card_11.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_11_note != "" ? `_Примечание:_ ${message.card_11_note}` : ""}
${message.card_12.length > 0 || message.card_12_note != "" || message.card_12_vinos != "" ? `[line]` : ""}
${message.card_12.length > 0 || message.card_12_note != "" || message.card_12_vinos != "" ? `⭐️⭐️⭐️ *Отсыпка свайного поля*\n` : ""}
${message.card_12.length > 0 ? `${message.card_12.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_12_vinos != "" ? `Вынос по периметру: ${message.card_12_vinos}` : ""}
${message.card_12_note != "" ? `_Примечание:_ ${message.card_12_note}` : ""}
${message.card_13.length > 0 || message.card_13_note != "" ? `[line]` : ""}
${message.card_13.length > 0 || message.card_13_note != "" ? `⭐️⭐️⭐️ *Прочие планируемые работы*\n` : ""}
${message.card_13.length > 0 ? `${message.card_13.map((task) => `➕ ${task}`).join("\n")}` : ""}
${message.card_13_note != "" ? `_Примечание:_ ${message.card_13_note}` : ""}
`
      .replace(/\./g, "\\\.")
      .replace(/-/g, "\\-")
      .replace(/\n+/g, "\n")
      .replace(/\s*\[line\]/g, "\n")
      .replace(/=/g, "\\=")
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
        message_thread_id: 4294967337,
        polling: true,
      })
      .then(() => {
        snackbar.value = true;
      });
  } catch (error) {
    console.error("Ошибка при отправке сообщения:", error);
  }
}

function oneDayClick(day) {
  calendar.selectedDate = day.id;
  message.date = day.id;
  calendar.show = false;
}

function hideCalendar() {
  setTimeout(() => {
    calendar.show = false;
  }, 100);
}

function isMobileDevice() {
  return window.screen.width < 768 || window.screen.height < 768;
}
// Состояние для отслеживания открытия combobox
const isAnyComboboxOpen = ref(false);
const currentOpenCombobox = ref(null); // Текущий открытый combobox

// Обработчик клика на combobox
const handleComboboxClick = (refName) => {
  if (currentOpenCombobox.value && currentOpenCombobox.value !== refName) {
    // Закрываем текущий открытый combobox
    closeCombobox(currentOpenCombobox.value);
  }
  currentOpenCombobox.value = refName;
};

// Обработчик открытия/закрытия меню
const handleMenuUpdate = (isOpen, refName) => {
  isAnyComboboxOpen.value = isOpen;
  currentOpenCombobox.value = isOpen ? refName : null;
};

// Закрыть combobox
const closeCombobox = (refName) => {
  const combobox = document.querySelector(`.${refName} .v-menu__content`);
  if (combobox) {
    combobox.style.display = "none"; // Закрываем меню
  }
  isAnyComboboxOpen.value = false;
  currentOpenCombobox.value = null;
};

onMounted(() => {
  if (isMobileDevice()) {
    document.querySelectorAll("input, textarea").forEach((input) => {
      input.addEventListener("focus", () => {
        input.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }
});
</script>
<template>
  <section class="survey">
    <div class="survey__wrapper _container">
      <div class="bg-white">
        <div class="mx-auto max-w-7xl py-3 sm:px-6 sm:py-10 lg:px-8">
          <div class="mx-auto max-w-2xl">
            <div class="space-y-12">
              <div class="border-b border-gray-900/10 pb-12">
                <label class="block text-h5 font-semibold text-gray-900 pl-4">Карточка клиента</label>
                <div class="mt-3 sm:col-span-3">
                  <v-card class="px-3 pt-4 pb-2 mb-4">
                    <v-text-field
                      v-model="message.date"
                      @focus="calendar.show = true"
                      @blur="hideCalendar"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Дата выезда"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <div v-if="calendar.show" class="absolute z-10 mt-1">
                      <v-calendar @dayclick="oneDayClick" :isdark="false"></v-calendar>
                    </div>
                    <v-text-field
                      v-model="message.object"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Объект"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-model="message.fio"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="ФИО"
                      variant="outlined"
                      prepend-inner-icon="mdi-card-account-details"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-model="message.model"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Модель дома"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-model="message.coordinate"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Координаты"
                      variant="outlined"
                      prepend-inner-icon="mdi-map-marker-outline"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-model="message.kadastr"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Кадастровый номер участка"
                      variant="outlined"
                      prepend-inner-icon="mdi-map-outline"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-model="message.address"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Адрес объекта"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-model="message.coordinate2"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Площадка для разгрузки модулей координаты"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                  </v-card>
                </div>
                <label class="block text-h5 mt-5 font-semibold text-gray-900 pl-4">Общие данные</label>
                <fieldset class="mt-4">
                  <v-card class="px-3 pt-2 mb-4">
                    <v-card-title class="text-h6 mb-1 pl-1">Первичные данные по участку</v-card-title>
                    <v-select
                      v-model="message.card_1"
                      :items="['Топография', 'Геодезия', 'Пробное бурение', 'Схема размещения']"
                      selectedItem
                      label="Мероприятия"
                      chips
                      variant="outlined"
                      multiple
                      density="compact"
                      hide-details
                      class="mb-2"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_1Aid'"
                      @click:control="handleComboboxClick('card_1Aid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_1Aid')"
                      ref="card_1idCombobox"
                    ></v-select>
                    <v-textarea
                      v-model="message.card_1_note"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4"
                      label="Примечания"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-textarea>
                  </v-card>
                  <v-card class="px-3 pt-2 mb-4">
                    <v-card-title class="text-h6 mb-1 pl-1">Отчет по пробному бурению</v-card-title>
                    <v-select
                      v-model="message.card_2"
                      :items="['Стандарт', 'Обвязка']"
                      label="Мероприятия"
                      chips
                      variant="outlined"
                      multiple
                      density="compact"
                      hide-details
                      class="mb-2"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_2Aid'"
                      @click:control="handleComboboxClick('card_2Aid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_2Aid')"
                      ref="card_2idCombobox"
                    ></v-select>
                    <v-textarea
                      v-model="message.card_2_note"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4"
                      label="Примечания"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-textarea>
                    <v-card-subtitle class="pl-1 mb-2">Дополнительные работы</v-card-subtitle>
                    <v-select
                      v-model="message.card_2_dop"
                      :items="['Корни/пни', 'Строительный мусор', 'Снять дерн', 'Генератор', 'Камни']"
                      label="Мероприятия"
                      chips
                      variant="outlined"
                      multiple
                      density="compact"
                      hide-details
                      class="mb-2"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_2_dopAid'"
                      @click:control="handleComboboxClick('card_2_dopAid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_2_dopAid')"
                      ref="card_2_dopidCombobox"
                    ></v-select>
                    <v-textarea
                      v-model="message.card_2_dop_note"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4"
                      label="Примечания"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-textarea>
                  </v-card>
                  <v-card class="px-3 pt-2 mb-4">
                    <v-card-title class="text-h6 mb-1 pl-1">КПП</v-card-title>
                    <v-select
                      v-model="message.card_3"
                      :items="['КПП имеется', 'Пропуск от КПП', 'Пропуск заранее', 'КПП отсутствует']"
                      label="КПП"
                      chips
                      variant="outlined"
                      multiple
                      density="compact"
                      hide-details
                      class="mb-2"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_3Aid'"
                      @click:control="handleComboboxClick('card_3Aid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_3Aid')"
                      ref="card_3idCombobox"
                    ></v-select>
                    <v-text-field
                      v-model="message.card_3_phone"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Телефон КПП"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-textarea
                      v-model="message.card_3_note"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4"
                      label="Примечания"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-textarea>
                  </v-card>
                  <v-card class="px-3 pt-2 mb-4">
                    <v-card-title class="text-h6 mb-1 pl-1">Заезд на участок</v-card-title>
                    <v-select
                      v-model="message.card_4"
                      :items="['Заезда нет', 'Обустроен']"
                      label="Данные"
                      chips
                      variant="outlined"
                      multiple
                      hide-details
                      class="mb-2"
                      density="compact"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_4Aid'"
                      @click:control="handleComboboxClick('card_4Aid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_4Aid')"
                      ref="card_4idCombobox"
                    ></v-select>
                    <v-text-field
                      v-model="message.card_4_width"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Ширина дороги"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-model="message.card_4_width_in"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Ширина заезда"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-model="message.card_4_width_vorot"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Ширина ворот"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-textarea
                      v-model="message.card_4_note"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4"
                      label="Примечания"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-textarea>
                  </v-card>
                  <v-card class="px-3 pt-2 mb-4">
                    <v-card-title class="text-h6 mb-1 pl-1">Расчистка участка, планировка</v-card-title>
                    <v-select
                      v-model="message.card_5"
                      :items="[
                        'Кусты',
                        'Планировка',
                        'Снос построек',
                        'Отсыпка участка',
                        'Вывоз грунта',
                        'Дробление пней/веток',
                        'Вывоз строительного мусора',
                      ]"
                      label="Мероприятия"
                      chips
                      variant="outlined"
                      multiple
                      hide-details
                      class="mb-2"
                      density="compact"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_5Aid'"
                      @click:control="handleComboboxClick('card_5Aid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_5Aid')"
                      ref="card_5idCombobox"
                    ></v-select>
                    <v-text-field
                      v-model="message.card_5_tree"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Большие деревья 10-20"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-model="message.card_5_tree_big"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Большие деревья 25-40"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-textarea
                      v-model="message.card_5_note"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4"
                      label="Примечания"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-textarea>
                  </v-card>
                </fieldset>
                <label class="block text-h5 mt-5 font-semibold text-gray-900 pl-4">Коммуникации</label>
                <fieldset class="mt-4">
                  <v-card class="px-3 pt-2 mb-4">
                    <v-card-title class="text-h6 mb-1 pl-1">Источник воды</v-card-title>
                    <v-select
                      v-model="message.card_6"
                      :items="['Нет источника', 'Колодец', 'Центральный водопровод', 'Другой дом (постройка)', 'Скважина']"
                      label="Источник воды"
                      chips
                      variant="outlined"
                      multiple
                      density="compact"
                      hide-details
                      class="mb-1"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_6Aid'"
                      @click:control="handleComboboxClick('card_6Aid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_6Aid')"
                      ref="card_6idCombobox"
                    ></v-select>
                    <v-card-title class="text-subtitle-1 mb-1 pl-1">Планируемый источник и допы</v-card-title>
                    <v-select
                      v-model="message.card_6_plan_istoch"
                      :items="[
                        'Скважина',
                        'Автоматика',
                        'Подведение магистрали',
                        'Колодец',
                        'Водоочистка',
                        'Перенос точки ввода',
                        'Кессон',
                        'Насос',
                      ]"
                      label="Планируемый источник и допы"
                      chips
                      variant="outlined"
                      multiple
                      density="compact"
                      hide-details
                      class="mb-2"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_6_plan_istochAid'"
                      @click:control="handleComboboxClick('card_6_plan_istochAid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_6_plan_istochAid')"
                      ref="card_6_plan_istochidCombobox"
                    ></v-select>
                    <v-select
                      v-model="message.card_6_vodoprovod"
                      :items="['Ковер', 'Врезка']"
                      label="Центральный водопровод"
                      chips
                      variant="outlined"
                      multiple
                      density="compact"
                      hide-details
                      class="mb-2"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_6_vodoprovodAid'"
                      @click:control="handleComboboxClick('card_6_vodoprovodAid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_6_vodoprovodAid')"
                      ref="card_6_vodoprovodidCombobox"
                    ></v-select>

                    <v-select
                      v-model="message.card_6_skvazhina"
                      :items="['Насос', 'Паспорт']"
                      label="Скважина"
                      chips
                      variant="outlined"
                      multiple
                      density="compact"
                      hide-details
                      class="mb-2"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_6_skvazhinaAid'"
                      @click:control="handleComboboxClick('card_6_skvazhinaAid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_6_skvazhinaAid')"
                      ref="card_6_skvazhinaCombobox"
                    ></v-select>
                    <v-select
                      v-model="message.card_6_kolodec"
                      :items="['Насос']"
                      label="Колодец"
                      chips
                      variant="outlined"
                      multiple
                      density="compact"
                      hide-details
                      class="mb-2"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_6_kolodecAid'"
                      @click:control="handleComboboxClick('card_6_kolodecAid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_6_kolodecAid')"
                      ref="card_6_kolodecCombobox"
                    ></v-select>
                    <v-text-field
                      v-model="message.card_6_kolodec_kolca"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Кол-во колец"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-model="message.card_6_debet"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Дебет"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-divider color="warning" class="mb-2 border-opacity-100"></v-divider>
                    <v-select
                      v-model="message.card_6_an_vody"
                      :items="['Имеется', 'Нужен']"
                      label="Анализ воды"
                      chips
                      variant="outlined"
                      multiple
                      density="compact"
                      hide-details
                      class="mb-2"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_6_an_vodyAid'"
                      @click:control="handleComboboxClick('card_6_an_vodyAid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_6_an_vodyAid')"
                      ref="card_6_an_vodyCombobox"
                    ></v-select>
                    <v-textarea
                      v-model="message.card_6_note"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4"
                      label="Примечания"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-textarea>
                  </v-card>
                  <v-card class="px-3 pt-2 mb-4">
                    <v-card-title class="text-h6 mb-1 pl-1">Электричество</v-card-title>
                    <v-select
                      v-model="message.card_7"
                      :items="['Стандарт', 'Есть', 'Нет']"
                      label="Электричество"
                      chips
                      variant="outlined"
                      multiple
                      density="compact"
                      hide-details
                      class="mb-2"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_7Aid'"
                      @click:control="handleComboboxClick('card_7Aid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_7Aid')"
                      ref="card_7Combobox"
                    ></v-select>
                    <v-text-field
                      v-model="message.card_7_kvt"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Количество КВТ"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-card-title class="text-subtitle-1 mb-1 pl-1">Планируемые доп. работы</v-card-title>
                    <v-select
                      v-model="message.card_7_dop"
                      :items="[
                        'Подведение кабеля',
                        'Генератор',
                        'Опора',
                        'Уличное освещение',
                        'Воздушка',
                        'Катушка',
                        'Трубостойка',
                        'Автоматика ворот',
                        'Стабилизатор',
                        'Заземление',
                        'Гильза под интернет',
                      ]"
                      label="Планируемый источник и допы"
                      class="mb-2"
                      chips
                      multiple
                      variant="outlined"
                      density="compact"
                      hide-details
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_7_dopAid'"
                      @click:control="handleComboboxClick('card_7_dopAid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_7_dopAid')"
                      ref="card_7_dopCombobox"
                    ></v-select>
                    <v-textarea
                      v-model="message.card_7_note"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4"
                      label="Иное"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-textarea>
                  </v-card>
                  <v-card class="px-3 pt-2 mb-4">
                    <v-card-title class="text-h6 mb-1 pl-1">Канализация</v-card-title>
                    <v-select
                      v-model="message.card_8"
                      :items="['Нет', 'Центральная', 'ЛОС']"
                      label="Канализация"
                      chips
                      variant="outlined"
                      multiple
                      density="compact"
                      hide-details
                      class="mb-1"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_8Aid'"
                      @click:control="handleComboboxClick('card_8Aid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_8Aid')"
                      ref="card_8Combobox"
                    ></v-select>
                    <v-card-title class="text-subtitle-1 mb-1 pl-1">Планируемая канализация</v-card-title>
                    <v-select
                      v-model="message.card_8_dop"
                      :items="['ЛОС', 'Грейющий кабель', 'Отведение', 'Доп. насос', 'Фильтрационный колодец', 'Поле рассеивания']"
                      label="Планируемая канализация и допы"
                      class="mb-2"
                      chips
                      multiple
                      variant="outlined"
                      density="compact"
                      hide-details
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_8_dopAid'"
                      @click:control="handleComboboxClick('card_8_dopAid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_8_dopAid')"
                      ref="card_8_dopCombobox"
                    ></v-select>
                    <v-textarea
                      v-model="message.card_8_note"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4"
                      label="Иное"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-textarea>
                  </v-card>
                </fieldset>
                <label class="block text-h5 mt-5 font-semibold text-gray-900 pl-4">Дополнительные работы</label>
                <fieldset class="mt-4">
                  <v-card class="px-3 pt-2 mb-4">
                    <v-card-title class="text-h6 mb-1 pl-1">Чернова парковка</v-card-title>
                    <v-text-field
                      v-model="message.card_9_width"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Ширина"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-model="message.card_9_length"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Длина"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-select
                      v-model="message.card_9"
                      :items="[
                        'Черновая',
                        'Щебень 20-40',
                        'ЩПС 0-40',
                        'Отсев',
                        'Песок',
                        'Бордюр',
                        'Финишная отсыпка 5-20',
                        'Подготовка под мощение',
                      ]"
                      label="Обустройство парковки"
                      chips
                      variant="outlined"
                      multiple
                      density="compact"
                      hide-details
                      class="mb-2"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_9Aid'"
                      @click:control="handleComboboxClick('card_9Aid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_9Aid')"
                      ref="card_9Combobox"
                    ></v-select>
                    <v-textarea
                      v-model="message.card_9_note"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4"
                      label="Примечание"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-textarea>
                  </v-card>
                  <v-card class="px-3 pt-2 mb-4">
                    <v-card-title class="text-h6 mb-1 pl-1">Заезд на участок</v-card-title>
                    <v-text-field
                      v-model="message.card_10_width"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Ширина"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-model="message.card_10_length"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Длина"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-model="message.card_10_glubina"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Глубина кювета"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-model="message.card_10_diametr"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Диаметр трубы по регламенту"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-select
                      v-model="message.card_10"
                      :items="['Бетон', 'SN8', 'Георешетка', 'Финишная отсыпка 5-20', 'Отсев', 'Песок', 'Щебень 20-40', 'ЩПС 0-40']"
                      label="Обустройство заезда"
                      chips
                      variant="outlined"
                      multiple
                      density="compact"
                      hide-details
                      class="mb-2"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_10Aid'"
                      @click:control="handleComboboxClick('card_10Aid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_10Aid')"
                      ref="card_10Combobox"
                    ></v-select>
                    <v-textarea
                      v-model="message.card_10_note"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4"
                      label="Примечание"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-textarea>
                  </v-card>
                  <v-card class="px-3 pt-2 mb-4">
                    <v-card-title class="text-h6 mb-1 pl-1">Дорожки</v-card-title>
                    <v-text-field
                      v-model="message.card_11_width"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Ширина"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-model="message.card_11_length"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Длина"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>

                    <v-select
                      v-model="message.card_11"
                      :items="['Бетон', 'SN8', 'Георешетка', 'Финишная отсыпка 5-20', 'Отсев', 'Песок', 'Щебень 20-40', 'ЩПС 0-40']"
                      label="Обустройство дорожек"
                      chips
                      variant="outlined"
                      multiple
                      density="compact"
                      hide-details
                      class="mb-2"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_11Aid'"
                      @click:control="handleComboboxClick('card_11Aid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_11Aid')"
                      ref="card_11Combobox"
                    ></v-select>
                    <v-textarea
                      v-model="message.card_11_note"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4"
                      label="Примечание"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-textarea>
                  </v-card>
                  <v-card class="px-3 pt-2 mb-4">
                    <v-card-title class="text-h6 mb-1 pl-1">Отсыпка свайного поля</v-card-title>
                    <v-text-field
                      v-model="message.card_12_vinos"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Вынос по периметру"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-select
                      v-model="message.card_12"
                      :items="['Отсев', 'Финишная отсыпка 5-20', 'Песок']"
                      label="Обустройство"
                      chips
                      variant="outlined"
                      multiple
                      density="compact"
                      hide-details
                      class="mb-2"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_12Aid'"
                      @click:control="handleComboboxClick('card_12Aid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_12Aid')"
                      ref="card_12Combobox"
                    ></v-select>
                    <v-textarea
                      v-model="message.card_12_note"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4"
                      label="Примечание"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-textarea>
                  </v-card>
                </fieldset>
                <label class="block text-h5 mt-5 font-semibold text-gray-900 pl-4">Прочие планируемые дополнительные работы</label>
                <fieldset class="mt-4">
                  <v-card class="px-3 pt-2 mb-4">
                    <v-card-title class="text-h6 mb-1 pl-1">Планируемые работы</v-card-title>
                    <v-select
                      v-model="message.card_13"
                      :items="['Дренаж', 'Забор', 'Чистова парковка', 'Доп. сваи', 'Озеленение']"
                      label="Планируемые работы"
                      chips
                      variant="outlined"
                      multiple
                      density="compact"
                      hide-details
                      class="mb-2"
                      dense
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'card_13Aid'"
                      @click:control="handleComboboxClick('card_13Aid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'card_13Aid')"
                      ref="card_13Combobox"
                    ></v-select>
                    <v-textarea
                      v-model="message.card_13_note"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4"
                      label="Иное"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-textarea>
                  </v-card>
                </fieldset>
                <v-btn @click="sendMessage" variant="outlined"> Отправить </v-btn>
                <v-snackbar class="text-center" location="top" rounded="pill" color="blue-grey" v-model="snackbar.value"
                  ><span class="text-center text-title">Данные успешно отправлены</span></v-snackbar
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.survey {
  //
  margin-top: 25px;
}
.form-control {
  width: 100%;
}
.survey__input {
  display: flex;
}
.v-list-item {
  min-width: 25px;
}
.v-checkbox {
  margin: 0;
  padding: 0;
}
</style>
