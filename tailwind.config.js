/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Play", "sans-serif"],
        para: ["Raleway", "sans-serif"],
        code: ["JetBrains Mono", "sans-serif"],
        fancy: [ "Fredericka the Great", "serif"],
      },
      screens: {
        "3xl": "1650px",
        "4xl": "1900px",
        "5xl": "2200px",
        "6xl": "2560px",
      }
    },
  },
  plugins: [],
}