/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '555px',
      lg: '836px',
      xl: '1117px',
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
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
      'white-300': '#F3F2F2',
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
