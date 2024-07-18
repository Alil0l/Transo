/* eslint-env node */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#FDE510",
        brighter: "#1E1E36",
        sec: "#0F0F1B",
        gre: "#FFFFFF",
      },
    },
  },
  plugins: [require("daisyui")],
};
