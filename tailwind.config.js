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
        ppformulaNormal: ["PP Formula Normal", "sans-serif"],
        ppformulaLight: ["PP Formula Light", "sans-serif"],
      },
    },
  },
  plugins: [],
}