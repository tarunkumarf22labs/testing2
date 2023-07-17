const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');

module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  plugins: [forms, typography, require('tailwind-scrollbar-hide')],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-in-out'
      },
      colors: {
        pantone: '#7B8084',
        pantonepink: '#8A1E61'
      }
    },
    fontFamily: {
      Brandon: ['Brandon'],
      centaur: ['Centaur'],
      creattion: ['Creattion']
    }
  },
  safelist: [
    {
      pattern: /^z-./,
      variants: ['md']
    }
  ]
};
