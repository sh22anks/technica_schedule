/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Michroma :["Michroma","sans-serif"],
        Changa :['Changa One', 'cursive'],
      }
    },
  },
  plugins: [],
}

