/* eslint-disable no-undef */
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'navbar-gray': '#70738A',
        'dark-blue': '#1F3D8C',
        'soft-gray': '#70738A',
        'custom-black': '#23292E',
        'custom-orange': '#FF6900',
        'custom-red': '#A92321',
        'custom-green': '#35B6B4',
        'custom-purple': '#6E3784',
        'dark-yellow': '#C48E39',
        'overlay-black': '#00000080',
        'overlay-gray': '#1F3D8C08',
        'neutral-mid-400': '#6B778C'
      },
      fontFamily: {
        sans: ['Public Sans', ...defaultTheme.fontFamily.sans],
        serif: ['"Exo 2"', ...defaultTheme.fontFamily.serif]
      },
      spacing: {
        108: '27rem'
      },
      zIndex: {
        60: 60
      }
    }
  },
  plugins: []
};
