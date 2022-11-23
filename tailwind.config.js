/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: 'var(--white)',
      'cover-white': 'var(--cover-white)',
      'paper-white': 'var(--paper-white)',
      'pure-white': 'var(--pure-white)',
      black: 'var(--black)',
      'paper-black': 'var(--paper-black)',
      'paper-line': 'var(--paper-line)',
      blue: 'var(--blue)',
      yellow: 'var(--yellow)',
      'bookmark-yellow': 'var(--bookmark-yellow)',
      red: 'var(--red)',
    },
    extend: {
      height: {
        128: '512px',
        'book-desktop': '600px',
        'screen-fit': 'calc(100vh - 150px)',
      },
      width: {
        'book-desktop': '600px',
      },
      spacing: {
        34: '8.5rem',
      },
      scale: {
        80: '0.80',
        60: '0.60',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
