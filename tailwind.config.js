/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      ssm:'390px',
      sm:'640px',
      md:'844px',
      lg:'1024px',
    },
    extend: {},
  },
  plugins: [],
}
