/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#673ab7',
        secondary: '#364152',
        success: '#28CD41',
        danger: '#ea5455',
        warning: '#ff9f43',
        info: '#9333EA',
        darkGreen: '#ffffff',
        lightGray: '#eef2f6',
      },
      boxShadow: {
        badgeShadow: '0 0 10px',
        buttonShadow: '0px 8px 25px -8px',
      },
    },
  },
  plugins: [],

  darkMode: 'selector',
}
