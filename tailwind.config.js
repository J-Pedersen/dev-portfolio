/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#6366f1",
          soft: "#4f46e5",
        },
      },
      boxShadow: {
        card: "0 6px 20px rgba(15,23,42,0.08)",
        "card-hover": "0 10px 28px rgba(15,23,42,0.12)",
        elevated: "0 12px 30px rgba(15,23,42,0.18)",
        sidebar: "0 18px 40px rgba(15,23,42,0.35)",
        "card-dark": "0 8px 24px rgba(0,0,0,0.5)",
        "elevated-dark": "0 14px 35px rgba(0,0,0,0.6)",
        "sidebar-dark": "0 18px 40px rgba(0,0,0,0.75)",
      },
    },
  },
  plugins: [],
};