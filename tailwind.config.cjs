/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },
    colors:{
      transparent: 'transparent',

      'black': '#000',
      'white': '#FFF',
      
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7C7C8A',
        200: '#C4C4CC',
        100: '#E1E1E6',
      },

      cyan: {
        //500: '#81D8F8',
        //300: '#9BE1FB',

        50:'#ecfeff',
        100:'#cffafe',
        200:'#a5f3fc',
        300:'#67e8f9',
        400:'#22d3ee',
        500:'#06b6d4',
        600:'#0891b2',
        700:'#0e7490',
        800:'#155e75',
        900:'#164e63',
      },

      blue: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },

      purple: {
        500: '#835afd'
      }
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
