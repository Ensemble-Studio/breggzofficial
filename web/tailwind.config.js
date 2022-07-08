const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./helpers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        green: colors.emerald,

        white: "#ffffff",
        black: "#000000",
        coral: "#f34606",
        onyx: "#12151d",
        pearl: "#fbf9f7",
        blue: "#000010",
        sapphire: "#0c167a",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        quote: ["Domaine Display", "serif"],

        statement: ["Founders Grotesk", "sans-serif"],
      },
    },
  },

  plugins: [],
};
