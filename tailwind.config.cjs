/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bimind: {
          dark: "#1F2F55",
          blue: "#1A7FC7",
          teal: "#00AFC4",
          gray: "#BFCBD7",
        },
      },
    },
  },
  plugins: [],
};