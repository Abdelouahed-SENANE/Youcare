/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary' : '#F26800',
        'secondary' : '#A3CCAB',
        'third' : '#A7ADC6',
        'pink' : '#77176e',
        'secPink' : '#c83fa9',
        'background' : '#FEF2F4',
        'gray' : '#A9A9A9',
        'green' : '#74E291',
        'red' : '#FF204E',
        'secGreen' : '#57cc99',
        secRed : "#bf0603"
      }
    },
  },
  plugins: [],
}