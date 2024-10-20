/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F27C22', 
        secondary: '#1F205D', 
      }
    }
  },
  plugins: [],
}

