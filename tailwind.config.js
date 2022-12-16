/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      pink: '#fb2e86',
      red: '#ff0000',
      blue: '#2f1ac4',
      skyBlue: '#f2f5ff',
      // navyBlue: '#151875',
      navyBlue: '#0D0E43',
      offBlue: '#151875',
      offNavyBlue: '#3f509e',
      pantonePurple: '#fbfafe',
      lightPurple: '#f2f0ff',
      purple: '#7e33e0',
      offPurple: '#9563b5',
      deepGreen: '#428c91',
      white: '#ffffff'
    },
    extend: {
      fontFamily: {
        Josefin: ['Josefin Sans', 'san-serif'],
        Montserrat: ['Montserrat', 'sans-serif']
      }
    },
    screens: {
      xs: '0px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1536px'
    }
  },
  plugins: []
}
