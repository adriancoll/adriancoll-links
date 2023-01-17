/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#CB60E2',
        secondary: '#7C162E',
        tertiary: '#58DCF4',
      },
      animation: {
        tilt: 'tilt 10s infinite linear',
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(0.5deg)',
          },
          '75%': {
            transform: 'rotate(-0.5deg)',
          },
        },
      },
    },
    container: {
      center: true,
      screens: {
        DEFAULT: '680px',
        sm: '680px',
        lg: '680px',
        xl: '680px',
        '2xl': '680px',
      },
    },
  },
  plugins: []
}
