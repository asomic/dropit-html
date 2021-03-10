const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['./public/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1536px'
    },
    fontFamily: {
      'text': ["Fivo Sans", 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.coolGray,
      black: colors.black,
      white: colors.white,
      darksparent: {
        DEFAULT: 'rgba(0,0,0, 0.5)',
      },
      blue: {
        light: '#2B4965',
        vivid: '#015098',
        DEFAULT: '#002241'
      },
      orange: {
        DEFAULT: '#FF6633'
      },
      green: {
        DEFAULT: '#2DBC3B',
        dark: '#28A634'
      },
      red: {
        DEFAULT: '#FF0000',
        dark: '#DE0000'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
