<!-- <script setup>
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
              <div class="d-flex align-center">
                <div class="price__count">
                  <v-chip append-icon="mdi-currency-rub" class="mr-1" color="primary" label>
                    {{ service.price }}
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
</style> -->

<!-- <script setup>
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

const expandedPanels = ref([]);
</script>

<template>
  <section class="price-section">
    <div class="_container">
      <div>Прайс-лист на услуги</div>
      <div class="price-cards">
        <v-expansion-panels v-model="expandedPanels" multiple class="price-accordion">
          <v-expansion-panel
            v-for="(service, index) in services"
            :key="service.name"
            class="price-card"
            :class="{ 'is-expanded': expandedPanels.includes(index) }"
          >
            <v-expansion-panel-title class="price-card-header">
              <div class="service-header">
                <div class="service-icon">
                  <v-img :src="service.icon" width="32" height="32" />
                </div>
                <h3 class="service-title">{{ service.name }}</h3>
              </div>
            </v-expansion-panel-title>

            <v-expansion-panel-text class="price-card-content">
              <ul class="service-list">
                <li v-for="(item, itemIndex) in service.description" :key="itemIndex" class="service-item">
                  <div class="item-content">
                    <span class="item-name">{{ item.text }}</span>
                    <span class="item-price">{{ item.price }} ₽</span>
                  </div>
                  <v-divider v-if="itemIndex < service.description.length - 1" />
                </li>
              </ul>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/main.scss" as *;
.price-title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 15px 0;
  position: relative;
  display: inline-block;
  font-family: "Montserrat", sans-serif;

  .title-text {
    background: linear-gradient(90deg, #2c3e50, #1a1a1a);
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
    background: linear-gradient(90deg, black, darken(black, 15%));
    border-radius: 3px;
    transition: width 0.3s ease;
  }

  &:hover .title-decoration {
    width: 120px;
  }
}

@media (max-width: $md4) {
  .price-title {
    font-size: 2rem;

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
.price-section {
  padding: 40px 0;
  background-color: #f9fafb;
}

.price-cards {
  max-width: 900px;
  margin: 0 auto;
}

.price-accordion {
  gap: 16px;
  display: flex;
  flex-direction: column;
}

.price-card {
  background: white;
  border-radius: 12px !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  overflow: hidden;
  border: 1px solid #e5e7eb;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    border-color: black;
  }

  &.is-expanded {
    border-color: black;
    box-shadow: 0 4px 16px rgba(black, 0.12);
  }
}

.price-card-header {
  padding: 20px 24px;
  min-height: 72px;

  .service-header {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .service-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(black, 0.1);
    border-radius: 8px;
    padding: 4px;
  }

  .service-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #111827;
    margin: 0;
  }

  .service-price {
    display: flex;
    align-items: center;
    gap: 16px;

    .price-from {
      font-size: 1rem;
      font-weight: 600;
      color: black;
      white-space: nowrap;
    }
  }

  @media (max-width: $md4) {
    padding: 16px;
    min-height: 64px;

    .service-title {
      font-size: 1rem;
    }

    .price-from {
      font-size: 0.9rem;
    }
  }
}

.price-card-content {
  padding: 0 24px 16px;

  .service-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .service-item {
    padding: 12px 0;

    .item-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
    }

    .item-name {
      font-size: 0.95rem;
      color: #374151;
    }

    .item-price {
      font-size: 0.95rem;
      font-weight: 600;
      color: black;
      white-space: nowrap;
    }
  }

  @media (max-width: $md4) {
    padding: 0 16px 12px;

    .service-item {
      padding: 10px 0;

      .item-name {
        font-size: 0.9rem;
      }

      .item-price {
        font-size: 0.9rem;
      }
    }
  }
}

.v-divider {
  opacity: 0.5;
  border-color: #e5e7eb;
}
</style> -->

<!-- <script setup>
import { ref } from "vue";
import BlockHeader from "../../components/BlockHeader.vue";
import septikIcon from "../../assets/icons/septik.svg";
import waterIcon from "../../assets/icons/Icons_BIS/SVG/water.svg";
import electricityIcon from "../../assets/icons/Icons_BIS/SVG/electricity.svg";

const services = ref([
  {
    name: "Обслуживание и ремонт ЛОС",
    icon: septikIcon,
    price: "1 300",
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
    price: "6 100",
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
    price: "800",
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
    price: "6 700",
    description: [
      { text: "Аварийный выезд", price: "6 700" },
      { text: "Обслуживание стабилизаторов", price: "6 700" },
      { text: "Обслуживание генераторов", price: "от 18 200" },
      { text: "Сервис щитов", price: "6 700" },
    ],
  },
]);

const expandedPanels = ref([]);
</script>

<template>
  <section class="price-section">
    <div class="_container">
      <BlockHeader title="Прайс-лист на услуги" />

      <div class="price-cards">
        <v-expansion-panels v-model="expandedPanels" multiple class="price-accordion">
          <v-expansion-panel
            v-for="(service, index) in services"
            :key="service.name"
            class="price-card"
            :class="{ 'is-expanded': expandedPanels.includes(index) }"
          >
            <v-expansion-panel-title class="price-card-header" hide-actions>
              <div class="service-header">
                <div class="service-icon">
                  <v-img :src="service.icon" width="32" height="32" />
                </div>
                <h3 class="service-title">{{ service.name }}</h3>
              </div>

              <template v-slot:actions>
                <div class="service-price">
                  <div class="price-badge">
                    <span class="price-label">от</span>
                    <span class="price-value">{{ service.price }}</span>
                    <span class="price-currency">₽</span>
                  </div>
                  <v-icon :icon="expandedPanels.includes(index) ? 'mdi-chevron-up' : 'mdi-chevron-down'" size="24" class="chevron-icon" />
                </div>
              </template>
            </v-expansion-panel-title>

            <v-expansion-panel-text class="price-card-content">
              <ul class="service-list">
                <li v-for="(item, itemIndex) in service.description" :key="itemIndex" class="service-item">
                  <div class="item-content">
                    <span class="item-name">{{ item.text }}</span>
                    <span class="item-price">{{ item.price }} ₽</span>
                  </div>
                  <v-divider v-if="itemIndex < service.description.length - 1" />
                </li>
              </ul>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </section>
</template>

<style>
.price-section {
  padding: 40px 0;
  background-color: #f9fafb;
}

.price-cards {
  max-width: 900px;
  margin: 0 auto;
}

.price-accordion {
  gap: 16px;
  display: flex;
  flex-direction: column;
}

.price-card {
  background: white;
  border-radius: 12px !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  overflow: hidden;
  border: 1px solid #e5e7eb;
}

.price-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  border-color: #4f46e5;
}

.price-card.is-expanded {
  border-color: #4f46e5;
  box-shadow: 0 4px 16px rgba(79, 70, 229, 0.12);
}

.price-card-header {
  padding: 20px 24px;
  min-height: 72px;
}

.price-card-header .service-header {
  display: flex;
  align-items: center;
  gap: 16px;
}

.price-card-header .service-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(79, 70, 229, 0.1);
  border-radius: 8px;
  padding: 4px;
}

.price-card-header .service-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
}

.price-card-header .service-price {
  display: flex;
  align-items: center;
  gap: 16px;
}

.price-card-header .price-badge {
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #4f46e5, #6366f1);
  color: white;
  border-radius: 8px;
  padding: 6px 12px;
  box-shadow: 0 2px 4px rgba(79, 70, 229, 0.2);
}

.price-card-header .price-label {
  font-size: 0.8rem;
  opacity: 0.9;
  margin-right: 4px;
}

.price-card-header .price-value {
  font-size: 1rem;
  font-weight: 600;
}

.price-card-header .price-currency {
  font-size: 0.9rem;
  margin-left: 2px;
}

.price-card-header .chevron-icon {
  color: #4f46e5;
}

.price-card-content {
  padding: 0 24px 16px;
}

.price-card-content .service-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.price-card-content .service-item {
  padding: 12px 0;
}

.price-card-content .item-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.price-card-content .item-name {
  font-size: 0.95rem;
  color: #374151;
}

.price-card-content .item-price {
  font-size: 0.95rem;
  font-weight: 600;
  color: #4f46e5;
  white-space: nowrap;
}

.v-divider {
  opacity: 0.5;
  border-color: #e5e7eb;
}

@media (max-width: 600px) {
  .price-card-header {
    padding: 16px;
    min-height: 64px;
  }

  .price-card-header .service-title {
    font-size: 1rem;
  }

  .price-card-header .price-badge {
    padding: 4px 8px;
  }

  .price-card-header .price-value {
    font-size: 0.9rem;
  }

  .price-card-content {
    padding: 0 16px 12px;
  }

  .price-card-content .service-item {
    padding: 10px 0;
  }

  .price-card-content .item-name {
    font-size: 0.9rem;
  }

  .price-card-content .item-price {
    font-size: 0.9rem;
  }
}
</style> -->

<!-- <script setup>
import { ref } from "vue";
import BlockHeader from "../../components/BlockHeader.vue";
import septikIcon from "../../assets/icons/septik.svg";
import waterIcon from "../../assets/icons/Icons_BIS/SVG/water.svg";
import electricityIcon from "../../assets/icons/Icons_BIS/SVG/electricity.svg";

const services = ref([
  {
    name: "Обслуживание и ремонт ЛОС",
    icon: septikIcon,
    price: "1 300",
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
    price: "6 100",
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
    price: "800",
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
    price: "6 700",
    description: [
      { text: "Аварийный выезд", price: "6 700" },
      { text: "Обслуживание стабилизаторов", price: "6 700" },
      { text: "Обслуживание генераторов", price: "от 18 200" },
      { text: "Сервис щитов", price: "6 700" },
    ],
  },
]);

const expandedPanels = ref([]);
</script>

<template>
  <section class="price-section">
    <div class="_container">
      <BlockHeader title="Прайс-лист на услуги" />

      <div class="price-cards">
        <v-expansion-panels v-model="expandedPanels" multiple class="price-accordion">
          <v-expansion-panel
            v-for="(service, index) in services"
            :key="service.name"
            class="price-card"
            :class="{ 'is-expanded': expandedPanels.includes(index) }"
          >
            <v-expansion-panel-title class="price-card-header" @click.stop="">
              <div class="service-header">
                <div class="service-icon">
                  <v-img :src="service.icon" width="32" height="32" />
                </div>
                <h3 class="service-title">{{ service.name }}</h3>
              </div>

              <template v-slot:actions="{ expanded }">
                <div class="service-price-wrapper">
                  <v-icon :icon="expanded ? 'mdi-chevron-up' : 'mdi-chevron-down'" size="24" class="chevron-icon" />
                </div>
              </template>
            </v-expansion-panel-title>

            <v-expansion-panel-text class="price-card-content">
              <ul class="service-list">
                <li v-for="(item, itemIndex) in service.description" :key="itemIndex" class="service-item">
                  <div class="item-content">
                    <span class="item-name">{{ item.text }}</span>
                    <span class="item-price">{{ item.price }} ₽</span>
                  </div>
                  <v-divider v-if="itemIndex < service.description.length - 1" />
                </li>
              </ul>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </section>
</template>

<style>
.price-section {
  padding: 40px 0;
  background-color: #f9fafb;
}

.price-cards {
  max-width: 900px;
  margin: 0 auto;
}

.price-accordion {
  gap: 16px;
  display: flex;
  flex-direction: column;
}

.price-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  -webkit-tap-highlight-color: transparent;
}

.price-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.price-card.is-expanded {
  border-color: #4f46e5;
  box-shadow: 0 4px 16px rgba(79, 70, 229, 0.12);
}

.price-card-header {
  padding: 20px 24px;
  min-height: 72px;
  user-select: none;
}

.price-card-header .service-header {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-grow: 1;
}

.price-card-header .service-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(79, 70, 229, 0.1);
  border-radius: 8px;
  padding: 4px;
  flex-shrink: 0;
}

.price-card-header .service-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
}

.price-card-header .service-price-wrapper {
  display: flex;
  align-items: center;
  gap: 16px;
}

.price-card-header .service-price {
  display: flex;
  align-items: baseline;
  gap: 4px;
  background: rgba(79, 70, 229, 0.1);
  border-radius: 6px;
  padding: 6px 10px;
}

.price-card-header .price-from {
  font-size: 0.8rem;
  color: #4f46e5;
  opacity: 0.8;
}

.price-card-header .price-value {
  font-size: 1rem;
  font-weight: 600;
  color: #4f46e5;
}

.price-card-header .price-currency {
  font-size: 0.9rem;
  color: #4f46e5;
}

.price-card-header .chevron-icon {
  color: red;
  margin-left: 8px;
}

.price-card-content {
  padding: 0 24px 16px;
}

.price-card-content .service-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.price-card-content .service-item {
  padding: 12px 0;
}

.price-card-content .item-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.price-card-content .item-name {
  font-size: 0.95rem;
  color: #374151;
}

.price-card-content .item-price {
  font-size: 0.95rem;
  font-weight: 600;
  color: #4f46e5;
  white-space: nowrap;
}

.v-divider {
  opacity: 0.5;
  border-color: #e5e7eb;
}

@media (max-width: 600px) {
  .price-card-header {
    padding: 16px;
    min-height: 64px;
  }

  .price-card-header .service-title {
    font-size: 1rem;
  }

  .price-card-header .service-price {
    padding: 4px 8px;
  }

  .price-card-header .price-value {
    font-size: 0.9rem;
  }

  .price-card-content {
    padding: 0 16px 12px;
  }

  .price-card-content .service-item {
    padding: 10px 0;
  }

  .price-card-content .item-name {
    font-size: 0.9rem;
  }

  .price-card-content .item-price {
    font-size: 0.9rem;
  }
}
</style> -->

<script setup>
import { ref } from "vue";
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

const expandedPanels = ref([]);
</script>

<template>
  <section class="price-section">
    <div class="_container">
      <h2 class="price-title">
        <span class="title-text">ПРАЙС-ЛИСТ</span>
        <span class="title-decoration"></span>
      </h2>

      <div class="price-cards">
        <v-expansion-panels v-model="expandedPanels" multiple class="price-accordion">
          <v-expansion-panel
            v-for="(service, index) in services"
            :key="service.name"
            class="price-card"
            :class="{ 'is-expanded': expandedPanels.includes(index) }"
          >
            <v-expansion-panel-title class="price-card-header">
              <div class="service-header">
                <div class="service-icon">
                  <v-img :src="service.icon" width="32" height="32" />
                </div>
                <h3 class="service-title">{{ service.name }}</h3>
              </div>
            </v-expansion-panel-title>

            <v-expansion-panel-text class="price-card-content">
              <ul class="service-list">
                <li v-for="(item, itemIndex) in service.description" :key="itemIndex" class="service-item">
                  <div class="item-content">
                    <span class="item-name">{{ item.text }}</span>
                    <span class="item-price">{{ item.price }} ₽</span>
                  </div>
                  <v-divider v-if="itemIndex < service.description.length - 1" />
                </li>
              </ul>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "sass:color";
@use "../../assets/styles/main.scss" as *;

.price-title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 60px 0;
  position: relative;
  text-align: center;
  // display: inline-block;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  width: 100%;

  .title-text {
    background: linear-gradient(90deg, #2c3e50, #1a1a1a);
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
    background: linear-gradient(90deg, black, color.adjust(black, $lightness: -15%));
    border-radius: 3px;
    transition: width 0.3s ease;
  }

  &:hover .title-decoration {
    width: 120px;
  }
}

@media (max-width: $md4) {
  .price-title {
    font-size: 2rem;
    margin-bottom: 20px;

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

.price-section {
  padding-top: 0px;
  padding-bottom: 20px;
  // background-color: #f9fafb;
}

.price-cards {
  max-width: 900px;
  margin: 0 auto;
}

.price-accordion {
  gap: 16px;
  display: flex;
  flex-direction: column;
}

.price-card {
  background: white;
  border-radius: 12px !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  overflow: hidden;
  border: 1px solid #e5e7eb;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    border-color: black;
  }

  &.is-expanded {
    border-color: black;
    box-shadow: 0 4px 16px rgba(black, 0.12);
  }
}

.price-card-header {
  padding: 20px 24px;
  min-height: 72px;

  .service-header {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .service-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(black, 0.1);
    border-radius: 8px;
    padding: 4px;
  }

  .service-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #111827;
    margin: 0;
  }

  .service-price {
    display: flex;
    align-items: center;
    gap: 16px;

    .price-from {
      font-size: 1rem;
      font-weight: 600;
      color: black;
      white-space: nowrap;
    }
  }

  @media (max-width: $md4) {
    padding: 16px;
    min-height: 64px;

    .service-title {
      font-size: 1rem;
    }

    .price-from {
      font-size: 0.9rem;
    }
  }
}

.price-card-content {
  padding: 0 24px 16px;

  .service-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .service-item {
    padding: 12px 0;

    .item-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
    }

    .item-name {
      font-size: 0.95rem;
      color: #374151;
    }

    .item-price {
      font-size: 0.95rem;
      font-weight: 600;
      color: black;
      white-space: nowrap;
    }
  }

  @media (max-width: $md4) {
    padding: 0 16px 12px;
    .service-item {
      padding: 10px 0;

      .item-name {
        font-size: 0.9rem;
      }

      .item-price {
        font-size: 0.9rem;
      }
    }
  }
}

.v-divider {
  opacity: 0.5;
  border-color: #e5e7eb;
}
</style>
