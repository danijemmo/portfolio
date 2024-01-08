/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        clickerScript:['clicker script', 'sans-serif'],
        league:['league spartan', 'sans-serif'],

      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}