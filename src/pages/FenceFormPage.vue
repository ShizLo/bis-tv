<script setup>
import { ref, computed, onMounted, onUnmounted, reactive } from "vue";
import { ralColorMap, ralColors, powderColors, powderColorMap } from "../data/ralColors";
import { sendTextMessage } from "../services/botService";

const currentStep = ref(1);
const steps = ref(["Контактная информация", "Участки забора", "Монтаж и доставка", "Подтверждение"]);
const isStep1Valid = ref(false);
const successDialog = ref(false);
const closeFence = ref(false);
const fenceSvg = ref(null);

// Данные формы
const customer = reactive({
  name: "",
  phone: "",
  address: "",
});

const initialSection = {
  type: "Штакетник металлический",
  length: null,
  height: 1.8,
  meshSize: "50×200 мм",
  coatingType: "Полимерное (RAL)",
  ralColor: null,
  powderColor: null,
  boardWidth: 100,
  gap: 2,
  hasGate: false,
  gateWidth: 1,
  gateDirection: "На улицу",
  hasGates: false,
  gatesType: "Откатные",
  gatesWidth: 4,
  gatesSlideDirection: "Влево",
  gatesSwingDirection: "На улицу",
  gatesLockType: "Встроенный",
  gatesAutomation: false,
  connectionType: "Прямое",
  angleType: "Прямой (90°)",
  angle: 90,
  claddingType: "Односторонняя",
  claddingStep: 6,
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
const coatingTypes = ref(["Оцинковка", "Полимерное (RAL)", "Порошковое", "Без покрытия"]);
const gateTypes = ref(["Откатные", "Распашные"]);
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

// Вычисляемые свойства для схемы забора
const fencePoints = computed(() => {
  const points = [{ x: 100, y: 150 }]; // Начальная точка
  let angle = 0; // Начальный угол (горизонтально вправо)

  fenceSections.value.forEach((section, index) => {
    if (index === 0) {
      // Для первого участка просто добавляем длину
      const length = (section.length || 0) * 5; // Масштабируем для SVG
      points.push({ x: points[0].x + length, y: points[0].y });
      return;
    }

    const prevPoint = points[points.length - 1];
    const length = (section.length || 0) * 5; // Масштабируем для SVG

    if (section.connectionType === "Угол") {
      // Определяем угол поворота
      let turnAngle = 0;
      switch (section.angleType) {
        case "Прямой (90°)":
          turnAngle = 90;
          break;
        case "Острый (45°)":
          turnAngle = 45;
          break;
        case "Тупой (135°)":
          turnAngle = 135;
          break;
        default:
          turnAngle = section.angle || 0;
      }

      // Изменяем угол на указанное значение (переводим в радианы)
      angle += (turnAngle * Math.PI) / 180;
    }

    // Рассчитываем новую точку
    const newX = prevPoint.x + length * Math.cos(angle);
    const newY = prevPoint.y + length * Math.sin(angle);

    points.push({ x: newX, y: newY });
  });

  // Если нужно замкнуть контур
  if (closeFence.value && fenceSections.value.length >= 3) {
    points.push({ ...points[0] }); // Добавляем первую точку в конец для замыкания
  }

  return points;
});

const fencePath = computed(() => {
  if (fencePoints.value.length < 2) return "";

  let path = `M ${fencePoints.value[0].x} ${fencePoints.value[0].y}`;
  for (let i = 1; i < fencePoints.value.length; i++) {
    path += ` L ${fencePoints.value[i].x} ${fencePoints.value[i].y}`;
  }

  return path;
});

// Расчет области просмотра SVG для автоматического масштабирования
const svgViewBox = computed(() => {
  if (fencePoints.value.length === 0) return "0 0 500 300";

  let minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity;

  fencePoints.value.forEach((point) => {
    minX = Math.min(minX, point.x);
    minY = Math.min(minY, point.y);
    maxX = Math.max(maxX, point.x);
    maxY = Math.max(maxY, point.y);
  });

  // Добавляем отступы
  const padding = 50;
  minX -= padding;
  minY -= padding;
  maxX += padding;
  maxY += padding;

  // Обеспечиваем минимальные размеры
  const width = Math.max(maxX - minX, 200);
  const height = Math.max(maxY - minY, 200);

  return `${minX} ${minY} ${width} ${height}`;
});

const centerX = computed(() => {
  const [minX, minY, width, height] = svgViewBox.value.split(" ").map(Number);
  return width / 2;
});

const centerY = computed(() => {
  const [minX, minY, width, height] = svgViewBox.value.split(" ").map(Number);
  return height / 2;
});

const legendX = computed(() => {
  const [minX, minY, width, height] = svgViewBox.value.split(" ").map(Number);
  return width - 190; // 180px ширина + 10px отступ
});

const legendY = computed(() => {
  const [minX, minY, width, height] = svgViewBox.value.split(" ").map(Number);
  return height - 100; // 90px высота + 10px отступ
});

const totalLength = computed(() => {
  return fenceSections.value.reduce((sum, section) => sum + (section.length || 0), 0);
});

const angleCount = computed(() => {
  return fenceSections.value.filter((section) => section.connectionType === "Угол" && section.length > 0).length;
});

// Расчет площади методом Гаусса (Shoelace formula)
const area = computed(() => {
  if (!closeFence.value || fencePoints.value.length < 4) return 0;

  const points = fencePoints.value.slice(0, -1); // Убираем последнюю точку (она дублирует первую)

  let sum = 0;
  for (let i = 0; i < points.length; i++) {
    const j = (i + 1) % points.length;
    sum += points[i].x * points[j].y - points[j].x * points[i].y;
  }

  return Math.abs(sum) / 2 / 25; // Деление на 25 (5*5) для масштабирования из SVG координат
});

// Методы
const nextStep = () => {
  if (currentStep.value < steps.value.length) {
    currentStep.value++;
  }
};

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
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

// Генерация дуги для отображения угла
const getAngleArc = (index) => {
  if (index < 1 || index >= fencePoints.value.length - 1) return "";

  const prevPoint = fencePoints.value[index - 1];
  const currPoint = fencePoints.value[index];
  const nextPoint = fencePoints.value[index + 1];

  // Векторы до и после угла
  const v1 = { x: prevPoint.x - currPoint.x, y: prevPoint.y - currPoint.y };
  const v2 = { x: nextPoint.x - currPoint.x, y: nextPoint.y - currPoint.y };

  // Нормализация векторов
  const len1 = Math.sqrt(v1.x * v1.x + v1.y * v1.y);
  const len2 = Math.sqrt(v2.x * v2.x + v2.y * v2.y);
  const n1 = { x: v1.x / len1, y: v1.y / len1 };
  const n2 = { x: v2.x / len2, y: v2.y / len2 };

  // Угол между векторами
  const angle = Math.acos(n1.x * n2.x + n1.y * n2.y) * (180 / Math.PI);

  // Начальный угол для дуги
  const startAngle = Math.atan2(n1.y, n1.x) * (180 / Math.PI);

  // Радиус дуги
  const radius = 20;

  // Координаты для дуги
  const x1 = currPoint.x + radius * Math.cos((startAngle * Math.PI) / 180);
  const y1 = currPoint.y + radius * Math.sin((startAngle * Math.PI) / 180);
  const x2 = currPoint.x + radius * Math.cos(((startAngle + angle) * Math.PI) / 180);
  const y2 = currPoint.y + radius * Math.sin(((startAngle + angle) * Math.PI) / 180);

  // Флаг для large-arc-flag (1 если угол больше 180)
  const largeArcFlag = angle > 180 ? 1 : 0;

  return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`;
};

const submitForm = () => {
  console.log("Форма отправлена:", {
    customer: customer.value,
    fenceSections: fenceSections.value,
    installation: installation.value,
    totalLength: totalLength.value,
    angleCount: angleCount.value,
    area: area.value,
    closeFence: closeFence.value,
  });

  successDialog.value = true;
};

const resetForm = () => {
  customer.value = { name: "", phone: "", address: "" };
  fenceSections.value = [{ ...initialSection }];
  installation.value = {
    needsDelivery: true,
    needsInstallation: true,
    desiredDate: "",
    notes: "",
  };
  closeFence.value = false;
  currentStep.value = 1;
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

const message = computed(() => ({
  chat_id: 4294967414,
  text: `
👨🏻 Заявка на забор
${customer.name != "" || customer.phone != "" || customer.address != "" ? `[line]` : ""}
${customer.name != "" ? `ФИО: ${customer.name}` : ""}
${customer.phone != "" ? `Номер телефона: ${customer.phone}` : ""}
${customer.address != "" ? `Адрес: ${customer.address}` : ""}
`,
}));

function clickBtn() {
  console.log(fenceSections.value[0].type);
  sendTextMessage(message.value);
}

onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize();
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <v-container class="py-4 py-md-8">
    <v-card class="mx-auto" max-width="1000" elevation="4">
      <v-card-title class="text-h5 text-black pa-4 ml-4">Конфигуратор забора</v-card-title>
      <v-stepper editable v-model="currentStep" :items="steps" hide-actions>
        <template v-slot:item.1>
          <v-card variant="text" class="pa-4 pa-md-6">
            <v-form class="pt-4" v-model="isStep1Valid" @submit.prevent="nextStep">
              <v-text-field v-model="customer.name" label="ФИО" variant="outlined" class="mb-2"></v-text-field>
              <v-text-field v-model="customer.phone" label="Телефон" variant="outlined" class="mb-2"></v-text-field>
              <v-text-field v-model="customer.address" label="Адрес установки" variant="outlined" class="mb-2"></v-text-field>
            </v-form>
          </v-card>
        </template>

        <template v-slot:item.2>
          <div v-for="(section, index) in fenceSections" :key="index" class="mb-6">
            <v-card variant="text" class="pa-4 pa-md-6">
              <div class="d-flex justify-space-between align-center mb-2">
                <h3 class="text-h6 mb-2 pl-2">Участок {{ index + 1 }}</h3>
                <v-btn v-if="fenceSections.length > 1" variant="text" icon color="error" @click="removeSection(index)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </div>

              <v-row>
                <v-col cols="12" md="6" class="pb-0">
                  <v-select v-model="section.type" :items="fenceTypes" label="Тип забора" variant="outlined" hide-details></v-select>
                </v-col>
                <v-col cols="6" md="3" class="pb-0">
                  <v-text-field
                    v-model.number="section.length"
                    label="Длина (м)"
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    variant="outlined"
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col cols="6" md="3" class="pb-0">
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
                <v-col cols="12" md="6" class="pb-0">
                  <v-select
                    hide-details
                    v-model="section.coatingType"
                    :items="coatingTypes"
                    label="Тип покрытия"
                    variant="outlined"
                    class="mb-6"
                  ></v-select>
                </v-col>
                <v-col cols="12" md="6" v-if="section.coatingType === 'Полимерное (RAL)'">
                  <v-select
                    v-model="section.ralColor"
                    :items="ralColors"
                    label="Цвет RAL"
                    variant="outlined"
                    hide-details
                    @update:modelValue="updateRalColor(section)"
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
                <v-col cols="12" md="6" v-if="section.coatingType === 'Порошковое'">
                  <v-select
                    v-model="section.powderColor"
                    :items="powderColors"
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
                              backgroundColor: powderColorMap[item.value]?.color || '#fff',
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
                            backgroundColor: powderColorMap[item.value]?.color || '#fff',
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

              <v-checkbox
                hide-details
                v-model="section.hasGate"
                label="Калитка на этом участке"
                class="mt-0 mb-2"
                density="compact"
              ></v-checkbox>

              <div v-if="section.hasGate">
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      v-model.number="section.gateWidth"
                      label="Ширина калитки (м)"
                      type="number"
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
                class="mt-0 mb-2"
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
                      hide-details
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row v-if="section.gatesType === 'Откатные'">
                  <v-col cols="6">
                    <v-select
                      v-model="section.gatesSlideDirection"
                      :items="slideDirections"
                      label="Направление отката"
                      variant="outlined"
                    ></v-select>
                  </v-col>
                </v-row>

                <v-row v-else class="mb-2">
                  <v-col cols="6">
                    <v-select
                      v-model="section.gatesSwingDirection"
                      :items="swingDirections"
                      label="Направление открывания"
                      variant="outlined"
                    ></v-select>
                  </v-col>
                </v-row>

                <v-select v-model="section.gatesLockType" :items="lockTypes" label="Тип замка" variant="outlined" class="mb-2"></v-select>
                <v-checkbox
                  v-model="section.gatesAutomation"
                  label="Нужна автоматика для ворот"
                  class="mt-0"
                  density="compact"
                  hide-details
                ></v-checkbox>
              </div>
            </v-card>
            <v-divider class="border-opacity-100"></v-divider>
          </div>
          <div class="d-flex flex-wrap mb-4 justify-center">
            <v-btn color="primary" variant="outlined" @click="addSection" class="mb-2">Добавить участок</v-btn>
          </div>
          <!-- <div class="d-flex justify-center">
                <v-checkbox v-model="closeFence" label="Замкнуть контур забора" class="mt-0 mb-2" density="compact"></v-checkbox>
              </div> -->
          <!-- <v-card class="mt-4 pa-4" variant="text">
                <h3 class="text-h6 mb-4">Схема забора</h3>
                <div class="fence-visualization-container">
                  <div class="fence-visualization-wrapper">
                    <svg ref="fenceSvg" class="fence-visualization" :viewBox="svgViewBox" preserveAspectRatio="xMidYMid meet">
                      <defs>
                        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#e0e0e0" stroke-width="0.5" />
                        </pattern>
                      </defs>
                      <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" opacity="0.5" />

                      <path :d="fencePath" fill="none" stroke="#1976D2" stroke-width="4" stroke-linejoin="round" />

                      <line v-for="(point, pointIndex) in fencePoints" :key="'section-' + pointIndex">
                        <line
                          v-if="pointIndex < fencePoints.length - 1"
                          :x1="point.x"
                          :y1="point.y"
                          :x2="fencePoints[pointIndex + 1].x"
                          :y2="fencePoints[pointIndex + 1].y"
                          stroke="#424242"
                          stroke-width="8"
                          stroke-linecap="round"
                          stroke-opacity="0.2"
                        />
                        <line
                          v-if="pointIndex < fencePoints.length - 1"
                          :x1="point.x"
                          :y1="point.y"
                          :x2="fencePoints[pointIndex + 1].x"
                          :y2="fencePoints[pointIndex + 1].y"
                          stroke="#1976D2"
                          stroke-width="3"
                          stroke-linecap="round"
                        />

                        <circle :cx="point.x" :cy="point.y" r="6" fill="#1976D2" stroke="#FFF" stroke-width="2" />
                        <text
                          v-if="pointIndex < fencePoints.length - 1 && fenceSections[pointIndex]"
                          :x="(point.x + fencePoints[pointIndex + 1].x) / 2"
                          :y="(point.y + fencePoints[pointIndex + 1].y) / 2 - 15"
                          font-size="11"
                          fill="#4CAF50"
                          text-anchor="middle"
                          font-weight="bold"
                        >
                          {{ fenceSections[pointIndex].length }} м
                        </text>
                        <g
                          v-if="
                            pointIndex > 0 && pointIndex < fencePoints.length - 1 && fenceSections[pointIndex].connectionType === 'Угол'
                          "
                        >
                          <path :d="getAngleArc(pointIndex)" fill="none" stroke="#FF9800" stroke-width="2" stroke-dasharray="3,2" />
                          <circle :cx="point.x" :cy="point.y" r="4" fill="#FF9800" />
                          <text
                            :x="point.x + (getSectionAngle(pointIndex) > 90 ? -30 : 30)"
                            :y="point.y - 15"
                            font-size="12"
                            fill="#FF9800"
                            text-anchor="middle"
                            font-weight="bold"
                          >
                            {{ getSectionAngle(pointIndex) }}°
                          </text>
                        </g>
                      </line>
                    </svg>
                  </div>
                </div>
                <div class="fence-stats">
                  <v-chip class="ma-1" color="primary" variant="outlined">
                    <v-icon start>mdi-ruler</v-icon>
                    Общая длина: {{ totalLength.toFixed(2) }} м
                  </v-chip>
                  <v-chip class="ma-1" color="orange" variant="outlined">
                    <v-icon start>mdi-angle-acute</v-icon>
                    Углы: {{ angleCount }}
                  </v-chip>
                  <v-chip v-if="closeFence && fenceSections.length >= 3" class="ma-1" color="green" variant="outlined">
                    <v-icon start>mdi-grid</v-icon>
                    Площадь: {{ area.toFixed(2) }} м²
                  </v-chip>
                </div>
              </v-card> -->
        </template>

        <template v-slot:item.3>
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
        </template>

        <template v-slot:item.4>
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
                <p>- Ворота:</p>
                <p>- Тип: {{ section.gatesType }}</p>
                <p>- Ширина: {{ section.gatesWidth }} м</p>
                <p v-if="section.gatesType === 'Откатные'">- Направление: {{ section.gatesSlideDirection }}</p>
                <p v-else>- Открывание: {{ section.gatesSwingDirection }}</p>
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
            <!-- <p><strong>Количество углов:</strong> {{ angleCount }}</p>
            <p v-if="closeFence && fenceSections.length >= 3"><strong>Площадь участка:</strong> {{ area.toFixed(2) }} м²</p> -->
            <!-- <p><strong>Контур забора:</strong> {{ closeFence ? "Замкнут" : "Не замкнут" }}</p> -->
          </v-card>
          <div class="d-flex justify-center mb-8">
            <v-btn color="primary" variant="outlined" @click="clickBtn" size="large">Отправить заявку</v-btn>
          </div>
        </template>
      </v-stepper>
    </v-card>
    <v-dialog v-model="successDialog" max-width="400">
      <v-card>
        <v-card-title class="text-h5 bg-success text-white">Успешно!</v-card-title>
        <v-card-text class="pa-4">Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success" variant="text" @click="successDialog = false">Закрыть</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<style scoped>
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
