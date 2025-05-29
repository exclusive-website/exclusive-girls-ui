/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#ED217E',
        text: {
          darkest: '#262626',
          darker: '#303030',
          dark: '#474747',
          medium: '#5E5E5E',
          gray1: '#6E6E6E',
          gray2: '#949494',
          gray3: '#A8A8A8',
          gray4: '#C2C2C2',
          light1: '#E8E8E8',
          light2: '#F5F5F5',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],

        parkinsans: ['Parkinsans', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
    },
  },
  plugins: [],
}