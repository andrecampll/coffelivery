/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary-800': '#177B3F',
      'primary-500': '#21A756',
      'primary-200': '#DDEEE4',
      'secondary-800': '#C47F17',
      'secondary-500': '#DBAC2C',
      'secondary-200': '#F1E9C9',
      black: '#272221',
      'black-500': '#403937',
      'black-200': '#574F4D',
      'gray-800': '#8D8686',
      'gray-500': '#D7D5D5',
      'gray-200': '#E6E5E5',
      gray: '#EDEDED',
      'white-800': '#FFFFFF',
      'white-500': '#FAFAFA',
      'white-200': '#F2F2F2',
      white: '#FFFFFF',
    },
    fontFamily: {
      sans: ['Roboto', '"Baloo 2"', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
