/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/*.{js,ts,jsx,tsx}',
    './Components/**/*.{js,ts,jsx,tsx}',
    './Reusables/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      orange: '#f15115',
      red: '#ff0000',
      blue: '#2f1ac4',
      skyBlue: '#f2f5ff',
      navyBlue: '#111C85',
      offBlue: '#151875',
      offNavyBlue: '#3f509e',
      pantonePurple: '#fbfafe',
      lightGreen: '#F0F6F7;',
      purple: '#7e33e0',
      offPurple: '#9563b5',
      deepGreen: '#018995',
      white: '#ffffff',
      grey: '#9295AA',
      darkGrey: '#000000b3'
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'san-serif']
      }
    }
  },
  plugins: []
}
