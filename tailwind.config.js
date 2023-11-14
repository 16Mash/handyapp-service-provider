/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors:{
        'serviceBlue':'#130160',
        'serviceLight':'#BEAFFE',
        'lightOrange': '#FFD6AD',
        'serviceOrange':'#FF9228',
        'white': '#ffffff',
        'purple':{
          100:'#f3e8ff'
        }
      },
    },
  },
  plugins: [],
};
