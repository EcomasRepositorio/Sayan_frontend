/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primaryblue': '#0d617b', // Cambia esto al color rosado que prefieras
        'primarygreen' : '#b6d900',
        'primaryceleste' : '#12a9be'
      },
      textColor: {
        'textblue': '#0d617b', // Colores de Sayan 
        'textgreen' : '#b6d900',
        'textceleste' : '#12a9be'
      },
      animation: {
        'fade-in-left': 'fade-in-left 0.5s ease-in-out',
        'fade-in-right': 'fade-in-right 0.5s ease-in-out',
      },
      keyframes: {
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

