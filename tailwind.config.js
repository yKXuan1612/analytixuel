/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ... require('tailwindcss/colors'),
      primary: '#000000',
      secondary: '#D743FB',
      'linear-first': 'rgba(0,187,255, 1)',
      'linear-second': 'rgba(196,77,255, 1)',
      'linear-first-rgba': 'rgba(0,187,255,0.1)',
      'linear-second-rgba': 'rgba(196,77,255, 0.1)',
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}