/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./menu.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "Arial", "sans-serif"],
        display: ["'Playfair Display'", "'Times New Roman'"]
      }
    },
  },
  plugins: [],
}