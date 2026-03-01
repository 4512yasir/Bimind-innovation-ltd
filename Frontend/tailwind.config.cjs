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
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};