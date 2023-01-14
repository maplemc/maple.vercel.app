const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({}) {}, {
  theme: {
    extend: {
      colors: {
        'black': {
          DEFAULT: '#000',
          900: '#0c0c0d'
        },
        'white': {
          DEFAULT: '#fff',
          50: '#fafafa'
        },
        'gray': {
          900: '#121212',
          800: '#18181b',
          750: '#27272a',
          700: '#3f3f46',
          600: '#52525b',
          500: '#71717a',
          400: '#a1a1aa',
          300: '#d4d4d8',
          200: '#e4e4e7',
          100: '#f4f4f5'
        },
        'red': {
          500: '#ef4444'
        },
        'blue': {
          500: '#1a62ff',
          400: '#407cff'
        },
        'purple': {
          500: '#a855f7'
        },
        'pink': {
          500: '#ec4899'
        }
      }
    }
  }
})
