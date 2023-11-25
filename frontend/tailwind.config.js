/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        'white': '#ffffff',
        'primaryblue':'#0F70DA',
        'secondaryblue':'#0E2136',
        'hoverblue':'#0e64c2',
        'googleButton':'#2D3748',
        'googleButtonhover':'#262c38'
      }
    },
  },
  plugins: [],
}