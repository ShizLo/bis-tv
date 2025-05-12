import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export const useCatalogStore = defineStore("catalog", () => {
  // State
  const items = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  // Getters
  const totalItems = computed(() => items.value.length);
  const categories = computed(() => {
    const uniqueCategories = new Set(items.value.map((item) => item.category));
    return Array.from(uniqueCategories);
  });
  const averagePrice = computed(() => {
    if (!items.value.length) return 0;
    const total = items.value.reduce((sum, item) => sum + item.price, 0);
    return (total / items.value.length).toFixed(2);
  });

  // Actions
  const getPriceById = (id) => {
    const item = items.value.find((item) => item.id === id);
    return item?.price || ""; // Вернёт цену или пустую строку
  };

  const loadCatalog = async () => {
    if (items.value.length == 0) {
      isLoading.value = true;
      error.value = null;
      try {
        const url = "https://script.google.com/macros/s/AKfycbxX8juPBcrbME79NmrzYRAzQhBxamyH30AOYi5tpWM08Tr4t0B71xEYB8k5oFRJ3KFvcQ/exec";
        const response = await axios.get(url);
        // response.data содержит массив товаров в формате:
        // [{ id, name, category, pages, price }, ...]
        items.value = response.data;
      } catch (err) {
        error.value = err.message;
        console.error("Ошибка загрузки каталога:", err);
      } finally {
        isLoading.value = false;
      }
    }
  };

  return {
    items,
    isLoading,
    error,
    totalItems,
    categories,
    averagePrice,
    loadCatalog,
    getPriceById,
  };
});
