/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#6366f1', // Indigo-ish
          soft: '#4f46e5',
        },
      },
    },
  },
  plugins: [],
};
