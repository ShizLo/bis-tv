import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
import path from "path";
// import.meta.env.BASE_URL;

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue({
      //   template: {
      //     transformAssetUrlsOptions: {
      //       base: null,
      //       includeAbsolute: false,
      //     },
      // },
    }),
  ],
  resolve: {
    alias: {
      // "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
});
