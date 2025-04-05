<script setup>
import { onMounted, onUnmounted, reactive, ref } from "vue";
import axios from "axios";

const CHATS_ID = {
  BASE: -1002378962422,
  BASE_DEV: -1002383432249,
};

const token = "7564255529:AAELnqPYEHTvtJzwSaf3tnn7JQb4whqx688";
const snackbar = reactive({
  value: false,
});

const message = reactive({
  fio: "",
  address: "",
  kadastr: "",
  phone: "",

  countPeople: "",
  countPeopleDop: "",
  ageClient: "",
  children: "",
  childrenAge: "",
  inval: [],
  allergy: [],
  isAllergy: "",

  leisure: [],
  alcove: "",
  terrace: "",
  hobby: [],
  sport: "",
  utilityBlock: [],
  garage: "",
  parking: "",
  gardenArea: "",
  greenhouse: "",
  air: [],
  howOftenAir: "",
  dopZone: "",
  addReq: "",

  garden: [],
  elemGarden: "",
  berryBushes: "",
  fruitTrees: "",
  collection: "",
  style: [],
  plants: [],
  monthOfFlowering: "",
  plantsLike: "",
  plantsDisLike: "",
  colorLike: "",
  colorDisLike: "",
  interior: "",
  lighting: [],
  irrigationSystem: [],
  water: [],
  buildingMaterials: [],
  dismantling: [],
  viewDismantling: "",
  changes: [],
  dopChanges: "",
  dopInfo: [],
  detailsInfo: "",
  experienceGarden: "",
  hourGarden: "",
  wantHourGarden: "",
  likeWork: "",
  interfereGarden: "",
});

async function sendMessage() {
  try {
    const formattedText = `
👨🏻 Анкета для ТЗ
${message.fio != "" || message.address != "" || message.kadastr != "" || message.phone != "" ? `[line]` : ""}
${message.fio != "" ? `ФИО: ${message.fio}` : ""}
${message.address != "" ? `Адрес клиента: ${message.address}` : ""}
${message.kadastr != "" ? `Адрес участка: ${message.kadastr}` : ""}
${message.phone != "" ? `Телефон: ${message.phone}` : ""}
${
  message.countPeople != "" ||
  message.countPeopleDop != "" ||
  message.ageClient != "" ||
  message.children != "" ||
  message.childrenAge != "" ||
  message.inval.length > 0 ||
  message.allergy.length > 0
    ? `[line]`
    : ""
}
${
  message.countPeople != "" ||
  message.countPeopleDop != "" ||
  message.ageClient != "" ||
  message.children != "" ||
  message.childrenAge != "" ||
  message.inval.length > 0 ||
  message.allergy.length > 0
    ? `⭐️⭐️⭐️ Дополнительные сведения\n`
    : ""
}
${message.countPeople != "" ? `Число проживающих на участке: ${message.countPeople}` : ""}
${message.countPeopleDop != "" ? `В том числе проживают: ${message.countPeopleDop}` : ""}
${message.ageClient != "" ? `Возраст клиента(ов): ${message.ageClient}` : ""}
${message.children != "" ? `Дети: ${message.children}` : ""}
${message.childrenAge != "" ? `Возраст ребенка (детей): ${message.childrenAge}` : ""}
${message.inval.length > 0 ? `⭐️ Маломобильные пользователи` : ""}
${message.inval ? `${message.inval.map((task) => `● ${task}`).join("\n")}` : ""}
${message.allergy != "" ? `● Наличие аллергических реакций: ${message.allergy}` : ""}
${message.isAllergy != "" ? `На что аллергия: ${message.isAllergy}` : ""}
${
  message.leisure.length > 0 ||
  message.hobby.length > 0 ||
  message.utilityBlock.length > 0 ||
  message.air.length > 0 ||
  message.addReq != ""
    ? `[line]`
    : ""
}
${
  message.leisure.length > 0 ||
  message.hobby.length > 0 ||
  message.utilityBlock.length > 0 ||
  message.air.length > 0 ||
  message.addReq != ""
    ? `⭐️⭐️⭐️ Функциональные зоны\n`
    : ""
}
${message.leisure.length > 0 ? `⭐️ Отдых (досуг)` : ""}
${message.leisure ? `${message.leisure.map((task) => `● ${task}`).join("\n")}` : ""}
${message.alcove != "" ? `Максимально людей в беседке: ${message.alcove}` : ""}
${message.terrace != "" ? `Максимально людей на террасе: ${message.terrace}` : ""}

${message.hobby.length > 0 ? `⭐️ Хобби` : ""}
${message.hobby ? `${message.hobby.map((task) => `● ${task}`).join("\n")}` : ""}
${message.sport != "" ? `Вид спорта: ${message.sport}` : ""}
${message.utilityBlock.length > 0 ? `⭐️ Хозяйственный блок` : ""}
${message.utilityBlock ? `${message.utilityBlock.map((task) => `● ${task}`).join("\n")}` : ""}
${message.garage != "" ? `На сколько машин гараж: ${message.garage}` : ""}
${message.parking != "" ? `На сколько машин парковка: ${message.parking}` : ""}
${message.gardenArea != "" ? `Посадок в огороде: ${message.gardenArea}` : ""}
${message.greenhouse != "" ? `Размер теплицы: ${message.greenhouse}` : ""}
${message.air != "" ? `● Развлечения на открытом воздухе: ${message.air}` : ""}
${message.howOftenAir != "" ? `Переодичность: ${message.howOftenAir}` : ""}
${message.dopZone != "" ? `Иная дополнительная зона: ${message.dopZone}` : ""}
${message.addReq != "" ? `Дополнительные требования: ${message.addReq}` : ""}
${
  message.garden.length > 0 ||
  message.style.length > 0 ||
  message.plants.length > 0 ||
  message.plantsLike != "" ||
  message.plantsDisLike != "" ||
  message.colorLike != "" ||
  message.colorDisLike != "" ||
  message.interior != ""
    ? `[line]`
    : ""
}
${
  message.garden.length > 0 ||
  message.style.length > 0 ||
  message.plants.length > 0 ||
  message.plantsLike != "" ||
  message.plantsDisLike != "" ||
  message.colorLike != "" ||
  message.colorDisLike != "" ||
  message.interior != ""
    ? `⭐️⭐️⭐️ Предпочтения\n`
    : ""
}
${message.garden.length > 0 ? `⭐️ Элементы сада` : ""}
${message.garden ? `${message.garden.map((task) => `● ${task}`).join("\n")}` : ""}
${message.berryBushes != "" ? `Ягодные кустарники: ${message.berryBushes}` : ""}
${message.fruitTrees != "" ? `Фруктовые деревья: ${message.fruitTrees}` : ""}
${message.collection != "" ? `Коллекция: ${message.collection}` : ""}
${message.style.length > 0 ? `⭐️ Стиль` : ""}
${message.style ? `${message.style.map((task) => `● ${task}`).join("\n")}` : ""}
${message.plants.length > 0 ? `⭐️ Растения` : ""}
${message.plants ? `${message.plants.map((task) => `● ${task}`).join("\n")}` : ""}
${message.monthOfFlowering != "" ? `Месяц обильного цветения: ${message.monthOfFlowering}` : ""}
${message.plantsLike != "" ? `Растения которые нравятся: ${message.plantsLike}` : ""}
${message.plantsDisLike != "" ? `Растения которые не нравятся: ${message.plantsDisLike}` : ""}
${message.colorLike != "" || message.colorDisLike != "" || message.interior != "" ? `⭐️ Цветовые предпочтения` : ""}
${message.colorLike != "" ? `Цвета которые нравятся: ${message.colorLike}` : ""}
${message.colorDisLike != "" ? `Цвета которые не нравятся: ${message.colorDisLike}` : ""}
${message.interior != "" ? `Оттенки интерьера для ландшафта: ${message.interior}` : ""}
${
  message.lighting.length > 0 ||
  message.irrigationSystem.length > 0 ||
  message.water.length > 0 ||
  message.buildingMaterials > 0 ||
  message.dismantling > 0 ||
  message.viewDismantling != "" ||
  message.changes > 0 ||
  message.dopChanges != ""
    ? `[line]`
    : ""
}
${
  message.lighting.length > 0 ||
  message.irrigationSystem.length > 0 ||
  message.water.length > 0 ||
  message.buildingMaterials > 0 ||
  message.dismantling > 0 ||
  message.viewDismantling != "" ||
  message.changes > 0 ||
  message.dopChanges != ""
    ? `⭐️⭐️⭐️ Технические вопросы\n`
    : ""
}
${message.lighting.length > 0 ? `⭐️ Система освещения` : ""}
${message.lighting ? `${message.lighting.map((task) => `● ${task}`).join("\n")}` : ""}
${message.irrigationSystem.length > 0 ? `⭐️ Система полива` : ""}
${message.irrigationSystem ? `${message.irrigationSystem.map((task) => `● ${task}`).join("\n")}` : ""}
${message.water.length > 0 ? `⭐️ Точка подключения воды` : ""}
${message.water ? `${message.water.map((task) => `● ${task}`).join("\n")}` : ""}
${message.buildingMaterials.length > 0 ? `⭐️ Строительные материалы` : ""}
${message.buildingMaterials ? `${message.buildingMaterials.map((task) => `● ${task}`).join("\n")}` : ""}
${message.dismantling.length > 0 ? `⭐️ Демонтаж и изменения` : ""}
${message.dismantling ? `${message.dismantling.map((task) => `● ${task}`).join("\n")}` : ""}
${message.viewDismantling != "" ? `Объекты демонтажа (изменений): ${message.viewDismantling}` : ""}
${message.changes.length > 0 ? `⭐️ Пожелания по изменениям` : ""}
${message.changes ? `${message.changes.map((task) => `● ${task}`).join("\n")}` : ""}
${message.dopChanges != "" ? `Дополнительные требования: ${message.dopChanges}` : ""}
${message.dopInfo.length > 0 || message.detailsInfo != "" ? `[line]` : ""}
${message.dopInfo.length > 0 || message.detailsInfo != "" ? `⭐️⭐️⭐️ Дополнительная информация\n` : ""}
${message.dopInfo ? `${message.dopInfo.map((task) => `● ${task}`).join("\n")}` : ""}
${message.detailsInfo != "" ? `Подробности: ${message.detailsInfo}` : ""}
${
  message.experienceGarden != "" ||
  message.hourGarden != "" ||
  message.wantHourGarden != "" ||
  message.likeWork != "" ||
  message.interfereGarden != ""
    ? `[line]`
    : ""
}
${
  message.experienceGarden != "" ||
  message.hourGarden != "" ||
  message.wantHourGarden != "" ||
  message.likeWork != "" ||
  message.interfereGarden != ""
    ? `⭐️⭐️⭐️ Обслуживание сада\n`
    : ""
}
${message.experienceGarden != "" ? `Опыт работы: ${message.experienceGarden}` : ""}
${message.hourGarden != "" ? `Времяпрепровождение в саду (время): ${message.hourGarden}` : ""}
${message.wantHourGarden != "" ? `Желаемое времяпрепровождение в саду (время): ${message.wantHourGarden}` : ""}
${message.likeWork != "" ? `Любимые садовые работы: ${message.likeWork}` : ""}
${message.interfereGarden != "" ? `Что мешает в саду: ${message.interfereGarden}` : ""}
`
      .replace(/\./g, "\\\.")
      .replace(/-/g, "\\-")
      .replace(/\n+/g, "\n")
      .replace(/\s*\[line\]/g, "\n")
      .replace(/=/g, "\\=")
      .replace(/>/g, "\\>")
      .replace(/\+/g, "\\+")
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
        // message_thread_id: 4294967414, //DEV
        message_thread_id: 4294967339,
        polling: true,
      })
      .then(() => {
        snackbar.value = true;
      });
  } catch (error) {
    console.error("Ошибка при отправке сообщения:", error);
  }
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

function isMobileDevice() {
  return window.screen.width < 768 || window.screen.height < 768;
}

onMounted(() => {
  if (isMobileDevice()) {
    document.querySelectorAll("input, textarea").forEach((input) => {
      input.addEventListener("focus", () => {
        input.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  // console.log(inputElement);
});
</script>
<template>
  <section class="survey">
    <!-- <div v-if="isAnyComboboxOpen" class="overlay" :style="{ zIndex: currentOpenCombobox ? 1 : 0 }"></div> -->
    <div class="survey__wrapper _container">
      <div class="bg-white">
        <div class="mx-auto max-w-7xl py-10 sm:px-6 sm:py-10 lg:px-8">
          <div class="mx-auto max-w-3xl">
            <div class="space-y-12">
              <div class="border-b border-gray-900/10 pb-12">
                <label class="block text-h5 font-semibold text-gray-900 pl-4">Анкета заказчика для ТЗ</label>
                <div class="mt-3 sm:col-span-3">
                  <v-card class="px-md-7 px-3 py-4 mb-4">
                    <v-card-title style="white-space: normal" class="wrap-text text-h6 mb-1 pl-1">Основные сведения</v-card-title>
                    <v-text-field
                      v-model="message.fio"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="ФИО заказчика"
                      variant="outlined"
                      prepend-inner-icon="mdi-card-account-details"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-model="message.address"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Адрес клиента"
                      variant="outlined"
                      prepend-inner-icon="mdi-map-marker-outline"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-model="message.kadastr"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Адрес участка (кадастровый номер)"
                      variant="outlined"
                      prepend-inner-icon="mdi-map-outline"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-model="message.phone"
                      density="compact"
                      hide-details
                      label="Телефон"
                      variant="outlined"
                      prepend-inner-icon="mdi-phone-outline"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                  </v-card>
                </div>
                <fieldset class="mt-4">
                  <v-card class="px-md-7 px-3 pb-2 pt-2 mb-4">
                    <v-card-title style="white-space: normal" class="text-h6 mb-1 pl-1">Дополнительные сведения</v-card-title>
                    <v-text-field
                      v-model="message.countPeople"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Число проживающих на участке"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-model="message.countPeopleDop"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="В том числе проживают"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-model="message.ageClient"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Возраст клиента(ов)"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-model="message.children"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Дети"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-model="message.childrenAge"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Укажите возраст ребёнка (детей)?"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-select
                      v-model="message.inval"
                      :items="['Есть', 'Нет', 'Требуется предусмотреть пандусы', 'Другое']"
                      label="Маломобильные пользователи"
                      chips
                      variant="outlined"
                      multiple
                      density="compact"
                      hide-details
                      class="mb-2 test"
                      prepend-inner-icon="mdi-format-list-bulleted"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'mobilityAid'"
                      @click:control="handleComboboxClick('mobilityAid')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'mobilityAid')"
                      ref="mobilityAidCombobox"
                    ></v-select>
                    <v-select
                      v-model="message.allergy"
                      density="compact"
                      hide-details
                      chips
                      class="mb-2"
                      label="Наличие аллергических реакций"
                      :items="['Нет', 'Да']"
                      variant="outlined"
                      prepend-inner-icon="mdi-checkbox-multiple-outline"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'allergies'"
                      @click:control="handleComboboxClick('allergies')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'allergies')"
                      ref="allergiesCombobox"
                    ></v-select>
                    <v-text-field
                      v-if="message.allergy.includes('Да')"
                      v-model="message.isAllergy"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="На что у Вас аллергия?"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                  </v-card>
                  <v-card class="px-md-7 px-3 pt-2 mb-4">
                    <v-card-title style="white-space: normal" class="wrap-text text-h6 mb-1 pl-1"
                      >Какие функциональные зоны Вы хотите организовать</v-card-title
                    >
                    <v-select
                      density="compact"
                      hide-details
                      chips
                      class="mb-2"
                      multiple
                      label="Отдых/досуг"
                      v-model="message.leisure"
                      style="font-size: 14px !important"
                      :items="[
                        'Газон для активных игр',
                        'Зона открытого огня',
                        'Декоративный водный объект (природный пруд, фонтан, сухой ручей и тд.)',
                        'Солярий',
                        'Бассейн',
                        'Беседка',
                        'Терраса',
                        'Летняя кухня',
                        'Детская площадка',
                        'Качель/гамак',
                        'Нет в списке',
                      ]"
                      variant="outlined"
                      prepend-inner-icon="mdi-checkbox-multiple-outline"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'leisure'"
                      @click:control="handleComboboxClick('leisure')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'leisure')"
                      ref="leisureCombobox"
                    ></v-select>

                    <v-text-field
                      v-if="message.leisure.includes('Беседка')"
                      v-model="message.alcove"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Максимальное число людей в беседке единовременно"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-if="message.leisure.includes('Терраса')"
                      v-model="message.terrace"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Максимальное число людей на террасе единовременно"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-select
                      v-model="message.hobby"
                      density="compact"
                      hide-details
                      chips
                      class="mb-2"
                      multiple
                      label="Хобби"
                      :items="['Кулинария', 'Настольные игры', 'Спорт', 'Собаководство', 'Нет в списке']"
                      variant="outlined"
                      prepend-inner-icon="mdi-checkbox-multiple-outline"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'hobby'"
                      @click:control="handleComboboxClick('hobby')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'hobby')"
                      ref="hobbyCombobox"
                    ></v-select>
                    <v-text-field
                      v-if="message.hobby.includes('Спорт')"
                      v-model="message.sport"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Вид спорта"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-select
                      v-model="message.utilityBlock"
                      density="compact"
                      hide-details
                      chips
                      class="mb-2"
                      multiple
                      label="Хозяйственный блок"
                      :items="[
                        'Гараж',
                        'Парковка',
                        'Зона огорода',
                        'Теплица',
                        'Погреб для хранения овощей',
                        'Компост',
                        'Хозблок',
                        'Кладовая для садового инвентаря',
                        'Мусорные баки',
                        'Туалет',
                        'Нет в списке',
                      ]"
                      variant="outlined"
                      prepend-inner-icon="mdi-checkbox-multiple-outline"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'utilityBlock'"
                      @click:control="handleComboboxClick('utilityBlock')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'utilityBlock')"
                      ref="utilityBlockCombobox"
                    ></v-select>
                    <v-text-field
                      v-if="message.utilityBlock.includes('Гараж')"
                      v-model="message.garage"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="На сколько машин гараж"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-if="message.utilityBlock.includes('Парковка')"
                      v-model="message.parking"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="На сколько машин парковка"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-if="message.utilityBlock.includes('Зона огорода')"
                      v-model="message.gardenArea"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Примерное кол-во посадок в огороде"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-if="message.utilityBlock.includes('Теплица')"
                      v-model="message.greenhouse"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Размер теплицы"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-select
                      v-model="message.air"
                      :items="['Да', 'Нет']"
                      label="Развлечения/обеды на открытом воздухе"
                      chips
                      variant="outlined"
                      density="compact"
                      hide-details
                      class="mb-2"
                      prepend-inner-icon="mdi-checkbox-multiple-outline"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'air'"
                      @click:control="handleComboboxClick('air')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'air')"
                      ref="airCombobox"
                    ></v-select>
                    <v-text-field
                      v-if="message.air.includes('Да')"
                      v-model="message.howOftenAir"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Как часто развлечения/обеды"
                      variant="outlined"
                      prepend-inner-icon="mdi-pencil-outline"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-if="
                        message.leisure.includes('Нет в списке') ||
                        message.hobby.includes('Нет в списке') ||
                        message.utilityBlock.includes('Нет в списке')
                      "
                      v-model="message.dopZone"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Иная дополнительная зона*"
                      variant="outlined"
                      prepend-inner-icon="mdi-pencil-outline"
                      :disabled="isAnyComboboxOpen"
                    >
                    </v-text-field>
                    <v-textarea
                      v-model="message.addReq"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4 test"
                      label="Дополнительные требования"
                      variant="outlined"
                      prepend-inner-icon="mdi-pencil-outline"
                      :disabled="isAnyComboboxOpen"
                    ></v-textarea>
                  </v-card>
                  <v-card class="px-md-7 px-3 pt-2 pb-2 mb-4">
                    <v-card-title style="white-space: normal" class="text-h6 mb-1 pl-1">Ваши предпочтения</v-card-title>
                    <v-select
                      v-model="message.garden"
                      density="compact"
                      hide-details
                      chips
                      class="mb-2"
                      multiple
                      label="Элементы сада"
                      :items="[
                        'Малые архитектурные формы',
                        'Арки/перголы',
                        'Пряно-ароматические травы',
                        'Ягодные кустарники',
                        'Фруктовые деревья',
                        'Вы коллекционер и собираете в саду коллекцию',
                        'Нет в списке',
                      ]"
                      variant="outlined"
                      prepend-inner-icon="mdi-checkbox-multiple-outline"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'garden'"
                      @click:control="handleComboboxClick('garden')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'garden')"
                      ref="gardenCombobox"
                    ></v-select>
                    <v-text-field
                      v-if="message.garden.includes('Нет в списке')"
                      v-model="message.elemGarden"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Элемент сада"
                      variant="outlined"
                      prepend-inner-icon="mdi-pencil-outline"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-if="message.garden.includes('Ягодные кустарники')"
                      v-model="message.berryBushes"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Виды ягодных кустарников"
                      variant="outlined"
                      prepend-inner-icon="mdi-pencil-outline"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-if="message.garden.includes('Фруктовые деревья')"
                      v-model="message.fruitTrees"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Виды фруктовых деревьев"
                      variant="outlined"
                      prepend-inner-icon="mdi-pencil-outline"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-if="message.garden.includes('Вы коллекционер и собираете в саду коллекцию')"
                      v-model="message.collection"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Какую коллекцию Вы хотите собрать?"
                      variant="outlined"
                      prepend-inner-icon="mdi-pencil-outline"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-select
                      v-model="message.style"
                      density="compact"
                      hide-details
                      chips
                      class="mb-2"
                      multiple
                      label="Стиль"
                      :items="[
                        'Классика/регулярный',
                        'Классика/пейзажный',
                        'Прованс/деревенский',
                        'Технологический/хай-тек',
                        'Минималистический',
                        'Скандинавский',
                        'Нет в списке',
                      ]"
                      variant="outlined"
                      prepend-inner-icon="mdi-checkbox-multiple-outline"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'style'"
                      @click:control="handleComboboxClick('style')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'style')"
                      ref="styleCombobox"
                    ></v-select>
                    <v-card-subtitle class="pl-1 mb-1">Какие растения Вы хотите видеть в саду</v-card-subtitle>
                    <v-select
                      v-model="message.plants"
                      density="compact"
                      hide-details
                      chips
                      class="mb-2"
                      multiple
                      label="Виды растений"
                      :items="[
                        'Пик декоративности (для ежегодных семейных праздников)',
                        'Осенне-цветущие',
                        'Весенне-цветущие',
                        'Непрерывного цветения',
                        'Ароматные',
                        'Другие',
                      ]"
                      variant="outlined"
                      prepend-inner-icon="mdi-checkbox-multiple-outline"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'plants'"
                      @click:control="handleComboboxClick('plants')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'plants')"
                      ref="plantsCombobox"
                    ></v-select>
                    <v-card-subtitle
                      v-if="message.plants.includes('Пик декоративности (для ежегодных семейных праздников)')"
                      class="pl-1 mb-1"
                      >В каком месяце требуется обильное цветение?</v-card-subtitle
                    >
                    <v-text-field
                      v-if="message.plants.includes('Пик декоративности (для ежегодных семейных праздников)')"
                      v-model="message.monthOfFlowering"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Месяц/месяца обильного цветения"
                      variant="outlined"
                      prepend-inner-icon="mdi-pencil-outline"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-card-subtitle class="pl-1 mb-1">Предпочтения по растениям</v-card-subtitle>
                    <v-text-field
                      v-model="message.plantsLike"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Какие растения Вам нравятся?"
                      variant="outlined"
                      prepend-inner-icon="mdi-pencil-outline"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-model="message.plantsDisLike"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Какие растения Вам не нравятся?"
                      variant="outlined"
                      prepend-inner-icon="mdi-pencil-outline"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-card-subtitle class="pl-1 mb-1">Цветовые предпочтения</v-card-subtitle>
                    <v-text-field
                      v-model="message.colorLike"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Какие цвета Вам нравятся?"
                      variant="outlined"
                      prepend-inner-icon="mdi-pencil-outline"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-model="message.colorDisLike"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Какие цвета Вам не нравятся?"
                      variant="outlined"
                      prepend-inner-icon="mdi-pencil-outline"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-text-field
                      v-model="message.interior"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Какие оттенки в интерьере хотелось бы повторить в ландшафте"
                      variant="outlined"
                      prepend-inner-icon="mdi-pencil-outline"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                  </v-card>
                  <v-card class="px-md-7 px-3 pt-2 mb-4">
                    <v-card-title style="white-space: normal" class="wrap-text text-h6 mb-1 pl-1">Технические вопросы</v-card-title>
                    <v-select
                      v-model="message.lighting"
                      :items="[
                        'Дежурное освещение',
                        'Декоративное освещение (подсветка растений, деревьев, низкие фонари, направленный свет)',
                        'Внешняя подсветка фасадов строений усадьбы',
                      ]"
                      label="Система освещения"
                      chips
                      variant="outlined"
                      multiple
                      density="compact"
                      hide-details
                      class="mb-2"
                      prepend-inner-icon="mdi-format-list-bulleted"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'lighting'"
                      @click:control="handleComboboxClick('lighting')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'lighting')"
                      ref="lightingCombobox"
                    ></v-select>
                    <v-select
                      v-model="message.irrigationSystem"
                      :items="['Нет, не нужна', 'Да, автоматический полив', 'Да, механический полив']"
                      label="Система полива"
                      chips
                      variant="outlined"
                      multiple
                      density="compact"
                      hide-details
                      class="mb-2"
                      prepend-inner-icon="mdi-format-list-bulleted"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'irrigationSystem'"
                      @click:control="handleComboboxClick('irrigationSystem')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'irrigationSystem')"
                      ref="irrigationSystemCombobox"
                    ></v-select>
                    <v-select
                      v-model="message.water"
                      :items="[
                        'Бочка с водой',
                        'Централизованное водоснабжение',
                        'Собственная скважина',
                        'Участок прилегает к естественному водоему',
                        'Воды нет',
                      ]"
                      label="Расположение водопровода и точки подключения к системе водоснабжения"
                      chips
                      variant="outlined"
                      multiple
                      density="compact"
                      hide-details
                      class="mb-2"
                      prepend-inner-icon="mdi-format-list-bulleted"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'water'"
                      @click:control="handleComboboxClick('water')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'water')"
                      ref="waterCombobox"
                    ></v-select>
                    <v-card-subtitle style="white-space: normal" class="pl-1 mb-1"
                      >Строительные материалы, которые хотелось бы использовать в благоустройстве</v-card-subtitle
                    >
                    <v-select
                      v-model="message.buildingMaterials"
                      density="compact"
                      hide-details
                      chips
                      class="mb-2"
                      multiple
                      label="Строительные материалы"
                      :items="[
                        'Террасная доска (натуральная, композитная)',
                        'Натуральный камень',
                        'Тротуарная плитка',
                        'Брусчатка',
                        'Металл/ковка',
                        'Щебеночные покрытия',
                      ]"
                      variant="outlined"
                      prepend-inner-icon="mdi-format-list-bulleted"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'buildingMaterials'"
                      @click:control="handleComboboxClick('buildingMaterials')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'buildingMaterials')"
                      ref="buildingMaterialsCombobox"
                    ></v-select>
                    <v-card-subtitle class="pl-1 mb-1">Демонтаж и изменения</v-card-subtitle>
                    <v-select
                      v-model="message.dismantling"
                      :items="['Строения', 'Деревья']"
                      label="Объекты которые можно/нужно убарть/демонтировать"
                      chips
                      variant="outlined"
                      multiple
                      density="compact"
                      hide-details
                      class="mb-2"
                      prepend-inner-icon="mdi-format-list-bulleted"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'dismantling'"
                      @click:control="handleComboboxClick('dismantling')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'dismantling')"
                      ref="dismantlingCombobox"
                    ></v-select>
                    <v-text-field
                      v-if="message.dismantling.includes('Строения') || message.dismantling.includes('Деревья')"
                      v-model="message.viewDismantling"
                      density="compact"
                      hide-details
                      class="mb-2"
                      label="Укажите строения или деревья"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-text-field>
                    <v-select
                      v-model="message.changes"
                      :items="['Ограждение/забор', 'Декорировать стены', 'Мощение', 'Освещение', 'Система полива']"
                      label="Что Вы хотели бы изменить?"
                      chips
                      variant="outlined"
                      multiple
                      density="compact"
                      hide-details
                      class="mb-2"
                      prepend-inner-icon="mdi-format-list-bulleted"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'changes'"
                      @click:control="handleComboboxClick('changes')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'changes')"
                      ref="changesCombobox"
                    ></v-select>

                    <v-textarea
                      v-model="message.dopChanges"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4 test"
                      label="Дополнительные требования"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-textarea>
                  </v-card>
                  <v-card class="px-md-7 px-3 pt-2 mb-4">
                    <v-card-title style="white-space: normal" class="wrap-text text-h6 mb-1 pl-1"
                      >Дополнительная информация о территории, которую необходимо учесть при проектировании</v-card-title
                    >
                    <v-select
                      v-model="message.dopInfo"
                      :items="[
                        'Имеются переувлажненные участки',
                        'Имеются пересушенные участки',
                        'Имеются ветренные зоны',
                        'Имеются дурнопахнущие участки',
                      ]"
                      label="Дополнительная информация"
                      chips
                      variant="outlined"
                      multiple
                      density="compact"
                      hide-details
                      class="mb-2"
                      prepend-inner-icon="mdi-format-list-bulleted"
                      :disabled="isAnyComboboxOpen && currentOpenCombobox !== 'dopInfo'"
                      @click:control="handleComboboxClick('dopInfo')"
                      @update:menu="(isOpen) => handleMenuUpdate(isOpen, 'dopInfo')"
                      ref="dopInfoCombobox"
                    ></v-select>
                    <v-textarea
                      v-model="message.detailsInfo"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-4"
                      label="Подробности"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-textarea>
                  </v-card>
                  <v-card class="px-md-7 px-3 pt-2 pb-2 mb-4"
                    ><v-card-title style="white-space: normal" class="wrap-text text-h6 mb-1 pl-1">Обслуживание сада</v-card-title>
                    <v-textarea
                      v-model="message.experienceGarden"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-2"
                      label="Каков Ваш опыт работы в саду и насколько она Вам интересна?"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-textarea>
                    <v-textarea
                      v-model="message.hourGarden"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-2"
                      label="Сколько часов Вы тратите на работу в саду в настоящее время?"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-textarea>
                    <v-textarea
                      v-model="message.wantHourGarden"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-2"
                      label="Сколько часов Вы хотите тратить на работу в саду?"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-textarea>
                    <v-textarea
                      v-model="message.likeWork"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-2"
                      label="Какие садовые работы Вам особенно нравятся?"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-textarea>
                    <v-textarea
                      v-model="message.interfereGarden"
                      rows="1"
                      auto-grow
                      hide-details
                      class="pb-0 mb-2"
                      label="Что мешает Вам наслаждатся садом (недостаток уединенности, много шума)?"
                      variant="outlined"
                      :disabled="isAnyComboboxOpen"
                    ></v-textarea
                  ></v-card>
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
.v-theme--myCustomLightTheme {
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Полупрозрачный черный цвет */
  backdrop-filter: blur(2px); /* Размытие фона */
  z-index: 1; /* Оверлей поверх всего контента */
}

/* Увеличиваем z-index для текущего открытого combobox */
.v-combobox,
.v-select {
  position: relative;
  z-index: 0;
}

.v-combobox[style*="z-index: 2"],
.v-select[style*="z-index: 2"] {
  z-index: 2; /* Текущий открытый элемент поверх оверлея */
}
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
