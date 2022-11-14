/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,jsx}",
    "node_modules/preline/dist/*.js",
    "./*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("preline/plugin")],
};
