/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dot': ['DotGothic16'],
        'heading': ['Big Shoulders Display'],
        'subtext': ['Heebo']
      },
      backgroundImage: theme => ({
        'hero-background': "url('/src/assets/finalbg.jpg')",
        'hero-md': "url('/src/assets/mdbg.jpg')",

      })
    },
  },
  plugins: [],
}

