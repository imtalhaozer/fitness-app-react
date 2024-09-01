/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        sm:"50px",
        md:"100px",
        lg:"200px",
        xl:"400px",
        xxl:"3200px",
      },
      colors:{
        primary:'#278EA3',
        secondary:"#F2F1E6",
        third:"#B0AED5",
        fourth:"#D5AEC5"
      }
    },
  },
  plugins: [],
}