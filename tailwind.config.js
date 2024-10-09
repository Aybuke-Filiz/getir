/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundColor:{
        "brandColor":"#5d3ebc"
      }
    },
  },
  plugins: [],
}

