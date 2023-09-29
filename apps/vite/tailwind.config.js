/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/components/**/*.{js,ts,jsx,tsx}", // here is path to Tailwind CSS components package
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
