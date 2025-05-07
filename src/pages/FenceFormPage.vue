<script setup>
import { ref, computed, onMounted, onUnmounted, reactive } from "vue";
import { ralColorMap, ralColors, powderColors, powderColorMap } from "../data/ralColors";
import { sendTextMessage, sendMessageTG } from "../services/botService";
import { CHATS_ID, TOPICS_ID } from "../services/botService";
import { useDisplay } from "vuetify";

const steps = ref(["Контактная информация", "Участки забора", "Монтаж и доставка", "Подтверждение"]);
const isStep1Valid = ref(false);
// const successDialog = ref(false);
const fenceSvg = ref(null);
const currentStep = ref(0);
const { mobile } = useDisplay();

function prevStep() {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
}

const successDialog = reactive({
  value: false,
});

// Данные формы
const customer = reactive({
  name: "",
  phone: "",
  address: "",
});

const initialSection = {
  type: "Штакетник металлический",
  length: null,
  height: 2,
  meshSize: "50×200 мм",
  coatingType: "Порошковое",
  ralColor: null,
  powderColor: null,
  boardWidth: 100,
  gap: 2,
  hasGate: false,
  gateWidth: 1,
  gateDirection: "На улицу",
  hasGates: false,
  gatesType: "Откатные",
  gatesWidth: 4.5,
  gatesSlideDirection: "Влево",
  gatesSwingDirection: "На улицу",
  swingDirectionGate: "На улицу",
  gatesLockType: "Встроенный",
  gatesAutomation: false,
  connectionType: "Прямое",
  angleType: "Прямой (90°)",
  angle: 90,
  claddingType: "Односторонняя",
  claddingStep: 6,
  info: null,
};

const fenceSections = ref([{ ...initialSection }]);

const installation = ref({
  needsDelivery: true,
  needsInstallation: true,
  desiredDate: "",
  notes: "",
});

// Опции для выбора
const fenceTypes = ref([
  "Сетка гиттер",
  "Штакетник металлический",
  "Штакетник деревянный",
  "Профнастил",
  "Сетка рабица",
  "Брусок",
  "Другое",
]);
const meshSizes = ref(["50×200 мм", "60×60 мм", "Другое"]);
// const coatingTypes = ref(["Оцинковка", "Полимерное (RAL)", "Порошковое", "Без покрытия"]);
const coatingTypes = ref(["Оцинковка", "Порошковое", "Без покрытия"]);
const gateTypes = ref(["Откатные", "Распашные", "Откатные с калиткой", "Распашные с калиткой"]);
const slideDirections = ref(["Влево", "Вправо"]);
const swingDirections = ref(["На улицу", "Во двор"]);
const lockTypes = ref(["Встроенный", "Навесной", "Электромеханический", "Без замка"]);
const gateDirections = ref(["На улицу", "Во двор"]);
const connectionTypes = ref(["Прямое", "Угол", "Стык"]);
const angleTypes = ref(["Прямой (90°)", "Острый (45°)", "Тупой (135°)", "Произвольный"]);
const claddingTypes = ref(["Односторонняя", "Двухсторонняя"]);

// Обновление цвета RAL
const updateRalColor = (section) => {
  console.log(`Выбран цвет RAL ${section.ralColor}`);
};

const totalLength = computed(() => {
  return fenceSections.value.reduce((sum, section) => sum + (section.length || 0), 0);
});

// Методы
const nextStep = () => {
  if (currentStep.value < steps.value.length) {
    currentStep.value++;
  }
};

const addSection = () => {
  fenceSections.value.push({ ...initialSection });
};

const removeSection = (index) => {
  if (fenceSections.value.length > 1) {
    fenceSections.value.splice(index, 1);
  }
};

// Получение угла для участка
const getSectionAngle = (index) => {
  const section = fenceSections.value[index];
  switch (section.angleType) {
    case "Прямой (90°)":
      return 90;
    case "Острый (45°)":
      return 45;
    case "Тупой (135°)":
      return 135;
    default:
      return section.angle || 0;
  }
};

// Адаптация SVG при изменении размеров окна
const handleResize = () => {
  if (fenceSvg.value) {
    const svg = fenceSvg.value;
    const container = svg.parentElement;
    const aspectRatio = svg.viewBox.baseVal.width / svg.viewBox.baseVal.height;

    if (container.clientWidth / container.clientHeight > aspectRatio) {
      svg.style.width = "auto";
      svg.style.height = "100%";
    } else {
      svg.style.width = "100%";
      svg.style.height = "auto";
    }
  }
};

const message = computed(() => {
  // Функция для форматирования даты
  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  // Функция для замены null на дефис
  const safeValue = (value) => value ?? "-";

  // Формируем раздел с контактной информацией
  const contactInfo = [
    "👨🏻 Заявка на забор",
    customer.name && `ФИО: ${safeValue(customer.name)}`,
    customer.phone && `Телефон: ${safeValue(customer.phone)}`,
    customer.address && `Адрес: ${safeValue(customer.address)}`,
  ]
    .filter(Boolean)
    .join("\n");

  // Формируем информацию об участках забора
  const sectionsInfo = fenceSections.value
    .map((section, index) => {
      const sectionLines = [
        `\n⭐️ Участок ${index + 1}:`,
        `- Тип: ${safeValue(section.type)}`,
        `- Длина: ${safeValue(section.length)} м`,
        `- Высота: ${safeValue(section.height)} м`,
        section.type.includes("Штакетник") && `- Обшивка: ${safeValue(section.claddingType)}, шаг: ${safeValue(section.claddingStep)} см`,
        `- Покрытие: ${safeValue(section.coatingType)}` +
          (section.ralColor ? ` (RAL ${safeValue(section.ralColor)})` : "") +
          (section.powderColor ? ` (${safeValue(section.powderColor)})` : ""),
        `- Доп. информация: ${safeValue(section.info)}`,
        index > 0 &&
          `- Соединение: ${safeValue(section.connectionType)}` +
            (section.connectionType === "Угол" ? ` (${safeValue(getSectionAngle(index))}°)` : ""),
        section.hasGate && `- Калитка: ${safeValue(section.gateWidth)} м (${safeValue(section.gateDirection)})`,
        section.hasGates &&
          [
            `- Ворота:`,
            `  - Тип: ${safeValue(section.gatesType)}`,
            `  - Ширина: ${safeValue(section.gatesWidth)} м`,
            section.gatesType.includes("Откатные")
              ? `  - Направление: ${safeValue(section.gatesSlideDirection)}`
              : `  - Открывание ворот: ${safeValue(section.gatesSwingDirection)}`,
            section.gatesType.includes("с калиткой") ? `  - Открывание калитки: ${safeValue(section.swingDirectionGate)}` : ``,
            `  - Замок: ${safeValue(section.gatesLockType)}`,
            `  - Автоматика: ${section.gatesAutomation ? "Да" : "Нет"}`,
          ]
            .filter(Boolean)
            .join("\n"),
      ].filter(Boolean);

      return sectionLines.join("\n");
    })
    .join("\n");

  // Формируем информацию о монтаже и доставке
  const installationInfo = [
    "\nМонтаж и доставка:",
    `- Доставка: ${installation.value.needsDelivery ? "Да" : "Нет"}`,
    `- Монтаж: ${installation.value.needsInstallation ? "Да" : "Нет"}`,
    installation.value.needsInstallation &&
      installation.value.desiredDate &&
      `- Желаемая дата: ${formatDate(installation.value.desiredDate)}`,
    installation.value.notes && `- Примечания: ${safeValue(installation.value.notes)}`,
  ]
    .filter(Boolean)
    .join("\n");

  // Формируем итоговую информацию
  const summaryInfo = [
    "\nИтоговая информация:",
    `- Общая длина забора: ${safeValue(totalLength.value.toFixed(2))} м`,
    `- Количество участков: ${safeValue(fenceSections.value.length)}`,
  ]
    .filter(Boolean)
    .join("\n");

  // Собираем все части сообщения
  const fullMessage = [contactInfo, sectionsInfo, installationInfo, summaryInfo].join("\n");

  return {
    file_name: customer.name,
    chat_id: CHATS_ID.BASE,
    topic_id: TOPICS_ID.FENCE,
    text: fullMessage,
  };
});

const sendingStatus = ref({
  isSending: false,
  isSuccess: false,
  error: null,
});

// async function clickBtn() {
//   await sendTextMessage(message.value).then((successDialog.value = true));
// }
async function clickBtn() {
  sendingStatus.value.isSending = true;
  sendingStatus.value.error = null;

  try {
    const response = await sendMessageTG(message.value);
    if (response && response.ok) {
      sendingStatus.value.isSuccess = true;
      successDialog.value = true;
    } else {
      sendingStatus.error = "Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.";
    }
  } catch (err) {
    sendingStatus.value.error = "Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.";
    console.error("Ошибка отправки:", err);
  } finally {
    sendingStatus.value.isSending = false;
  }
}
const moveCursorToFirstHash = () => {
  if (customer.phone.length != 18) {
    customer.phone = "+7 ";
  }
};
const onBlur = () => {
  if (customer.phone.length != 18) {
    customer.phone = "";
  }
};
onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize();
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <v-container class="yp-4 py-md-8">
    <v-card class="mt-8 mx-auto" max-width="1000" elevation="4">
      <div class="section-header mb-5">
        <h2 class="section-title">
          <span class="title-text">Конфигуратор забора</span>
          <span class="title-decoration"></span>
        </h2>
      </div>
      <v-stepper editable v-model="currentStep">
        <v-stepper-header>
          <v-stepper-item value="0">Контактная информация</v-stepper-item>
          <v-stepper-item value="1">Участки забора</v-stepper-item>
          <v-stepper-item value="2">Монтаж и доставка</v-stepper-item>
          <v-stepper-item value="3">Подтверждение</v-stepper-item>
        </v-stepper-header>
        <v-stepper-window>
          <v-stepper-window-item value="0">
            <v-card variant="text" class="pa-4 pa-md-6">
              <v-form class="pt-4" v-model="isStep1Valid" @submit.prevent="nextStep">
                <v-text-field
                  prepend-inner-icon="mdi-account-outline"
                  v-model="customer.name"
                  label="ФИО"
                  variant="outlined"
                  density="comfortable"
                  class="mb-2"
                ></v-text-field>
                <!-- <v-text-field v-model="customer.phone" label="Телефон" variant="outlined" class="mb-2"></v-text-field> -->
                <v-text-field
                  v-model="customer.phone"
                  variant="outlined"
                  prepend-inner-icon="mdi-phone-outline"
                  v-mask="'+7 (###) ###-##-##'"
                  placeholder="+7 (___) ___-__-__"
                  label="Телефон"
                  density="comfortable"
                  color="text"
                  @focus="moveCursorToFirstHash"
                  @blur="onBlur"
                ></v-text-field>
                <v-text-field
                  prepend-inner-icon="mdi-map-marker"
                  v-model="customer.address"
                  label="Адрес установки"
                  density="comfortable"
                  variant="outlined"
                  class="mb-2"
                ></v-text-field>
              </v-form>
            </v-card>
          </v-stepper-window-item>
          <v-stepper-window-item value="1">
            <div v-for="(section, index) in fenceSections" :key="index" class="mb-6">
              <v-card variant="text" class="pa-4 pa-md-6">
                <div class="d-flex justify-space-between align-center mb-2">
                  <h3 class="text-h6 mb-2 pl-2">Участок {{ index + 1 }}</h3>
                  <v-btn v-if="fenceSections.length > 1" variant="text" icon color="error" @click="removeSection(index)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </div>

                <v-row class="">
                  <v-col class="pb-0" cols="12" md="6">
                    <v-select v-model="section.type" :items="fenceTypes" label="Тип забора" variant="outlined" hide-details></v-select>
                  </v-col>
                  <v-col class="pb-0" cols="6" md="3">
                    <v-text-field
                      v-model.number="section.length"
                      label="Длина участка (м)"
                      type="number"
                      hint="Без калиток и ворот"
                      min="0"
                      max="100"
                      step="0.1"
                      variant="outlined"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col class="pb-0" cols="6" md="3">
                    <v-text-field
                      v-model.number="section.height"
                      label="Высота (м)"
                      type="number"
                      min="0.5"
                      max="3"
                      step="0.1"
                      variant="outlined"
                      hide-details
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row v-if="section.type.includes('Штакетник')">
                  <v-col cols="6">
                    <v-select
                      v-model="section.claddingType"
                      :items="claddingTypes"
                      label="Тип обшивки"
                      variant="outlined"
                      hide-details
                    ></v-select>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model.number="section.claddingStep"
                      label="Шаг обшивки (см)"
                      type="number"
                      min="1"
                      max="20"
                      variant="outlined"
                      hide-details
                      suffix="см"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row v-if="index > 0">
                  <v-col cols="6" class="pb-0">
                    <v-select
                      v-model="section.connectionType"
                      :items="connectionTypes"
                      label="Соединение с предыдущим участком"
                      variant="outlined"
                      hide-details
                    ></v-select>
                  </v-col>
                  <v-col cols="6" v-if="section.connectionType === 'Угол'" class="pb-0">
                    <v-select hide-details v-model="section.angleType" :items="angleTypes" label="Тип угла" variant="outlined"></v-select>
                  </v-col>
                  <v-col class="pb-0" cols="6" v-if="section.connectionType === 'Угол' && section.angleType === 'Произвольный'">
                    <v-text-field
                      v-model.number="section.angle"
                      label="Угол поворота (градусы)"
                      type="number"
                      min="0"
                      max="180"
                      variant="outlined"
                      hide-details
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" md="6">
                    <v-select
                      hide-details
                      v-model="section.coatingType"
                      :items="coatingTypes"
                      label="Тип покрытия"
                      variant="outlined"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="6" v-if="section.coatingType === 'Порошковое'">
                    <v-select
                      v-model="section.powderColor"
                      :items="ralColors"
                      label="Цвет порошкового покрытия"
                      variant="outlined"
                      class="mb-2"
                    >
                      <template v-slot:item="{ item, props }">
                        <v-list-item v-bind="props">
                          <template v-slot:prepend>
                            <div
                              :style="{
                                width: '20px',
                                height: '20px',
                                backgroundColor: ralColorMap[item.value]?.color || '#fff',
                                border: '1px solid #ccc',
                                marginRight: '10px',
                              }"
                            ></div>
                          </template>
                        </v-list-item>
                      </template>
                      <template v-slot:selection="{ item }">
                        <div class="d-flex align-center">
                          <div
                            :style="{
                              width: '20px',
                              height: '20px',
                              backgroundColor: ralColorMap[item.value]?.color || '#fff',
                              border: '1px solid #ccc',
                              marginRight: '10px',
                            }"
                          ></div>
                          <span>{{ item.title }}</span>
                        </div>
                      </template>
                    </v-select>
                  </v-col>
                </v-row>

                <div v-if="section.type === 'Сетка гиттер'" class="mb-2">
                  <v-row>
                    <v-col cols="6">
                      <v-select
                        v-model="section.meshSize"
                        :items="meshSizes"
                        label="Размер ячейки"
                        variant="outlined"
                        hide-details
                      ></v-select>
                    </v-col>
                  </v-row>
                </div>
                <div v-if="section.type === 'Штакетник'" class="mb-2">
                  <v-row>
                    <v-col cols="6">
                      <v-text-field
                        v-model.number="section.boardWidth"
                        label="Ширина доски (мм)"
                        type="number"
                        variant="outlined"
                        hide-details
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        v-model.number="section.gap"
                        label="Шаг между досками (см)"
                        type="number"
                        variant="outlined"
                        class="mb-2"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </div>
                <v-textarea rows="1" v-model="section.info" label="Дополнительная информация" variant="outlined" class="mb-2"></v-textarea>
                <v-checkbox
                  hide-details
                  v-model="section.hasGate"
                  label="Калитка на этом участке"
                  class="mt-0 mb-4"
                  density="compact"
                ></v-checkbox>

                <div v-if="section.hasGate">
                  <v-row>
                    <v-col cols="6">
                      <v-text-field
                        v-model.number="section.gateWidth"
                        label="Ширина калитки (м)"
                        type="number"
                        step="0.1"
                        variant="outlined"
                        hide-details
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-select
                        v-model="section.gateDirection"
                        :items="gateDirections"
                        label="Открывание"
                        variant="outlined"
                        hide-details
                      ></v-select>
                    </v-col>
                  </v-row>
                </div>

                <v-checkbox
                  hide-details
                  v-model="section.hasGates"
                  label="Ворота на этом участке"
                  class="mt-0 mb-4"
                  density="compact"
                ></v-checkbox>

                <div v-if="section.hasGates">
                  <v-row>
                    <v-col cols="6">
                      <v-select v-model="section.gatesType" :items="gateTypes" label="Тип ворот" variant="outlined" hide-details></v-select>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        v-model.number="section.gatesWidth"
                        label="Ширина ворот (м)"
                        type="number"
                        variant="outlined"
                        step="0.1"
                        hide-details
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row v-if="section.gatesType.includes('Откатные')">
                    <v-col cols="6">
                      <v-select
                        v-model="section.gatesSlideDirection"
                        :items="slideDirections"
                        label="Направление отката (со стороны дороги)"
                        variant="outlined"
                      ></v-select>
                    </v-col>
                    <v-col cols="6" v-if="section.gatesType === 'Откатные с калиткой'">
                      <v-select
                        v-model="section.swingDirectionGate"
                        :items="swingDirections"
                        label="Открывание калитки"
                        variant="outlined"
                      ></v-select>
                    </v-col>
                  </v-row>

                  <v-row v-if="section.gatesType.includes('Распашные')">
                    <v-col cols="6">
                      <v-select
                        v-model="section.gatesSwingDirection"
                        :items="swingDirections"
                        label="Направление открывания"
                        variant="outlined"
                      ></v-select>
                    </v-col>
                    <v-col cols="6" v-if="section.gatesType === 'Распашные с калиткой'">
                      <v-select
                        v-model="section.swingDirectionGate"
                        :items="swingDirections"
                        label="Открывание калитки"
                        variant="outlined"
                      ></v-select>
                    </v-col>
                  </v-row>

                  <v-select
                    hide-details
                    v-model="section.gatesLockType"
                    :items="lockTypes"
                    label="Тип замка"
                    variant="outlined"
                    class="mb-4"
                  ></v-select>
                  <v-checkbox
                    v-model="section.gatesAutomation"
                    label="Нужна автоматика для ворот"
                    class="mb-4"
                    density="compact"
                    hide-details
                  ></v-checkbox>
                </div>
              </v-card>
              <v-divider class="border-opacity-100"></v-divider>
            </div>
            <div class="d-flex flex-wrap mb-4 justify-center">
              <v-btn
                @click="addSection"
                type="submit"
                :size="mobile ? 'large' : 'x-large'"
                class="submit-btn"
                :append-icon="mobile ? '' : 'mdi-plus'"
              >
                Добавить участок
              </v-btn>
            </div>
            <v-divider class="my-6 border-opacity-100"></v-divider>
          </v-stepper-window-item>
          <v-stepper-window-item value="2">
            <v-card variant="text" class="pa-4 mb-4">
              <v-checkbox
                v-model="installation.needsDelivery"
                label="Нужна доставка материалов"
                class="mt-0 mb-2"
                density="compact"
                hide-details
              ></v-checkbox>
              <v-checkbox v-model="installation.needsInstallation" label="Нужен монтаж" class="mt-0 mb-2" density="compact"></v-checkbox>

              <v-text-field
                v-if="installation.needsInstallation"
                v-model="installation.desiredDate"
                label="Желаемая дата монтажа"
                type="date"
                variant="outlined"
                class="mt-2 mb-2"
              ></v-text-field>

              <v-textarea v-model="installation.notes" label="Особые пожелания" variant="outlined" rows="2" class="mt-2 mb-2"></v-textarea>
            </v-card>
          </v-stepper-window-item>
          <v-stepper-window-item value="3">
            <v-card variant="text" class="pa-4 mb-4">
              <h3 class="text-h6 mb-4">Контактная информация</h3>
              <p><strong>ФИО:</strong> {{ customer.name }}</p>
              <p><strong>Телефон:</strong> {{ customer.phone }}</p>
              <p><strong>Адрес:</strong> {{ customer.address }}</p>

              <v-divider class="my-4"></v-divider>

              <h3 class="text-h6 mb-4">Участки забора</h3>
              <div v-for="(section, index) in fenceSections" :key="index" class="mb-4">
                <p>
                  <strong>Участок {{ index + 1 }}:</strong>
                </p>
                <p>- Тип: {{ section.type }}</p>
                <p>- Длина: {{ section.length }} м</p>
                <p>- Высота: {{ section.height }} м</p>
                <p v-if="section.type.includes('Штакетник')">- Обшивка: {{ section.claddingType }}, шаг: {{ section.claddingStep }} см</p>
                <p>
                  - Покрытие: {{ section.coatingType }}
                  <span v-if="section.ralColor">(RAL {{ section.ralColor }})</span>
                  <span v-if="section.powderColor">({{ section.powderColor }})</span>
                </p>
                <p v-if="index > 0">
                  - Соединение: {{ section.connectionType }}
                  <span v-if="section.connectionType === 'Угол'"> ({{ getSectionAngle(index) }}°) </span>
                </p>
                <p v-if="section.hasGate">- Калитка: {{ section.gateWidth }} м ({{ section.gateDirection }})</p>
                <div v-if="section.hasGates">
                  <p><strong>Ворота</strong></p>
                  <p>- Тип: {{ section.gatesType }}</p>
                  <p>- Ширина: {{ section.gatesWidth }} м</p>
                  <p v-if="section.gatesType.includes('Откатные')">- Направление отката: {{ section.gatesSlideDirection }}</p>
                  <p v-if="section.gatesType.includes('Распашные')">- Открывание ворот: {{ section.gatesSwingDirection }}</p>
                  <p v-if="section.gatesType.includes('калиткой')">- Открывание калитки: {{ section.swingDirectionGate }}</p>

                  <p>- Замок: {{ section.gatesLockType }}</p>
                  <p>- Автоматика: {{ section.gatesAutomation ? "Да" : "Нет" }}</p>
                </div>
              </div>

              <v-divider class="my-4"></v-divider>

              <h3 class="text-h6 mb-4">Монтаж и доставка</h3>
              <p><strong>Доставка:</strong> {{ installation.needsDelivery ? "Да" : "Нет" }}</p>
              <p><strong>Монтаж:</strong> {{ installation.needsInstallation ? "Да" : "Нет" }}</p>
              <p v-if="installation.needsInstallation"><strong>Желаемая дата:</strong> {{ installation.desiredDate }}</p>
              <p v-if="installation.notes"><strong>Примечания:</strong> {{ installation.notes }}</p>

              <v-divider class="my-4"></v-divider>

              <h3 class="text-h6 mb-4">Итоговая информация</h3>
              <p><strong>Общая длина забора:</strong> {{ totalLength.toFixed(2) }} м</p>
            </v-card>
            <!-- <div class="d-flex justify-center mb-8">
              <v-btn @click="clickBtn" type="submit" :size="mobile ? 'large' : 'x-large'" class="submit-btn"> Отправить заявку </v-btn>
            </div> -->
            <div class="d-flex justify-center mb-8">
              <v-btn
                @click="clickBtn"
                type="submit"
                :size="mobile ? 'large' : 'x-large'"
                class="submit-btn"
                :disabled="sendingStatus.isSending"
                :loading="sendingStatus.isSending"
              >
                <template v-slot:loader>
                  <v-progress-circular indeterminate color="white" size="24" width="3"></v-progress-circular>
                  <span class="ml-2">Отправка...</span>
                </template>
                Отправить заявку
              </v-btn>
            </div>
          </v-stepper-window-item>
        </v-stepper-window>
        <v-stepper-actions class="pb-10">
          <template #prev>
            <v-btn @click="prevStep" type="submit" class="submit-btn" :prepend-icon="mobile ? '' : 'mdi-arrow-left'"> Назад </v-btn>
          </template>
          <template #next>
            <v-btn @click="nextStep" type="submit" class="submit-btn" :append-icon="mobile ? '' : 'mdi-arrow-right'"> Далее </v-btn>
          </template>
        </v-stepper-actions>
      </v-stepper>
    </v-card>
    <v-dialog v-model="successDialog.value" max-width="400">
      <v-card>
        <v-card-title class="text-h5 bg-success text-white">Заявка отправлена</v-card-title>
        <v-card-text class="pa-4">Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success" variant="text" @click="successDialog.value = false">Закрыть</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="sendingStatus.error" color="error" timeout="5000" location="bottom right">
      {{ sendingStatus.error }}
      <template v-slot:actions>
        <v-btn variant="text" @click="sendingStatus.error = null"> Закрыть </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;
@use "sass:color";

.section-header {
  padding-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  @media (max-width: $md4) {
    margin-bottom: 20px;
    line-height: 1.2;
  }
}
.section-title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 15px 0;
  position: relative;
  display: inline-block;
  font-family: "Montserrat", sans-serif;

  .title-text {
    background: linear-gradient(90deg, #ea5b0c, #ff8c42);
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
    background: linear-gradient(90deg, #ea5b0c, #ff8c42);
    border-radius: 3px;
    transition: width 0.3s ease;
  }

  &:hover .title-decoration {
    width: 120px;
  }

  @media (max-width: $md3) {
    font-size: 2rem;
  }

  @media (max-width: $md4) {
    font-size: 2rem;
    margin-bottom: 10px;

    .title-decoration {
      width: 60px;
      height: 3px;
      bottom: -8px;
    }

    &:hover .title-decoration {
      width: 80px;
    }
  }
}

.title-text {
  background: linear-gradient(90deg, #2c3e50, #1a1a1a);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: relative;
  z-index: 2;
  /* letter-spacing: -0.03em; */
  text-transform: uppercase;
}
.submit-btn {
  background: linear-gradient(90deg, #ea5b0c, #ff8c42);
  color: white;
  transition: transform 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
}

.v-stepper {
  box-shadow: none;
}
:deep(.v-stepper-window) {
  margin: 0;
}

.fence-visualization-container {
  width: 100%;
  padding-bottom: 60%; /* Соотношение сторон 5:3 */
  position: relative;
  overflow: hidden;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
  margin-bottom: 16px;
}

.fence-visualization-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fence-visualization {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  display: block;
}

.fence-stats {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
}

.v-chip {
  font-weight: 500;
}

@media (max-width: 768px) {
  .fence-visualization-container {
    padding-bottom: 100%; /* Квадратное соотношение на мобильных */
  }

  .legend text {
    font-size: 10px !important;
  }

  .legend rect {
    width: 150px !important;
    height: 80px !important;
  }

  .fence-stats {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .fence-visualization-container {
    padding-bottom: 120%; /* Более высокое соотношение для очень узких экранов */
  }

  .legend {
    transform: scale(0.8) !important;
  }
}

.v-text-field,
.v-select {
  margin-bottom: 8px;
}

.v-card {
  transition: all 0.3s ease;
}
</style>
