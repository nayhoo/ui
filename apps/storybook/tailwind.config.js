// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/components/**/*.{js,ts,jsx,tsx}", // here is path to Tailwind CSS components package
  ],
  // Toggle dark-mode based on data-mode="dark"
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [],
};
