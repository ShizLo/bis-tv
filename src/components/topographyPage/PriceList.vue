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
            v-for="(category, index) in state.pricingData"
            :key="index"
            class="price-card"
            :class="{ 'is-expanded': expandedPanels.includes(index) }"
          >
            <v-expansion-panel-title class="price-card-header">
              <div class="service-header">
                <h3 class="service-title">{{ category.title }}</h3>
              </div>
              <template v-slot:actions>
                <div class="service-price">
                  <span class="price-from">{{ category.minPrice }}</span>
                </div>
              </template>
            </v-expansion-panel-title>

            <v-expansion-panel-text class="price-card-content">
              <div class="design-table-wrapper">
                <div class="design-table">
                  <div class="table-header">
                    <div class="header-cell">Услуга</div>
                    <div v-for="(column, colIndex) in category.columns" :key="colIndex" class="header-cell">
                      {{ column }}
                    </div>
                  </div>

                  <div v-for="(service, serviceIndex) in category.services" :key="serviceIndex" class="table-row">
                    <div class="row-name">{{ service.name }}</div>
                    <div v-for="(price, priceIndex) in service.prices" :key="priceIndex" class="price-cell">
                      {{ price }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="scroll-hint">
                <v-icon small>mdi-chevron-right</v-icon>
                <span>Листайте вправо для просмотра всех колонок</span>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { ref } from "vue";
import { useCatalogStore } from "@/stores/modules/catalog.store";
const catalogStore = useCatalogStore();

onMounted(async () => {
  await catalogStore.loadCatalog();
  updatePrices();
});

const state = reactive({
  price: [],
  pricingData: initializepricingDataStructure(),
  loading: false,
});

function updatePrices() {
  //<Основные услуги>================================================================================
  state.pricingData[0].minPrice = catalogStore.getPriceById(50);
  // Эскизный проект до 10 соток
  state.pricingData[0].services[0].prices[0] = catalogStore.getPriceById(50);
  // Эскизный проект до 15 соток
  state.pricingData[0].services[0].prices[1] = catalogStore.getPriceById(54);
  // Эскизный проект до 20 соток
  state.pricingData[0].services[0].prices[2] = catalogStore.getPriceById(55);
  // Эскизный проект > 20 соток
  state.pricingData[0].services[0].prices[3] = catalogStore.getPriceById(56);
  // Ландшафтный проект до 10 соток
  state.pricingData[0].services[1].prices[0] = catalogStore.getPriceById(57);
  // Ландшафтный проект до 15 соток
  state.pricingData[0].services[1].prices[1] = catalogStore.getPriceById(58);
  // Ландшафтный проект до 20 соток
  state.pricingData[0].services[1].prices[2] = catalogStore.getPriceById(59);
  // Ландшафтный проект > 20 соток
  state.pricingData[0].services[1].prices[3] = catalogStore.getPriceById(60);
  // Полный проект до 10 соток
  state.pricingData[0].services[2].prices[0] = catalogStore.getPriceById(51);
  // Полный проект до 15 соток
  state.pricingData[0].services[2].prices[1] = catalogStore.getPriceById(61);
  // Полный проект до 20 соток
  state.pricingData[0].services[2].prices[2] = catalogStore.getPriceById(62);
  // Полный проект > 20 соток
  state.pricingData[0].services[2].prices[3] = catalogStore.getPriceById(63);
  // Выезд специалиста
  state.pricingData[0].services[3].prices[0] = catalogStore.getPriceById(64);
  // Выезд геодезиста
  state.pricingData[0].services[4].prices[0] = catalogStore.getPriceById(65);
  //</Основные услуги>===============================================================================
}

function initializepricingDataStructure() {
  return [
    {
      id: 1,
      title: "Проектирование участка",
      minPrice: "",
      columns: ["до 10 соток", "до 15 соток", "до 20 соток", "> 20 соток"],
      services: [
        {
          id: 1,
          name: "Эскизный проект",
          prices: ["-", "-", "-", "-"],
        },
        {
          id: 2,
          name: "Ландшафтный проект",
          prices: ["-", "-", "-", "-"],
        },
        {
          id: 3,
          name: "Полный проект",
          prices: ["-", "-", "-", "-"],
        },
        {
          id: 4,
          name: "Выезд специалиста",
          prices: ["-", "-", "-", "-"],
        },
        {
          id: 5,
          name: "Выезд геодезиста",
          prices: ["-", "-", "-", "-"],
        },
      ],
    },
  ];
}
const expandedPanels = ref([0]); // По умолчанию открыт первый элемент

const pricingData = reactive([
  {
    id: 1,
    title: "Проектирование участка",
    minPrice: "22 000",
    columns: ["до 10 соток", "до 15 соток", "до 20 соток", "> 20 соток"],
    services: [
      {
        id: 1,
        name: "Эскизный проект",
        prices: ["22 000 ₽", "32 000 ₽", "42 000 ₽", "2 200 ₽/сот."],
      },
      {
        id: 2,
        name: "Ландшафтный проект",
        prices: ["43 000 ₽", "63 000 ₽", "83 000 ₽", "4 300 ₽/сот."],
      },
      {
        id: 3,
        name: "Полный проект",
        prices: ["65 000 ₽", "95 000 ₽", "125 000 ₽", "6 500 ₽/сот."],
      },
      {
        id: 4,
        name: "Выезд специалиста",
        prices: ["от 6 000 ₽", "-", "-", "-"],
      },
      {
        id: 5,
        name: "Выезд геодезиста",
        prices: ["от 6 000 ₽", "-", "-", "-"],
      },
    ],
  },
  // Здесь можно добавить другие категории услуг
  // {
  //   id: 2,
  //   title: "Другая категория",
  //   minPrice: "10 000",
  //   columns: [...],
  //   services: [...]
  // }
]);
</script>

<style lang="scss" scoped>
/* Стили остаются без изменений */
@use "../../assets/styles/main.scss" as *;
@use "sass:color";

.price-section {
  padding: 50px 0;
}

.price-title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 60px 0;
  position: relative;
  text-align: center;
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
    background: linear-gradient(90deg, black, color.adjust(black, $lightness: -15%));
    border-radius: 3px;
    transition: width 0.3s ease;
  }

  &:hover .title-decoration {
    width: 120px;
  }
}

.price-cards {
  max-width: 900px;
  margin: 0 auto;
}

.price-accordion {
  gap: 20px;
  display: flex;
  flex-direction: column;
}

.price-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.price-card-header {
  padding: 18px 28px;
  min-height: 68px;

  .service-header {
    display: flex;
    align-items: center;
    gap: 15px;
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
    gap: 12px;

    .price-from {
      font-size: 1rem;
      font-weight: 600;
      color: #111827;
    }
  }
}

.price-card-content {
  padding: 0;
}

.design-table-wrapper {
  overflow-x: auto;
  padding: 0 16px;
  -webkit-overflow-scrolling: touch;
}

.design-table {
  display: grid;
  grid-template-columns: minmax(150px, 1fr) repeat(4, minmax(120px, 1fr));
  min-width: 100%;
  gap: 10px;
  margin-bottom: 16px;
}

.table-header,
.table-row {
  display: contents;
}

.header-cell {
  font-weight: 600;
  font-size: 0.9rem;
  color: #111827;
  padding: 14px 10px;
  text-align: center;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
}

.row-name {
  font-weight: 500;
  // padding: 14px 10px;
  font-size: 0.9rem;
  color: #374151;
  display: flex;
  align-items: center;
  justify-content: start;
}

.price-cell {
  font-weight: 500;
  font-size: 0.9rem;
  padding: 14px 10px;
  text-align: center;
  background: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-hint {
  display: none;
  align-items: start;
  justify-content: start;
  gap: 8px;
  padding: 8px 0 16px;
  color: #6b7280;
  font-size: 0.8rem;
}

@media (max-width: $md3) {
  .price-section {
    padding: 40px 0;
  }

  .price-title {
    font-size: 2rem;

    .title-decoration {
      width: 60px;
      bottom: -8px;
    }
  }

  .design-table {
    grid-template-columns: minmax(130px, 1fr) repeat(4, minmax(110px, 1fr));
    min-width: 700px;
  }

  .scroll-hint {
    display: flex;
  }
}

@media (max-width: $md4) {
  .design-table-wrapper {
    padding: 0 0px;
  }
  .price-title {
    font-size: 2rem;
    margin-bottom: 30px;
  }

  .price-card-header {
    padding: 28px;

    .service-title {
      font-size: 1rem;
    }

    .price-from {
      font-size: 0.9rem;
    }
  }

  .design-table {
    min-width: 600px;
    gap: 8px;
  }

  .header-cell,
  .row-name,
  .price-cell {
    font-size: 0.85rem;
  }
}
</style>
