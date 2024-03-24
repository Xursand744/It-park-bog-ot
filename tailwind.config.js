/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true,
      padding:'1rem',
      screens: {
        sm: '500px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1400px'
      },
    },
    extend: {
      boxShadow: {
        '3xl': 'inset 0 0 5px 15px #fff',
      }
    },
  },
  plugins: [],
}

