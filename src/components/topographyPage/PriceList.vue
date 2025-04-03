<template>
  <section class="price-section">
    <div class="_container">
      <h2 class="price-title">
        <span class="title-text">ПРАЙС-ЛИСТ</span>
        <span class="title-decoration"></span>
      </h2>

      <div class="price-cards">
        <v-expansion-panels v-model="expandedPanels" multiple class="price-accordion">
          <v-expansion-panel class="price-card" :class="{ 'is-expanded': expandedPanels.includes(0) }">
            <v-expansion-panel-title class="price-card-header">
              <div class="service-header">
                <h3 class="service-title">Проектирование участка</h3>
              </div>
              <template v-slot:actions>
                <div class="service-price">
                  <span class="price-from">от 22 000 ₽</span>
                </div>
              </template>
            </v-expansion-panel-title>

            <v-expansion-panel-text class="price-card-content">
              <div class="design-table-wrapper">
                <div class="design-table">
                  <div class="table-header">
                    <div class="header-cell">Услуга</div>
                    <div class="header-cell">до 10 соток</div>
                    <div class="header-cell">до 15 соток</div>
                    <div class="header-cell">до 20 соток</div>
                    <div class="header-cell">> 20 соток</div>
                  </div>

                  <div class="table-row">
                    <div class="row-name">Эскизный проект</div>
                    <div class="price-cell">22 000 ₽</div>
                    <div class="price-cell">32 000 ₽</div>
                    <div class="price-cell">42 000 ₽</div>
                    <div class="price-cell">2 200 ₽/сотка</div>
                  </div>

                  <div class="table-row">
                    <div class="row-name">Ландшафтный проект</div>
                    <div class="price-cell">43 000 ₽</div>
                    <div class="price-cell">63 000 ₽</div>
                    <div class="price-cell">83 000 ₽</div>
                    <div class="price-cell">4 300 ₽/сотка</div>
                  </div>

                  <div class="table-row">
                    <div class="row-name">Полный проект</div>
                    <div class="price-cell">65 000 ₽</div>
                    <div class="price-cell">95 000 ₽</div>
                    <div class="price-cell">125 000 ₽</div>
                    <div class="price-cell">6 500 ₽/сотка</div>
                  </div>

                  <div class="table-row">
                    <div class="row-name">Выезд специалиста</div>
                    <div class="price-cell">6 000 ₽</div>
                    <div class="price-cell">-</div>
                    <div class="price-cell">-</div>
                    <div class="price-cell">-</div>
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
import { ref } from "vue";

const expandedPanels = ref([0]); // По умолчанию открыт
</script>

<style lang="scss" scoped>
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
    // background: linear-gradient(90deg, black, darken(black, 15%));
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
  font-size: 0.9rem;
  color: #374151;
  // padding: 14px 10px;
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
