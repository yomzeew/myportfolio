/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors:{
        'spotcolor':'#FFC000',
      },
      borderWidth:{
        '1':'1px'
      }
    },
    backgroundImage:{
      'bgimage':"url('/src/components/images/bgcover.svg')",
    }
  },
  darkMode: 'class',
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [],
}

