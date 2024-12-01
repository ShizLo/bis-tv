/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      "neutral-500":  "#f5f5f5",
      "hover-service": "#0db25a"
    },
    fontFamily: {
      sans: [
        // "ui-sans-serif",
        "-apple-system",
        "Segoe UI",
        // "Helvetica",
        "system-ui", // Работает вот эта хуйня походу
        // "sans-serif",
        // "Apple Color Emoji",
        // "Segoe UI Emoji",
        // "Segoe UI Symbol",
        // "Noto Color Emoji",
      ],
      //   serif: ["Merriweather", "serif"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {},
  },
  plugins: [],
};
