/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        athletics: ['Athletics', "sans-serif"],
        ppformula: ["PP Formula", "sans-serif"],
      },
    },
  },
  plugins: [],
}