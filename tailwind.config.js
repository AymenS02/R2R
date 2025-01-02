/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0b0b0b',
        light: '#fefefe',
      },
      fontFamily: {
        merriweather: ['"Merriweather"', 'serif'], // Add the Merriweather font here
      },
    },
  },
  plugins: [],
}
