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
      },
      spacing: {
        34: '8.5rem',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
