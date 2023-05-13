
import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    borderWidth: {
      ...defaultTheme.borderWidth,
      0.5: '0.5px'
    },
    extend: {
      screens: {
        '3xs': '320px',
        ...defaultTheme.screens
      },
      colors: {
        white: '#FFFFFF',
        black: '#363636',
        gray: '#808080',
        'dark-gray': '#555555',
        'light-gray': '#F5F5F5',
        'light-gray-2': '#D9D9D9',
        primary: '#007579',
        secondary: '#679090',
        success: '#15BD66',
        info: '#1A9CFF',
        warning: '#F7A911',
        error: '#E5172F',
        'success-toast': '#EBFBF1',
        'info-toast': '#EDF7FF',
        'warning-toast': '#FEF6E7',
        'error-toast': '#FDECEE',
        'info-stepper': '#C8E7FF',
        'db-bg-pink': '#EC6E86',
        'db-bg-orange': '#F2A354',
        'db-bg-yellow': '#F7CE6B',
        'db-bg-green': '#6DBEBF',
        'db-bg-blue': '#56A0E5',
        tab: '#E8EBEE'
      },
      zIndex: {
        10: 10,
        60: 60,
        50: 50,
        70: 70,
        100: 100
      },
      translate: {
        2.5: '0.625rem',
      },
      fontSize: {
        '3.5xl': ['32px'],
        '4.5xl': ['40px']
      },
      lineHeight: {
        5.5: ['22px'],
        6.5: ['26px'],
      },
      margin: {
        18: '4.5rem',
        '-18': '-4.5rem'
      },
      padding: {
        4.5: '1.125rem',
        '-4.5': '1.125rem',
        0.25: '1px'
      },
      spacing: {
        3.5: '0.875rem',
        4.5: '1.375rem',
        22: '5.5rem',
        26: '6.5rem',
        17: '4.125rem',
        18: '4.5rem',
        30: '7.5rem'
      },
      inset: {
        13: '3.25rem',
        '-19': '-4.75rem'
      },
      borderWidth: {
        16: '1rem',
        20: '1.25rem',
        0.5: '0.5px',
      },
      maxWidth: {
        xxs: '18rem'
      },
      minHeight: {
        9: '2.25rem',
        50: '12rem',
        64: '16rem'
      },
      animation: {
        'show-slow': 'show-slow .3s ease-in'
      },
      keyframes: {
        'show-slow': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      transitionProperty: {
        opacity: 'opacity',
        height: 'height',
        'max-height': 'max-height',
        spacing: 'margin, padding',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))'
      },
      gridColumnEnd: {
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17'
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))',
        8: 'repeat(8, minmax(0, 1fr))',
        9: 'repeat(9, minmax(0, 1fr))',
        10: 'repeat(10, minmax(0, 1fr))',
        11: 'repeat(11, minmax(0, 1fr))',
        12: 'repeat(12, minmax(0, 1fr))',
      },
      gridRowStart: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')({
      strategy: 'class' // only generate classes
    })
  ],
}

