/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'serif'],
      },
      colors: {
        background: '#0b0b10',
      }
    },
  },
  plugins: [],
}
