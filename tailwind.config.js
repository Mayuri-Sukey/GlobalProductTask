/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Ensure the paths cover all your files
  theme: {
    extend: {

      screens: {
        'xs': '320px', // Custom breakpoint for 320px
      },
    
      fontFamily: {
        space: ['Space', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(7, 7, 7, 0.5) 0%, rgba(89, 89, 89, 0) 100%)',
      },
    },
  },
  plugins: [],
};


