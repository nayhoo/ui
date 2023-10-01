/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@nayhoo/tailwind-config")], // eslint-disable-line global-require
  // Toggle dark-mode based on data-mode="dark"
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [],
};
