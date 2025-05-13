<script setup>
import { ref, onMounted, reactive } from "vue";
import septikIcon from "../../assets/icons/septik.svg";
import waterIcon from "../../assets/icons/Icons_BIS/SVG/water.svg";
import electricityIcon from "../../assets/icons/Icons_BIS/SVG/electricity.svg";
import { useCatalogStore } from "@/stores/modules/catalog.store";

const catalogStore = useCatalogStore();

onMounted(async () => {
  await catalogStore.loadCatalog();
  updatePrices();
});

function updatePrices() {
  //<Обслуживание ЛОС>================================================================================
  // Обслуживание ЛОС Астра 5
  state.dataServices[0].description[0].price = catalogStore.getPriceById(88);
  // Обслуживание ЛОС Астра 8
  state.dataServices[0].description[1].price = catalogStore.getPriceById(89);
  // Обслуживание ЛОС Астра 10
  state.dataServices[0].description[2].price = catalogStore.getPriceById(90);
  // Обслуживание ЛОС Астра 15
  state.dataServices[0].description[3].price = catalogStore.getPriceById(91);
  // Обслуживание ЛОС Астра 30
  state.dataServices[0].description[4].price = catalogStore.getPriceById(92);
  // Консервация ЛОС
  state.dataServices[0].description[5].price = catalogStore.getPriceById(76);
  // Демонтаж / монтаж насоса
  state.dataServices[0].description[6].price = catalogStore.getPriceById(73);
  // Поплавок с заменой
  state.dataServices[0].description[7].price = catalogStore.getPriceById(74);
  // Чистка фильтрационного колодца
  state.dataServices[0].description[8].price = catalogStore.getPriceById(75);
  //</Обслуживание ЛОС>===============================================================================
  //<Водоочистка и водоподготовка>================================================================================
  // Аквашеф
  state.dataServices[1].description[0].price = catalogStore.getPriceById(93);
  // Дозация
  state.dataServices[1].description[1].price = catalogStore.getPriceById(94);
  // Айрация
  state.dataServices[1].description[2].price = catalogStore.getPriceById(95);
  // Осмос
  state.dataServices[1].description[3].price = catalogStore.getPriceById(96);
  // Аварийный выезд
  state.dataServices[1].description[4].price = catalogStore.getPriceById(97);
  //</Водоочистка и водоподготовка>===============================================================================
  //<Водоснабжение>================================================================================
  // Аварийный выезд
  state.dataServices[2].description[0].price = catalogStore.getPriceById(98);
  // Диагностика насоса
  state.dataServices[2].description[1].price = catalogStore.getPriceById(99);
  // Диагностика автоматики
  state.dataServices[2].description[2].price = catalogStore.getPriceById(100);
  // Диагностика гидроаккумулятора
  state.dataServices[2].description[3].price = catalogStore.getPriceById(101);
  // Замена обр клапана
  state.dataServices[2].description[4].price = catalogStore.getPriceById(102);
  //</Водоснабжение>===============================================================================
  //<Электроснабжение>================================================================================
  // Аварийный выезд
  state.dataServices[3].description[0].price = catalogStore.getPriceById(103);
  // Обслуживание стабилизаторов
  state.dataServices[3].description[1].price = catalogStore.getPriceById(104);
  // Обслуживание генераторов
  state.dataServices[3].description[2].price = catalogStore.getPriceById(105);
  // Сервис щитов
  state.dataServices[3].description[3].price = catalogStore.getPriceById(106);
  //</Электроснабжение>===============================================================================
}

const state = reactive({
  dataServices: initializeServicesStructure(),
  loading: false,
});

function initializeServicesStructure() {
  return [
    {
      name: "Обслуживание и ремонт ЛОС",
      icon: septikIcon,
      price: "",
      description: [
        { text: "Обслуживание ЛОС Астра 5", price: "" },
        { text: "Обслуживание ЛОС Астра 8", price: "" },
        { text: "Обслуживание ЛОС Астра 10", price: "" },
        { text: "Обслуживание ЛОС Астра 15", price: "" },
        { text: "Обслуживание ЛОС Астра 30", price: "" },
        { text: "Консервация ЛОС", price: "" },
        { text: "Демонтаж/монтаж насоса", price: "" },
        { text: "Поплавок с заменой", price: "" },
        { text: "Чистка фильтрационного колодца", price: "" },
      ],
    },
    {
      name: "Система водоочистки и водоподготовки",
      icon: waterIcon,
      price: "",
      description: [
        { text: "Аквашеф", price: "" },
        { text: "Дозация", price: "" },
        { text: "Айрация", price: "" },
        { text: "Осмос", price: "" },
        { text: "Аварийный выезд", price: "" },
      ],
    },
    {
      name: "Система водоснабжения",
      icon: waterIcon,
      price: "",
      description: [
        { text: "Аварийный выезд", price: "" },
        { text: "Диагностика насоса", price: "" },
        { text: "Диагностика автоматики", price: "" },
        { text: "Диагностика гидроаккумулятора", price: "" },
        { text: "Замена обр клапана", price: "" },
      ],
    },
    {
      name: "Система электроснабжения",
      icon: electricityIcon,
      price: "",
      description: [
        { text: "Аварийный выезд", price: "" },
        { text: "Обслуживание стабилизаторов", price: "" },
        { text: "Обслуживание генераторов", price: "" },
        { text: "Сервис щитов", price: "" },
      ],
    },
  ];
}

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
            v-for="(service, index) in state.dataServices"
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
                    <span class="item-price">{{ item.price }}</span>
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
