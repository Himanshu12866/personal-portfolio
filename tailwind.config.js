/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Mozilla Headline", "sans-serif"],
        para: ["Raleway", "sans-serif"],
        code: ["JetBrains Mono", "sans-serif"],
      },
      screens: {
        "3xl": "1650px"
      }
    },
  },
  plugins: [],
}