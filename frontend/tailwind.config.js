// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          700: '#8C1515', // Primary Academic Accent
          900: '#4A0B0B', // Darker shade for Footer
        }
      }
    },
  },
  plugins: [],
}