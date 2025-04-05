<template>
  <v-app>
    <v-main>
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
                        <v-select
                          v-model="section.gatesType"
                          :items="gateTypes"
                          label="Тип ворот"
                          variant="outlined"
                          hide-details
                        ></v-select>
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

                    <v-select
                      v-model="section.gatesLockType"
                      :items="lockTypes"
                      label="Тип замка"
                      variant="outlined"
                      class="mb-2"
                    ></v-select>
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
              <div class="d-flex flex-wrap justify-center">
                <v-btn color="primary" variant="outlined" @click="addSection" class="mb-2">Добавить участок</v-btn>
              </div>
              <div class="d-flex justify-center">
                <v-checkbox v-model="closeFence" label="Замкнуть контур забора" class="mt-0 mb-2" density="compact"></v-checkbox>
              </div>
              <v-card class="mt-4 pa-4" variant="text">
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

                      <template v-for="(point, pointIndex) in fencePoints" :key="'section-' + pointIndex">
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
                        <!-- <text :x="point.x + 10" :y="point.y + 5" font-size="12" fill="#424242" font-weight="bold">
                          {{ pointIndex + 1 }}
                        </text> -->

                        <!-- Длины участков -->
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

                        <!-- Углы -->
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
                      </template>
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
              </v-card>
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

                <v-textarea
                  v-model="installation.notes"
                  label="Особые пожелания"
                  variant="outlined"
                  rows="2"
                  class="mt-2 mb-2"
                ></v-textarea>
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
                <p><strong>Количество углов:</strong> {{ angleCount }}</p>
                <p v-if="closeFence && fenceSections.length >= 3"><strong>Площадь участка:</strong> {{ area.toFixed(2) }} м²</p>
                <p><strong>Контур забора:</strong> {{ closeFence ? "Замкнут" : "Не замкнут" }}</p>
              </v-card>
              <div class="d-flex justify-center mb-8">
                <v-btn color="primary" variant="outlined" @click="submitForm" size="large">Отправить заявку</v-btn>
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
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const currentStep = ref(1);
const steps = ref(["Контактная информация", "Участки забора", "Монтаж и доставка", "Подтверждение"]);
const isStep1Valid = ref(false);
const successDialog = ref(false);
const closeFence = ref(false);
const fenceSvg = ref(null);

// Данные формы
const customer = ref({
  name: "",
  phone: "",
  address: "",
});

const initialSection = {
  type: "",
  length: null,
  height: 1.8,
  meshSize: "50×200 мм",
  coatingType: "Оцинковка",
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
  claddingStep: 5,
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

// Цвета RAL
const ralColors = ref([
  { title: "RAL 1000 - Зеленый бежевый", value: "1000" },
  { title: "RAL 1001 - Бежевый", value: "1001" },
  { title: "RAL 1002 - Песочный желтый", value: "1002" },
  { title: "RAL 1003 - Сигнальный желтый", value: "1003" },
  { title: "RAL 1004 - Золотисто-желтый", value: "1004" },
  { title: "RAL 1005 - Медовый желтый", value: "1005" },
  { title: "RAL 1006 - Кукурузный желтый", value: "1006" },
  { title: "RAL 1007 - Нарциссово-желтый", value: "1007" },
  { title: "RAL 1011 - Коричнево-бежевый", value: "1011" },
  { title: "RAL 1012 - Лимонно-желтый", value: "1012" },
  { title: "RAL 1013 - Жемчужно-белый", value: "1013" },
  { title: "RAL 1014 - Слоновая кость", value: "1014" },
  { title: "RAL 1015 - Светлая слоновая кость", value: "1015" },
  { title: "RAL 1017 - Шафраново-желтый", value: "1017" },
  { title: "RAL 1018 - Цинково-желтый", value: "1018" },
  { title: "RAL 1020 - Оливково-желтый", value: "1020" },
  { title: "RAL 1021 - Рапсово-желтый", value: "1021" },
  { title: "RAL 1023 - Транспортный желтый", value: "1023" },
  { title: "RAL 1024 - Охра желтая", value: "1024" },
  { title: "RAL 1026 - Люминесцентный желтый", value: "1026" },
  { title: "RAL 1027 - Куркума желтый", value: "1027" },
  { title: "RAL 1028 - Дынно-желтый", value: "1028" },
  { title: "RAL 1032 - Грушево-желтый", value: "1032" },
  { title: "RAL 1033 - Подсолнечно-желтый", value: "1033" },
  { title: "RAL 1034 - Пастельно-желтый", value: "1034" },
  { title: "RAL 1035 - Жемчужно-бежевый", value: "1035" },
  { title: "RAL 1036 - Жемчужно-золотой", value: "1036" },
  { title: "RAL 1037 - Солнечно-желтый", value: "1037" },
  { title: "RAL 2000 - Желто-оранжевый", value: "2000" },
  { title: "RAL 2001 - Красно-оранжевый", value: "2001" },
  { title: "RAL 2002 - Киноварь оранжевый", value: "2002" },
  { title: "RAL 2003 - Пастельно-оранжевый", value: "2003" },
  { title: "RAL 2004 - Чисто оранжевый", value: "2004" },
  { title: "RAL 2005 - Люминесцентный оранжевый", value: "2005" },
  { title: "RAL 2007 - Люминесцентный ярко-оранжевый", value: "2007" },
  { title: "RAL 2008 - Ярко-красно-оранжевый", value: "2008" },
  { title: "RAL 2009 - Транспортный оранжевый", value: "2009" },
  { title: "RAL 2010 - Сигнальный оранжевый", value: "2010" },
  { title: "RAL 2011 - Насыщенный оранжевый", value: "2011" },
  { title: "RAL 2012 - Лососево-оранжевый", value: "2012" },
  { title: "RAL 2013 - Жемчужно-оранжевый", value: "2013" },
  { title: "RAL 3000 - Огненно-красный", value: "3000" },
  { title: "RAL 3001 - Сигнальный красный", value: "3001" },
  { title: "RAL 3002 - Карминно-красный", value: "3002" },
  { title: "RAL 3003 - Рубиново-красный", value: "3003" },
  { title: "RAL 3004 - Пурпурно-красный", value: "3004" },
  { title: "RAL 3005 - Винно-красный", value: "3005" },
  { title: "RAL 3007 - Черно-красный", value: "3007" },
  { title: "RAL 3009 - Оксид красный", value: "3009" },
  { title: "RAL 3011 - Коричнево-красный", value: "3011" },
  { title: "RAL 3012 - Бежево-красный", value: "3012" },
  { title: "RAL 3013 - Томатно-красный", value: "3013" },
  { title: "RAL 3014 - Старо-розовый", value: "3014" },
  { title: "RAL 3015 - Светло-розовый", value: "3015" },
  { title: "RAL 3016 - Кораллово-красный", value: "3016" },
  { title: "RAL 3017 - Розовый", value: "3017" },
  { title: "RAL 3018 - Клубнично-красный", value: "3018" },
  { title: "RAL 3020 - Транспортный красный", value: "3020" },
  { title: "RAL 3022 - Лососево-красный", value: "3022" },
  { title: "RAL 3024 - Люминесцентный красный", value: "3024" },
  { title: "RAL 3026 - Люминесцентный ярко-красный", value: "3026" },
  { title: "RAL 3027 - Малиново-красный", value: "3027" },
  { title: "RAL 3028 - Чисто красный", value: "3028" },
  { title: "RAL 3031 - Ориент красный", value: "3031" },
  { title: "RAL 3032 - Жемчужно-рубиновый", value: "3032" },
  { title: "RAL 3033 - Жемчужно-розовый", value: "3033" },
  { title: "RAL 4001 - Красно-сиреневый", value: "4001" },
  { title: "RAL 4002 - Красно-фиолетовый", value: "4002" },
  { title: "RAL 4003 - Вересково-фиолетовый", value: "4003" },
  { title: "RAL 4004 - Бордово-фиолетовый", value: "4004" },
  { title: "RAL 4005 - Синий сиреневый", value: "4005" },
  { title: "RAL 4006 - Транспортный пурпурный", value: "4006" },
  { title: "RAL 4007 - Пурпурно-фиолетовый", value: "4007" },
  { title: "RAL 4008 - Сигнальный фиолетовый", value: "4008" },
  { title: "RAL 4009 - Пастельно-фиолетовый", value: "4009" },
  { title: "RAL 4010 - Телемагента", value: "4010" },
  { title: "RAL 4011 - Жемчужно-фиолетовый", value: "4011" },
  { title: "RAL 4012 - Жемчужно-ежевичный", value: "4012" },
  { title: "RAL 5000 - Фиолетово-синий", value: "5000" },
  { title: "RAL 5001 - Зелено-синий", value: "5001" },
  { title: "RAL 5002 - Ультрамариново-синий", value: "5002" },
  { title: "RAL 5003 - Сапфирово-синий", value: "5003" },
  { title: "RAL 5004 - Черно-синий", value: "5004" },
  { title: "RAL 5005 - Сигнальный синий", value: "5005" },
  { title: "RAL 5007 - Бриллиантово-синий", value: "5007" },
  { title: "RAL 5008 - Серо-синий", value: "5008" },
  { title: "RAL 5009 - Лазурно-синий", value: "5009" },
  { title: "RAL 5010 - Горечавково-синий", value: "5010" },
  { title: "RAL 5011 - Стально-синий", value: "5011" },
  { title: "RAL 5012 - Голубой", value: "5012" },
  { title: "RAL 5013 - Кобальтово-синий", value: "5013" },
  { title: "RAL 5014 - Голубино-синий", value: "5014" },
  { title: "RAL 5015 - Небесно-синий", value: "5015" },
  { title: "RAL 5017 - Транспортный синий", value: "5017" },
  { title: "RAL 5018 - Бирюзово-синий", value: "5018" },
  { title: "RAL 5019 - Капри синий", value: "5019" },
  { title: "RAL 5020 - Океанская синь", value: "5020" },
  { title: "RAL 5021 - Водная синь", value: "5021" },
  { title: "RAL 5022 - Ночной синий", value: "5022" },
  { title: "RAL 5023 - Отдаленно-синий", value: "5023" },
  { title: "RAL 5024 - Пастельно-синий", value: "5024" },
  { title: "RAL 5025 - Жемчужно-голубой", value: "5025" },
  { title: "RAL 5026 - Жемчужно-ночной синий", value: "5026" },
  { title: "RAL 6000 - Патиново-зеленый", value: "6000" },
  { title: "RAL 6001 - Изумрудно-зеленый", value: "6001" },
  { title: "RAL 6002 - Лиственно-зеленый", value: "6002" },
  { title: "RAL 6003 - Оливково-зеленый", value: "6003" },
  { title: "RAL 6004 - Сине-зеленый", value: "6004" },
  { title: "RAL 6005 - Зеленый мох", value: "6005" },
  { title: "RAL 6006 - Серо-оливковый", value: "6006" },
  { title: "RAL 6007 - Бутылочно-зеленый", value: "6007" },
  { title: "RAL 6008 - Коричнево-зеленый", value: "6008" },
  { title: "RAL 6009 - Пихтово-зеленый", value: "6009" },
  { title: "RAL 6010 - Травяно-зеленый", value: "6010" },
  { title: "RAL 6011 - Резедово-зеленый", value: "6011" },
  { title: "RAL 6012 - Черно-зеленый", value: "6012" },
  { title: "RAL 6013 - Тростниково-зеленый", value: "6013" },
  { title: "RAL 6014 - Желто-оливковый", value: "6014" },
  { title: "RAL 6015 - Черно-оливковый", value: "6015" },
  { title: "RAL 6016 - Бирюзово-зеленый", value: "6016" },
  { title: "RAL 6017 - Майский зеленый", value: "6017" },
  { title: "RAL 6018 - Желто-зеленый", value: "6018" },
  { title: "RAL 6019 - Бело-зеленый", value: "6019" },
  { title: "RAL 6020 - Хромово-зеленый", value: "6020" },
  { title: "RAL 6021 - Бледно-зеленый", value: "6021" },
  { title: "RAL 6022 - Коричнево-оливковый", value: "6022" },
  { title: "RAL 6024 - Транспортный зеленый", value: "6024" },
  { title: "RAL 6025 - Папоротниково-зеленый", value: "6025" },
  { title: "RAL 6026 - Опалово-зеленый", value: "6026" },
  { title: "RAL 6027 - Светло-зеленый", value: "6027" },
  { title: "RAL 6028 - Сосново-зеленый", value: "6028" },
  { title: "RAL 6029 - Мятно-зеленый", value: "6029" },
  { title: "RAL 6032 - Сигнальный зеленый", value: "6032" },
  { title: "RAL 6033 - Мятно-бирюзовый", value: "6033" },
  { title: "RAL 6034 - Пастельно-бирюзовый", value: "6034" },
  { title: "RAL 6035 - Жемчужно-зеленый", value: "6035" },
  { title: "RAL 6036 - Жемчужно-опаловый", value: "6036" },
  { title: "RAL 6037 - Чисто зеленый", value: "6037" },
  { title: "RAL 6038 - Люминесцентный зеленый", value: "6038" },
  { title: "RAL 7000 - Серый беличий", value: "7000" },
  { title: "RAL 7001 - Серебристо-серый", value: "7001" },
  { title: "RAL 7002 - Оливково-серый", value: "7002" },
  { title: "RAL 7003 - Серый мох", value: "7003" },
  { title: "RAL 7004 - Сигнальный серый", value: "7004" },
  { title: "RAL 7005 - Мышино-серый", value: "7005" },
  { title: "RAL 7006 - Бежево-серый", value: "7006" },
  { title: "RAL 7008 - Хаки-серый", value: "7008" },
  { title: "RAL 7009 - Зелено-серый", value: "7009" },
  { title: "RAL 7010 - Брезентово-серый", value: "7010" },
  { title: "RAL 7011 - Железно-серый", value: "7011" },
  { title: "RAL 7012 - Базальтово-серый", value: "7012" },
  { title: "RAL 7013 - Коричнево-серый", value: "7013" },
  { title: "RAL 7015 - Сланцево-серый", value: "7015" },
  { title: "RAL 7016 - Антрацитово-серый", value: "7016" },
  { title: "RAL 7021 - Черно-серый", value: "7021" },
  { title: "RAL 7022 - Умбра-серый", value: "7022" },
  { title: "RAL 7023 - Бетонно-серый", value: "7023" },
  { title: "RAL 7024 - Графитово-серый", value: "7024" },
  { title: "RAL 7026 - Гранитно-серый", value: "7026" },
  { title: "RAL 7030 - Каменно-серый", value: "7030" },
  { title: "RAL 7031 - Голубо-серый", value: "7031" },
  { title: "RAL 7032 - Галечно-серый", value: "7032" },
  { title: "RAL 7033 - Цементно-серый", value: "7033" },
  { title: "RAL 7034 - Желто-серый", value: "7034" },
  { title: "RAL 7035 - Светло-серый", value: "7035" },
  { title: "RAL 7036 - Платиново-серый", value: "7036" },
  { title: "RAL 7037 - Пыльно-серый", value: "7037" },
  { title: "RAL 7038 - Агатово-серый", value: "7038" },
  { title: "RAL 7039 - Кварцево-серый", value: "7039" },
  { title: "RAL 7040 - Серое окно", value: "7040" },
  { title: "RAL 7042 - Транспортный серый A", value: "7042" },
  { title: "RAL 7043 - Транспортный серый B", value: "7043" },
  { title: "RAL 7044 - Серый шелк", value: "7044" },
  { title: "RAL 7045 - Телегрей 1", value: "7045" },
  { title: "RAL 7046 - Телегрей 2", value: "7046" },
  { title: "RAL 7047 - Телегрей 4", value: "7047" },
  { title: "RAL 7048 - Жемчужно-мышиный", value: "7048" },
  { title: "RAL 8000 - Зелено-коричневый", value: "8000" },
  { title: "RAL 8001 - Охра коричневая", value: "8001" },
  { title: "RAL 8002 - Сигнальный коричневый", value: "8002" },
  { title: "RAL 8003 - Глиняный коричневый", value: "8003" },
  { title: "RAL 8004 - Медно-коричневый", value: "8004" },
  { title: "RAL 8007 - Оленье-коричневый", value: "8007" },
  { title: "RAL 8008 - Оливково-коричневый", value: "8008" },
  { title: "RAL 8011 - Орехово-коричневый", value: "8011" },
  { title: "RAL 8012 - Красно-коричневый", value: "8012" },
  { title: "RAL 8014 - Сепия коричневый", value: "8014" },
  { title: "RAL 8015 - Каштаново-коричневый", value: "8015" },
  { title: "RAL 8016 - Махагон коричневый", value: "8016" },
  { title: "RAL 8017 - Шоколадно-коричневый", value: "8017" },
  { title: "RAL 8019 - Серо-коричневый", value: "8019" },
  { title: "RAL 8022 - Черно-коричневый", value: "8022" },
  { title: "RAL 8023 - Оранжево-коричневый", value: "8023" },
  { title: "RAL 8024 - Бежево-коричневый", value: "8024" },
  { title: "RAL 8025 - Бледно-коричневый", value: "8025" },
  { title: "RAL 8028 - Терракота", value: "8028" },
  { title: "RAL 8029 - Жемчужно-медный", value: "8029" },
  { title: "RAL 9001 - Кремовый", value: "9001" },
  { title: "RAL 9002 - Светло-серый", value: "9002" },
  { title: "RAL 9003 - Сигнальный белый", value: "9003" },
  { title: "RAL 9004 - Сигнальный черный", value: "9004" },
  { title: "RAL 9005 - Черный", value: "9005" },
  { title: "RAL 9006 - Белый алюминий", value: "9006" },
  { title: "RAL 9007 - Серый алюминий", value: "9007" },
  { title: "RAL 9010 - Белый", value: "9010" },
  { title: "RAL 9011 - Черный графит", value: "9011" },
  { title: "RAL 9016 - Транспортный белый", value: "9016" },
  { title: "RAL 9017 - Транспортный черный", value: "9017" },
  { title: "RAL 9018 - Папирусно-белый", value: "9018" },
  { title: "RAL 9022 - Жемчужно-светло-серый", value: "9022" },
  { title: "RAL 9023 - Жемчужно-темно-серый", value: "9023" },
]);

const ralColorMap = {
  1000: { color: "#CDBA96" },
  1001: { color: "#D0B084" },
  1002: { color: "#D2AA6D" },
  1003: { color: "#F9A800" },
  1004: { color: "#E49E00" },
  1005: { color: "#CB8E00" },
  1006: { color: "#E29000" },
  1007: { color: "#E88C00" },
  1011: { color: "#AF804F" },
  1012: { color: "#DDAF27" },
  1013: { color: "#E3D9C6" },
  1014: { color: "#DDC49A" },
  1015: { color: "#E6D2B5" },
  1017: { color: "#F5A300" },
  1018: { color: "#F8B700" },
  1020: { color: "#9E9764" },
  1021: { color: "#999950" },
  1023: { color: "#F6A600" },
  1024: { color: "#BBA14F" },
  1026: { color: "#FFFF00" },
  1027: { color: "#A38C15" },
  1028: { color: "#FFAB00" },
  1032: { color: "#DDB20F" },
  1033: { color: "#FAAB21" },
  1034: { color: "#EDAB56" },
  1035: { color: "#A29985" },
  1036: { color: "#927549" },
  1037: { color: "#EEA205" },
  2000: { color: "#DD7907" },
  2001: { color: "#BE4E24" },
  2002: { color: "#C63927" },
  2003: { color: "#FA842B" },
  2004: { color: "#E75B12" },
  2005: { color: "#FF2301" },
  2007: { color: "#FFA421" },
  2008: { color: "#F44611" },
  2009: { color: "#FF420E" },
  2010: { color: "#FF6B1A" },
  2011: { color: "#F75E25" },
  2012: { color: "#E55137" },
  2013: { color: "#E04E39" },
  3000: { color: "#AB2524" },
  3001: { color: "#A02128" },
  3002: { color: "#A1232B" },
  3003: { color: "#8D1D2C" },
  3004: { color: "#701F29" },
  3005: { color: "#5E2028" },
  3007: { color: "#402225" },
  3009: { color: "#703731" },
  3011: { color: "#7E292C" },
  3012: { color: "#CB8D73" },
  3013: { color: "#9C322E" },
  3014: { color: "#D47479" },
  3015: { color: "#E1A6AD" },
  3016: { color: "#AC4034" },
  3017: { color: "#D3545F" },
  3018: { color: "#D14152" },
  3020: { color: "#C1121C" },
  3022: { color: "#D56D56" },
  3024: { color: "#F70000" },
  3026: { color: "#FF0000" },
  3027: { color: "#B42041" },
  3028: { color: "#CB3234" },
  3031: { color: "#B32428" },
  3032: { color: "#721422" },
  3033: { color: "#B44C43" },
  4001: { color: "#6D3F5B" },
  4002: { color: "#922B4E" },
  4003: { color: "#DE4C8A" },
  4004: { color: "#641C34" },
  4005: { color: "#6C4675" },
  4006: { color: "#A03472" },
  4007: { color: "#4A192C" },
  4008: { color: "#924E7D" },
  4009: { color: "#A18594" },
  4010: { color: "#CF3476" },
  4011: { color: "#8673A1" },
  4012: { color: "#6C6874" },
  5000: { color: "#354D73" },
  5001: { color: "#1F3438" },
  5002: { color: "#20214F" },
  5003: { color: "#1D1E33" },
  5004: { color: "#18171C" },
  5005: { color: "#1E2460" },
  5007: { color: "#3E5F8A" },
  5008: { color: "#26252D" },
  5009: { color: "#025669" },
  5010: { color: "#0E294B" },
  5011: { color: "#231A24" },
  5012: { color: "#3B83BD" },
  5013: { color: "#1E213D" },
  5014: { color: "#606E8C" },
  5015: { color: "#2271B3" },
  5017: { color: "#063971" },
  5018: { color: "#3F888F" },
  5019: { color: "#1B5583" },
  5020: { color: "#1D334A" },
  5021: { color: "#256D7B" },
  5022: { color: "#252850" },
  5023: { color: "#49678D" },
  5024: { color: "#5D9B9B" },
  5025: { color: "#2A6478" },
  5026: { color: "#102C54" },
  6000: { color: "#316650" },
  6001: { color: "#287233" },
  6002: { color: "#2D572C" },
  6003: { color: "#424632" },
  6004: { color: "#1F3A3D" },
  6005: { color: "#2F4538" },
  6006: { color: "#3E3B32" },
  6007: { color: "#343B29" },
  6008: { color: "#39352A" },
  6009: { color: "#31372B" },
  6010: { color: "#35682D" },
  6011: { color: "#587246" },
  6012: { color: "#343E40" },
  6013: { color: "#6C7156" },
  6014: { color: "#47402E" },
  6015: { color: "#3B3C36" },
  6016: { color: "#1E5945" },
  6017: { color: "#4C9141" },
  6018: { color: "#57A639" },
  6019: { color: "#BDECB6" },
  6020: { color: "#2E3A23" },
  6021: { color: "#89AC76" },
  6022: { color: "#25221B" },
  6024: { color: "#308446" },
  6025: { color: "#3D642D" },
  6026: { color: "#015D52" },
  6027: { color: "#84C3BE" },
  6028: { color: "#2C5545" },
  6029: { color: "#20603D" },
  6032: { color: "#317F43" },
  6033: { color: "#497E76" },
  6034: { color: "#7FB5B5" },
  6035: { color: "#1C542D" },
  6036: { color: "#193737" },
  6037: { color: "#008F39" },
  6038: { color: "#00BB2D" },
  7000: { color: "#78858B" },
  7001: { color: "#8A9597" },
  7002: { color: "#7E7B52" },
  7003: { color: "#6C7059" },
  7004: { color: "#969992" },
  7005: { color: "#646B63" },
  7006: { color: "#6D6552" },
  7008: { color: "#6A5F31" },
  7009: { color: "#4D5645" },
  7010: { color: "#4C514A" },
  7011: { color: "#434B4D" },
  7012: { color: "#4E5754" },
  7013: { color: "#464531" },
  7015: { color: "#434750" },
  7016: { color: "#293133" },
  7021: { color: "#23282B" },
  7022: { color: "#332F2C" },
  7023: { color: "#686C5E" },
  7024: { color: "#474A51" },
  7026: { color: "#2F353B" },
  7030: { color: "#8B8C7A" },
  7031: { color: "#474B4E" },
  7032: { color: "#B8B799" },
  7033: { color: "#7D8471" },
  7034: { color: "#8F8B66" },
  7035: { color: "#C5C7C4" },
  7036: { color: "#7F7679" },
  7037: { color: "#7D7F7D" },
  7038: { color: "#B5B8B1" },
  7039: { color: "#6C6960" },
  7040: { color: "#9DA1AA" },
  7042: { color: "#8D948D" },
  7043: { color: "#4E5452" },
  7044: { color: "#CAC4B0" },
  7045: { color: "#909090" },
  7046: { color: "#82898F" },
  7047: { color: "#D7D7D7" },
  7048: { color: "#898176" },
  8000: { color: "#826C34" },
  8001: { color: "#955F20" },
  8002: { color: "#6C3B2A" },
  8003: { color: "#734222" },
  8004: { color: "#8E402A" },
  8007: { color: "#59351F" },
  8008: { color: "#6F4F28" },
  8011: { color: "#5B3A29" },
  8012: { color: "#592321" },
  8014: { color: "#382C1E" },
  8015: { color: "#633A34" },
  8016: { color: "#4C2F27" },
  8017: { color: "#45322E" },
  8019: { color: "#403A3A" },
  8022: { color: "#212121" },
  8023: { color: "#A65E2E" },
  8024: { color: "#79553D" },
  8025: { color: "#755C48" },
  8028: { color: "#9C6B30" },
  8029: { color: "#7B5141" },
  9001: { color: "#E9E0D2" },
  9002: { color: "#D7D5CB" },
  9003: { color: "#ECECE7" },
  9004: { color: "#2B2B2C" },
  9005: { color: "#0E0E10" },
  9006: { color: "#A1A1A0" },
  9007: { color: "#878581" },
  9010: { color: "#F1ECE1" },
  9011: { color: "#27292B" },
  9016: { color: "#F1F0EA" },
  9017: { color: "#2A292A" },
  9018: { color: "#CFD3CD" },
  9022: { color: "#9C9C9C" },
  9023: { color: "#7E8182" },
};

// Цвета порошкового покрытия
const powderColors = ref([
  { title: "Белый", value: "white" },
  { title: "Черный", value: "black" },
  { title: "Коричневый", value: "brown" },
  { title: "Серый", value: "gray" },
  { title: "Красный", value: "red" },
  { title: "Зеленый", value: "green" },
  { title: "Синий", value: "blue" },
]);

const powderColorMap = {
  white: { color: "#ffffff" },
  black: { color: "#000000" },
  brown: { color: "#964B00" },
  gray: { color: "#808080" },
  red: { color: "#FF0000" },
  green: { color: "#00FF00" },
  blue: { color: "#0000FF" },
};

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

onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize();
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

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

.v-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
}
</style>
