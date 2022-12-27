/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,jsx}",
    "node_modules/preline/dist/*.js",
    "./*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
     "./src/components/rangedatepicker/react-tailwindcss-datepicker/react-tailwindcss-datepickerdist/index.esm.js",
    // "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("preline/plugin")],
};
