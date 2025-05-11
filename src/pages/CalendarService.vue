<template>
  <v-card class="service-calendar mx-auto" max-width="600" elevation="5">
    <v-card-title class="d-flex justify-space-between align-center py-6 bg-primary">
      <h2 class="text-h5 font-weight-bold text-white">График технического обслуживания</h2>
      <v-btn icon @click="showHelpDialog" color="white" variant="text">
        <v-icon>mdi-help-circle</v-icon>
      </v-btn>
    </v-card-title>

    <v-tabs v-model="currentTab" grow>
      <v-tab value="calendar">Календарь ТО</v-tab>
      <v-tab value="calls">График обзвона</v-tab>
    </v-tabs>

    <v-card-text class="pa-0">
      <!-- Календарь ТО -->
      <v-window v-model="currentTab">
        <v-window-item value="calendar">
          <v-toolbar density="comfortable" color="surface">
            <v-btn icon variant="text" @click="prevMonth">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>

            <v-toolbar-title class="text-h6 font-weight-medium"> {{ currentMonthName }} {{ currentYear }} </v-toolbar-title>

            <v-btn icon variant="text" @click="nextMonth">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn color="primary" variant="tonal" prepend-icon="mdi-calendar-today" @click="goToToday"> Сегодня </v-btn>
          </v-toolbar>

          <v-sheet class="calendar-grid" elevation="1">
            <div class="weekdays">
              <div v-for="day in weekDays" :key="day" class="weekday">
                {{ day }}
              </div>
            </div>

            <div class="days">
              <div
                v-for="day in calendarDays"
                :key="day.date"
                :class="[
                  'day',
                  {
                    'other-month': !day.isCurrentMonth,
                    today: day.isToday,
                    'service-day': day.isServiceDay,
                    past: day.isPast,
                    selected: selectedDay && selectedDay.date === day.date,
                  },
                ]"
                @click="selectDay(day)"
              >
                <div class="day-number">{{ day.dayNumber }}</div>
                <div v-if="day.isServiceDay" class="service-indicator"></div>
                <div v-if="day.events.length > 0" class="event-count">
                  {{ day.events.length }}
                </div>
              </div>
            </div>
          </v-sheet>

          <v-expand-transition>
            <v-card v-if="selectedDay" class="day-events mx-4 mb-4" :class="{ 'has-events': selectedDay.events.length > 0 }" elevation="3">
              <v-card-title class="d-flex justify-space-between align-center bg-surface">
                <h3 class="text-h6">Техническое обслуживание {{ selectedDay.fullDate }}</h3>
                <v-btn icon variant="text" @click="selectedDay = null" size="small">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-card-title>

              <v-card-text>
                <v-list v-if="selectedDay.events.length > 0" lines="two">
                  <v-list-item v-for="(event, index) in selectedDay.events" :key="index" :title="event.title" :subtitle="event.description">
                    <template v-slot:prepend>
                      <v-icon icon="mdi-clock-outline" class="me-4" :color="event.time < '12:00' ? 'primary' : 'orange'"></v-icon>
                    </template>

                    <template v-slot:append>
                      <v-chip variant="outlined" size="small" class="mr-2">
                        {{ event.time }}
                      </v-chip>
                    </template>

                    <v-list-item-subtitle v-if="event.address" class="mt-2">
                      <v-icon icon="mdi-map-marker" size="small" class="me-1"></v-icon>
                      {{ event.address }}
                    </v-list-item-subtitle>
                  </v-list-item>
                </v-list>

                <v-alert v-else type="info" variant="tonal" class="my-4"> На этот день не запланировано техническое обслуживание </v-alert>
              </v-card-text>
            </v-card>
          </v-expand-transition>
        </v-window-item>

        <!-- График обзвона -->
        <v-window-item value="calls">
          <v-toolbar density="comfortable" color="surface">
            <v-btn icon variant="text" @click="prevCallMonth">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>

            <v-toolbar-title class="text-h6 font-weight-medium"> {{ callMonthName }} {{ callYear }} </v-toolbar-title>

            <v-btn icon variant="text" @click="nextCallMonth">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn color="primary" variant="tonal" prepend-icon="mdi-calendar-today" @click="goToCallToday"> Текущий месяц </v-btn>
          </v-toolbar>

          <v-card class="mx-4 my-4" elevation="2">
            <v-card-text>
              <v-progress-linear v-if="loadingCalls" indeterminate color="primary"></v-progress-linear>

              <v-list v-if="callClients.length > 0">
                <v-list-item v-for="client in callClients" :key="client.id" class="mb-2">
                  <template v-slot:prepend>
                    <v-icon icon="mdi-account" class="me-4"></v-icon>
                  </template>

                  <v-list-item-title>{{ client.name }}</v-list-item-title>
                  <v-list-item-subtitle>
                    <v-icon icon="mdi-phone" size="small" class="me-1"></v-icon>
                    {{ client.phone }}
                  </v-list-item-subtitle>

                  <template v-slot:append>
                    <div class="d-flex flex-column">
                      <v-btn color="green" variant="tonal" size="small" class="mb-1" @click="confirmService(client)"> Подтвердил ТО </v-btn>
                      <v-btn color="orange" variant="tonal" size="small" @click="postponeService(client)"> Перенести на 6 мес. </v-btn>
                    </div>
                  </template>
                </v-list-item>
              </v-list>

              <v-alert v-else type="info" variant="tonal"> Нет клиентов для обзвона в этом месяце </v-alert>
            </v-card-text>
          </v-card>

          <v-card class="mx-4 mb-4" elevation="2">
            <v-card-title class="bg-surface">
              <h3 class="text-h6">Статистика обзвона</h3>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-card color="green-lighten-5" variant="flat">
                    <v-card-text class="text-center">
                      <div class="text-h5">{{ confirmedCount }}</div>
                      <div>Подтверждено</div>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="6">
                  <v-card color="orange-lighten-5" variant="flat">
                    <v-card-text class="text-center">
                      <div class="text-h5">{{ postponedCount }}</div>
                      <div>Перенесено</div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </v-card-text>

    <!-- Диалог подтверждения ТО -->
    <v-dialog v-model="confirmDialog" max-width="500">
      <v-card>
        <v-card-title>Подтверждение ТО</v-card-title>
        <v-card-text>
          <v-form v-model="validConfirmForm">
            <v-text-field v-model="serviceDate" label="Дата ТО" type="date" :rules="[(v) => !!v || 'Укажите дату']" required></v-text-field>

            <v-text-field
              v-model="serviceTime"
              label="Время ТО"
              type="time"
              :rules="[(v) => !!v || 'Укажите время']"
              required
            ></v-text-field>

            <v-textarea v-model="serviceNotes" label="Примечания" rows="2"></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" variant="text" @click="confirmDialog = false">Отмена</v-btn>
          <v-btn color="primary" variant="tonal" @click="saveConfirmedService" :disabled="!validConfirmForm">Сохранить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="loading" persistent width="auto">
      <v-card color="primary" class="pa-4">
        <v-card-text class="text-center">
          Загрузка данных...
          <v-progress-circular indeterminate color="white" class="mt-4"></v-progress-circular>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="helpDialog" max-width="500">
      <v-card>
        <v-card-title class="text-h6">Помощь по календарю</v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon icon="mdi-circle" color="primary" class="me-4"></v-icon>
              </template>
              <v-list-item-title>Синие точки - дни с ТО</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon icon="mdi-calendar" color="red" class="me-4"></v-icon>
              </template>
              <v-list-item-title>Красная рамка - сегодняшний день</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon icon="mdi-calendar-blank" color="grey" class="me-4"></v-icon>
              </template>
              <v-list-item-title>Серые дни - из других месяцев</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" variant="text" @click="helpDialog = false">Закрыть</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import { ref, computed, onMounted } from "vue";

export default {
  setup() {
    const currentDate = ref(new Date());
    const callCurrentDate = ref(new Date());
    const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    const calendarDays = ref([]);
    const serviceDates = ref([]);
    const selectedDay = ref(null);
    const loading = ref(false);
    const loadingCalls = ref(false);
    const helpDialog = ref(false);
    const currentTab = ref("calendar");
    const callClients = ref([]);
    const confirmDialog = ref(false);
    const currentClient = ref(null);
    const serviceDate = ref("");
    const serviceTime = ref("");
    const serviceNotes = ref("");
    const validConfirmForm = ref(false);

    const apiEndpoint = "https://your-api-endpoint.com/service-dates";
    const callsApiEndpoint = "https://your-api-endpoint.com/call-schedule";

    const currentMonthName = computed(() => {
      return currentDate.value.toLocaleString("ru-RU", { month: "long" });
    });

    const currentYear = computed(() => {
      return currentDate.value.getFullYear();
    });

    const callMonthName = computed(() => {
      return callCurrentDate.value.toLocaleString("ru-RU", { month: "long" });
    });

    const callYear = computed(() => {
      return callCurrentDate.value.getFullYear();
    });

    const confirmedCount = computed(() => {
      return callClients.value.filter((c) => c.status === "confirmed").length;
    });

    const postponedCount = computed(() => {
      return callClients.value.filter((c) => c.status === "postponed").length;
    });

    const fetchServiceDates = async () => {
      loading.value = true;
      try {
        // Здесь должен быть ваш реальный запрос к API
        // const response = await fetch(apiEndpoint)
        // serviceDates.value = await response.json()

        // Временные мок-данные для демонстрации
        serviceDates.value = generateMockData();
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      } finally {
        loading.value = false;
      }
    };

    const fetchCallClients = async () => {
      loadingCalls.value = true;
      try {
        // Здесь должен быть ваш реальный запрос к API
        // const response = await fetch(`${callsApiEndpoint}?month=${callCurrentDate.value.getMonth()+1}&year=${callCurrentDate.value.getFullYear()}`)
        // callClients.value = await response.json()

        // Временные мок-данные для демонстрации
        callClients.value = generateMockCallData();
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      } finally {
        loadingCalls.value = false;
      }
    };

    const generateMockData = () => {
      const today = new Date();
      const events = [];

      // Добавляем несколько событий в текущем месяце
      for (let i = 0; i < 5; i++) {
        const date = new Date(today.getFullYear(), today.getMonth(), Math.floor(Math.random() * 28) + 1);
        events.push({
          date: date.toISOString().split("T")[0],
          time: `${Math.floor(Math.random() * 12) + 9}:00`,
          title: `ТО #${Math.floor(Math.random() * 1000) + 1000}`,
          description: "Плановое техническое обслуживание септика",
          address: "ул. Примерная, д. " + Math.floor(Math.random() * 50) + 1,
        });
      }

      // Добавляем несколько событий в следующем месяце
      const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
      for (let i = 0; i < 3; i++) {
        const date = new Date(nextMonth.getFullYear(), nextMonth.getMonth(), Math.floor(Math.random() * 28) + 1);
        events.push({
          date: date.toISOString().split("T")[0],
          time: `${Math.floor(Math.random() * 12) + 9}:00`,
          title: `ТО #${Math.floor(Math.random() * 1000) + 1000}`,
          description: "Плановое техническое обслуживание септика",
          address: "ул. Примерная, д. " + Math.floor(Math.random() * 50) + 1,
        });
      }

      return events;
    };

    const generateMockCallData = () => {
      const count = Math.floor(Math.random() * 5) + 3;
      const clients = [];

      for (let i = 0; i < count; i++) {
        clients.push({
          id: `client-${i}-${callCurrentDate.value.getMonth()}-${callCurrentDate.value.getFullYear()}`,
          name: `Клиент ${i + 1}`,
          phone: `+7 (${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${
            Math.floor(Math.random() * 90) + 10
          }-${Math.floor(Math.random() * 90) + 10}`,
          status: "pending",
          originalDate: new Date(callCurrentDate.value.getFullYear(), callCurrentDate.value.getMonth(), 1),
        });
      }

      return clients;
    };

    const generateCalendar = () => {
      const year = currentDate.value.getFullYear();
      const month = currentDate.value.getMonth();

      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);

      const startDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;
      const daysInMonth = lastDay.getDate();

      const days = [];

      // Добавляем дни предыдущего месяца
      const prevMonthLastDay = new Date(year, month, 0).getDate();
      for (let i = startDay - 1; i >= 0; i--) {
        const day = prevMonthLastDay - i;
        const date = new Date(year, month - 1, day);
        days.push(createDayObject(date, false));
      }

      // Добавляем дни текущего месяца
      for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(year, month, i);
        days.push(createDayObject(date, true));
      }

      // Добавляем дни следующего месяца
      const daysToAdd = 42 - days.length;
      for (let i = 1; i <= daysToAdd; i++) {
        const date = new Date(year, month + 1, i);
        days.push(createDayObject(date, false));
      }

      calendarDays.value = days;
    };

    const createDayObject = (date, isCurrentMonth) => {
      const today = new Date();
      const dateStr = date.toISOString().split("T")[0];

      const isToday =
        date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();

      const isPast = date < today && !isToday;

      const dayEvents = serviceDates.value.filter((event) => event.date === dateStr);
      const isServiceDay = dayEvents.length > 0;

      return {
        date: dateStr,
        dayNumber: date.getDate(),
        fullDate: date.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" }),
        isCurrentMonth,
        isToday,
        isPast,
        isServiceDay,
        events: dayEvents,
      };
    };

    const prevMonth = () => {
      currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1);
      generateCalendar();
    };

    const nextMonth = () => {
      currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1);
      generateCalendar();
    };

    const prevCallMonth = () => {
      callCurrentDate.value = new Date(callCurrentDate.value.getFullYear(), callCurrentDate.value.getMonth() - 1, 1);
      fetchCallClients();
    };

    const nextCallMonth = () => {
      callCurrentDate.value = new Date(callCurrentDate.value.getFullYear(), callCurrentDate.value.getMonth() + 1, 1);
      fetchCallClients();
    };

    const goToToday = () => {
      currentDate.value = new Date();
      generateCalendar();
      selectedDay.value = createDayObject(new Date(), true);
    };

    const goToCallToday = () => {
      callCurrentDate.value = new Date();
      fetchCallClients();
    };

    const selectDay = (day) => {
      selectedDay.value = day;
    };

    const confirmService = (client) => {
      currentClient.value = client;
      serviceDate.value = "";
      serviceTime.value = "09:00";
      serviceNotes.value = "";
      confirmDialog.value = true;
    };

    const postponeService = (client) => {
      // Переносим на 6 месяцев вперед
      const newDate = new Date(client.originalDate);
      newDate.setMonth(newDate.getMonth() + 6);

      // В реальном приложении здесь будет вызов API
      client.status = "postponed";
      client.postponedTo = newDate;

      // Обновляем список
      callClients.value = callClients.value.filter((c) => c.id !== client.id);

      // В реальном приложении нужно сохранить изменения на сервере
      console.log(`Клиент ${client.name} перенесен на ${newDate.toLocaleDateString()}`);
    };

    const saveConfirmedService = () => {
      if (!currentClient.value) return;

      // Создаем событие ТО
      const newEvent = {
        date: serviceDate.value,
        time: serviceTime.value,
        title: `ТО для ${currentClient.value.name}`,
        description: serviceNotes.value || "Плановое техническое обслуживание септика",
        address: "Адрес будет уточнен",
      };

      // Добавляем в календарь
      serviceDates.value.push(newEvent);

      // Помечаем клиента как подтвержденного
      currentClient.value.status = "confirmed";
      currentClient.value.serviceDate = serviceDate.value;

      // Обновляем список
      callClients.value = callClients.value.filter((c) => c.id !== currentClient.value.id);

      // Закрываем диалог
      confirmDialog.value = false;
      currentClient.value = null;

      // Перегенерируем календарь
      generateCalendar();

      // В реальном приложении нужно сохранить изменения на сервере
      console.log(`ТО для ${newEvent.title} запланировано на ${newEvent.date} ${newEvent.time}`);
    };

    const showHelpDialog = () => {
      helpDialog.value = true;
    };

    onMounted(() => {
      fetchServiceDates();
      fetchCallClients();
      generateCalendar();

      // Устанавливаем текущую дату для формы подтверждения
      const today = new Date();
      serviceDate.value = today.toISOString().split("T")[0];
    });

    return {
      currentDate,
      callCurrentDate,
      weekDays,
      calendarDays,
      selectedDay,
      loading,
      loadingCalls,
      helpDialog,
      currentTab,
      callClients,
      confirmDialog,
      serviceDate,
      serviceTime,
      serviceNotes,
      validConfirmForm,
      currentMonthName,
      currentYear,
      callMonthName,
      callYear,
      confirmedCount,
      postponedCount,
      prevMonth,
      nextMonth,
      prevCallMonth,
      nextCallMonth,
      goToToday,
      goToCallToday,
      selectDay,
      confirmService,
      postponeService,
      saveConfirmedService,
      showHelpDialog,
    };
  },
};
</script>

<style scoped>
.service-calendar {
  border-radius: 12px;
  overflow: hidden;
}

.calendar-grid {
  display: flex;
  flex-direction: column;
  border-radius: 0 0 12px 12px;
}

.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background: rgb(var(--v-theme-surface));
  border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}

.weekday {
  padding: 12px 0;
  text-align: center;
  font-weight: 500;
  color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
  text-transform: uppercase;
  font-size: 0.75rem;
}

.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background: rgb(var(--v-theme-background));
}

.day {
  min-height: 70px;
  padding: 8px;
  border-right: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  position: relative;
  cursor: pointer;
  transition: all 0.2s;
}

.day:hover {
  background: rgba(var(--v-theme-primary), 0.04);
}

.day-number {
  text-align: right;
  padding: 4px;
  font-weight: 500;
  color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
}

.other-month {
  background: rgba(var(--v-theme-surface), 0.6);
}

.other-month .day-number {
  color: rgba(var(--v-theme-on-surface), var(--v-disabled-opacity));
}

.today {
  background: rgba(var(--v-theme-primary), 0.08);
}

.today .day-number {
  font-weight: 700;
  color: rgb(var(--v-theme-primary));
}

.service-day {
  background: rgba(var(--v-theme-primary), 0.05);
}

.service-day .day-number {
  font-weight: 600;
}

.service-indicator {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgb(var(--v-theme-primary));
}

.event-count {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: rgb(var(--v-theme-primary));
  color: white;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: bold;
}

.past {
  opacity: 0.7;
}

.past .day-number {
  color: rgba(var(--v-theme-on-surface), var(--v-disabled-opacity));
}

.selected {
  background: rgba(var(--v-theme-primary), 0.1);
  box-shadow: inset 0 0 0 2px rgb(var(--v-theme-primary));
}

.day-events {
  border-radius: 8px;
  transition: all 0.3s ease;
}

.day-events.has-events {
  border-top: 4px solid rgb(var(--v-theme-primary));
}

@media (max-width: 600px) {
  .day {
    min-height: 70px;
  }

  .day-number {
    font-size: 0.8rem;
  }

  .event-count {
    width: 18px;
    height: 18px;
    font-size: 0.6rem;
  }
}
</style>
