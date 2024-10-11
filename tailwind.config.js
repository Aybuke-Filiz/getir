/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundColor:{
        "brand-color":"#4c3398",
        "primary-brand-color":"#5d3ebc",
        "secondary-brand-color":"#7849f7",

      },
      gradientColorStops:{
        "brand-color":"#4c3398",
        "primary-brand-color":"#5d3ebc",
        "secondary-brand-color":"#7849f7",

      },
      textColor:{
        "brand-color":"#4c3398",
        "primary-brand-color":"#5d3ebc",
        "secondary-brand-color":"#7849f7",

      }
    },
  },
  plugins: [],
}

