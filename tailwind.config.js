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
        '14': '3.5rem',
        '30': '7.5rem',
        '125px': '125px',
        '290px': '290px',
        '396px': '396px',
        '500px': '500px',
        '980px': '980px'
      },
      colors: {
        'hoverspt': '#18D760',
        'purple-main': '#2D46B9',
        'green-main': '#1ED760',
        'gray-main': '#F0F2F5',
        'blue-main': '#1877F2',
        'blue-main-hover': '#166FE5',
        'main-green': '#42B72A',
        'main-green-hover': '#36A420'

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
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
