<script setup>
import { ref } from "vue";
import BlockHeader from "../../components/BlockHeader.vue";
import septikIcon from "../../assets/icons/septik.svg";
import waterIcon from "../../assets/icons/Icons_BIS/SVG/water.svg";
import electricityIcon from "../../assets/icons/Icons_BIS/SVG/electricity.svg";
const services = ref([
  {
    name: "Обслуживание и ремонт ЛОС",
    icon: septikIcon,
    price: "от 1 300",
    description: [
      { text: "Обслуживание ЛОС Астра 5", price: "6 700" },
      { text: "Обслуживание ЛОС Астра 8", price: "8 500" },
      { text: "Обслуживание ЛОС Астра 10", price: "9 700" },
      { text: "Обслуживание ЛОС Астра 15", price: "10 800" },
      { text: "Обслуживание ЛОС Астра 30", price: "12 000" },
      { text: "Консервация ЛОС", price: "1 300" },
      { text: "Демонтаж/монтаж насоса", price: "7 300" },
      { text: "Поплавок с заменой", price: "3 100" },
      { text: "Чистка фильтрационного колодца", price: "1 900" },
    ],
  },
  {
    name: "Система водоочистки и водоподготовки",
    icon: waterIcon,
    price: "от 6 100",
    description: [
      { text: "Аквашеф", price: "20 600" },
      { text: "Дозация", price: "43 600" },
      { text: "Айрация", price: "15 200" },
      { text: "Осмос", price: "42 400" },
      { text: "Аварийный выезд", price: "6 100" },
    ],
  },
  {
    name: "Система водоснабжения",
    icon: waterIcon,
    price: "от 800",
    description: [
      { text: "Аварийный выезд", price: "5 000" },
      { text: "Диагностика насоса", price: "3 800" },
      { text: "Диагностика автоматики", price: "1 000" },
      { text: "Диагностика гидроаккумулятора", price: "800" },
      { text: "Замена обр клапана", price: "2 200" },
    ],
  },
  {
    name: "Система электроснабжения",
    icon: electricityIcon,
    price: "от 6 700",
    description: [
      { text: "Аварийный выезд", price: "6 700" },
      { text: "Обслуживание стабилизаторов", price: "6 700" },
      { text: "Обслуживание генераторов", price: "от 18 200" },
      { text: "Сервис щитов", price: "6 700" },
    ],
  },
]);
</script>
<template>
  <section class="price">
    <div class="_container">
      <BlockHeader title="Прайс-лист на услуги"></BlockHeader>
      <v-expansion-panels class="price-service">
        <v-expansion-panel v-for="service in services" :key="service.name">
          <v-expansion-panel-title class="d-flex">
            <div class="price-service__title d-flex align-center">
              <v-icon size="26" class="mr-2">
                <v-img :src="service.icon"></v-img>
              </v-icon>
              <div>{{ service.name }}</div>
            </div>
            <template v-slot:actions="{ expanded }">
              <!-- Слот для кастомизации правой части -->
              <!-- Кнопка -->
              <div class="d-flex align-center">
                <!-- Стандартная галочка -->
                <div class="price__count">
                  <v-chip append-icon="mdi-currency-rub" class="mr-1" color="primary" label>
                    {{ service.price }}
                    <!-- <v-icon class="ml-1" icon="mdi-currency-rub"></v-icon> -->
                  </v-chip>
                </div>
                <div>
                  <v-icon :class="{ 'rotate-180': expanded }">mdi-chevron-down</v-icon>
                </div>
              </div>
            </template>
          </v-expansion-panel-title>
          <v-expansion-panel-text v-for="description in service.description" class="price-text test">
            <div class="d-flex align-center flex-1-1-100">
              <v-icon class="mr-1" icon="mdi-circle-small"></v-icon>
              <div class="d-flex flex-1-1-100 align-center justify-space-between">
                <div class="d-flex">{{ description.text }}</div>

                <v-chip class="mr-1" color="primary" label>
                  {{ description.price }}
                  <v-icon class="ml-1" icon="mdi-currency-rub"></v-icon>
                </v-chip>
              </div>
            </div>
            <v-divider class="mt-2 border-opacity-100"></v-divider>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </section>
</template>
<style lang="scss">
@use "../../assets/styles/main.scss" as *;

.price-service {
  &__title .v-expansion-panel-title {
  }
}

.price-service .v-expansion-panel-title {
  @media (max-width: $md4) {
    padding: 12px;
    font-size: 0.85rem;
  }
}
.price-service .v-expansion-panel-text {
  @media (max-width: $md4) {
    // padding: 12px;
    font-size: 0.85rem;
  }
}
.price-service .v-expansion-panel-text__wrapper {
  padding: 4px 24px;
  @media (max-width: $md4) {
    padding: 4px 12px;
  }
}
.price__count .v-chip.v-chip--size-default {
  padding-left: 14px;
  padding-right: 10px;
  @media (max-width: $md4) {
    font-size: 0.7rem;
    --v-chip-height: 24px;
  }
}
.price-text .v-chip.v-chip--size-default {
  padding-left: 14px;
  padding-right: 10px;
  @media (max-width: $md4) {
    font-size: 0.7rem;
    --v-chip-height: 24px;
  }
}

.price__count .v-chip.v-chip--size-default .v-icon--end {
  margin-inline-end: 0px;
  margin-inline-start: 2px;
}
</style>
