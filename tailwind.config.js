/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#523AE4',
        background: '#FFFFFF',
        card: '#FFFFFF',
        text: '#737373',
        border: '#D4D4D4',
        notification: '#FF3B30',
        gray: '#A5A5A5',
        error: '#FF3B30',
        darkBackground: '#05021B', // Added this line
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        raleway: ['Raleway'],
        roboto: ['Roboto'],
        rubik: ['Rubik'],
      },
      spacing: {
        18: '4.5rem',
      },
    },
  },
  plugins: [],
};
