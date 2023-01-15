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
      pink: '#f15115',
      red: '#ff0000',
      blue: '#2f1ac4',
      skyBlue: '#f2f5ff',
      navyBlue: '#111C85',
      offBlue: '#151875',
      offNavyBlue: '#3f509e',
      pantonePurple: '#fbfafe',
      lightPurple: '#f2f0ff',
      purple: '#7e33e0',
      offPurple: '#9563b5',
      deepGreen: '#018995',
      white: '#ffffff',
      grey: '#9295AA',
      darkGrey: '#000000b3'
    },
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'san-serif']
      }
    },
    screens: {
      xs: '0px',
      ms: '440px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1536px'
    }
  },
  plugins: []
}
