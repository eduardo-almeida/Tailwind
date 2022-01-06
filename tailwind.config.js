const color = require('tailwindcss/colors')

module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '7': '1.75rem',
        '14': '3.5rem',
        '30': '7.5rem',
        '75px': '75px',
        '125px': '125px',
        '210px': '210px',
        '290px': '290px',
        '396px': '396px',
        '500px': '500px',
        '980px': '980px'
      },
      colors: {
        amber: color.amber,
        rose: color.rose,
        'hoverspt': '#18D760',
        'purple-main': '#2D46B9',
        'green-main': '#1ED760',
        'gray-main': '#F0F2F5',
        'blue-main': '#1877F2',
        'blue-main-hover': '#166FE5',
        'main-green': '#42B72A',
        'main-green-hover': '#36A420',
        'darkblue-500': '#485769',
        'darkblue-600': '#37475A',
        'darkblue-700': '#232F3E',
        'darkblue-900': '#191E26',
        'darkblue-950': '#131a22',
        'gold-100': '#FEBD69',
        'gold-200': '#FAA63A',
        'orange-650': '#E47911',
        'yellow-350': '#F0C14B'
      },
      backgroundImage: Theme => ({
        'spotify-theme': "url('assets/img/bursts.svg')",
        'spotify-theme-mobile': "url('assets/img/bursts-mobile.svg')"
      }),
      backgroundSize: {
        '175%': '175%',
        '195%': '195%'
      },
      backgroundPosition: {
        'banner': '46% 4%',
        'banner-mobile': 'top 25% center'
      },
      fontSize: {
        '9xl': '9rem',
        'subtitle': '1.7rem'
      },
      fontFamily: {
        'arial': 'Arial'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
