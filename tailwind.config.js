/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
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
  plugins: [require('@tailwindcss/typography')],
}
