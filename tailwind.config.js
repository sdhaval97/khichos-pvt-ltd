/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'marigold': '#FCB800',
        'seal-brown': '#472109',
      },
      fontFamily: {
        'made-tommy': ['"Made Tommy"', 'sans-serif'],
        'christmas-sheep': ['"Christmas Sheep"', 'cursive'],
      },
      letterSpacing: {
        'christmas': '0.1em',
      },
    },
  },
  plugins: [],
}

