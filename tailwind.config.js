/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: { 
    screens: {
      'xs': '498px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        primary: '#FF6908',
        dark: '#4A4A4A',
        grey: '#8A8A8A',
        background: '#FFF0E4'
      }
    },
  },
  plugins: [],
}

